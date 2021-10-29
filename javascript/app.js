const Allocator = require("./allocator")
const { players } = require("../lib/players")

const teams = new Allocator(players).teams;

teams.forEach((team) => {
    console.log("\n", team["name"])
    team["players"].forEach((player) => console.log("\t", player))
    console.log(team["\t", "ttlExp"])
})