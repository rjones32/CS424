/**
 * Created by Ryan Jones on 9/13/2015.
 */

var x, y, xAxis,yAxis,
    graph1, margin, height;

var stateData_Array;

var margin = {top: 5, right: 20, bottom: 50, left: 80},
    width = 1200 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;


function createBarGraph() {


    x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
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




    x.domain(stateData_Array.map(function(d) { return d.AGE; }));
    y.domain([0, d3.max(stateData_Array,function(d){return d.POP;})]);
    graph1.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(3," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("font-size","15px")
        .attr("dx", "-.8em")
        .attr("dy", "-.10em")
        .attr("transform", "rotate(-90)" );
    graph1.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end")
        .text("POP(EST)")
    graph1.selectAll("bar")
        .data(stateData_Array)
        .enter().append("rect")
        .style("fill", "red")
        .attr("x", function(d) { return x(d.AGE); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.POP); })
        .attr("height", function(d) { return height - y(d.POP); });

}

function updateGraph() {
    locSelect();
    graph1.selectAll("*").remove();


    stateData_Array = d3.values(stateData);

    x.domain(stateData_Array.map(function(d) { return d.AGE; }));
    y.domain([0, d3.max(stateData_Array,function(d){return d.POP;})]);
    graph1.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(3," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("font-size","15px")
        .attr("dx", "-.8em")
        .attr("dy", "-.10em")
        .attr("transform", "rotate(-90)" );
    graph1.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end")
        .text("POP(EST)")
    graph1.selectAll("bar")
        .data(stateData_Array)
        .enter().append("rect")
        .style("fill", "red")
        .attr("x", function(d) { return x(d.AGE); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.POP); })
        .attr("height", function(d) { return height - y(d.POP); });



    /* stateData_Array = d3.values(stateData);
     svg.selectAll("bar")
         .data(stateData_Array)
         .enter().append("rect")
         .style("fill","black")
         .attr("y",function(d){return y(d.POP);})
         .attr("height",function(d){return height -y(d.POP);})*/


}