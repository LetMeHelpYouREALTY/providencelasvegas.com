import { headers } from "next/headers";
import SchemaScript from "@/components/SchemaScript";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { resolveBreadcrumbItems } from "@/lib/page-breadcrumbs";

/**
 * Server-rendered BreadcrumbList JSON-LD for all inner pages (via x-pathname from middleware).
 */
export default async function GlobalBreadcrumbSchema() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/";
  const items = resolveBreadcrumbItems(pathname);

  if (!items || items.length < 2) {
    return null;
  }

  return (
    <SchemaScript
      schema={generateBreadcrumbSchema(items)}
      id="global-breadcrumb-schema"
    />
  );
}
