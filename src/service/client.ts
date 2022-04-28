import { Pool } from "pg";

let kinURL = 'postgres://postgres:1234@127.0.0.1:5432/temur'

let client = new Pool({
    connectionString: kinURL
})

client.connect((err)=>{
    console.log('Databest `temur` is conection');
})

export default client