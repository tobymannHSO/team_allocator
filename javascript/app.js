const Allocator = require("./allocator")
const { players } = require("../lib/players")

const teams = new Allocator(players).teams;

teams.forEach((team) => {
    console.log(team["name"])
    console.log("\t", team["players"])
})