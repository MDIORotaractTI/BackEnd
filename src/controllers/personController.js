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
        const genre = req.body.genre;
        const date_birth= req.body.birth;
        const email = req.body.email;
        //const godfather = req.body.godfather;
        //const rotaryId = req.body.rotaryId;
        //const clubPosition = req.body.clubPosition;
        //const active = req.body.active;
        //const password = req.body.password;
        //const dateInauguration = req.body.dateInauguration;
        
        try{
            execSQLQuery(`INSERT INTO [dbo].[Tab_Socios] ([NOME], [SEXO], [DATA_NASCIMENTO], [EMAIL]) VALUES 
            ('${name}', '${genre}', '${date_birth}', '${email}')`, res);
            return res.status(201).send({success: 'Operação realizada com sucesso'});
        }catch(err){
            return res.status(400).send({error: 'Não foi possível criar o usuário'});
        }
    });

    router.patch('/user/:id', (req,res)=>{
        const id = parseInt(req.params.id);
        const name = req.body.name;
        const genre = req.body.genre;
        const date_birth= req.body.birth;
        const email = req.body.email;
        
        try{
            execSQLQuery(`UPDATE [dbo].[Tab_Socios] SET NOME='${name}', SEXO='${genre}', DATA_NASCIMENTO='${date_birth}', EMAIL='${email}' WHERE ID=${id}`, res);
            return res.status(200).send({success: 'Alterado com sucesso'});
        }catch(err){
            return res.status(400).send({error: 'Problemas na requisição.'});
        }
    });

    module.exports = app => app.use('/users', router);