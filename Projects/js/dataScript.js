/**
 * Created by Ryan Jones on 9/13/2015.
 */
var usaData;
var mapLoc;
var stateData = [];

d3.csv('Data/SC-EST2014-AGESEX-CIV.csv',function(error,data){
    if(error) {
        //if error is not null then something went wrong
        console.log(error);
    }
    else{
        //if error is null than fille loaded as expected
        console.log(data);
    }

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
        if(usaData[i].NAME==mapLoc){
            if(usaData[i].SEX==0) {
                stateData[i] = usaData[i]

            }
        }

    }




}


