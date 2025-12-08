import client from "./db";

export async function GET() {
  try {
    const result = await client.query("SELECT * FROM test");
    return Response.json(result.rows);
  } 
  catch (err) {
    console.error(err);
    return Response.json({ error: "Database error" }, { status: 500 });
  }
}