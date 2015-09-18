/**
 * Created by Ryan on 9/17/2015.
 */

function createPieChart() {
//inital setup of the elements of the graph
    var svg = d3.select("body")
        .append("svg")
        .append("g")

    svg.append("g")
        .attr("class", "slices");
    svg.append("g")
        .attr("class", "labels");
    svg.append("g")
        .attr("class", "lines");

//width, height, and radius of chart
    var width = 960,
        height = 500,
        radius = Math.min(width, height) / 2
    labelr = radius + 30;

    var key;
//Color values for each slice in pieChart
    var color = d3.scale.ordinal()
        .range(["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"]);


    var pie = d3.layout.pie()
        .sort(null)
        .value(function (d) {
            return d.POP;
        });

    var arc = d3.svg.arc()
        .outerRadius(radius * 0.8)
        .innerRadius(0);

    var outerArc = d3.svg.arc()
        .innerRadius(radius * 0.9)
        .outerRadius(0);

    svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var key = function (d) {
        return d.data.AGE;
    };

    /*var svg = d3.select("body").append("svg")
     .attr("width", width)
     .attr("height", height)
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     */
    d3.csv("ageRanges.csv", function (error, data) {
        console.log(data);
        data.forEach(function (d) {
            d.POP = +d.POP;

        });
        //pie slices
        var slice = svg.select(".slices").selectAll("path.slice")
            .data(pie(data), key);
        slice.enter()
            .insert("path")
            .style("fill", function (d) {
                return color(d.data.AGE);
            })
            .attr("class", "slice");

        slice
            .transition().duration(1000)
            .attrTween("d", function (d) {
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function (t) {
                    return arc(interpolate(t));
                };
            })

        slice.exit()
            .remove();

        //text labels
        /*var text = svg.select(".labels").selectAll("text")
         .data(pie(data),key);

         text.enter()
         .append("text")
         .attr("dy",".35em")
         .text(function(d){
         return d.data.AGE;

         });

         function midAngle(d){
         return d.startAngle + (d.endAngle - d.startAngle)/2;
         }

         text.transition().duration(1000)
         .attrTween("transform", function(d) {
         this._current = this._current || d;
         var interpolate = d3.interpolate(this._current, d);
         this._current = interpolate(0);
         return function(t) {
         var d2 = interpolate(t);
         var pos = outerArc.centroid(d2);
         pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
         return "translate("+ pos +")";
         };
         })
         .styleTween("text-anchor", function(d){
         this._current = this._current || d;
         var interpolate = d3.interpolate(this._current, d);
         this._current = interpolate(0);
         return function(t) {
         var d2 = interpolate(t);
         return midAngle(d2) < Math.PI ? "start":"end";
         };
         });


         text.exit()
         .remove();*/


        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");
        g.append("path")
            .attr("d", arc)
            .style("fill", function (d) {
                return color(d.data.AGE);
            });
        g.append("text")
            .attr("transform", function (d) {
                var c = arc.centroid(d),
                    x = c[0],
                    y = c[1],
                    h = Math.sqrt(x * x + y * y);
                return "translate(" + (x / h * labelr) + ',' +
                    (y / h * labelr) + ")";
                //return "translate(" + arc.centroid(d) + ")";
            })
            .attr("dy", ".35em")
            .attr("text-anchor", function (d) {
                // are we past the center?
                return (d.endAngle + d.startAngle) / 2 > Math.PI ?
                    "end" : "start";
            });
    });
}