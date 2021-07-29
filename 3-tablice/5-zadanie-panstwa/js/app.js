countries.forEach(el => 
  { 
    let sum=0
    const {id, name, population, grow, net_change, density, land_area_in_km, fertility_rate, medium_age, urban_population_in_percent, world_area_in_percent} = el;
    sum+=population;
    console.log (name);
  })
  console.log (sum)
