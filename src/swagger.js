module.exports = {
 swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'backend-rotaract',
    description: 'APIs do backend da aplicação Rotaract BR'
  },
  tags: [
    {
      name: 'Associado'
    }
  ],
  paths: {
    '/user': {
      get: {
        tags: ['Associado'],
        description: 'Busca infomações do associado',
        operationId: 'getUser',
        parameters: [
          {
            name: 'id',
            in: 'header',
            required: true,
            schema: {
              type: 'integer'
            },
          },
          {
            name: 'page',
            in: 'query',
            schema: {
              type: 'integer',
              default: 1
            },
            required: false
          },
          {
            name: 'orderBy',
            in: 'query',
            schema: {
              type: 'string',
              enum: ['asc', 'desc'],
              default: 'asc'
            },
            required: false
          }
        ],
        responses: {
          '200': {
            description: 'Ok'
          },
          '400': {
            description: 'Invalid parameters'
          },
          '404': {
            description: 'Not found'
          }
        }
      },
      post: {
        tags: ['Associado'],
        description: 'Cadastrar associado',
        operationId: 'createUser',
        parameters: [
          {
            name: 'name',
            in: 'header',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'email',
            in: 'header',
            schema: {
              type: 'string'
            },
            required: true
          }
        ],
        responses: {
          '201': {
            description: 'Created'
          },
          '400': {
            description: 'Invalid parameters'
          }
        }
      }
    }
  }
};
