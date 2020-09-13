const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({error: 'Nenhum token encontrado'});
    }
    
    const parts = authHeader.split(' ');
    if(!(parts.length === 2)){
        return res.status(401).send({error: 'Erro no token'});
    }
    const [ scheme, token ] = parts;

       (!/ˆBearer$/i.test(scheme))
    if (!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error: 'Token malformatado'});
    }
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err){
        return res.status(401).send({error: 'Token inválido'});
        }
        req.userId = decoded.id;
        return next();
    });
};