import { MetadataRoute } from "next";
import { servicesData, localitiesData } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.swathisafetynets.com";

  // Main static pages
  const routes = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/invisible-grills`, lastModified: new Date() },
    { url: `${baseUrl}/cloth-hangers`, lastModified: new Date() },
    { url: `${baseUrl}/areas`, lastModified: new Date() },
  ];

  const parentServices = Object.keys(servicesData);
  const localities = Object.keys(localitiesData);

  // Parent service pages (excluding premium service clean routes)
  parentServices.forEach((service) => {
    if (service !== "invisible-grills" && service !== "cloth-hangers") {
      routes.push({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
      });
    }
  });

  // Service-Locality pages
  parentServices.forEach((service) => {
    localities.forEach((locality) => {
      routes.push({
        url: `${baseUrl}/services/${service}/${locality}`,
        lastModified: new Date(),
      });
    });
  });

  return routes;
}
