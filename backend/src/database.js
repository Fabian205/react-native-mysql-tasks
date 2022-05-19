import mysql from './mysql2';
import { config } from "config";

const connect = async() => {
    const conn = await mysql.createConnection(config);

    const result = conn.execute('SELECT 1+1');
    console.log(result)
};


connect();