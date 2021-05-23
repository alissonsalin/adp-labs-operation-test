const Ajv = require('ajv');

const ajv = new Ajv();

const schema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      allOf: [
        {
          transform: [
            'trim',
          ],
        },
        {
          minLength: 1,
        },
      ],
    },
    operation: {
      type: 'string',
      allOf: [
        {
          transform: [
            'trim',
          ],
        },
        {
          minLength: 1,
        },
      ],
    },
    left: {
      type: 'integer',
      allOf: [
        {
          transform: [
            'trim',
          ],
        },
        {
          minLength: 1,
        },
      ],
    },
    right: {
      type: 'integer',
      allOf: [
        {
          transform: [
            'trim',
          ],
        },
        {
          minLength: 1,
        },
      ],
    },
  },
  required: ['id', 'operation', 'left', 'right'],
  additionalProperties: false,
};

function validateOperation(operation) {
  const validate = ajv.compile(schema);
  validate(operation);
  return validate.errors;
}

module.exports = {
  validateOperation,
};
