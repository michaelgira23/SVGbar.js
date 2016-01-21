# SVGbar.js

## What is SVGbar.js?
Well I'm glad you asked, random stranger! SVGbar.js will completely redefine what you think about progress bars **to this day.** It allows for you to make progress bars with SVG lines, shapes, paths, and more! It takes advantage of the `stroke-dasharray` and the `stroke-dashoffset` of any given SVG shape.

## Requirements
SVGbar.js requires jQuery. **You must include this file before you include the Javascript file.**

The latest version of jQuery can be downloaded [here](https://jquery.com/)

## Installation
Simply download the repository, and place the `SVGbar.js` in a really cool spot and the `SVGbar.css` in a really cool spot.

Place this somewhere in your head of your HTML file:
```html
<!-- Make the progress bars pretty -->
<link rel="stylesheet" href="path/to/SVGbar.css">
```

And place this at the bottom of your body of your HTML file:
```html
<!-- jQuery best Query -->
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<!-- Make the progress bars do stuff -->
<script src="path/to/SVGbar.js"></script>
```

## Demo
You can find a live demo [here](https://michaelgira.me/svg-bar)

## Note
Watch out! Circles are rotated by -90 degress so the line will start on the top and proceed clockwise.

## License

The MIT License (MIT)

Copyright (c) 2016 Michael Gira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
