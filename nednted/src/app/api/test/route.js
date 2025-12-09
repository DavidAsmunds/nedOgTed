import client from "@/lib/db";

export async function GET() {
  try {
    const result = await client.query("SELECT * FROM test");
    return Response.json(result.rows);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(request) {
  try{
    const {name} = await request.json();
    const result = await client.query(
      "INSERT INTO test (name) VALUES ($1) RETURNING *",[name]
    );

    return result.json(rows[0]);
  }
  catch (err){
    console.error(err);
    return Response.json({ error: "Database error" }, { status: 500 });
  }
}