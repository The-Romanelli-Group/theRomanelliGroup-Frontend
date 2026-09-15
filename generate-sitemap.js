const fs = require("fs");
const axios = require("axios");

const BASE_URL = "https://www.theromanelligroup.com";
const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/buy", priority: "0.8", changefreq: "weekly" },
  { path: "/sell", priority: "0.8", changefreq: "weekly" },
  { path: "/properties", priority: "0.9", changefreq: "daily" },
  { path: "/resources", priority: "0.7", changefreq: "weekly" },
  { path: "/contact-us", priority: "0.6", changefreq: "monthly" },
];

async function getPropertyUrls() {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_FEATURE_LISTINGS}/property-listings/property`
    );
    return (data?.value || []).map((item) => ({
      path: `/properties/${item.ListingKey}`,
      priority: "0.7",
      changefreq: "weekly",
    }));
  } catch (err) {
    console.error("Sitemap: failed to fetch listings, skipping.", err.message);
    return [];
  }
}

async function getBlogUrls() {
  try {
    const { data } = await axios.get(
      "https://secure-pleasure-8cb8bfce78.strapiapp.com/api/blogs"
    );
    return (data?.data || []).map((item) => ({
      path: `/resources/blogs/${item.id}`,
      priority: "0.6",
      changefreq: "monthly",
    }));
  } catch (err) {
    console.error("Sitemap: failed to fetch blogs, skipping.", err.message);
    return [];
  }
}

async function generateSitemap() {
  const [propertyUrls, blogUrls] = await Promise.all([
    getPropertyUrls(),
    getBlogUrls(),
  ]);

  const allUrls = [...STATIC_ROUTES, ...propertyUrls, ...blogUrls];
  const today = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${BASE_URL}${u.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  fs.writeFileSync("public/sitemap.xml", xml);
  console.log(`Sitemap generated with ${allUrls.length} URLs.`);
}

generateSitemap();