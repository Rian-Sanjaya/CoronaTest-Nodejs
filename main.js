const fs = require('fs')
const readFile = require('./readFile')
const matchVirus = require('./matchVirus')

// 1. READ CONTENT OF A FOLDER

const filenames = fs.readdirSync('./input')

let contents = []

// 2. READ CONTENT OF A FILE

filenames.forEach( filename => {
  contents.push(readFile(`./input/${filename}`))
})


// 3. PROCESS EACH CONTENT

let times = 0
let content = []

for (let i=0; i<contents.length; i++) {
  times = contents[i][0]
  content = [...contents[i]]

  // CHECK DIRECTORY EXIST
  if (!fs.existsSync('./output')){
    fs.mkdirSync('./output');
  }

  // CHECK IF FILE EXIST, THEN DELETE ITS CONTENT
  fs.access(`./output/${filenames[i]}`, fs.F_OK, (err) => {
    if (err) {
      if (!err.message.includes("no such file or directory"))
        throw err

    } else {
      fs.writeFile(`./output/${filenames[i]}`, '', err => {
        if (err) throw err
      })
    }
  })


  // 4. READ EACH DNA

  for (let j=1; j<=times; j++) {
    const foundIndexes = matchVirus(content[j])

    // 5. WRITE TO FILE
    
    fs.appendFile(`./output/${filenames[i]}`, foundIndexes.join(' ') + '\n', (err) => {
      if (err) throw err
    })
  }
}
