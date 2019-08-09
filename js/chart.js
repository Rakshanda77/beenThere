var Temperature = {
  x: ["Vancouver","Alberta","Calgary","Toronto"],
  y: [17, 15, 19, 23],
  mode: 'lines',
  line: {
    color: 'rgb(55, 128, 191)',
    width: 3
  }
};

var Humidity = {
  x: ["Vancouver","Alberta","Calgary","Toronto"],
  y: [15, 17, 23, 19],
  mode: 'lines+markers',
  marker: {
    color: 'rgb(128, 0, 128)',
    size: 8
  },
  line: {
    color: 'rgb(128, 0, 128)',
    width: 4
  }
};

var data = [Temperature,Humidity];
var layout = {
  title: 'Temperature of different cities'
};
Plotly.newPlot('myDiv', data, layout);
