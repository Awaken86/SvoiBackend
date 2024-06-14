import mysql from "mysql2/promise";

// const { createPool } = require("mysql/promise");
const pool = mysql.createPool({
    host: 'db',
    port: 3306,
    user: 'root',
    database: 'ecom',
    password: '567kybik'
});
const connectToDatabase = async () => {
    try {
        const connection = await pool.getConnection();
        const [rows, fields] = await connection.query('SELECT * FROM menu');
        console.log(fields);
        console.log("Database connection successful");
    } catch (error) {
        console.log("Database connection failed");
        console.log(error);
        throw error;
    }
}
export { connectToDatabase, pool }
