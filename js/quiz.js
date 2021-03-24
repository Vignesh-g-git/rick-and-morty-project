function fun(min, max) {
  const c = Math.floor(Math.random() * (max - min)) + min;
  return c;
}
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [];
while (a.length > 0) {
  const c = fun(1, a.length);
  b.push(a[c]);
  a.splice(c, 1);
}
console.log(b);
