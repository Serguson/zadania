let sumPeople=0
let bigCities=[]
let smallCities=[]
cities.forEach (el=> {
  const {name, township, province, area, people, dentensity,} = el;
  sumPeople+=people
}
const averagePeople = sumPeople/cities.length
const firstBigTown = cities.find (el=> el.people>10000)
cities.forEach (el=> {
  if (el.people>10000) {bigCities.push(el)} else {smallCities.push(el)}
})
console.log (`W Polsce jest ${cities.length} miast.`)
console.log (`Miasta te zamieszkuje ${sumPeople} osób.`)
console.log (`Pierwsze miasto w Polsce powyżej 10 000 mieszkańców:\n${firstBigTown}`)
bigCities.forEach (el=> {
  console.log (el.name)})
cities.forEach (el=> {
  if (el.people>averagePeople) {console.log (el.name)}
})
if (bigCities.length>smallCities.length) {console.log (`W Polsce więcej jest miast powyżej 10000 mieszkańców.`)} else {console.log(`W Polsce więcej jest miast poniżej 10000 mieszkańców.`)}

