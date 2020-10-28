    const express = require('express');
    const authMiddleware = require('../middleware/auth');
    const sql = require('../database/index');
    const router = express.Router();
    
    function execSQLQuery(sqlQry, res){
        global.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
    }

    //router.use(authMiddleware);
    router.get('/socios', (req,res)=>{
        execSQLQuery('SELECT * FROM [dbo].[Tab_Socios]', res);
        
    });

    module.exports = app => app.use('/projects', router);