/**
 * Created by jjenkins on 8/23/2016.
 */

/**
 * Created by jjenkins on 8/24/2016.
 * Create to learn and demo the d3 library
 */
//defines my require js module
define(['d3'], function (d3) {
    var bardata = [];

    for (var i=0; i <  500; i++) {
        //pushing fakedata to populate the graph
        /**
         * @Math.round to get rid of decimal place
         * @Math.random to create a random number
         * add +20 to ensure no 0 values
         */
        bardata.push(Math.round(Math.random()*30)+20)
    }

    var height = 400,
        width = 600,
        barWidth = 50,
        barOffset = 5;

    var tempColor;

    var colors = d3.scale.linear()
        .domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
        .range(['#B58929','#C61C6F', '#268BD2', '#85992C']);

    var yScale = d3.scale.linear()
        .domain([0, d3.max(bardata)])
        .range([0, height]);

    var xScale = d3.scale.ordinal()
        .domain(d3.range(0, bardata.length))
        .rangeBands([0, width]);

    /**
     * Added tooltip  and styling
     */
    var tooltip = d3.select('body').append('div')
        .style('position', 'absolute')
        .style('padding', '0 10px')
        .style('background', 'white')
        .style('opacity', 0);

    var myChart = d3.select('#chart').append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .selectAll('rect').data(bardata)
        .enter().append('rect')
        .style('fill', function(d,i) {
            return colors(i);
        })
        .attr('width', xScale.rangeBand())
        .attr('x', function(d,i) {
            return xScale(i);
        })
        .attr('height', 0)
        .attr('y', height)

        .on('mouseover', function(d) {

            //tooltip for mousever
            tooltip.transition()
                .style('opacity', .9);

            //add the tooltip data to the elements
            tooltip.html(d)
                .style('left', (d3.event.pageX - 35) + 'px')//gets the X position in relation to the page
                .style('top',  (d3.event.pageY - 30) + 'px'); // gets the Y position in relation to the page

            console.log(this);

            tempColor = this.style.fill;
            d3.select(this)
                .style('opacity', .5)
                .style('fill', 'yellow')
        })

        .on('mouseout', function(d) {
            d3.select(this)
                .style('opacity', 1)
                .style('fill', tempColor)
        });

    myChart.transition()
        .attr('height', function(d) {
            return yScale(d);
        })
        .attr('y', function(d) {
            return height - yScale(d);
        })
        .delay(function(d, i) { // sets the delay between each graph populating the dom
            return i * 10;
        })
        .duration(1000)
        .ease('elastic');



});



