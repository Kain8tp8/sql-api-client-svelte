import User from "../model/user.model";
import client from "./client";

async function create(user: User) {
    let sql =
        "INSERT INTO users (name, surname, email, possword, gender) VALUES($1,$2,$3,$4,$5)";
    client.query(sql, [user.name,user.surname,user.email,user.possword,user.gender, ]);
}
      
async function findAll(): Promise<User[]> {
    let sql = "SELECT * FROM users;";
    let usres = await client.query(sql);
    return usres.rows;
}

async function findByEmali(email: string): Promise<User> {
    let sql = "SELECT * FROM users WHERE email = $1;";
    let users = await client.query(sql, [email]);
    return users.rows[0];
}

async function deleteOne (id:number) {  
    let sql = 'DELETE FROM users WHERY id = $1'
    await client.query(sql,[id])
}

async function updata (id:number, user: User) {
    let sql = 'UPDATE TABLE users SET name = $1 WHERE id = $2'
    await client.query(sql, [user.name , id])
}

export default {
    create,
    findAll,
    findByEmali,
    updata,
    deleteOne
}
