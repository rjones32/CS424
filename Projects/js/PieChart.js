/**
 * Created by Ryan on 9/17/2015.
 */

var margin, svgHeight,svgWidth,height,width,arc,
    color,
    pie,pieChart1,pieChart2,pieChart3, g,pos,val,lastD;

    svgWidth = 310;
    svgHeight = 330;
    margin = {top: 20, right: 20, bottom: 10, left: 20},
    width = 350 - margin.left - margin.right,
    height = 310 - margin.top - margin.bottom;
    radius = Math.min(width, height) / 2;
pos = d3.svg.arc().innerRadius(radius + 10).outerRadius(radius + 10);

function createPieChart1() {

    val = 0;
    /*margin = {top: 20, right: 20, bottom: 10, left: 20},
        width = 350 - margin.left - margin.right,
        height = 310 - margin.top - margin.bottom;
        radius = Math.min(width,height)/2;*/




    var key;
     color = d3.scale.ordinal()
        .range(["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]);

    arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.POP; });

    pieChart1 = d3.select("#chart1").append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .append("g")
        .attr("transform","translate(155,180)");/*
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");*/


    stateData_Array = d3.values(stateData);


     g = pieChart1.selectAll(".arc")
            .data(pie(stateData_Array))
            .enter().append("g")
            .attr("class", "arc");
        g.append("path")
            .attr("d", arc)
            .style("fill", function (d) {
                return color(d.data.AGE);
            });
    g.append("text")
        //.attr("transform", "rotate(90)")
        .attr("transform", function (d){
            //console.log(d);
            //console.log(pos.centroid(d));
            return "translate(" + pos.centroid(d) + ")";
        })
        .attr("dy", "-.21em")
        .attr("font-size","12px")
        .style("text-anchor", "middle")
        .text(function (d) {
           // console.log(val);
            //console.log(d.data.AGE);
            if(val == parseInt(d.data.AGE)) {
                val= val +5;
               // console.log(val);
                return d.data.AGE;
            }
            else
                return;

        });


    /*var legend = pieChart1.selectAll(".legend")
        .data(color.domain().slice().reverse())
        .enter().append("g")
        .attr("class","legend")
        .attr("transform",function(d,i){
            return "translate(0,"+ i * 15+")";});
    legend.append('rect')
        .attr("x",200)
        .attr("y",-95)
        .attr('width',18)
        .attr('height',18)
        .style('fill',color)
    legend.append("text")
        .attr("x",220)
        .attr("y",9)
        .attr("dy",".35em")
        .text(function(d){return d;});*/

}

function createPieChart2() {


    /* var width = 960,
     height = 500,
     radius = Math.min(width, height) / 2;*/
    /*margin = {top: 20, right: 20, bottom: 10, left: 60},
        width = 500 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;
    radius = Math.min(width,height)/2;*/

    val = 0;
    color = d3.scale.ordinal()
        .range(["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]);

    arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.POP; });
    pieChart2 = d3.select("#chart2").append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .append("g")
        .attr("transform","translate(155,180)");/*
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");*/

    stateData_Array = d3.values(stateData);

    g = pieChart2.selectAll(".arc")
        .data(pie(stateData_Array))
        .enter().append("g")
        .attr("class", "arc");
    g.append("path")
        .attr("d", arc)
        .style("fill", function (d) {
            return color(d.data.AGE);
        });
    g.append("text")
        .attr("transform", "rotate(90)")
        .attr("transform", function (d){
            //console.log(d);
            //console.log(pos.centroid(d));
            return "translate(" + pos.centroid(d) + ")";
        })
        .attr("dy", "-.21em")
        .attr("font-size","12px")
        .style("text-anchor", "middle")
        .text(function (d) {
            //console.log(val);
            //console.log(d.data.AGE);
            if(val == parseInt(d.data.AGE)) {
                val= val +5;
                //console.log(val);
                return d.data.AGE;
            }
            else
                return;
        });




}

function createPieChart3() {


    /* var width = 960,
     height = 500,
     radius = Math.min(width, height) / 2;
    margin = {top: 20, right: 20, bottom: 10, left: 60},
        width = 500 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;
    radius = Math.min(width,height)/2;*/

    val = 0;
    color = d3.scale.ordinal()
        .range(["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]);

    arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.POP; });
    pieChart3 = d3.select("#chart3").append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .append("g")
        .attr("transform","translate(155,180)");/*
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");*/

    stateData_Array = d3.values(stateData);

    g = pieChart3.selectAll(".arc")
        .data(pie(stateData_Array))
        .enter().append("g")
        .attr("class", "arc");
    g.append("path")
        .attr("d", arc)
        .style("fill", function (d) {
            return color(d.data.AGE);
        });
    g.append("text")
        .attr("transform", "rotate(90)")
        .attr("transform", function (d){
            //console.log(d);
            //console.log(pos.centroid(d));
            return "translate(" + pos.centroid(d) + ")";
        })
        .attr("dy", "-.21em")
        .attr("font-size","12px")
        .style("text-anchor", "middle")
        .text(function (d) {
            //console.log(val);
            //console.log(d.data.AGE);
            if(val == parseInt(d.data.AGE)) {
                val= val +5;
                //console.log(val);
                return d.data.AGE;
            }
            else
                return;
        });


}


