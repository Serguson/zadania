    let sumPopulation=0
    let sumPercent=0
countries.forEach(el => 
  { 
    const {id, name, population, grow, net_change, density, land_area_in_km, fertility_rate, medium_age, urban_population_in_percent, world_area_in_percent} = el;
    sumPopulation+=population;
    sumPercent+=world_area_in_percent;
    console.log (name);
  })
  console.log (`Liczba ludności wszystkich państw wynosi ${sumPopulation}.`)
  const averagePopulation = sum/countries.length
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
console.log(`Suma zajmowanej powierzchni ziemi przez państwa wynosi ${sumPercent}.`)

