/**
 * Created by Ryan Jones on 9/13/2015.
 */
var usaAgeRange;
var usaData;
var mapLoc = "United States";
var graphData;
var AgeRange = false;
var stateData = [];



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
    createBarGraph();
    createPieChart();

}

function locSelect(){
    var selectBox = document.getElementById("locBox1");
    mapLoc = selectBox.options[selectBox.selectedIndex].value;

    grabStateData();

}

function grabStateData(){
    stateData.length = 0;
    for(var i=0;i<graphData.length;i++){
        if(graphData[i].STATE==mapLoc){
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
    console.log(mapLoc);

    if (mapLoc != "United States")
        locSelect();

    updateGraph();
    updatePie();

}


