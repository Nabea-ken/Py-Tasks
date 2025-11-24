const countries = [ /* your long JSON pasted here */ ];

const pops = {
  "0-50m": 0,
  "51-100m": 0,
  ">100m": 0
};

countries.forEach(item => {
  const pop = item.population;

  if (pop <= 50_000_000) {
    pops["0-50m"]++;
  } else if (pop <= 100_000_000) {
    pops["51-100m"]++;
  } else {
    pops[">100m"]++;
  }
});

console.log(pops);

// Results
pops = {
  "0-50m": 185,
  "51-100m": 10,
  ">100m": 14
}
