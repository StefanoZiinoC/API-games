import mysql from 'mysql';
import keys from './keys';

const db = mysql.createPool(keys.database);


db.getConnection((err, res) => {
     if (err) throw err; res.release(); 
     console.log('DB is connected'); 

});

export default db;

// import mysql from 'promise-mysql';
// import keys from './keys';

// const pool = mysql.createPool(keys.database);


// pool.getConnection()
//      .then(connection => {
//           pool.releaseConnection(connection);
//           console.log('DB is connected');
//      });

//      export default pool;