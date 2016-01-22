/*
 * The MIT License (MIT)
 * 
 * Copyright (c) 2016 Michael Gira
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

(function() {
    
    // Give 5 warnings before stopping
    var warn = 5;
    
    function updateProgress() {
        
        var progressBars = document.getElementsByClassName('svg-progress-bar');
        
        for (var e = 0; e < progressBars.length; e++) {
            
            var progressBar = progressBars[e];
            var percentage = progressBar.getAttribute('progress:percent');
            var tag = progressBar.tagName.toLowerCase();
            
            switch(tag) {
                case 'circle':
                    var radius = progressBar.getAttribute('r');
                    var perimeter = Math.PI * radius * 2;
                    break;
                    
                case 'ellipse':
                    var a = progressBar.getAttribute('rx') / 2;
                    var b = progressBar.getAttribute('ry') / 2;
                    var h = Math.pow((a - b), 2) / Math.pow((a + b), 2);
                    var perimeter = (Math.PI * (a+b) * (1 + ((3*h)/(10 + Math.sqrt(4 - (3*h)))) ) ) * 2;
                    // Alternate Equation
                    // var perimeter = (Math.PI * ((3*(a+b)) - Math.sqrt(((3*a)+b) * (a + (3*b)))) ) * 2;
                    break;
                    
                case 'line':
                    var x1 = progressBar.getAttribute('x1');
                    var y1 = progressBar.getAttribute('y1');
                    var x2 = progressBar.getAttribute('x2');
                    var y2 = progressBar.getAttribute('y2');
                    var perimeter = distance(x1, y1, x2, y2);
                    break;
                    
                case 'polygon':
                    var coords = progressBar.getAttribute('points');
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
                    var coords = progressBar.getAttribute('points');
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
                    var height = progressBar.getAttribute('height');
                    var width = progressBar.getAttribute('width');
                    var perimeter = height * 2 + width * 2;
                    break;
                    
                case 'path':
                    var perimeter = progressBar.getTotalLength();
                    break;
                    
                default:
                    if(warn > 0) {
                        warn--;
                        console.warn('Warning! Tagname \'' + tag + '\' is not supported by SVGbar.js');
                    }
                    break;
            }
            
            progressBar.setAttribute('stroke-dasharray', perimeter);
            progressBar.setAttribute('stroke-dashoffset', perimeter - (perimeter * (percentage / 100)) );
        }
    }
    
    updateProgress();
    setInterval(updateProgress(), 500);
    
    function distance(x1, y1, x2, y2) {
        return Math.sqrt( Math.pow((x2-x1),2) + Math.pow((y2-y1),2) );
    }
    
})();