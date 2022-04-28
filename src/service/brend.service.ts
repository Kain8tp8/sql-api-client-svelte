import Brend from '../model/brend.model'
import client from './client'

async function create(brend: Brend) {
    let sql = "INSERT INTO brend (name, color) VALUES($1,$2)";
    client.query(sql, [brend.name,brend.color]);
}

async function findAll(): Promise<Brend[]> {
    let sql = "SELECT * FROM brend;";
    let category = await client.query(sql);
    return category.rows;
}

async function updata (id:number,name: Brend) {
}
async function deleteOne (id:number) {  
}

export default {
    create,
    findAll,
    updata,
    deleteOne
}
