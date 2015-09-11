/**
 * Created by Ryan Jones on 9/9/2015.
 */

var map = L.map('map').setView([38.8833,-95.0167],3);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'rjones32.cied6y8d00030srm2xgl5ui0t',
    accessToken: 'pk.eyJ1IjoicmpvbmVzMzIiLCJhIjoiNmM1YzhiYjg0OTdkYWViZDA2M2JmMDkxYjJmNjc5ZGMifQ.ttV5tmWinVzsgXCgFhAUrg'
}).addTo(map);

L.geoJson(stateDate).addTo(map);


function getColor(d){
    return d>30000000 ? '#800026':
        d>20000000 ? '#bd0026':
            d>10000000 ? '#e31a1c':
                d>1000000 ? '#fc4e2a':
                    d>9000000 ? '#fd8d3c':
                        d>8000000 ? '#feb24c':
                            d>700000 ? '#fed976':
                                d>600000 ? '#ffeda0':
                                    '#ffffcc';
}

function style(feature){
    return{
        fillColor: getColor(feature.properties.population),
        weight: 2,
        opacity:1,
        color: 'black',
        dashArray:'3',
        fillOpacity: 0.7
    };

}
L.geoJson(stateDate,{style:style}).addTo(map);