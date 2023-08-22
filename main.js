let input = 5

for (let i = input; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    process.stdout.write(j.toString() + " ")
  }
  console.log("")
}