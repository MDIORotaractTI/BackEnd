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
            execSQLQuery('SELECT * FROM [dbo].[Tab_Distritos]', res);
        }catch(err){
            return res.status(400).send({error: 'Não foi possível buscar os distritos'});
        }
    });

    router.post('/district', (req,res)=>{
        const district = req.body.district;
        const mascot = req.body.mascot;
        const email= req.body.email;
        const facebook = req.body.facebook;
        const instagram = req.body.instagram;
        
        try{
            execSQLQuery(`INSERT INTO [dbo].[Tab_Distritos] ([DISTRITO], [NOME_MASCOTE], [EMAIL], [FACEBOOK], [INSTAGRAM]) VALUES 
            ('${district}', '${mascot}', '${email}', '${facebook}', '${instagram}')`, res);
            print(res.statusCode.toString());
            print(res.statusMessage.toString());
            //return res.status(201).send({success: 'Cadastro realizado com sucesso'});
        }catch(err){
            return res.status(400).send({error: 'Não foi possível criar o distrito'});
        }
    });


    module.exports = app => app.use('/districts', router);