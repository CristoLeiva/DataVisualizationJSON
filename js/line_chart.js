google.load('visualization', '1', {packages: ['corechart', 'line']});
google.setOnLoadCallback(drawLineChart);

function drawLineChart() {
      var data = new google.visualization.DataTable();
       for(var i = 0; i < linedataobj.columndata.length; i++) {
            data.addColumn(linedataobj.columndata[i][0], linedataobj.columndata[i][1]);
        }
     
      data.addRows(linedataobj.data);

      var options = {
        title: linedataobj.title, 
        'width':900,
        'height':400,
        hAxis: {
          title: linedataobj.hTitle
        },
        vAxis: {
          title: linedataobj.vTitle
        },
        colors: ['#a52714', '#097138']
      };

      var chart = new google.visualization.LineChart(document.getElementById('linechart'));
      chart.draw(data, options);
}