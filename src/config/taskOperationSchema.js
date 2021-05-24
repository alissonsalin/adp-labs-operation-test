const schema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      allOf: [{ transform: ['trim'] }, { minLength: 1 }],
    },
    operation: {
      type: 'string',
      allOf: [{ transform: ['trim'] }, { minLength: 1 }],
    },
    left: {
      type: 'integer',
      allOf: [{ transform: ['trim'] }, { minLength: 1 }],
    },
    right: {
      type: 'integer',
      allOf: [{ transform: ['trim'] }, { minLength: 1 }],
    },
  },
  required: ['id', 'operation', 'left', 'right'],
  additionalProperties: false,
};

module.exports = {
  schema,
};
