export const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    const html = await response.text();
    return html;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch URL");
  }
};
