const getTeamsByState = async () => {
  const res = await fetch('../countTeamsByState.php');
  const rows = await res.json();
  const data = {
    labels: rows.map(row => row.estado),
    series: [rows.map(row => row.quantidade)]
  }
  const options = {
    width: 1450,
    height: 700
  }
  
  new Chartist.Bar('.ct-chart', data, options);
}

getTeamsByState();