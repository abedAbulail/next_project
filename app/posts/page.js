"use client";

import Link from "next/link";
import UserList from "./userList";
import CreateUser from "./CreateUser";
export default function PostsPage() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //     cache: "no-store", // Ensures the data is always fresh
  //   });
  //   const posts = await response.json();

  //   const db = await connectToDatabase();
  //   const [postsFromDB] = await db.query("SELECT * FROM user");
  //   if (!postsFromDB || postsFromDB.length === 0) {
  //     return <p>No posts found.</p>;
  //   }

  return (
    <>
      <div className="">
        <div>
          <h1 className="text-center">الفرق المسجلة</h1>
          <p className="text-center">
            اذا اردت التسجيل يوجد فورم اسفل الصفحة
          </p>
          <UserList />
        </div>
      </div>

      {/* create user */}
      <CreateUser />
    </>
  );
}
