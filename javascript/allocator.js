class Allocator {
    constructor(input) {
        this.rankedPlayers = this.rankPlayers(input);
        this.seededLists = this.splitPlayers();
        this.topSeeds = this.seededLists[0]
        this.unseeded = this.seededLists[1]
        this.teams = this.allocate();
    }

    rankPlayers(players) {
        return players.sort((a, b) => b["hours"] - a["hours"]);
    }

    splitPlayers() {
        let players = this.rankedPlayers;
        let middle = Math.floor(players.length/2);

        return [players.slice(0, middle), players.slice(middle)];
    }

    allocate() {
        let teams = [[]];
        let idx = 0;
        let [topSeeds, unseeded] = [this.topSeeds.slice(), this.unseeded.slice()];
        let currentListBool = true;

        while(topSeeds.length > 0 || unseeded.length > 0){
            if(teams[idx].length == 2){
                idx += 1;
                teams[idx] = [];
            }
            
            let currentList = currentListBool ? topSeeds : unseeded;
            if(currentList.length > 0){
                let randPlayer = currentList.splice(this.randomIndex(currentList), 1)[0];
                teams[idx].push(randPlayer);
            }
        
            currentListBool = !currentListBool;
        };

        return teams;
    }

    randomIndex(array) {
        return Math.floor(Math.random() * array.length - 1);
    }
}

module.exports = Allocator