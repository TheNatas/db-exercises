const getTeamsByState = async () => {
  const res = await fetch('../countTeamsByState.php');
  const rows = await res.json();
  const data = {
    labels: rows.map(row => row.estado),
    series: rows.map(row => row.quantidade)
  }
  const options = {
    labelInterpolationFnc: function(value) {
      return value[0]
    }
  };
  
  const responsiveOptions = [
    ['screen and (min-width: 640px)', {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc: function(value) {
        return value;
      }
    }],
    ['screen and (min-width: 1024px)', {
      labelOffset: 80,
      chartPadding: 20
    }]
  ];
  
  new Chartist.Pie('.ct-chart', data, options, responsiveOptions);
}

getTeamsByState();