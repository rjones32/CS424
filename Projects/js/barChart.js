/**
 * Created by Ryan Jones on 9/13/2015.
 */

var max;


function parseData(data){
    var parsedData;
    for (var i=0;i<data.length;i++){
        parsedData = data[i];
        parsedData = parsedData.POP;
        parsedData = parsedData.AGE;
    }

    return parsedData;

}

function makeBarGraph() {
    d3.selectAll("svg > *").remove();
    var margin = {top: 20, right: 20, bottom: 70, left: 80},
        width = 1500 - margin.left - margin.right,
        height = 720 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
    var y = d3.scale.linear().range([height, 0]);
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    var stateData_Array = d3.values(stateData);




    x.domain(stateData_Array.map(function(d) { return d.AGE; }));
    y.domain([0, d3.max(stateData_Array,function(d){return d.POP;})]);
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(3," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("font-size","15px")
        .attr("dx", "-.8em")
        .attr("dy", "-.10em")
        .attr("transform", "rotate(-90)" );
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end")
        .text("POP(EST)")
    svg.selectAll("bar")
        .data(stateData_Array)
        .enter().append("rect")
        .style("fill", "steelblue")
        .attr("x", function(d) { return x(d.AGE); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.POP); })
        .attr("height", function(d) { return height - y(d.POP); });

}

function updateGraph() {
    locSelect();
    makeBarGraph();

}