export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/privacidade',
      },
    ],
    sitemap: 'https://www.advocaciaviviane.com.br/sitemap.xml',
  };
}