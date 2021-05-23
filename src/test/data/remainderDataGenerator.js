function createSuccessTestData() {
  const data = [];

  const test1 = {
    testDescription: 'returning 0 when remain 2 % 1', left: 2, right: 1, result: 0,
  };
  const test2 = {
    testDescription: 'returning 1 when remain 1 % 2', left: 1, right: 2, result: 1,
  };
  const test3 = {
    testDescription: 'returning 0 when remain 2 % 2', left: 2, right: 2, result: 0,
  };
  const test4 = {
    testDescription: 'returning 0 when remain 2 % -1', left: 2, right: -1, result: 0,
  };
  const test5 = {
    testDescription: 'returning 0 when remain -2 % 1', left: -2, right: 1, result: 0,
  };
  const test6 = {
    testDescription: 'returning 0 when remain -2 % -1', left: -2, right: -1, result: 0,
  };

  data.push(test1);
  data.push(test2);
  data.push(test3);
  data.push(test4);
  data.push(test5);
  data.push(test6);

  return data;
}

function createThrowingTestData() {
  const data = [];

  const test1 = {
    testDescription: 'throwing when left operator is a string', left: '', right: 1, result: Error,
  };
  const test2 = {
    testDescription: 'throwing when right operator is a string', left: 1, right: '', result: Error,
  };
  const test3 = {
    testDescription: 'throwing when both operators are a string', left: '', right: '', result: Error,
  };
  const test4 = {
    testDescription: 'throwing when left operator is null', left: null, right: -1, result: Error,
  };
  const test5 = {
    testDescription: 'throwing when right operator is null', left: -2, right: null, result: Error,
  };
  const test6 = {
    testDescription: 'throwing when both operators are null', left: null, right: null, result: Error,
  };

  data.push(test1);
  data.push(test2);
  data.push(test3);
  data.push(test4);
  data.push(test5);
  data.push(test6);

  return data;
}

module.exports = {
  createSuccessTestData,
  createThrowingTestData,
};
