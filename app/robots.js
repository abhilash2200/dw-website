export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digitalwolf.com';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/blogs/preview/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
