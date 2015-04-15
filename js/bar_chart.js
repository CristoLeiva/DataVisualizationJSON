google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBarChart);

function drawBarChart() {
      var data = google.visualization.arrayToDataTable(bardataobj.data);

      var options = {
        title: bardataobj.title,
        'width':900,
        'height':400,

        chartArea: {width: '50%'},
        hAxis: {
          title: bardataobj.hTitle,
          minValue: 0
        },
        vAxis: {
          title: bardataobj.vTitle,
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('barchart'));
      chart.draw(data, options);
    }