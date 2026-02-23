import BlogDetails from '../../[blogDetails]/blogDetails';

export async function generateMetadata() {
  return {
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export const dynamic = 'force-dynamic';

export default async function PreviewPage({ params }) {
  const { blogDetails } = await params;
  return <BlogDetails slug={blogDetails} isPreview={true} />;
}
