    let sumPopulation=0
    let sumPercent=0
    let sumFertility=0
    let sumAge=0
    let Poland=null
countries.forEach(el => 
  { 
    const {id, name, population, grow, net_change, density, land_area_in_km, fertility_rate=null, medium_age, urban_population_in_percent, world_area_in_percent} = el;
    sumPopulation+=population;
    sumPercent+=world_area_in_percent;
    sumFertility+=fertility_rate;
    sumAge+=medium_age;
    console.log (name);
  })
  console.log (`Liczba ludności wszystkich państw wynosi ${sumPopulation}.`)
  const averagePopulation = sumPopulation/countries.length
  const averageFertility=sumFertility/countries.length
  const averageAge=sumAge/countries.length
  console.log (`Średnia liczba ludności wynosi ${averagePopulation.toFixed(2)}`)

    let growPositive=[]
    let growNegative=[]
countries.forEach(el => 
  { 
    const {id, name, population, grow, net_change, density, land_area_in_km, fertility_rate, medium_age, urban_population_in_percent, world_area_in_percent} = el;
    if (grow>=0) {growPositive.push(el)} else {growNegative.push(el)};
  })
console.log (`Jest ${growPositive.length} państw z dodatnim przyrostem naturalnym.`)
console.log (`Jest ${growNegative.length} państw z ujemnym przyrostem naturalnym.`)
console.log(`Suma zajmowanej powierzchni ziemi przez państwa wynosi ${sumPercent.toFixed(2)} procenta.`)
console.log(`Średnia dzietność na świecie wynosi ${averageFertility.toFixed(2)}.`)
console.log (`Średnia wieku na świecie wynosi ${averageAge.toFixed(2)}.`)
const poland = countries.find(el=>el.name==="Poland")
console.log (poland)
