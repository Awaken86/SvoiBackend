import { pool } from "../DataBase/createPool.js";

export const findAll = async () => {
    const QUERY = "SELECT * FROM menu";
    try {
        const clients = await pool.getConnection();

        const result = await clients.query(QUERY);
        return result[0];
    } catch (error) {
        console.log(error);
        throw error
    }
};
export const findById = async (id) => {
    const QUERY = `SELECT * FROM menu WHERE id = ?`;
    try {
        const clients = await pool.getConnection();
        const result = await clients.query(QUERY, [id]);
        console.log(result[0]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}
export const postMenu = async (title, description, price, type, photo, grams) => {
    console.log(title, description, price, type, photo, grams);
    const QUERY = `INSERT INTO menu 
    (title, description, price, type, photo, grams) 
    VALUES (?, ?, ?, ?, ?, ?)`;
    try {
        const clients = await pool.getConnection();
        const result = await clients.query(QUERY, [title, description, price, type, photo, grams]);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}
export const updateMenu = async (id, title, description, price, type, photo, grams) => {
    const QUERY = `UPDATE menu SET title = ?, description = ?, price = ?, type = ?, photo = ?, grams = ? WHERE id = ?`;
    try {
        const clients = await pool.getConnection();
        const result = await clients.query(QUERY, [title, description, price, type, photo, grams, id]);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}
export const deleteMenu = async (id) => {
    const QUERY = `DELETE FROM menu WHERE id = ?`;
    try {
        const clients = await pool.getConnection();
        const result = await clients.query(QUERY, [id]);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}     