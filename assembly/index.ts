// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function testArray(data: i32[]): i32[] {
  let a: i32[] = [];
  const dataLength = data.length;
  for (let i = 0; i < dataLength; i++) {
    a.push(data[i] + 1);
  }
  return a;
}
