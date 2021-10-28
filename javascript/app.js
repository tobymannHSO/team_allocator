const Allocator = require("./allocator");

players = [
    { name: "Toby", hours: 127 },
    { name: "Pol", hours: 488 },
    { name: "Matt", hours: 456 },
    { name: "Lo0n3y", hours: 1941 },
    { name: "Wati", hours: 698 },
    { name: "GoDHuch", hours: 280 },
    { name: "Zeusz", hours: 345 },
    { name: "Nori", hours: 120 }
];

const teams = new Allocator(players).teams;

teams.forEach((team) => {
    console.log(team["name"])
    console.log("\t", team["players"])
})