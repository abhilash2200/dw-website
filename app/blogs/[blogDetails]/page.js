import BlogDetails from './blogDetails';

// This function dynamically sets the meta tags using server-side data fetching
export async function generateMetadata({ params }) {
  const {blogDetails} = params;

  const myHeaders = new Headers();
  const username = 'DwCrmApiUser';
  const password = 'DW_CRMApi@32145@#';
  const token = process.env.API_TOKEN_KEY;
  const credentials = btoa(`${username}:${password}`);
  myHeaders.append("KeyToken", `${token}`);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Basic ${credentials}`);


  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  // Fetch the blog post data based on the slug
  const res = await fetch(`https://dwapi.thenoncoders.in/api/v1/get_blogdetailbyurl?url=${blogDetails}`,requestOptions);
  const data = await res.json();
  const post = data?.data?.find((post) => post.PostUrl === blogDetails);

  return {
    title: post ? post.PostMetaTite : 'Blog Post 1',
    description: post ? post.PostMetaDescription.slice(0, 150) : 'Blog post description',
  };
}

// The BlogPage component is a client component, so we just render it here
export default function Page() {
  return <BlogDetails/>;
}