var hi = {
  a:'pple',
  b:'ook',
  c:'amera',
  d:'eric'
}

function out(a) {
  const { b, c } = a;
  return `Hi there, B: b${b} and C: c${c}`;
}

console.log(out(hi));
