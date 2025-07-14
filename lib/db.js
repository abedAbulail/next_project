import mysql from 'mysql2/promise';


let connection;

export const connectToDatabase = async () => {
    if(!connection){
        connection = await mysql.createConnection({
          host: process.env.DATABASE_HOST || "localhost",
          user: (process.env.DATABASE_USER = "root"),
          password: process.env.DATABASE_PASSWORD || "",
          database: process.env.DATABASE_NAME || "next",
        });
    }
    return connection;

}