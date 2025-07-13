import Link from "next/link";

export default async function PostD({ post_id }) {
 

  //   promise to fetch post data

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const post = await response.json();

  return (
    <>
      <div className="main-div">
        <div className=" card" style={{ width: "50%", margin: "auto" }}>
          <div className="card-body">
            <h1 className="card-title">{post.title}</h1>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      </div>
    </>
  );
}
