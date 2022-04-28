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

async function updata (id:number,name: Category) {
}

async function deleteOne (id:number) {
}

export default {
    create,
    findAll,
    updata,
    deleteOne
}
