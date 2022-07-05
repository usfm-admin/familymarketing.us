const fs = require("fs");

const data = require("../src/data/navigation.json");
const services = require("../src/data/services.json");

async function sitemap() {
  const today = await new Date();
  const event = await today.toISOString()
  await console.log(event)

  await fs.writeFileSync(
    "../public/sitemap.xml",

    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${data.homepage}</loc>
        <lastmod>${event}</lastmod>
      </url>
      ${data.pages.map((item) => {
        return `<url>
          <loc>${`${data.homepage}${item.link}`}</loc>
          <lastmod>${event}</lastmod>
      </url>`;
      })}
      ${services.map((item) => {
        return `<url>
        <loc>${`${data.homepage}/${item.link}`}</loc>
        <lastmod>${event}</lastmod>
    </url>`;
      })}
    </urlset>`
  );
}

sitemap();
