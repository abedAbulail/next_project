import Link from "next/link";

   export const metadata = {
     title: "Featured Articles",
   };
import Todo from "@/app/component/todo";
export default function FeaturedArticlesPage() {
 
  return (
    <>
      <div className="main-div">
        <div>
          <h1>Featured Articles Page</h1>
          <p>This is the featured articles page of the Next.js application.</p>
          <div>
            <Todo />
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