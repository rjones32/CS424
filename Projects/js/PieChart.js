/**
 * Created by Ryan on 9/17/2015.
 */

var margin, height,width,color,arc,pie,pieChart1,g;

function createPieChart() {


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



}

function updatePie(){
    pieChart1.selectAll("*").remove();

    margin = {top: 20, right: 20, bottom: 30, left: 60},
        width = 1200 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;
    radius = Math.min(width,height)/2;

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




}