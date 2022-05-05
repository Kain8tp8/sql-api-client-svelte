import Category from '../model/category.model'
import client from './client'

async function create(category: Category) {
    let sql = "INSERT INTO category (name) VALUES($1)";
    client.query(sql, [category.name]);
}


async function findAll(): Promise<Category[]> {
    let sql = "SELECT * FROM category;";
    let category = await client.query(sql);
    return category.rows;
}

async function deleteOne (id:number) {  
    let sql = 'DELETE FROM category WHERY id = $1'
    await client.query(sql,[id])
}

async function updata (id:number, category: Category) {
    let sql = 'UPDATE TABLE category SET name = $1 WHERE id = $2'
    await client.query(sql, [category.name, id])
}

export default {
    create,
    findAll,
    updata,
    deleteOne
}
