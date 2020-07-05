module.exports = {
 swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'backend-rotaract',
    description: 'APIs do backend da aplicação Rotaract BR'
  },
  tags: [
    {
      name: 'Usuário',
      name: 'Clube',
      name: 'Distrito',
      name: 'Projeto'
    }
  ],
  paths: {
    '/user': {
      post: {
        tags: ['Usuário'],
        description: 'Create user',
        operationId: 'createUser',
        parameters: [
          {
            name: 'name',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'email',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'godfather',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'active',
            in: 'body',
            schema: {
              type: 'boolean'
            },
              required: true
          },
          {
            name: 'password',
            in: 'body',
            schema: {
              type: 'string'
            },
              required: true
          },
          {
            name: 'rotaryId',
            in: 'body',
            schema: {
              type: 'string'
            },
              required: true
          },
          {
            name: 'birth',
            in: 'body',
            schema: {
              type: 'string'
            },
              required: true
          },
          {
            name: 'dateInauguration',
            in: 'body',
            schema: {
              type: 'string'
            },
              required: true
          },
          {
            name: 'shutdownDate',
            in: 'body',
            schema: {
              type: 'string'
            },
              required: false
          },
          {
            name: 'clubPosition',
            in: 'body',
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
          },
          '401': {
            description: 'Not authorized'
          },
          '403': {
            description: 'Forbidden'
          }

      }
      },
      put: {
      tags: ['Usuário'],
      description: 'Update user',
      operationId: 'updateUser',
      parameters: [
        {
          name: 'name',
          in: 'body',
          schema: {
            type: 'string'
          },
          required: true
        },
        {
          name: 'email',
          in: 'body',
          schema: {
            type: 'string'
          },
          required: true
        },
        {
          name: 'godfather',
          in: 'body',
          schema: {
            type: 'string'
          },
          required: true
        },
        {
          name: 'active',
          in: 'body',
          schema: {
            type: 'boolean'
          },
            required: true
        },
        {
          name: 'rotaryId',
          in: 'body',
          schema: {
            type: 'string'
          },
            required: true
        },
        {
          name: 'birth',
          in: 'body',
          schema: {
            type: 'string'
          },
            required: true
        },
        {
          name: 'dateInauguration',
          in: 'body',
          schema: {
            type: 'string'
          },
            required: true
        },
        {
          name: 'shutdownDate',
          in: 'body',
          schema: {
            type: 'string'
          },
            required: false
        },
        {
          name: 'clubPosition',
          in: 'body',
          schema: {
            type: 'string'
          },
            required: true
        },
        //Rotaractiano
        {
          name: 'password',
          in: 'body',
          schema: {
            type: 'string'
          },
            required: true
        },
        {
          name: 'facebook',
          in: 'body',
          schema: {
            type: 'string'
          },
            required: false
        },
        {
          name: 'instagram',
          in: 'body',
          schema: {
            type: 'string'
          },
            required: false
        }
      ],
      responses: {
        '200': {
          description: 'Updated'
        },
        '400': {
          description: 'Invalid parameters'
        },
        '401': {
          description: 'Not authorized'
        },
        '403': {
          description: 'Forbidden'
        }

    }
      }
    },
    '/club':{
      post: {
        tags: ['Clube'],
        description: 'Create club',
        operationId: 'createClub',
        parameters: [
          {
            name: 'name',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'active',
            in: 'body',
            schema: {
              type: 'boolean'
            },
            required: true
          },
          {
            name: 'district',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'mascot',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'godfather',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'foundation',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'recognized',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'closingDate',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'email',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'facebook',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'instagram',
            in: 'body',
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
          },
          '401': {
            description: 'Not authorized'
          },
          '403': {
            description: 'Forbidden'
          }

      }
      },
      put: {
        tags: ['Clube'],
        description: 'Update club',
        operationId: 'updateClub',
        parameters: [
          {
            name: 'name',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'active',
            in: 'body',
            schema: {
              type: 'boolean'
            },
            required: true
          },
          {
            name: 'district',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'mascot',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'godfather',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'foundation',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'recognized',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'closingDate',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'email',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'facebook',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'instagram',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'address',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'dateTime',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          }
        ],
        responses: {
          '200': {
            description: 'Updated'
          },
          '400': {
            description: 'Invalid parameters'
          },
          '401': {
            description: 'Not authorized'
          },
          '403': {
            description: 'Forbidden'
          }

      }
      }
    },
    '/district':{
      post: {
        tags: ['Distrito'],
        description: 'Create district',
        operationId: 'createDistrict',
        parameters: [
          {
            name: 'mascot',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'representative',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'email',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'facebook',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'instagram',
            in: 'body',
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
          },
          '401': {
            description: 'Not authorized'
          },
          '403': {
            description: 'Forbidden'
          }
      }
      },
      put: {
        tags: ['Distrito'],
        description: 'Update district',
        operationId: 'updateDistrict',
        parameters: [
          {
            name: 'mascot',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'representative',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'email',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'facebook',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'instagram',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          }
        ],
        responses: {
          '200': {
            description: 'Updated'
          },
          '400': {
            description: 'Invalid parameters'
          },
          '401': {
            description: 'Not authorized'
          },
          '403': {
            description: 'Forbidden'
          }

      }
      }
    },
    '/project':{
      post: {
        tags: ['Projeto'],
        description: 'Create project',
        operationId: 'createProject',
        parameters: [
          {
            name: 'name',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'justification',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'mainObjective',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'specificObjective',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'category',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'startDate',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'endDate',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          //ajustar
          {
            name: 'financialReport',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'projectParticipants',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'targetAudience',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'disclosure',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'partnerships',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          //ajustar
          {
            name: 'schedule',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'description',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          //ajustar
          {
            name: 'media',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'results',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'difficulty',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'keyWords',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'lessons',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'summary',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'finished',
            in: 'body',
            schema: {
              type: 'boolean'
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
          },
          '401': {
            description: 'Not authorized'
          },
          '403': {
            description: 'Forbidden'
          }
      }
      },
      put: {
        tags: ['Projeto'],
        description: 'Update project',
        operationId: 'updateProject',
        parameters: [
          {
            name: 'name',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'justification',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'mainObjective',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'specificObjective',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'category',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'startDate',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'endDate',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          //ajustar
          {
            name: 'financialReport',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'projectParticipants',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'targetAudience',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'disclosure',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'partnerships',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          //ajustar
          {
            name: 'schedule',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'description',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          //ajustar
          {
            name: 'media',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'results',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'difficulty',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'keyWords',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'lessons',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'summary',
            in: 'body',
            schema: {
              type: 'string'
            },
            required: true
          },
          {
            name: 'finished',
            in: 'body',
            schema: {
              type: 'boolean'
            },
            required: true
          }
        ],
        responses: {
          '200': {
            description: 'Updated'
          },
          '400': {
            description: 'Invalid parameters'
          },
          '401': {
            description: 'Not authorized'
          },
          '403': {
            description: 'Forbidden'
          }
      }
      }
    }
}
}
