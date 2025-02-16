const pg = require('pg')

const constring = 'pg://user:password@host:port/database'

const client = new pg.Client(constring);

client.connect((err) => {
    if (!err){
        client.query(
            'select * from pokemon',
            (err, result) =>{
                if (err){
                    console.log(err);
                } else{
                    console.log(result.rows);
                }
            }
        )
    }
})