function updatePie(graph){
    graph.selectAll("*").remove();

    val = 0;
    color = d3.scale.ordinal()
        .range(["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]);

    stateData_Array = d3.values(stateData);

    g = graph.selectAll(".arc")
        .data(pie(stateData_Array))
        .enter().append("g")
        .attr("class", "arc");
    g.append("path")
        .attr("d", arc)
        .style("fill", function (d) {
            return color(d.data.AGE);
        });
    g.append("text")
       // .attr("transform", "rotate(90)")
        .attr("transform", function (d){
           if(AgeRange==true) {
               if (d.data.AGE == 0) {
                   lastD = pos.centroid(d);
                   return "translate(" + pos.centroid(d) + ")";
               }

               else {
                   currD = pos.centroid(d);
                   console.log("currD:"+currD[1]);
                   console.log("lastD:"+lastD[1]);
                   if (parseInt(currD[1]) == parseInt(lastD[1])) {
                       console.log(currD);
                       currD[1] = currD[1] - 10;
                       currD[0] = currD[0] + 5;
                   }
                    lastD = pos.centroid(d);
                   return "translate(" + currD + ")";
               }
           }
            else
               return "translate(" + pos.centroid(d) + ")";

        })
        .attr("dy", "-.21em")
        .attr("font-size","12px")
        .style("text-anchor", "middle")
        .text(function (d) {
           // console.log(d);
            if(AgeRange==true) {
                return d.data.AGE;
            }
            else{
                //console.log(val);
                //console.log(d.data.AGE);
                if(val == parseInt(d.data.AGE)) {
                    val= val +5;
                    console.log(val);
                    return d.data.AGE;
                }
                else
                    return;



            }
        });




}

function hLPie(graph){
    graph.selectAll("*").remove();

    val = 0;


    /*color = d3.scale.ordinal()
        .domain([0,10])
        .range(["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]);*/

    color = d3.scale.linear()
        .domain([0,10])
        .range(["#f2efef", "#dbdada", "#d0caca", "#bfb4b4", "#9c9191", "#7a6b6b", "#575757","#3b3b3b","#1f1f1f"]);

    stateData_Array = d3.values(stateData);

    g = graph.selectAll(".arc")
        .data(pie(stateData_Array))
        .enter().append("g")
        .attr("class", "arc");
    g.append("path")
        .attr("d", arc)
        .style("fill", function (d) {
            boundaryAGE = (startAGE - parseInt(d.data.AGE));
            if(boundaryAGE<10 && boundaryAGE>0)
                ageValue = boundaryAGE+ parseInt(d.data.AGE);

            if(d.data.AGE>=startAGE)
                return "#35A59A";

            else if(d.data.AGE=="85+"&&85>=startAGE)
                return "#35A59A";

            else if((AgeRange==true) && (ageValue==startAGE)){
                console.log(ageValue);
                sliceColor = d3.scale.linear()
                    .domain([0,30])
                    .range([color1(startAGE),"#35A59A"]);
                return sliceColor(startAGE);
            }

            else {
                console.log(color1(d.data.AGE));
                return color1(d.data.AGE);
            }
        });
    g.append("text")
        .attr("transform", "rotate(90)")
        .attr("transform", function (d){if(AgeRange==true) {
            if (d.data.AGE == 0) {
                lastD = pos.centroid(d);
                return "translate(" + pos.centroid(d) + ")";
            }

            else {
                currD = pos.centroid(d);
                console.log("currD:"+currD[1]);
                console.log("lastD:"+lastD[1]);
                if (parseInt(currD[1]) == parseInt(lastD[1])) {
                    console.log(currD);
                    currD[1] = currD[1] - 10;
                    currD[0] = currD[0] + 5;
                }
                lastD = pos.centroid(d);
                return "translate(" + currD + ")";
            }
        }
        else
            return "translate(" + pos.centroid(d) + ")";
        })
        .attr("dy", "-.21em")
        .attr("font-size","12px")
        .style("text-anchor", "middle")
        .text(function (d) {
            if(AgeRange==true) {
                return d.data.AGE;
            }
            else{
                console.log(val);
                console.log(d.data.AGE);
                if(val == parseInt(d.data.AGE)) {
                    val= val +5;
                    console.log(val);
                    return d.data.AGE;
                }
                else
                    return;



            }
        });

}