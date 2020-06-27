exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
//método de criação

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
//método de atualização

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
//método de deleção