const Ajv = require('ajv');
const errorManager = require('./ErrorManager');

require('dotenv').config();


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

function validateSchemaOperation(operation) {
  const validate = ajv.compile(schema);
  validate(operation);
  return validate.errors;
}

function validateOperation(operation) {
  const validationOperationResult = validateSchemaOperation(operation);
  if (validationOperationResult != null && validationOperationResult.length > 0) {
    const error = errorManager.error(parseInt(process.env.STATUS_CODE_VALIDATION_ERROR, 10));
    error.message = error.message.concat(' ')
    + validationOperationResult[0].dataPath.concat(' ')
    + validationOperationResult[0].message.concat(' ');
    throw error;
  }
  return null;
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
    const errorMessage = errorManager.error(res.statusCode);
    return errorMessage;
  }
  return null;
}

/**
 * If the status code is lower than 220 (SUCCESS) or greater then 299 (Last code Unassigned)
 * then return an error
 * @param {Response} the response result
 * @return {Error} common errors - 400, 404, 503 
 */
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
