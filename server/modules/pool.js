//Create Pool for PG 
const pg = require('pg'); 
const Pool = pg.Pool; 
const pool = new Pool({
  database: 'weekend_to_do_app',
  host: 'localhost', 
  port: 5432, 
  max: 10, 
  idleTimeoutMillis: 30000, 
}); 
pool.on('connect', ()=>{ 
  console.log('PostgreSQL is connected!');
})
pool.on('error', (error)=>{ 
console.log('Error with postgreSQL pool', pool); 
})

module.exports = pool; 