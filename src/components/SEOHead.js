import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoMetadata } from '../utils/seoMetadata';
import { jsonLdData } from '../utils/jsonLdData';

const SEOHead = React.memo(() => {
  const location = useLocation();
  const metadata = useMemo(() => {
    return seoMetadata[location.pathname] || seoMetadata['/'];
  }, [location.pathname]);
  
  const jsonLd = useMemo(() => {
    return jsonLdData[location.pathname] || jsonLdData['/'];
  }, [location.pathname]);

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="The Romanelli Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en-US" />
      <link rel="canonical" href={`https://www.theromanelligroup.com${location.pathname}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={metadata.ogTitle} />
      <meta property="og:description" content={metadata.ogDescription} />
      <meta property="og:image" content={metadata.ogImage} />
      <meta property="og:url" content={`https://www.theromanelligroup.com${location.pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Romanelli Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.ogTitle} />
      <meta name="twitter:description" content={metadata.ogDescription} />
      <meta name="twitter:image" content={metadata.ogImage} />
      <meta name="twitter:site" content="@theromanelligroup" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
});

export default SEOHead;