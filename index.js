// add solution here
function theBeatlesPlay(musicians, instruments){
  let phrase = []
  for (let i = 0; i < musicians.length; i++){
    let str = `${musicians[i]} plays ${instruments[i]}`
    phrase.push(str)
  }
  return phrase
}

function johnLennonFacts(facts){
  let boldPhrase = []
  let i = 0
  while(i < facts.length){
    let str = `${facts[i]}!!!`
    boldPhrase.push(str)
    i++
  }
  return boldPhrase
}


function iLoveTheBeatles(num){
  let chant = []
  let i = 0
  do{
    i++
    let str = "I love the Beatles!"
    chant.push(str)

  } while (i < 15)
  return chant
}
