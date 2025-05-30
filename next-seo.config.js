// next-seo.config.js
const siteUrl = 'https://www.carpinteriadrakon.mx'; // Cambia si usas otro dominio

export default {
  title: 'Carpintería Drakón',
  titleTemplate: '%s | Muebles e instalaciones a medida',
  defaultTitle: 'Carpintería Drakón',
  description:
    'Diseño legendario en madera. Muebles a medida e instalaciones residenciales y comerciales en Monterrey, Nuevo León.',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteUrl,
    site_name: 'Carpintería Drakón',
    title: 'Carpintería Drakón',
    description:
      'Diseño legendario en madera. Muebles a medida e instalaciones residenciales y comerciales en Monterrey, Nuevo León.',
    images: [
      {
        url: `${siteUrl}/logo-drakon.png`,
        width: 800,
        height: 600,
        alt: 'Carpintería Drakón Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@carpinteriadrakon',
    site: '@carpinteriadrakon',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'carpintería, muebles a medida, instalaciones de madera, Monterrey, diseño interior',
    },
    {
      name: 'author',
      content: 'Carpintería Drakón',
    },
  ],
};
