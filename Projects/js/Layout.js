/**
 * Created by Ryan on 9/17/2015.
 */

var width = 300;
var height = 300;

var canvas = d3.select("graphs").append("canvas")
    .attr("width",width)
    .attr("height",height)
    .style("border",1+"px "+"solid "+"#000000")
    .node();

var context = canvas.getContext('2d');