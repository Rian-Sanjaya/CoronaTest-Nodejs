const fs = require('fs')

module.exports = file => {
  // fs.readFile('./input/input10.txt', (err, data) => {
  //   if (err) throw err

  //   console.log(data.toString().split('\n'))
  // })

  const fileContent = fs.readFileSync(file).toString().split("\n")

  return fileContent
}