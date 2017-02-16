var sys = require('util');
  
// var Client = require('mysql').Client;
// var client = new Client();
var Db = {
	host: "192.168.60.29",
	port: "3306",//可不设置 默认3306
	user: "root",
	password: "1234",
	database: "node_test"
};
  
var client = require('mysql').createConnection({
        host:Db.host,
        port:Db.port,
        user:Db.user,
        password:Db.password,
        database: Db.database
    });
  
client.connect(function(error, results) {
  if(error) {
    console.log('Connection Error: ' + error.message);
    return;
  }
  console.log('Connected to MySQL');
});
       
var test_table = 'user';  
client.query('select * from ' + test_table, function selectCb(err, results, fields) {  
	//读取数据
    if (err) {  
      throw err;  
    }  
	if(results) {
		for(var i = 0; i < results.length; i++) {
		  console.log("%d\t%s\t%s", results[i].id, results[i].name, results[i].age);
		}
	}    
	client.end();  
  }  
); 

var insertSQL = 'insert into user(name,age) values("conan",11),("fens.me",100),("fens.me1",100),("fens.me2",100)';
// var insertSQL = 'insert into user(name) values("conan"),("fens.me")';
var selectSQL = 'select * from user limit 3';
var deleteSQL = 'delete from user where id=1';
var updateSQL = 'update user set name="conan update"  where name="conan"';

//insert
    client.query(insertSQL, function (err1, res1) {
        if (err1) console.log(err1);
        console.log("INSERT Return ==> ");
        console.log(res1);
    });

//delete
/*client.query(deleteSQL, function (err0, res0) {
    if (err0) console.log(err0);
    console.log("DELETE Return ==> ");
    console.log(res0);
});*/

    

        //query
        client.query(selectSQL, function (err2, rows) {
            if (err2) console.log(err2);

            console.log("SELECT ==> ");
            for (var i in rows) {
                console.log(rows[i]);
            }
        });

	    //update
	    client.query(updateSQL, function (err3, res3) {
	        if (err3) console.log(err3);
	        console.log("UPDATE Return ==> ");
	        console.log(res3);
		});
        //query
        client.query(selectSQL, function (err4, rows2) {
            if (err4) console.log(err4);

            console.log("SELECT ==> ");
            for (var i in rows2) {
                console.log(rows2[i]);
            }
        });
            