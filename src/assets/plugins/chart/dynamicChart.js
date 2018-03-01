var chartData = generateChartData();

function generateChartData() {
  var chartData = [];
  var firstDate = new Date(2012, 0, 1);
  firstDate.setDate(firstDate.getDate() - 1000);
  firstDate.setHours(0, 0, 0, 0);

  for (var i = 0; i < 1000; i++) {
    var newDate = new Date(firstDate);
    newDate.setHours(0, i, 0, 0);

    var a = Math.round(Math.random() * (40 + i)) + 100 + i;
    var b = Math.round(Math.random() * 100000000);

    chartData.push({
      date: newDate,
      value: a,
      volume: b
    });
  }
  return chartData;
}

function addDataPoint() {
  var dataProvider = chart.dataSets[0].dataProvider;
  var newDate = new Date(dataProvider[dataProvider.length - 1].date.getTime());
  newDate.setHours(newDate.getHours(), newDate.getMinutes() + 1, newDate.getSeconds());
  var a = Math.round(Math.random() * (40 + 1000)) + 100 + 1000;
  var b = Math.round(Math.random() * 100000000);
  dataProvider.push({
    date: newDate,
    value: a,
    volume: b
  });
  dataProvider.shift();
}

function setThresholds() {

}

var chart = AmCharts.makeChart("chartdiv", {

  type: "stock",
  "theme": "none",
  pathToImages: "https://www.amcharts.com/lib/3/images/",
  glueToTheEnd: true,

  categoryAxesSettings: {
    minPeriod: "mm"
  },

  dataSets: [{
    color: "#b0de09",
    fieldMappings: [{
      fromField: "value",
      toField: "value"
    }, {
      fromField: "volume",
      toField: "volume"
    }],

    dataProvider: chartData,
    categoryField: "date"
  }],

  panels: [{
      showCategoryAxis: false,
      title: "Value",
      percentHeight: 70,

      stockGraphs: [{
        id: "g1",
        valueField: "value",
        type: "smoothedLine",
        lineThickness: 2,
        bullet: "round"
      }],

      stockLegend: {
        valueTextRegular: " ",
        markerType: "none"
      },

      valueAxes: [{
        guides: [{
          value: 1100,
          label: "BUY",
          position: "right",
          dashLength: 5
        }, {
          value: 1550,
          label: "SELL",
          position: "right",
          dashLength: 5
        }]
      }]
    },

    {
      title: "Volume",
      percentHeight: 30,
      stockGraphs: [{
        valueField: "volume",
        type: "column",
        cornerRadiusTop: 2,
        fillAlphas: 1
      }],

      stockLegend: {
        valueTextRegular: " ",
        markerType: "none"
      }
    }
  ],

  chartScrollbarSettings: {
    graph: "g1",
    usePeriod: "10mm",
    position: "top"
  },

  chartCursorSettings: {
    valueBalloonsEnabled: true
  },

  periodSelector: {
    position: "top",
    dateFormat: "YYYY-MM-DD JJ:NN",
    inputFieldWidth: 150,
    periods: [{
      period: "hh",
      count: 1,
      label: "1 hour",
      selected: true

    }, {
      period: "hh",
      count: 2,
      label: "2 hours"
    }, {
      period: "hh",
      count: 5,
      label: "5 hour"
    }, {
      period: "hh",
      count: 12,
      label: "12 hours"
    }, {
      period: "MAX",
      label: "MAX"
    }]
  },

  panelsSettings: {
    usePrefixes: true
  }
});
setTimeout(function(){
  removePanel();
  addPanel();
},100);
setInterval(function() {
  // add data point
  addDataPoint();

  // update indictors
  chart.panels[0].valueAxes[0].guides[0].value = Math.round(Math.random() * 500) + 1000;
  chart.panels[0].valueAxes[0].guides[1].value = chart.panels[0].valueAxes[0].guides[0].value + Math.round(Math.random() * 400) + 200;

  chart.validateData();
}, 2000);


function addPanel() {
  var chart = AmCharts.charts[ 0 ];
  if ( chart.panels.length == 1 ) {
    var newPanel = new AmCharts.StockPanel();
    newPanel.allowTurningOff = true;
    newPanel.title = "Flowrate";
    newPanel.showCategoryAxis = false;

    var graph = new AmCharts.StockGraph();
    graph.valueField = "volume";
    graph.fillAlphas = 0.15;
    newPanel.addStockGraph( graph );

    var legend = new AmCharts.StockLegend();
    legend.markerType = "none";
    legend.markerSize = 0;
    newPanel.stockLegend = legend;

    chart.addPanelAt( newPanel, 1 );
    chart.validateNow();
  }
}

function removePanel() {
  var chart = AmCharts.charts[ 0 ];
  if ( chart.panels.length > 1 ) {
    chart.removePanel( chart.panels[ 1 ] );
    chart.validateNow();
  }
}

$('#chartdiv').mousewheel(function(evt){
  
   if(parseInt(evt.deltaY) < 0 ){
       
       AmCharts.makeChart( "chartdiv", chartObj);
   }else{
       
       AmCharts.makeChart( "chartdiv", chartObj);

   }
         
});