window.onload = function () {
// basic styling
  (function () {
    var bodtyStyle = 'font-family:calibri;margin:0;font-size: 20px;'
    document.querySelector('body').style.cssText = bodtyStyle
    var elem = document.getElementById('heading')
    elem.style.cssText = 'padding:10px 15px;text-transform:uppercase;text-align:center;'
    // elem.innerHTML = '<h1>Html Canvas</h1>'
  })()
  // canvas
  var cv = document.querySelector('#myCanvas')
  cv.width = window.innerWidth - 50
  cv.height = window.innerHeight - 50
  var c = cv.getContext('2d')
  // console.dir(c)
  // Line
  // c.beginPath()
  // c.moveTo(10, 10)
  // c.lineTo(100, 10)
  // c.strokeStyle = 'green'
  // c.stroke()
  // Line 2
  // c.beginPath()
  // c.moveTo(10, 100)
  // c.lineTo(100, 100)
  // c.strokeStyle = 'red'
  // c.stroke()
  // Line 3
  // c.beginPath()
  // c.moveTo(10, 10)
  // c.lineTo(10, 100)
  // c.strokeStyle = 'blue'
  // c.stroke()
  // Line 3
  // c.beginPath()
  // c.moveTo(100, 10)
  // c.lineTo(100, 100)
  // c.strokeStyle = 'black'
  // c.stroke()
  // rectangle
  // c.beginPath()
  // c.fillStyle = 'rgba(255, 0, 0, 0.3)'
  // c.fillRect(15, 15, 80, 80)
  // arc or circle
  // for (var i = 0; i < 100; i++) {
  //   var x = Math.random() * window.innerWidth
  //   var y = Math.random() * window.innerHeight
  //   var color = Math.round(Math.random() * 100)
  //   // console.log(color);
  //   c.beginPath()
  //   c.arc(x, y, 20, 0, Math.PI * 6, false)
  //   c.strokeStyle = 'rgb(' + color + ', 12, 23)'
  //   c.stroke()
  // }
  // perform action on mouse move
  var mousePosition = {
    x: undefined,
    y: undefined
  }
  var maxRadius = 80
  var colorArray = ['#04BBBF', '#D2D945', '#FCC23F', '#FF694F', 'purple']
  // console.log(randomColor)
  cv.addEventListener('mousemove', function (e) {
    mousePosition.x = e.x
    mousePosition.y = e.y
  })
  window.addEventListener('resize', function () {
    cv.width = window.innerWidth - 50
    cv.height = window.innerHeight - 50
    init()
  })
  // Moving Animation
  function Circle (x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.minradius = radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    this.draw = function () {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
      c.strokeStyle = 'blue'
      c.stroke()
      // c.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)]
      c.fillStyle = this.color
      c.fill()
    }
    this.update = function () {
      if (this.x + this.radius > cv.width || this.x - this.radius < 0) {
        this.dx = -this.dx
      }
      if (this.y + this.radius > cv.height || this.y - this.radius < 0) {
        this.dy = -this.dy
      }
      this.x += this.dx
      this.y += this.dy
      if (mousePosition.x - this.x < 50 && mousePosition.x - this.x > -50 && mousePosition.y - this.y < 50 && mousePosition.y - this.y > -50) {
        if (this.radius < maxRadius) {
          this.radius += 1
        }
      } else if (this.radius > this.minradius) {
        this.radius -= 1
      }
      this.draw()
    }
  }
  var circleArray = []
  function init () {
    circleArray = []
    for (var i = 0; i < 1000; i++) {
      var cirradius = Math.random() * 3 + 1
      var x = Math.random() * (cv.width - cirradius * 2) + cirradius
      var y = Math.random() * (cv.height - cirradius * 2) + cirradius
      var dx = (Math.random() - 0.5)
      var dy = (Math.random() - 0.5)
      circleArray.push(new Circle(x, y, dx, dy, cirradius))
    }
  }
  init()
  var animations = function () {
    window.requestAnimationFrame(animations)
    c.clearRect(0, 0, cv.width, cv.height)
    for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].update()
    }
  }
  animations()
}
