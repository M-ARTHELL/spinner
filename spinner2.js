const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']
let timer = 100

for (let i = 0; timer < 1701; i++) {
  setTimeout(() => process.stdout.write(spinner[i]), timer)
  timer += 200;
  if (i === spinner.length) {
    i = 0;
  }
};