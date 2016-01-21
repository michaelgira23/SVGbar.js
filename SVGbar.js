/*
 * Copyright 2016, Michael Gira, All rights reserved.
 */

(function() {
    
    // Give 5 warnings before stopping
    var warn = 5;
    
    function updateProgress() {
        
        var progressBars = $('.svg-progress-bar');
        progressBars.each(function(index) {

            var progressBar = $(this);
            var percentage = progressBar.attr('progress:percent');
            var tag = progressBar.prop('tagName');
            
            switch(tag) {
                case 'circle':
                    var radius = progressBar.attr('r');
                    var perimeter = Math.PI * radius * 2;
                    break;
                    
                case 'ellipse':
                    var a = progressBar.attr('rx') / 2;
                    var b = progressBar.attr('ry') / 2;
                    var h = Math.pow((a - b), 2) / Math.pow((a + b), 2);
                    var perimeter = (Math.PI * (a+b) * (1 + ((3*h)/(10 + Math.sqrt(4 - (3*h)))) ) ) * 2;
                    // Alternate Equation
                    // var perimeter = (Math.PI * ((3*(a+b)) - Math.sqrt(((3*a)+b) * (a + (3*b)))) ) * 2;
                    break;
                    
                case 'line':
                    var x1 = progressBar.attr('x1');
                    var y1 = progressBar.attr('y1');
                    var x2 = progressBar.attr('x2');
                    var y2 = progressBar.attr('y2');
                    var perimeter = distance(x1, y1, x2, y2);
                    break;
                    
                case 'polygon':
                    var coords = progressBar.attr('points');
                    var points = coords.split(' ');
                    var pointcoords = [];
                    
                    for (var i = 0; i <= points.length - 1; i++) {
                        pointcoords[i] = points[i].split(',');
                    }
                    
                    var totalDist = 0;
                    for (var i = 0; i <= points.length - 2; i++) {
                        totalDist += distance(pointcoords[i][0], pointcoords[i][1], pointcoords[i + 1][0], pointcoords[i + 1][1]);
                    }
                    
                    // Add first and last points together
                    totalDist += distance(pointcoords[pointcoords.length - 1][0], pointcoords[pointcoords.length - 1][1], pointcoords[0][0], pointcoords[0][1]);
                    var perimeter = totalDist;
                    break;
                    
                case 'polyline':
                    var coords = progressBar.attr('points');
                    var points = coords.split(' ');
                    var pointcoords = [];
                    
                    for (var i = 0; i <= points.length - 1; i++) {
                        pointcoords[i] = points[i].split(',');
                    }
                    
                    var totalDist = 0;
                    for (var i = 0; i <= points.length - 2; i++) {
                        totalDist += distance(pointcoords[i][0], pointcoords[i][1], pointcoords[i + 1][0], pointcoords[i + 1][1]);
                    }
                    var perimeter = totalDist;
                    break;
                    
                case 'rect':
                    var height = progressBar.attr('height');
                    var width = progressBar.attr('width');
                    var perimeter = height * 2 + width * 2;
                    break;
                    
                case 'path':
                    var perimeter = progressBar.get(0).getTotalLength();
                    break;
                    
                default:
                    if(warn > 0) {
                        warn--;
                        console.warn('Warning! Tagname \'' + tag + '\' is not supported by SVGbar.js');
                    }
                    break;
            }
            
            progressBar.attr('stroke-dasharray', perimeter);
            progressBar.attr('stroke-dashoffset', perimeter - (perimeter * (percentage / 100)) );
        });
    }
    
    if(window.jQuery) {
        updateProgress();
        setInterval(function() { updateProgress(); }, 500);
    } else {
        throw new Error('Sorry! jQuery must be loaded in order to use the round progres bars :(');
    }
    
    function distance(x1, y1, x2, y2) {
        return Math.sqrt( Math.pow((x2-x1),2) + Math.pow((y2-y1),2) );
    }
    
})();