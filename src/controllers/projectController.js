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
    router.get('/', (req,res)=>{
        try{
            execSQLQuery('SELECT * FROM [dbo].[Tab_Projetos]', res);
        }catch(err){
            return res.status(400).send({error: 'Não foi possível buscar os projetos'});
        }
    });

    router.post('/project', (req,res)=>{
        const name = req.body.name;
        try{
            execSQLQuery(`INSERT INTO [dbo].[Tab_Projetos] ([NOME]) VALUES 
            ('${name}')`, res);
            return res.status(201).send({success: 'Operação realizada com sucesso'});
        }catch(err){
            return res.status(400).send({error: 'Não foi possível criar o projeto'});
        }
    });

    module.exports = app => app.use('/projects', router);