const players = [
    {id: 1,name: "Ivan",scorePoints: 4500, },
    {id: 2,name: "Petr",scorePoints: 3600, }, 
    {id: 3,name: "Vadim",scorePoints: 3433,},  
    {id: 4,name: "Olga", scorePoints: 2356,},
  ]; 

  let Score = [];
  let maxResult = 0;
  let bestPlayer;
  
  for (let player of players) {
    Score.push(player.scorePoints);
  
    maxResult = Math.max(...Score);
    if (maxResult == player.scorePoints) {
      bestPlayer = player.name;
    }
  }

  console.log(`Winner is:  ${bestPlayer} 
  With total score:  ${maxResult}`);