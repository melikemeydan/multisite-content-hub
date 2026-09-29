export type WordPressContentType = {
    name: string;
    slug: string;
    rest_base: string;
    rest_namespace: string;
};

export async function discoverContentTypes(
  siteUrl: string
): Promise<WordPressContentType[]> {
  const normalizedUrl = siteUrl.replace(/\/$/, "");

  const response = await fetch(
    `${normalizedUrl}/wp-json/wp/v2/types`
  );

  if (!response.ok) {
    throw new Error(
      `WordPress connection failed: ${response.status}`
    );
  }

  const data = await response.json();

  return Object.values(data) as WordPressContentType[];
}