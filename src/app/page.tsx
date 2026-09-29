import { discoverContentTypes } from "@/lib/wordpress";

export default async function Home() {
  const contentTypes = await discoverContentTypes("https://telcaev.org");

  return (
    <main>
      <h1>MultiSite Content Hub</h1>

      <h2>Discovered Content Types</h2>

      <ul>
        {contentTypes.map((type) => (
          <li key={type.slug}>
            {type.name} — {type.rest_base}
          </li>
        ))}
      </ul>
    </main>
  );
}