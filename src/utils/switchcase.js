const executeIfFunction = f => (
  typeof f === 'function' ? f() : f
);

const switchcase = cases => defaultCase => key => (
  key in cases ? cases[key] : defaultCase
);

const switchcaseF = cases => defaultCase => key => (
  executeIfFunction(switchcase(cases)(defaultCase)(key))
);

export default switchcaseF;
