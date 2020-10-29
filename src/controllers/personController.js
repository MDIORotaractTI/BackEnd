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
            execSQLQuery('SELECT * FROM [dbo].[Tab_Socios]', res);
        }catch(err){
            return res.status(400).send({error: 'Não foi possível buscar os usuários'});
        }
    });

    router.post('/user', (req,res)=>{
        const name = req.body.name;
        const nickname = req.body.nickname.substring(0,20);
        const cpf = req.body.cpf.substring(0,11);
        const genre = req.body.genre.substring(0,1);
        const rg = req.body.rg.substring(0,9);
        const emitter_rg = req.body.emitter_rg.substring(0,9);
        const emitter_data_rg= req.body.emitter_data_rg.substring(0,10);
        const date_birth= req.body.date_birth.substring(0,10);
        
        try{
            execSQLQuery(`INSERT INTO [dbo].[Tab_Socios] ([NOME], [APELIDO], [SEXO], [RG], [RG_EMISSOR], [RG_EMISSOR_DATA], [CPF], [DATA_NASCIMENTO]) VALUES 
            ('${name}', '${nickname}', '${genre}', '${rg}', '${emitter_rg}', '${emitter_data_rg}', '${cpf}', '${date_birth}')`, res);
            return res.status(201).send({success: 'OK'});
        }catch(err){
            return res.status(400).send({error: 'Não foi possível criar o usuário'});
        }
    });

    module.exports = app => app.use('/users', router);