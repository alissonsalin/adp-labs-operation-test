# ADP LABS OPERATION TEST

## INSTALLATION

Just clone de repository and run **npm install**

## DEFINITION

- All code are inside src folder. The structure is:
  - services: bussiness layer
  - pages: html files
  - models: representation for some objects like *Operation*
  - errors: handlers to message errors
  - test: all unit tests and data generatos
  - .env: was used to parametrize values
- The project is using Airbnb style
- All files that are classes start with the first letter in upper case.
- All files thar contains functions starts with the first letter in lower case.
- Some teste has a functions to data generation such as:
  - AdditionOperationsTest
  - SubtractionOperationsTest
  - MultiplicationOperationsTest
  - DivisionOperationsTest
  - RemainderOperationsTest

## RUNNING

There are two way to run the test:

1. **npm start**
2. **npm run scheduler**

The first one create a server on port 8080. Just open it in your browser: http://localhost:8080

The second one run a scheduler configured to run every 5 seconds. The result will be showed in the terminal.

## IMPROVEMENTS

- If there was more sequence calls to promise functinos its recomended use a reduce and call functinos sequentially
- Do more unit tests
- Improve visual style of html page
- Create actions to end user such as:
  - view history of operations tasks
  - show executions reports
  - test a custom request

## BUGS

### WORKER 

Still search for bugs. Nobody is infallible:smiley:

BUG | DATE | STATUS
--------|--------|--------
N/A | N/A | N/A

### ADP LABS

BUG | DATE | STATUS
--------|--------|--------
https://interview.adpeai.com/api/v1/get-task <br/>was returning HTTP code 503 | 2021-05-21 | SOLVED

