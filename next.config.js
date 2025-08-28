module.exports = {
    async redirects() {
      return [
        {
          source: '/digital-marketing-services.html',
          destination: '/digital-marketing-services',
          permanent: true,
        },
        {
          source: '/seo-services.html',
          destination: '/seo-service',
          permanent: true,
        },
        {
          source: '/smo-services.html',
          destination: '/social-media-marketing-agency',
          permanent: true,
        },
        {
          source: '/website-development.html',
          destination: '/website-development-company',
          permanent: true,
        },
        {
          source: '/ppc-marketing-services.html',
          destination: '/ppc-ad-agency',
          permanent: true,
        },
        {
          source: '/facebook-ad-services.html',
          destination: '/facebook-ads-agency',
          permanent: true,
        },
        {
          source: '/mobile-app-development-company.html',
          destination: '/mobile-app-development-company',
          permanent: true,
        },
        {
          source: '/logo-graphic-design.html',
          destination: '/graphic-design-agency',
          permanent: true,
        },
        {
          source: '/software-development-company.html',
          destination: '/software-development-company',
          permanent: true,
        },
        {
          source: '/content-writing-services.html',
          destination: '/content-writing-service',
          permanent: true,
        },
        {
          source: '/bulk-message-services.html',
          destination: '/bulk-message-service-provider',
          permanent: true,
        },
        {
          source: '/contact-us.html',
          destination: '/contact-us',
          permanent: true,
        },
      ]
    },
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
  }