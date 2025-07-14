"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
export default function UserList(){

       
  const [users, setUsers] = useState(null);
   useEffect(() => {
     async function fetchUsers() {
       const response = await fetch("/api/posts"); // ✅ أضف await هنا
       if (!response.ok) {
         throw new Error("Failed to fetch users");
       }
       const data = await response.json(); // ✅ أضف await هنا
       setUsers(data);
     }

     fetchUsers();
   }, []);

    return (
      <div className="container">
        <div className="row mt-5 text-start">
          {users ? (
            users.map((user) => {
              return (
                <div className="col-md-4 col-12  p-3" key={user.id}>
                  <div className="card">
                    <div className="card-body post shadow">
                      <h2>{user.name}</h2>
                      <p>{user.email}</p>
                      <p>{user.password}</p>

                      <div className="text-center">
                        <Link className="" href={`/posts/${user.id}`}>
                          <button className="btn btn-secondary">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No users</h1>
          )}
        </div>
      </div>
    );
}