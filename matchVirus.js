module.exports = str => {
  const dnas = str.split(' ')
  const pDna = dnas[0]
  const vDna = dnas[1]

  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  const pLen = pDna.length
  const vLen = vDna.length
  let comb = []

  comb.push(vDna)

  for (let i=0; i<vLen; i++) {
    for (let j=0; j<letters.length; j++) {
      if (letters[j] !== vDna[i]) {
        if (i === 0)
          comb.push(`${letters[j]}${vDna.slice(i+1)}`)
        else if (i === vLen - 1)
          comb.push(`${vDna.slice(0, vLen-1)}${letters[j]}`)
        else
          comb.push(`${vDna.slice(0, i)}${letters[j]}${vDna.slice(i+1)}`)
      }
    }
  }

  let foundIndexes = []
  let foundIdx = null

  for (let i=0; i<=pLen-vLen; i++) {
    foundIdx = null
    const pDnaSub = pDna.substr(i, vLen)

    for (let j=0; j<comb.length; j++) {
      if (pDnaSub === comb[j]) {
        foundIdx = i
        break
      }
    }

    if (foundIdx !== null)
      foundIndexes.push(foundIdx)
  }
  
  if (foundIndexes.length === 0) foundIndexes.push('No Match!')
  
  return foundIndexes
}