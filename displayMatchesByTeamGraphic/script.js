// DATA

const fillTeamsWithNumOfMatches = async () => {
  const res = await fetch('../countMatchesByTeam.php');
  const rows = await res.json();
  const data = {
    labels: rows.map(row => row.time),
    series: [rows.map(row => +row.partidas)]
  };
  
  const options = {
    // width: 1000,
    // height: 700
  }
  
  new Chartist.Bar('.ct-chart', data, options);
};

fillTeamsWithNumOfMatches();
