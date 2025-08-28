export async function GET() {
  // Fetch directly from server container
  const res = await fetch("http://server:5000/api/user");

  if (!res.ok) {
    console.error("Failed to fetch user data from server:", res.statusText);
    return new Response("Server fetch failed", { status: res.status });
  }

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
