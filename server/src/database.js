"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const db = mysql_1.default.createPool(keys_1.default.database);
db.getConnection((err, res) => {
    if (err)
        throw err;
    res.release();
    console.log('DB is connected');
});
exports.default = db;
// import mysql from 'promise-mysql';
// import keys from './keys';
// const pool = mysql.createPool(keys.database);
// pool.getConnection()
//      .then(connection => {
//           pool.releaseConnection(connection);
//           console.log('DB is connected');
//      });
//      export default pool;
