import BlogDetails from './blogDetails';

// This function dynamically sets the meta tags using server-side data fetching
export async function generateMetadata({ params }) {
  const { blogDetails } = params;

  try {
    // Since this runs on the server, we can call the external API directly (no CORS)
    const myHeaders = new Headers();
    const username = 'DwCrmApiUser';
    const password = 'DW_CRMApi@32145@#';
    const credentials = btoa(`${username}:${password}`);
    myHeaders.append("Auth-Api-Key", process.env.NEXT_PUBLIC_AUTH_API_KEY);
    myHeaders.append("keyToken", process.env.NEXT_PUBLIC_KEY_TOKEN);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Basic ${credentials}`);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/get_blogdetailbyurl?url=${blogDetails}`,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      }
    );
    const data = await res.json();
    const post = data?.data?.find((post) => post.PostUrl === blogDetails);

    return {
      title: post ? post.PostMetaTite : 'Blog Post 1',
      description: post ? post.PostMetaDescription.slice(0, 150) : 'Blog post description',
    };
  } catch (error) {
    return {
      title: 'Blog Post',
      description: 'Blog post description',
    };
  }
}

// The BlogPage component is a client component, so we just render it here
export default function Page() {
  return <BlogDetails/>;
}