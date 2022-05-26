const {Pool} = require("pg");
require('dotenv').config({ path: '.env'});


const dbPool = new Pool({
    "user": process.env.USERNAME,
    "password":process.env.PASSWORD ,
    "host":process.env.HOSTNAME,
    "port": process.env.PORT,
    "database": process.env.DATABASE
})



async function connect() {
    try {
        await dbPool.connect();
        console.log('postgress sucessfully connected');
    }
    catch(e) {
        console.error(`Failed to connect ${e}`)
    }
}

connect();

module.exports = {
    dbPool,
}

