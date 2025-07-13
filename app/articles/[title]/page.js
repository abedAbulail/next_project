import Link from "next/link";


 export const metadata = {
   title: `Single Article`,
 };
export default function ShowArticlePage({ params }) {
  const { title } = params;

 

  return (
    <>
      <div className="main-div">
        <div>
          <h1>Article: {title}</h1>
          <p>This is the article page for "{title}" in the Next.js application.</p>
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