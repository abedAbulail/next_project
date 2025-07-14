"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
// import UserList from "./userList";
import TeamsList from "./TeamsList";
// import CreateUser from "./CreateUser";

export default function Teams() {


  // Function to create a new team
  async function createTeam(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/api/teams", {
      method: "POST",
      body: formData,
    });
  
    alert("Team created successfully");
    window.location.reload();
  }
  return (
    <div>
      <div className="container arabic">
        <TeamsList />
        {/* create team form can be added here */}
      </div>
      <div className="form arabic">
        <div className="container mt-5 p-5">
          <h3>تسجيل فريق جديد</h3>
          <form onSubmit={createTeam} method="POST">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      اسم الفريق
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="members" className="form-label">
                      عدد الأعضاء
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="members"
                      name="members"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="mb-3">
                    <label htmlFor="member1" className="form-label">
                      كابتن الفريق
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="member1"
                      name="member1"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="mb-3">
                    <label htmlFor="member1" className="form-label">
                      عضو 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="member2"
                      name="member2"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="mb-3">
                    <label htmlFor="member1" className="form-label">
                      عضو 3
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="member3"
                      name="member3"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="mb-3">
                    <label htmlFor="member1" className="form-label">
                      عضو 4
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="member4"
                      name="member4"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="mb-3">
                    <label htmlFor="member1" className="form-label">
                      الحارس
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="member5"
                      name="member5"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="member1" className="form-label">
                      البديل 1
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="member6"
                      name="member6"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="mb-3">
                    <label htmlFor="member1" className="form-label">
                      البديل 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="member7"
                      name="member7"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Add more member fields as needed */}
            <button type="submit" className="btn btn-dark">
              إنشاء فريق
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
