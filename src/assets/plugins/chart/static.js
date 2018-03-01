const chartData1 = [];
const chartData2 = [];
const chartData3 = [];
const chartData4 = [];
const chartData5 = [];

chartObj = {
  "type": "stock",
  "theme": "light",
  "dataSets": [ {
      "title": "first data set",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData1,
      "categoryField": "date"
    }, {
      "title": "second data set",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData2,
      "categoryField": "date"
    }, {
      "title": "third data set",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData3,
      "categoryField": "date"
    }, {
      "title": "fourth data set",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData4,
      "categoryField": "date"
    },
    {
      "title": "fifth data set",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData5,
      "categoryField": "date"
    }
  ],

  "panels": [ {
    "showCategoryAxis": false,
    "title": "Value",
    "percentHeight": 70,
    "stockGraphs": [ {
      "id": "g1",
      "valueField": "value",
      "comparable": true,
      "compareField": "value",
      "balloonText": "[[title]]:<b>[[value]]</b>",
      "compareGraphBalloonText": "[[title]]:<b>[[value]]</b>"
    } ],
    "stockLegend": {
      "periodValueTextComparing": "[[percents.value.close]]%",
      "periodValueTextRegular": "[[value.close]]"
    }
  }, {
    "title": "Volume",
    "percentHeight": 30,
    "stockGraphs": [ {
      "valueField": "volume",
      "type": "column",
      "showBalloon": false,
      "fillAlphas": 1
    } ],
    "stockLegend": {
      "periodValueTextRegular": "[[value.close]]"
    }
  } ],

  "chartCursorSettings": {
    "valueBalloonsEnabled": true,
    "fullWidth": true,
    "cursorAlpha": 0.1,
    "valueLineBalloonEnabled": true,
    "valueLineEnabled": true,
    "valueLineAlpha": 0.5
  },

  "periodSelector": {
    "position": "left",
    "periods": [ {
      "period": "MM",
      "selected": true,
      "count": 1,
      "label": "1 month"
    }, {
      "period": "YYYY",
      "count": 1,
      "label": "1 year"
    }, {
      "period": "YTD",
      "label": "YTD"
    }, {
      "period": "MAX",
      "label": "MAX"
    } ]
  },

  "dataSetSelector": {
    "position": "left"
  },

  "export": {
    "enabled": true
  }
};

function generateChartData(firstDate) {
  console.log(firstDate);

  var a1 = 1500;
  var b1 = 1500;
  var a2 = 1700;
  var b2  = 1700;
  var a3 = 1600;
  var b3 = 1600;
  var a4 = 1400;
  var b4 = 1400;
  var a5 = 1200;
  var b5 = 1200;

  for ( var i = 0; i < 500; i++ ) {
    var newDate = new Date( firstDate );
    newDate.setDate( newDate.getDate() + i );

    a1 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b1 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a2 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b2 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a3 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b3 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a4 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b4 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a5 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b5 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    chartData1.push( {
      "date": newDate,
      "value": a1,
      "volume": b1 + 1500
    } );
    chartData2.push( {
      "date": newDate,
      "value": a2,
      "volume": b2 + 1500
    } );
    chartData3.push( {
      "date": newDate,
      "value": a3,
      "volume": b3 + 1500
    } );
    chartData4.push( {
      "date": newDate,
      "value": a4,
      "volume": b4 + 1500
    } );

    chartData5.push( {
      "date": newDate,
      "value": a5,
      "volume": b5 + 1500
    } );

  }
}

function addDataPoint() {
    var dataProvider = chartData1;
    console.log(dataProvider);
    
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



var chart = AmCharts.makeChart( "chartdiv", chartObj);

$(document).ready(function(){
    
    var firstDate = new Date();
    firstDate.setDate( firstDate.getDate() - 500 );
    firstDate.setHours( 0, 0, 0, 0 );

    generateChartData(firstDate);
    AmCharts.makeChart( "chartdiv", chartObj);

    setTimeout(function(){
      removePanel();
      addPanel();
    },100);
    
    setInterval(function() {
        // add data point
        addDataPoint();
      
        // update indictors
        //chart.panels[0].valueAxes[0].guides[0].value = Math.round(Math.random() * 500) + 1000;
       // chart.panels[0].valueAxes[0].guides[1].value = chart.panels[0].valueAxes[0].guides[0].value + Math.round(Math.random() * 400) + 200;
      
        chart.validateData();
      }, 2000);

    $('#chartdiv').mousewheel(function(evt){
       
        if(parseInt(evt.deltaY) < 0 ){
            firstDate.setDate( firstDate.getDate() - 7 );
            generateChartData(firstDate);
            AmCharts.makeChart( "chartdiv", chartObj);
        }else{
            firstDate.setDate( firstDate.getDate() + 7 );
            generateChartData(firstDate);
            AmCharts.makeChart( "chartdiv", chartObj);

        }
              
    });
});

function addPanel() {
  var chart = AmCharts.charts[ 0 ];
  if ( chart.panels.length == 1 ) {
    var newPanel = new AmCharts.StockPanel();
    newPanel.allowTurningOff = true;
    newPanel.title = "Volume";
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