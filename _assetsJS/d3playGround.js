/**
 * Created by jjenkins on 8/23/2016.
 */

/**
 * Created by jjenkins on 8/9/2016.
 */
//defines my require js module
define(['d3'],function (d3) {
    'use strict';

    //create an pointless constructor
    var D3PlayGround = function () {
    };


    /**
     * Create a bargauge object that will be the root element
     * @type {Object}
     */
    D3PlayGround.prototype = Object.create(null);
    D3PlayGround.prototype.constructor = D3PlayGround;




    d3.select("#d3PlayDiv")
        .append('svg')
        .attr('top', 0)
        .attr('left', 0)
        .attr('width', "100%")
        .attr('height', "100%")
        .attr('class', 'barGauge-linear-gauge')
        .append('g');




    // return the PowerOneLine module
    return D3PlayGround;


});



