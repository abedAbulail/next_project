"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
// import UserList from "./userList";
// import CreateUser from "./CreateUser";

export default function TeamsList() {
  const [teams, setTeams] = useState(null);
  useEffect(() => {
    async function fetchTeams() {
      const response = await fetch("/api/teams");
     
      const data = await response.json();
      setTeams(data);
    }

    fetchTeams();
  }, []);


  return (
      <div className="row mt-5 text-start ">
        {teams ? (
          teams.map((team) => {
            return (
              <div className="col-md-4 col-12 p-3" key={team.id}>
                <div className="card text-end">
                  <div className="card-body post shadow">
                    <h2>{team.name}</h2>
                    <p>
                      <b>عدد الأعضاء</b>: {team.members}
                    </p>
                    <hr />
                    <div className="div_flex">
                      <div>
                        <h5 className="">
                            <b>
                          الاعبين الاساسيين
                            </b>
                        </h5>
                        <p className="temainfo">الكابتن: {team.member1}</p>
                        <p className="temainfo"> العضو 2: {team.member2}</p>
                        <p className="temainfo"> العضو 3 : {team.member3}</p>
                        <p className="temainfo">العضو 4: {team.member4}</p>
                        <p className="temainfo">الحارس: {team.member5}</p>
                      </div>
                      <div>
                        <h5 className="">
                            <b>البدلاء</b>
                      
                        </h5>
                        <p className="temainfo">البديل 1 : {team.member6}</p>
                        <p className="temainfo">البديل 2 : {team.member7}</p>
                      </div>
                    </div>
                    {/* <div className="text-center">
                      <Link href={`/teams/${team.id}`}>
                        <button className="btn btn-secondary">Read More</button>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No teams</h1>
        )}
      </div>
  );
}
