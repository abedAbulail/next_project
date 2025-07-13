import Link from "next/link";



 export const metadata = {
   title: "Articles Page",
 };
export default function ArticlesPage() {
  
  return (
    <>
      <div className="main-div">
        <div>
          <h1>Articles Page</h1>
          <p>This is the articles page of the Next.js application.</p>
        </div>
        <div>
          <Link href="/posts">
            <button>Take me to Posts Page</button>
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