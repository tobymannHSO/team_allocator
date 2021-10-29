const { teamAdjectives, teamNouns } = require("../lib/team_names.js")

class Allocator {
    constructor(input) {
        this.rankedPlayers = this.rankPlayers(input);
        this.seededLists = this.splitPlayers();
        [this.topSeeds, this.unseeded] = [this.seededLists[0], this.seededLists[1]];
        this.teams = this.allocate();
        this.teams.forEach((team) => this.calculateTeamExp(team));
    }

    rankPlayers(players) {
        return players.sort((a, b) => b["hours"] - a["hours"]);
    }

    splitPlayers() {
        let players = this.rankedPlayers;
        let middle = Math.floor(players.length/2);
        if(this.oddNumberOfPlayers()){
            middle += 1;
        }

        return [players.slice(0, middle), players.slice(middle)];
    }

    allocate() {
        let teams = [this.createTeam()];
        let idx = 0;
        let [topSeeds, unseeded] = [this.topSeeds.slice(), this.unseeded.slice()];
        let currentListBool = true;

        if(this.oddNumberOfPlayers()){
            teams[0]["players"] = topSeeds.splice(0,1)
            idx += 1;
            teams[idx] = this.createTeam();
        }

        while(topSeeds.length > 0 || unseeded.length > 0){
            if(teams[idx]["players"].length == 2){
                idx += 1;
                teams[idx] = this.createTeam();
            }
            
            let currentList = currentListBool ? topSeeds : unseeded;
            if(currentList.length > 0){
                let randPlayer = currentList.splice(this.randomIndex(currentList), 1)[0];
                teams[idx]["players"].push(randPlayer);
            }
        
            currentListBool = !currentListBool;
        };

        return teams;
    }

    createTeam() {
        return { name: this.generateTeamName(), players: [] };
    }

    generateTeamName() {
        let idx1 = this.randomIndex(teamAdjectives);
        let idx2 = this.randomIndex(teamNouns);
        return `${teamAdjectives.splice(idx1, 1)} ${teamNouns.splice(idx2, 1)}`;
    }

    calculateTeamExp(team) {
        team["ttlExp"] = team["players"].reduce((sum, currPlayer) => sum + currPlayer["hours"], 0);
    }

    randomIndex(array) {
        return Math.floor(Math.random() * array.length - 1);
    }

    oddNumberOfPlayers() {
        return this.rankedPlayers.length % 2 !== 0;
    }
}

module.exports = Allocator;