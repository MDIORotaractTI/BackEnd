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
        const id = parseInt(req.body.id);
        const name = req.body.name.substring(0,150);
        const cpf = req.body.cpf.substring(0,11);
        try{
            execSQLQuery(`SET IDENTITY_INSERT [dbo].[Tab_Socios] ON`);
            execSQLQuery(`INSERT INTO [dbo].[Tab_Socios] ([ID],[NOME], [CPF]) VALUES(${id},'${name}','${cpf}')`, res);
            execSQLQuery(`SET IDENTITY_INSERT [dbo].[Tab_Socios] OFF`);
            //execSQLQuery('INSERT INTO [dbo].[Tab_Socios] ([ID], [NOME], [APELIDO], [SEXO], [RG], [RG_EMISSOR], [RG_EMISSOR_DATA], [CPF], [DATA_NASCIMENTO], [SENHAXXX], [SENHA], [ADMIN], [ADM_NOTICIA], [ADM_BANNER], [ADM_MURAL], [ADM_PROJETOS], [ADM_DOWNLOADS], [PROFISSAO], [EMAIL], [TELEFONE_01], [TELEFONE_02], [TELEFONE_03], [CELULAR_01], [CELULAR_02], [CELULAR_03], [FACEBOOK], [TWITTER], [ORKUT], [LINKEDIN], [SKYPE], [MSN], [SITE], [OBS], [EXCLUIDO], [EXCLUIDO_DATA], [EXCLUIDO_ID_USUARIO], [CADASTRO_DATA], [CADASTRO_ID_USUARIO], [ROTAKIDS], [INTERACT], [RYLA], [INTERCAMBISTA]) VALUES (${id}, '${name}', N'RÉGIS', N'M', N'0', NULL, NULL, N'609699890', N'1972-10-12 00:00:00.000', NULL, N'2c70d5643db9dd28757f9d8a7f41571b', N'0', N'0', N'0', N'0', N'0', N'0', NULL, N'regis.rocha@terra.com.br', N'51 33425829', N'51 33372508', NULL, N'51 99688844', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)', res);
        }catch(err){
            return res.status(400).send({error: 'Não foi possível buscar os usuários'});
        }
    });

    module.exports = app => app.use('/users', router);