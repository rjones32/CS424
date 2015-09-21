/**
 * Created by Ryan Jones on 9/13/2015.
 */

var x, y, xAxis,yAxis,
    graph1,graph2,graph3,margin, height,width;

var stateData_Array;
var startAGE;
var yData;


var color1;
var color2;



function createGraph1() {
    var x0 =0;
    var margin = {top: 20, right: 20, bottom: 30, left: 80},
        width = 800 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;

    x = d3.scale.ordinal().rangeRoundBands([0, width],.3);
    y = d3.scale.linear().range([height, 0]);
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");
    graph1 = d3.select("#chart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    stateData_Array = d3.values(stateData);
    var ageRange    = stateData_Array.forEach(function (d) {d.AGE = +d.AGE;

    })

    color1 = d3.scale.linear()
        .domain([0,10])
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    /*    color.domain(d3.keys(stateData_Array[0]).filter(function(key) { return key !== "STATE" && key !=="POP" }));


     stateData_Array.forEach(function(d) {

     x0 = x0+1;
     d.name = color.range().map(function(name) { return {name: name, x0: x0-1, x1: x0 = +d[name]}; });

     //console.log(d);
     });*/

    x.domain(stateData_Array.map(function(d) { return d.AGE; }));
    y.domain([0, d3.max(stateData_Array,function(d){return d.POP;})]);

    graph1.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        .attr("font-size","12px")
        .attr("y",0)
        .attr("x",9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)" );
    graph1.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end")
        .text("POP(EST)");
    graph1.selectAll("bar")
        .data(stateData_Array)
        .enter().append("rect")
        .attr("x", function(d) { return x(d.AGE); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.POP); })
        .attr("height", function(d) { return height - y(d.POP); })
        .style("fill",  function (d) {
            return color1(d.AGE);});
    graph1.append("text")
        .attr("x",(width/2))
        .attr("y",10-(margin.top/2))
        .attr("text-anchor","middle")
        .style("font-size","16px")
        .text(mapLoc1)

}

function createGraph2() {
    var x0 =0;
    var margin = {top: 20, right: 20, bottom: 30, left: 80},
        width = 800 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;

    graph2 = d3.select("#chart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    /*    color.domain(d3.keys(stateData_Array[0]).filter(function(key) { return key !== "STATE" && key !=="POP" }));


     stateData_Array.forEach(function(d) {

     x0 = x0+1;
     d.name = color.range().map(function(name) { return {name: name, x0: x0-1, x1: x0 = +d[name]}; });

     //console.log(d);
     });*/

    x.domain(stateData_Array.map(function(d) { return d.AGE; }));
    y.domain([0, d3.max(stateData_Array,function(d){return d.POP;})]);

    graph2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        .attr("font-size","12px")
        .attr("y",0)
        .attr("x",9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)" );
    graph2.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end")
        .text("POP(EST)");
    graph2.selectAll("bar")
        .data(stateData_Array)
        .enter().append("rect")
        .attr("x", function(d) { return x(d.AGE); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.POP); })
        .attr("height", function(d) { return height - y(d.POP); })
        .style("fill",  function (d) {
            return color1(d.AGE);});
    graph2.append("text")
        .attr("x",(width/2))
        .attr("y",10-(margin.top/2))
        .attr("text-anchor","middle")
        .style("font-size","16px")
        .text(mapLoc2);

}

function createGraph3() {
    var x0 =0;
    var margin = {top: 20, right: 20, bottom: 30, left: 80},
        width = 800 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;

    graph3 = d3.select("#chart3").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    /*    color.domain(d3.keys(stateData_Array[0]).filter(function(key) { return key !== "STATE" && key !=="POP" }));


     stateData_Array.forEach(function(d) {

     x0 = x0+1;
     d.name = color.range().map(function(name) { return {name: name, x0: x0-1, x1: x0 = +d[name]}; });

     //console.log(d);
     });*/

    x.domain(stateData_Array.map(function(d) { return d.AGE; }));
    y.domain([0, d3.max(stateData_Array,function(d){return d.POP;})]);

    graph3.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        .attr("font-size","12px")
        .attr("y",0)
        .attr("x",9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)" );
    graph3.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end")
        .text("POP(EST)");
    graph3.selectAll("bar")
        .data(stateData_Array)
        .enter().append("rect")
        .attr("x", function(d) { return x(d.AGE); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.POP); })
        .attr("height", function(d) { return height - y(d.POP); })
        .style("fill",  function (d) {
            return color1(d.AGE);});
    graph3.append("text")
        .attr("x",(width/2))
        .attr("y",10-(margin.top/2))
        .attr("text-anchor","middle")
        .style("font-size","16px")
        .text(mapLoc1);

}



