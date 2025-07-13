import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // Ensures the data is always fresh
  });
  const posts = await response.json();

  return (
    <>
      <div className="main-div">
        <div>
          <h1>Posts Page</h1>
          <p>This is the posts page of the Next.js application.</p>
          <div className="container">
            <div className="row mt-5 text-start">
              {posts.map((post) => {
                return (
                  <div className="col-4  p-3" key={post.id}>
                    <div className="card ">
                      <div className="card-body post shadow">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <div className="text-center">
                          <Link className="" href={`/posts/${post.id}`}>
                            <button className="btn btn-secondary">
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <Link href="/articles">
            <button>Take me to Articles Page</button>
          </Link>
          <br></br>
          <Link href="/">
            <button>Take me to Home Page</button>
          </Link>
        </div>
      </div>
    </>
  );
}
