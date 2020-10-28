const sql = require("mssql");

const connStr = "Server=localhost;Database=master;User Id=SA;Password=yourStrong(!)Password;";

sql.connect(connStr)
   .then(conn => global.conn = conn)
   .catch(err => console.log(err));

module.exports = sql;