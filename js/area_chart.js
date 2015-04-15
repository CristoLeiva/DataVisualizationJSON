    
google.setOnLoadCallback(drawAreaChart);
      function drawAreaChart() {
        var data = google.visualization.arrayToDataTable(areadataobj.data);

        var options = {
          title: areadataobj.title,
          'width':900,
          'height':400,
          hAxis: {title: areadataobj.hTitle,  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('areachart'));
        chart.draw(data, options);
      }