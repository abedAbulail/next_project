import Link from 'next/link';
import PostD from '@/app/component/post';
import { Suspense } from 'react';
import Loading from './loading';
export default async function Post({ params }) {
  const { post_id } = params;

//   promise to fetch post data



 
  return (
    <>
      {/* button back */}
      <div className=" mt-3">
        <Link href="/posts">
          <button className="btn ">Back to Posts</button>
        </Link>
      </div>
      <Suspense fallback={<Loading />}>
        <PostD post_id={post_id} />
      </Suspense>
      {/* footer */}
      <div
        className="bg-dark text-light"
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "20px",
          padding: "10px",
        }}
      >
        <p>
          <small>© 2023 My Blog. All rights reserved.</small>
        </p>
      </div>
    </>
  );
}
