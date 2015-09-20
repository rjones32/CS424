/**
 * Created by Ryan on 9/17/2015.
 */

var margin, height,width,arc,
    color,
    pie,pieChart1,pieChart2,pieChart3,g;

var legendRectSize = 18;
var legendSpacing = 4;

function createPieChart1() {


   /* var width = 960,
        height = 500,
        radius = Math.min(width, height) / 2;*/
    margin = {top: 20, right: 20, bottom: 10, left: 60},
        width = 500 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;
        radius = Math.min(width,height)/2;

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
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

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

    var legend = pieChart1.selectAll(".legend")
        .data(color.domain())
        .enter().append("g")
        .attr("y",50)
        .attr("class","legend")
        .attr("width",radius*20)
        .attr("height",radius*20)
        .style("right",100)
        .attr("transform",function(d,i){
            return "translate(130,"+i*15+")";});
    legend.append('rect')
        .attr('width',18)
        .attr('height',18)
        .style('fill',color)
    legend.append("text")
        .attr("x",24)
        .attr("y",9)
        .attr("dy",".35em")
        .text(function(d){return d;});

}

function createPieChart2() {


    /* var width = 960,
     height = 500,
     radius = Math.min(width, height) / 2;*/
    margin = {top: 20, right: 20, bottom: 10, left: 60},
        width = 500 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;
    radius = Math.min(width,height)/2;

    var key;
    color = d3.scale.ordinal()
        .range(["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]);

    arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.POP; });
    pieChart2 = d3.select("#chart2").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

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



}

function createPieChart3() {


    /* var width = 960,
     height = 500,
     radius = Math.min(width, height) / 2;*/
    margin = {top: 20, right: 20, bottom: 10, left: 60},
        width = 500 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;
    radius = Math.min(width,height)/2;

    var key;
    color = d3.scale.ordinal()
        .range(["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]);

    arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.POP; });
    pieChart3 = d3.select("#chart3").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

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



}


function updatePie(graph){
    graph.selectAll("*").remove();

    margin = {top: 20, right: 20, bottom: 30, left: 60},
        width = 1200 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;
    radius = Math.min(width,height)/2;

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




}

function hLPie(graph){
    graph.selectAll("*").remove();

    margin = {top: 20, right: 20, bottom: 30, left: 60},
        width = 1200 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;
    radius = Math.min(width,height)/2;

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
            if(d.data.AGE>=startAGE)
                return "#35A59A";

            else if(d.data.AGE=="85+"&&85>=startAGE)
                return "#35A59A";

            else
                return color1(d.data.AGE);
        });

}