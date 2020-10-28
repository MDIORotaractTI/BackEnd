            const express = require('express');
            //const User = require('../models/user');
            const bcrypt = require('bcryptjs');
            const jwt = require('jsonwebtoken');
            const authConfig = require('../config/auth');

            const router = express.Router();

            function generateToken(params = {}){
                return jwt.sign(params, authConfig.secret,{
                    expiresIn : 86400, // 24 horas em milissegundos
                });
            }
            /*
            router.post('/register', (req, res) =>{
                const { email } = req.body;
                //const nome = req.body.nome.substring(0,150);
                //const cpf = req.body.cpf.substring(0,11);
                try{
                    execSQLQuery(`INSERT INTO Clientes(ID, Nome, CPF) VALUES(${id},'${nome}','${cpf}')`, res);
                    return res.status(201).send({success: 'Ok'});
                }catch(err){
                    return res.status(400).send({error: 'Não foi possível registrar o usuário'});

                }
            })

            router.post('/register', async(req, res) =>{
                const { email } = req.body;
                try{
                    if(await User.findOne({ email }))
                        return res.status(400).send({error: 'Usuário já existe'});
                    const user = await User.create(req.body);

                    user.password = undefined;
                    return res.send({ user });
                }catch(err){
                    return res.status(400).send({error: 'Não foi possível registrar o usuário'});

                }
            });

             
            router.post('/authenticate', async (req, res) => {
                const { email, password } = req.body;
                const user = await User.findOne({ email }).select('+password');

                if(!user)
                    return res.status(400).send({error: 'Usuário não encontrado'});
                
                if(!await bcrypt.compare(password, user.password))
                    return res.status(400).send({error: 'Senha incorreta'});

                user.password = undefined;

                res.send({ 
                    user, 
                    token : generateToken({id: user.id}),
                });
            });
            */
            module.exports = app => app.use('/auth', router);