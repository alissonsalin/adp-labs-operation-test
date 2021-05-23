const Ajv = require('ajv');
const ErrorManager = require('./ErrorManager');

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

/**
 * If the status code is lower than 220 (SUCCESS) or greater then 299 (Last code Unassigned)
 * then return an error
 * @param {Response} the response result
 * @return {Error} common errors - 400, 404, 503 
 */
 function validatePOSTRequest(res) {
  if (res.statusCode < process.env.STATUS_CODE_SUCCESS 
    || res.statusCode >= process.env.STATUS_CODE_BEGIN_ERRORS) {
    const errorMessage = new ErrorManager().error(res.statusCode);
    return errorMessage;
  }
  return null;
}

function validateGETRequest(res) {
  if (res.statusCode < process.env.STATUS_CODE_SUCCESS
    || res.statusCode >= process.env.STATUS_CODE_BEGIN_ERRORS) {
    return new Error(`HTTP status code ${res.statusCode}`);
  }
  return null;
}

module.exports = {
  validateOperation,
  validatePOSTRequest,
  validateGETRequest,
};
