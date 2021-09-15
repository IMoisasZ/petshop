import pg from 'pg'

async function connect(){
    if(global.connection){
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        connectionString: "postgres://qssmdvmx:ROHukFk8g7ahbeI1zMVlGuA8jbdCowIj@chunee.db.elephantsql.com/qssmdvmx"
    });
    global.connection = pool;
    return pool.connect();
}

export {
    connect
}