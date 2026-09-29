"use client";
import { useState } from "react";



export default function SiteConnector() {

const [siteUrl, setSiteUrl] = useState("");

async function handleConnect() {
  let normalizedUrl = siteUrl.trim();

  if (!normalizedUrl.startsWith("http://") && !normalizedUrl.startsWith("https://")) {
    normalizedUrl = `https://${normalizedUrl}`;
  }

  console.log("Original URL:", siteUrl);
  console.log("Normalized URL:", normalizedUrl);

  const response = await fetch("/api/discover", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        siteUrl: normalizedUrl,
    }),
    });

  const data = await response.json();

  console.log("API response:", data);
}

  return (
    <section>
      <h2>Connect WordPress Site</h2>

      <label htmlFor="site-url">Site URL</label>

        <input
        id="site-url"
        type="url"
        placeholder="https://example.com"
        value={siteUrl}
        onChange={(event) => setSiteUrl(event.target.value)}
        />

      <button type="button" onClick={handleConnect}>
        Connect & Discover
        </button>
    </section>
  );
}