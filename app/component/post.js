import Link from "next/link";
import { connectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";



export default async function PostD({ post_id }) {
 

  //   promise to fetch post data

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${post_id}`
  // );
  // const post = await response.json();



  
  const db = await connectToDatabase();
  const [postsFromDB] = await db.query("SELECT * FROM post WHERE id = ?", [post_id]);
  console.log(postsFromDB);

  return (
    <>
      <div className="main-div">
        <div className=" card" style={{ width: "50%", margin: "auto" }}>
          <div className="card-body">

            <h1 className="card-title">{postsFromDB[0].title}</h1>
            <p className="card-text">{postsFromDB[0].body}</p>
          </div>
        </div>
      </div>
    </>
  );
}
