function trim(string) {
  console.log(string)
  if(string.includes(",")){
    string = string.slice(0, string.indexOf(","))
  }
  if(string.includes("-")){
    string = string.slice(string.indexOf("-")+1)
  }
  while(string.includes(" ")){
    string = string.slice(string.indexOf(" ")+1)
  }
  return string
}

function pluralize(string) {
    if(string[string.length - 1] === "s"){
        return `${string}es`;
    } else {
        return `${string}s`
    }
}

const data = [{
    "animals": "Eurasian beaver",
    "colour": "Puce",
    "material": "Vinyl",
    "language": "Telugu",
    "buzzword": "intermediate"
  }, {
    "animals": "Short-beaked echidna",
    "colour": "Blue",
    "material": "Plexiglass",
    "language": "Georgian",
    "buzzword": "Face to face"
  }, {
    "animals": "Hoffman's sloth",
    "colour": "Aquamarine",
    "material": "Aluminum",
    "language": "Japanese",
    "buzzword": "throughput"
  }, {
    "animals": "Eagle, crowned",
    "colour": "Maroon",
    "material": "Granite",
    "language": "Kurdish",
    "buzzword": "contingency"
  }, {
    "animals": "Small Indian mongoose",
    "colour": "Teal",
    "material": "Aluminum",
    "language": "Bengali",
    "buzzword": "zero administration"
  }, {
    "animals": "Western grey kangaroo",
    "colour": "Green",
    "material": "Granite",
    "language": "Croatian",
    "buzzword": "success"
  }, {
    "animals": "Australian magpie",
    "colour": "Aquamarine",
    "material": "Steel",
    "language": "Belarusian",
    "buzzword": "Versatile"
  }, {
    "animals": "Siskin, pine",
    "colour": "Goldenrod",
    "material": "Brass",
    "language": "Filipino",
    "buzzword": "database"
  }, {
    "animals": "White-faced tree rat",
    "colour": "Fuscia",
    "material": "Aluminum",
    "language": "Marathi",
    "buzzword": "Expanded"
  }, {
    "animals": "White-nosed coatimundi",
    "colour": "Blue",
    "material": "Granite",
    "language": "Albanian",
    "buzzword": "collaboration"
  }, {
    "animals": "Azara's zorro",
    "colour": "Pink",
    "material": "Stone",
    "language": "Marathi",
    "buzzword": "database"
  }, {
    "animals": "Bottle-nose dolphin",
    "colour": "Mauv",
    "material": "Stone",
    "language": "Gagauz",
    "buzzword": "hardware"
  }, {
    "animals": "Barasingha deer",
    "colour": "Aquamarine",
    "material": "Stone",
    "language": "Gujarati",
    "buzzword": "leading edge"
  }, {
    "animals": "Worm Snake",
    "colour": "Yellow",
    "material": "Wood",
    "language": "Montenegrin",
    "buzzword": "client-driven"
  }, {
    "animals": "Macaw, blue and yellow",
    "colour": "Blue",
    "material": "Vinyl",
    "language": "Japanese",
    "buzzword": "De-engineered"
  }, {
    "animals": "African ground Squirrel",
    "colour": "Teal",
    "material": "Granite",
    "language": "Greek",
    "buzzword": "Vision-oriented"
  }, {
    "animals": "Arctic tern",
    "colour": "Purple",
    "material": "Wood",
    "language": "Moldovan",
    "buzzword": "analyzer"
  }, {
    "animals": "Openbill, asian",
    "colour": "Blue",
    "material": "Steel",
    "language": "Kurdish",
    "buzzword": "dynamic"
  }, {
    "animals": "Two-toed tree sloth",
    "colour": "Yellow",
    "material": "Vinyl",
    "language": "Swati",
    "buzzword": "tangible"
  }, {
    "animals": "Goose, greylag",
    "colour": "Green",
    "material": "Steel",
    "language": "Norwegian",
    "buzzword": "open system"
  }, {
    "animals": "Brazilian otter",
    "colour": "Turquoise",
    "material": "Rubber",
    "language": "Danish",
    "buzzword": "leverage"
  }, {
    "animals": "Ferret, black-footed",
    "colour": "Puce",
    "material": "Granite",
    "language": "Spanish",
    "buzzword": "emulation"
  }, {
    "animals": "Bird, black-throated butcher",
    "colour": "Blue",
    "material": "Granite",
    "language": "Burmese",
    "buzzword": "optimal"
  }, {
    "animals": "Tuis",
    "colour": "Crimson",
    "material": "Brass",
    "language": "Tok Pisin",
    "buzzword": "pricing structure"
  }, {
    "animals": "Indian porcupine",
    "colour": "Teal",
    "material": "Plexiglass",
    "language": "Bengali",
    "buzzword": "static"
  }]
  
const teamAdjectives = [
    ...data.map((item) => item["buzzword"]),
    ...data.map((item) => item["colour"]),
    ...data.map((item) => item["language"]),
    ...data.map((item) => item["material"]),
]

const teamNouns = [
    ...data.map((item) => pluralize(trim(item["animals"])))
]

module.exports = { teamAdjectives, teamNouns }