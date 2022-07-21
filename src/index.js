function f1() {
  console.log('f1')
}
const f2 = val => [console.log(val)]

const a = 100

for (let i = 0; i < 10; i++) {
  console.log(i)
}

f1()
f2()
console.log(a)
