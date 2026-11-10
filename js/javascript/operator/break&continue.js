let data = 0;

let secondData = 0;

// BREAK
while (true) {
  data++;
  console.log(data);

  if (data === 5) {
    break;
  }
}

// CONTINUE
for (let i = 0; i < 10; i++) {
  secondData++;
  console.log(secondData);

  if (secondData === 5) {
    continue;
  }
}