function updateGraph(graph) {
    //locSelect();
    //updatePie();
    graph.selectAll("*").remove();

    var margin = {top: 20, right: 20, bottom: 30, left: 80},
        width = 800 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;

    stateData_Array = d3.values(stateData);

  /*  if(AgeRange==true){
        ydata

    }
    else{


    }*/

    color1 = d3.scale.linear()
        .domain([0,10])
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    x.domain(stateData_Array.map(function(d) { return d.AGE; }));
    y.domain([0, d3.max(stateData_Array,function(d){return d.POP;})]);
    graph.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        .attr("font-size","12px")
        .attr("y",0)
        .attr("x",9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)" );
    graph.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("font-size","12px")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end")
        .text("POP(EST)")
    graph.selectAll("bar")
        .data(stateData_Array)
        .enter().append("rect")
        .attr("x", function(d) { return x(d.AGE); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.POP); })
        .attr("height", function(d) { return height - y(d.POP); })
        .style("fill",  function (d) {
            if(d.AGE=="85+")
                return color1(85);
            else
                return color1(d.AGE);});
    graph.append("text")
        .attr("x",(width/2))
        .attr("y",1-(margin.top/2))
        .attr("text-anchor","middle")
        .style("font-size","16px")
        .text(stateData_Array[0].STATE);



    /* stateData_Array = d3.values(stateData);
     svg.selectAll("bar")
         .data(stateData_Array)
         .enter().append("rect")
         .style("fill","black")
         .attr("y",function(d){return y(d.POP);})
         .attr("height",function(d){return height -y(d.POP);})*/
}




 function hLBarChart(graph){


     graph.selectAll("*").remove();


     var margin = {top: 20, right: 20, bottom: 30, left: 80},
         width = 800 - margin.left - margin.right,
         height = 250 - margin.top - margin.bottom;
     stateData_Array = d3.values(stateData);



     color1 = d3.scale.linear()
         .domain([0,10])
         .range(["#f2efef", "#dbdada", "#d0caca", "#bfb4b4", "#9c9191", "#7a6b6b", "#575757","#3b3b3b","#1f1f1f"]);

     x.domain(stateData_Array.map(function(d) { return d.AGE; }));
     y.domain([0, d3.max(stateData_Array,function(d){return d.POP;})]);
     graph.append("g")
         .attr("class", "x axis")
         .attr("transform", "translate(0," + height + ")")
         .call(xAxis)
         .selectAll("text")
         .style("text-anchor", "start")
         .attr("font-size","12px")
         .attr("y",0)
         .attr("x",9)
         .attr("dy", ".35em")
         .attr("transform", "rotate(90)" );
     graph.append("g")
         .attr("class", "y axis")
         .call(yAxis)
         .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y",6)
         .attr("dy", ".71em")
         .style("text-anchor","end")
         .text("POP(EST)")
     graph.selectAll("bar")
         .data(stateData_Array)
         .enter().append("rect")
         .attr("x", function(d) { return x(d.AGE); })
         .attr("width", x.rangeBand())
         .attr("y", function(d) { return y(d.POP); })
         .attr("height", function(d) { return height - y(d.POP); })
         .style("fill",  function (d) {
             ageValue = 0;
             boundaryAGE = (startAGE - parseInt(d.AGE));
             console.log(boundaryAGE);
             if(boundaryAGE<10 && boundaryAGE>0)
                 ageValue = boundaryAGE + parseInt(d.AGE);

             console.log(ageValue);
             if(d.AGE>=startAGE)
                 return "#35A59A";

             else if(d.AGE=="85+"&&85>=startAGE)
                return "#35A59A";

             else if((AgeRange==true) && (ageValue==startAGE)){
                 console.log(ageValue);
                 sliceColor = d3.scale.linear()
                     .domain([0,30])
                     .range([color1(startAGE),"#35A59A"]);
                 return sliceColor(startAGE);
             }

             else
                return color1(d.AGE);
         })

     graph.append("text")
         .attr("x",(width/2))
         .attr("y",1-(margin.top/2))
         .attr("text-anchor","middle")
         .style("font-size","16px")
         .text(stateData_Array[0].STATE);

}