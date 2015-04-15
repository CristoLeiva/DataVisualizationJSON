google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawColumnChart);

function drawColumnChart() {
      var data = google.visualization.arrayToDataTable(columndataobj.data);

      var options = {
        title: columndataobj.title,
        'width':900,
        'height':400,
        chartArea: {width: '50%'},
        hAxis: {
          title: columndataobj.hTitle,
          minValue: 0
        },
        vAxis: {
          title: columndataobj.vTitle,
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
      chart.draw(data, options);
    }