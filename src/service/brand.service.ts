import Brand from '../model/brand.model'
import client from './client'

async function create(brand: Brand) {
    let sql = "INSERT INTO brand (name) VALUES($1)";
    await client.query(sql, [brand.name]);
}

async function findAll(): Promise<Brand[]> {
    let sql = "SELECT * FROM brand;";
    let brand = await client.query(sql);
    return brand.rows;
}

async function deleteOne (id:number) {  
    let sql = 'DELETE FROM brand WHERE id = $1'
    await client.query(sql,[id])
}

async function updata (id:number, brand: Brand) {
    let sql = 'UPDATE TABLE brand SET name = $1 WHERE id = $2'
    await client.query(sql, [brand.name, id])
}

export default {
    create,
    findAll,
    updata,
    deleteOne
}
