export async function fetchLevels(): Promise<string[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/levels`);
  if (!res.ok) throw new Error("Failed to fetch candidate levels");
  const data = await res.json();
  return data.levels;
}
