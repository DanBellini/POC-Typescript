import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
var Pool = pkg.Pool;
var connectionDB = new Pool({
    connectionString: process.env.DATABASE_URL
});
export default connectionDB;
