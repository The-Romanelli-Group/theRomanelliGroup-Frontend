import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { seoMetadata } from "../utils/seoMetadata";
import { jsonLdData } from "../utils/jsonLdData";

const BASE_URL = "https://theromanelligroup.com";

const SEOHead = React.memo(() => {
  const location = useLocation();

  const metadata = useMemo(
    () => seoMetadata[location.pathname] || seoMetadata["/"],
    [location.pathname]
  );

  const jsonLd = useMemo(
    () => jsonLdData[location.pathname] || jsonLdData["/"],
    [location.pathname]
  );

  const canonicalUrl = `${BASE_URL}${location.pathname}`;

  return (
    <Helmet prioritizeSeoTags>

      {/* Basic SEO */}

      <title>{metadata.title}</title>

      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content="The Romanelli Group" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Language" content="en-US" />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Romanelli Group" />
      <meta property="og:locale" content="en_US" />

      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metadata.ogTitle} />
      <meta property="og:description" content={metadata.ogDescription} />
      <meta property="og:image" content={metadata.ogImage} />
      <meta property="og:image:secure_url" content={metadata.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="The Romanelli Group | Central Ohio Realtors"
      />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.ogTitle} />
      <meta
        name="twitter:description"
        content={metadata.ogDescription}
      />
      <meta name="twitter:image" content={metadata.ogImage} />
      <meta name="twitter:site" content="@theromanelligroup" />
      <meta name="twitter:creator" content="@theromanelligroup" />

      {/* Theme */}

      <meta name="theme-color" content="#A61E22" />
      <meta name="msapplication-TileColor" content="#A61E22" />
      <meta
        name="apple-mobile-web-app-title"
        content="The Romanelli Group"
      />

      {/* Structured Data */}

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

    </Helmet>
  );
});

export default SEOHead;