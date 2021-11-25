// DATA

let teamsWithNumOfMatches = [];

const fillTeamsWithNumOfMatches = async () => {
  const res = await fetch('../countMatchesByTeam.php');
  const rows = await res.json();
  teamsWithNumOfMatches = rows;
};

fillTeamsWithNumOfMatches()
  .then(end => {
    const data = {
      labels: teamsWithNumOfMatches.map(row => row.time),
      series: [teamsWithNumOfMatches.map(row => +row.partidas)]
    };
    
    const options = {
      width: 1450,
      height: 700
    }
    
    new Chartist.Bar('.ct-chart', data, options);
  });
