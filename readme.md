# SVGbar.js

## What is SVGbar.js?
Well I'm glad you asked, random stranger! SVGbar.js will completely redefine what you think about progress bars **to this day.** It allows for you to make progress bars using SVG lines, polygons, paths, and more! It takes advantage of the `stroke-dasharray` and the `stroke-dashoffset` of any given SVG shape.

## Demo
You can find a live demo [here](https://michaelgira.me/svg-bar)

## Installation
Simply download the repository, and place the `SVGbar.js` and the `SVGbar.css` in a really cool spot.

Place this little snippet somewhere in your head of your HTML file:
```html
<!-- Make the progress bars pretty -->
<link rel="stylesheet" href="path/to/SVGbar.css">
```

And place this snippet at the bottom of your body of your HTML file:
```html
<!-- Make the progress bars do stuff -->
<script src="path/to/SVGbar.js"></script>
```

## Use
Simply add the `progress` namespace to your SVG and apply the `.svg-progress-bar` class to any SVG shape. This will make the said element an applicable progress bar. **Nothing will happen until you add the `progress:percent="##"` attribute to the given element to a valid progress bar.** This attribute can be anywhere from 0 to 100.

```html
<!-- Optional! -->
<div class="progress-label">This is my cool Progress Bar</div>

<svg xmlns:progress="https://michaelgira.me/svg-bar" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000">
    <circle class="svg-progress-bar progress-bar-green progress-bar-thin" cx="-500" cy="500" r="420" progress:percent="45"></circle>
</svg>
```
This will create a green circle progress bar filled in at 45%.

## Available Shapes

The following SVG elements are currently supported and their outline/path can be used as a progress bar:

- `<circle>`
- `<ellipse>`
- `<line>`
- `<polygon>`
- `<polyline>`
- `<rect>`
- `<path>`

If there are any more shapes that we have missed, you can issue a pull request.

## Available Classes

### General Classes

| Class | Use |
| --- | --- |
| .svg-progress-bar | Triggers SVGbar.js |
| .svg-progress-bar-thin | Makes the progress bar thinner |
| .progress-label | A label for your progress bars |

### Colors
Place these classes in your SVG shape to make them *beautiful*

| Class | Color |
| --- | --- |
| .progress-bar-red | Red |
| .progress-bar-orange | Orange |
| .progress-bar-yellow | Yellow |
| .progress-bar-green | Green |
| .progress-bar-blue | Blue |
| .progress-bar-purple | Purple |
| .progress-bar-black | Definitely not black |
| .progress-bar-gray | Gray |
| .progress-bar-grey | **Gray** |

## Notes
- **Watch out!** Circles are rotated by -90 degress so the line will start on the top and proceed clockwise.
- **Protip:** Want your progress bar to start on the other end? Made the percentage negative!

## License

The MIT License (MIT)

Copyright &copy; 2016 Michael Gira

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
