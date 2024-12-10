var options = {
  chart: {
    type: 'line',
    height: 400
  },
  series: [
    {
      name: 'AI Development',
      data: [
        { x: 1950, y: 0 },
        { x: 1970, y: 1 },
        { x: 1990, y: 2 },
        { x: 2000, y: 3 },
        { x: 2020, y: 4 },
        { x: 2030, y: 5 }
      ]
    }
  ],
  markers: {
    size: 5,
    colors: ['#00BFFF'],
    strokeColors: '#fff',
    strokeWidth: 2
  },
  annotations: {
    points: [
      {
        x: 1970,
        y: 1,
        marker: {
          size: 6,
          fillColor: '#00BFFF',
          strokeColor: '#fff',
          strokeWidth: 2
        },
        label: {
          text: '1970s\nAI Winter halts development of AI after early boom.',
          style: {
            background: '#333',
            color: '#fff'
          }
        }
      }
    ]
  },
  xaxis: {
    type: 'numeric',
    labels: {
      formatter: (val) => `${val}s`
    }
  },
  yaxis: {
    show: false
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
