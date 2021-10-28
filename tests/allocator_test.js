const Allocator = require("../javascript/allocator"),
      runTest = require("./run_test");

const players = [
    { name: "Pol", hours: 488 },
    { name: "Matt", hours: 456 },
    { name: "Toby", hours: 130 },
    { name: "Lo0n3y", hours: 1795 },
    { name: "Wati", hours: 698 }
]
testAllocation = new Allocator(players)
const rankedPlayers = testAllocation.rankedPlayers

runTest("1 Check highest exp player is first", () => {
    let firstPlayer = rankedPlayers[0]["name"]
    if(firstPlayer !== "Lo0n3y"){
        throw new Error(`${firstPlayer} is first not Lo0n3y`) 
    }
})

runTest("2 Check lowest exp player is last", () => {
    let lastPlayer = rankedPlayers[rankedPlayers.length-1]["name"]
    if(lastPlayer !== "Toby"){
        throw new Error(`${lastPlayer} is last not Toby`)
    }
})

runTest("3 Splitlist exists", () => {
    if(!testAllocation.seededLists){
        throw new Error("doesn't exist")
    }
})

let topSeeds = testAllocation.topSeeds
let unseeded = testAllocation.unseeded

runTest("4 Lists contain all players", () => {
    testAllocation.rankedPlayers.forEach((player) => {
        if(!topSeeds.includes(player) && !unseeded.includes(player)){
            throw new Error(`${player["name"]} not included in either list`)
        }
    })
})

runTest("5 No player on both lists", () => {
    players.forEach((player) => {
        if(topSeeds.includes(player) && unseeded.includes(player)){
            throw new Error(`${player["name"]} is included in both lists`)
        }
    })
})

runTest("6 Lists split by experience", () => {
    let topPlayer = rankedPlayers[0]
    let bottomPlayer = rankedPlayers[rankedPlayers.length-1]
    if(topSeeds.includes(bottomPlayer)){
        throw new Error("Bottom player in seeded list")
    }
    if(unseeded.includes(topPlayer)){
        throw new Error("Top player in unseeded list")
    }
})

let teams = testAllocation.teams

runTest("7 Correct number of teams exist", () => {
    if(teams.length%2 === 0){
        if(teams.length !== players.length/2){
            throw new Error(`There are ${teams.length} teams for ${players.length} players`)
        }
    } else {
        if(teams.length !== Math.floor(players.length/2) + 1){
            throw new Error(`There are ${teams.length} teams for ${players.length} players`)
        }
    }
    
})

runTest("8 Each player is on a team", () => {
    playersAndTeams: 
        for(let player in players){
            for(let team in teams){
                if(team.includes(player)){
                    break playersAndTeams;
            }
        }
        throw new Error(`${player["name"]} is not on a team.`)
    }
})

runTest("9 Players from the same seeding list aren't on the same team", () => {
    teams.forEach((team) => {
        let player1 = team[0];
        let player2 = team[2];
        if(
            topSeeds.includes(player1) && topSeeds.includes(player2)
            ||
            unseeded.includes(player1) && unseeded.includes(player2)
        ){
            throw new Error(`${player1} and ${player2} are from the same seeding list`)
        }
    })
})