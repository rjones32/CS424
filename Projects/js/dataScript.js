/**
 * Created by Ryan Jones on 9/13/2015.
 */
var usaAgeRange;
var usaData;
var mapLoc1,mapLoc2,mapLoc3;
var graphData;
var AgeRange = false;
var stateData = [];
var locBox1,locBox2,locBox3;
var bGraph;
var pGraph;
var highLight = false;

mapLoc1  = "United States";
mapLoc2 = mapLoc1;
mapLoc3 = mapLoc1;

locBox1 ="locBox1";
locBox2 = "locBox2";
locBox3 = "locBox3";





d3.csv('Data/StateData_Headers.csv',function(error,data){
    if(error) {
        //if error is not null then something went wrong
        console.log(error);
    }
    else{
        //if error is null than fille loaded as expected
        console.log(data);
    }

    data.forEach(function(d) {
        d.POP = parseInt(d.POP);
        //d.AGE = +d.AGE;
    });

    //load data to global variable usaData
    usaData = data;

    graphOnCreate();

});
d3.csv('Data/ageRanges.csv',function(error,data){
    if(error) {
        //if error is not null then something went wrong
        console.log(error);
    }
    else{
        //if error is null than fille loaded as expected
        console.log(data);
    }

    data.forEach(function(d) {
        d.POP = parseInt(d.POP);
    });

    //load data to global variable usaData
    usaAgeRange = data;

});


function graphOnCreate(){
    stateData.length = 0;
    for(var i=0;i<usaData.length;i++){
        if(usaData[i].STATE=="United States"){
            stateData[i] = usaData[i];
        }
    }
    graphData= usaData;
    createGraph1();
    createGraph2();
    createPieChart1();
    createPieChart2();
    createGraph3();
    createPieChart3()

}

function locSelect(locBox){
    var graph,mapLoc;

    console.log(locBox);
    if(locBox == locBox1) {
        selectBox = document.getElementById("locBox1");
        console.log(selectBox);
        mapLoc = selectBox.options[selectBox.selectedIndex].value;
        mapLoc1 = mapLoc;
        bGraph = graph1;
        pGraph = pieChart1;
    }

    else if(locBox == locBox2){
        selectBox = document.getElementById("locBox2");
        console.log(selectBox);
        mapLoc = selectBox.options[selectBox.selectedIndex].value;
        mapLoc2 = mapLoc;
        bGraph = graph2;
        pGraph = pieChart2;
    }

    else if(locBox == locBox3){
        selectBox = document.getElementById("locBox3");
        console.log(selectBox);
        mapLoc = selectBox.options[selectBox.selectedIndex].value;
        mapLoc3 = mapLoc;
        bGraph = graph3;
        pGraph = pieChart3;
    }
    grabStateData(mapLoc);
    if(highLight==false) {
        updateGraph(bGraph);
        updatePie(pGraph);
    }
    else{
        hLBarChart(bGraph);
        hLPie(pGraph);
    }

}

function grabStateData(name){
    stateData.length = 0;
    for(var i=0;i<graphData.length;i++){
        if(graphData[i].STATE==name){
                stateData[i] = graphData[i];

        }
    }

}

function changeAgeRange(){
    if(AgeRange == false){
        graphData = usaAgeRange;
        AgeRange = true;

    }
    else{
        graphData = usaData;
        AgeRange  = false;
    }
    //console.log(mapLoc);

    //if (mapLoc1 != "United States")
      //  locSelect();

    if(highLight==false) {
        grabStateData(mapLoc1);
        updateGraph(graph1);
        updatePie(pieChart1);


        grabStateData(mapLoc2)
        updateGraph(graph2);
        updatePie(pieChart2)

        grabStateData(mapLoc3)
        updateGraph(graph3);
        updatePie(pieChart3)
    }
    else{
        highLightEvent();
    }

}

function highLightEvent(){
    var selectBox = document.getElementById("eventBox");
    startAGE = parseInt(selectBox.options[selectBox.selectedIndex].value);

    if(highLight==true) {
        grabStateData(mapLoc1);
        hLBarChart(graph1);
        hLPie(pieChart1);

        grabStateData(mapLoc2);
        hLBarChart(graph2);
        hLPie(pieChart2)

        grabStateData(mapLoc3);
        hLBarChart(graph3);
        hLPie(pieChart3);
    }



}

function hightLightTrigger(){
    if(highLight == false) {
        highLight = true;
       highLightEvent();
    }
    else {
        highLight = false;
        grabStateData(mapLoc1);
        updateGraph(graph1);
        updatePie(pieChart1);


        grabStateData(mapLoc2)
        updateGraph(graph2);
        updatePie(pieChart2)

        grabStateData(mapLoc3)
        updateGraph(graph3);
        updatePie(pieChart3)
    }

}


