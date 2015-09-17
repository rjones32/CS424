/**
 * Created by Ryan Jones on 9/13/2015.
 */
var usaAgeRange;
var usaData;
var mapLoc;
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
        d.AGE = +d.AGE;
    });

    //load data to global variable usaData
    usaData = data;

});


function locSelect(){
    var selectBox = document.getElementById("locBox1");
    mapLoc = selectBox.options[selectBox.selectedIndex].value;

    grabStateData();

}

function grabStateData(){
    stateData.length = 0;
    for(var i=0;i<usaData.length;i++){
        if(usaData[i].STATE==mapLoc){
                stateData[i] = usaData[i];

        }
    }

}


