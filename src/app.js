//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  var managerArray =[managerName,managerAge,currentTeam,trophiesWon]
  return managerArray;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){

  if(formation.length==0){
    return null;
  }
  var object ={
    defender:formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return object;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
   return(players.filter(player => player.debut == year));
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  return(players.filter(player => player.position == position));
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let arr = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        arr.push(players[i]);
      }
    }
  }
  return arr;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let arr = [];
  let count = 0,
    m = 0;
  let j;
  for (let i = 0; i < players.length; i++) {
    for (j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        count++;
      }
    }
    if (count == noOfTimes) {
      arr.push(players[i]);
    }
    count = 0;
  }
  return arr;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  return(awardsData.filter(player => player.country == country));
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return(players.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards)));
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      if (players[i].age < players[j].age) {
        let temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  let count = 0;
  let filteredPlayers = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      filteredPlayers[count++] = players[i];
    }
  }
  for (let i = 0; i < filteredPlayers.length; i++) {
    for (let j = i + 1; j < filteredPlayers.length; j++) {
      if (filteredPlayers[i].awards.length < filteredPlayers[j].awards.length) {
        let temp = filteredPlayers[i];
        filteredPlayers[i] = filteredPlayers[j];
        filteredPlayers[j] = temp;
      }
    }
  }
  return filteredPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function compare(player1, player2) {
  let value = 0;
  if (player1.name > player2.name) {
    value = 1;
  } else if (player1.name < player2.name) {
    value = -1;
  } else {
    value = 0;
  }
}

function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var dataOne = filterByAwardxTimes(awardName, noOfTimes);
  var dataTwo = dataOne.filter((player) => player.country == country);
  return dataTwo.sort(compare);
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  return(players.filter((player) => player.age > age));
}