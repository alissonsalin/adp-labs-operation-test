# ADP LABS OPERATION TEST

## INSTALLATION

Just clone de repository and run **npm install**

## DEFINITION

- All code are inside src folder. The structure is:
  - services: bussiness layer
  - config: some project configs like JSON schema
  - pages: html files
  - models: representation for some objects like *Operation*
  - errors: handlers to message errors
  - test: all unit tests and data generatos
  - .env: was used to parameterize values
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

There are two way to run the project:

1. **npm start**
2. **npm run scheduler**

The first one create a server on port 8080. Just open it in your browser: <http://localhost:8080>

The second one run a scheduler configured to run every 5 seconds. The result will be showed in the terminal.

## TEST

Just run **npm test**

## READ THE CODE

All begins on app.js or appScheduler.js. The main files to read in he follow order are:

1. /src/services/operationServices.js
2. /src/services/adpLabsAPIService.js
3. /src/services/operations/*.js
4. /src/services/*Manager.js
5. /src/errors/*.js
6. /src/pages/operation.html
7. /src/test/*.js

### THE RESULT JSON

```json
{
   "task":{
      "id":"150ad19f-8514-45da-9ad6-2e085f9abb05",
      "operation":"addition",
      "left":7739769200594633,
      "right":7380877936090333
   },
   "calculateResult":15120647136684966,
   "submitResult":"Correct"
}
```

- task: task operation
- calculateResult: result of the arithmetic operation
- submitResult: ADP Labs result calculate operation by id

## IMPROVEMENTS

- If there was more sequence calls to promise functinos its recomended use a reduce and call functionss sequentially
- Add more info to calculate error return
- Do more unit tests
  - increase code coverage
  - more test cenarios
- Improve visual style of html page
- Format the result
- Create actions to end user such as:
  - view history of operations tasks
  - show executions reports
  - test a custom request

## BUGS

### WORKER

All founded bugs are resolved till now

Still search for more...

Nobody is infallible:smiley:

BUG | DATE | STATUS
--------|--------|--------
N/A | N/A | N/A

### ADP LABS

BUG | DATE | STATUS
--------|--------|--------
<https://interview.adpeai.com/api/v1/get-task> <br/> was returning HTTP code 503 | 2021-05-21 | SOLVED
