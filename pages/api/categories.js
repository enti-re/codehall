export default async function handler(req, res) {
    const BASE_URL = "https://fakestoreapi.com/products/categories";
    if (req.method === "GET") {
      try {
        const response = await fetch(BASE_URL);
        const jsonResponse = await response.json();
        res.status(200).json(jsonResponse);
      } catch (err) {
        res.status(500).json({ error: "failed to load data" });
      }
    }
  }
  