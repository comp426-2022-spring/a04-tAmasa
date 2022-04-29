const database = require("better-sqlite3")

const logdb = new database('log.db')
const stmt = logdb.prepare(`
SELECT name FROM sqlite_master WHERE type='table' and name='accessLog';
`);
let row = stmt.get();

if(row === undefined){
    console.log("No space")
}else{
    console.log('Log database exists.')
}
module.exports = logdb