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
  // cv.width = window.innerWidth - 50
  cv.width = 500
  cv.height = window.innerHeight - 45
  // cv.height = window.innerHeight
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
  // Animating bolls
  // var mousePosition = {
  //   x: undefined,
  //   y: undefined
  // }
  // var maxRadius = 80
  // var colorArray = ['#04BBBF', '#D2D945', '#FCC23F', '#FF694F', 'purple']
  // // console.log(randomColor)
  // cv.addEventListener('mousemove', function (e) {
  //   mousePosition.x = e.x
  //   mousePosition.y = e.y
  // })
  // window.addEventListener('resize', function () {
  //   cv.width = window.innerWidth - 50
  //   cv.height = window.innerHeight - 50
  //   init()
  // })
  // // Moving Animation
  // function Circle (x, y, dx, dy, radius) {
  //   this.x = x
  //   this.y = y
  //   this.dx = dx
  //   this.dy = dy
  //   this.radius = radius
  //   this.minradius = radius
  //   this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
  //   this.draw = function () {
  //     c.beginPath()
  //     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
  //     c.strokeStyle = 'blue'
  //     c.stroke()
  //     // c.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)]
  //     c.fillStyle = this.color
  //     c.fill()
  //   }
  //   this.update = function () {
  //     if (this.x + this.radius > cv.width || this.x - this.radius < 0) {
  //       this.dx = -this.dx
  //     }
  //     if (this.y + this.radius > cv.height || this.y - this.radius < 0) {
  //       this.dy = -this.dy
  //     }
  //     this.x += this.dx
  //     this.y += this.dy
  //     if (mousePosition.x - this.x < 50 && mousePosition.x - this.x > -50 && mousePosition.y - this.y < 50 && mousePosition.y - this.y > -50) {
  //       if (this.radius < maxRadius) {
  //         this.radius += 1
  //       }
  //     } else if (this.radius > this.minradius) {
  //       this.radius -= 1
  //     }
  //     this.draw()
  //   }
  // }
  // var circleArray = []
  // function init () {
  //   circleArray = []
  //   for (var i = 0; i < 1000; i++) {
  //     var cirradius = Math.random() * 3 + 1
  //     var x = Math.random() * (cv.width - cirradius * 2) + cirradius
  //     var y = Math.random() * (cv.height - cirradius * 2) + cirradius
  //     var dx = (Math.random() - 0.5)
  //     var dy = (Math.random() - 0.5)
  //     circleArray.push(new Circle(x, y, dx, dy, cirradius))
  //   }
  // }
  // init()
  // var animations = function () {
  //   window.requestAnimationFrame(animations)
  //   c.clearRect(0, 0, cv.width, cv.height)
  //   for (var i = 0; i < circleArray.length; i++) {
  //     circleArray[i].update()
  //   }
  // }
  // animations()
  // animate Balls finish
  // practice
  // c.moveTo(0, 0)
  // c.lineTo(100, 100)
  // c.moveTo(100, 100)
  // c.lineTo(0, 200)
  // c.moveTo(0, 200)
  // c.lineTo(100, 300)
  // c.moveTo(100, 300)
  // c.lineTo(0, 400)
  // c.moveTo(0, 400)
  // c.lineTo(100, 500)
  // c.moveTo(100, 500)
  // c.lineTo(200, 400)
  // c.moveTo(200, 400)
  // c.lineTo(100, 300)
  // c.moveTo(200, 400)
  // c.lineTo(300, 500)
  // c.moveTo(100, 100)
  // c.lineTo(200, 0)
  // c.moveTo(100, 100)
  // c.lineTo(200, 200)
  // c.moveTo(200, 200)
  // c.lineTo(100, 300)
  // c.moveTo(200, 0)
  // c.lineTo(300, 100)
  // c.moveTo(300, 100)
  // c.lineTo(200, 200)
  // c.moveTo(300, 100)
  // c.lineTo(400, 0)
  // c.moveTo(300, 500)
  // c.lineTo(400, 400)
  // c.moveTo(400, 400)
  // c.lineTo(300, 300)
  // c.moveTo(300, 300)
  // c.lineTo(200, 400)
  // c.moveTo(300, 300)
  // c.lineTo(200, 200)
  // c.moveTo(300, 100)
  // c.lineTo(400, 200)
  // c.moveTo(400, 200)
  // c.lineTo(300, 300)
  // c.moveTo(400, 400)
  // c.lineTo(500, 500)
  // c.moveTo(400, 200)
  // c.lineTo(500, 300)
  // c.moveTo(500, 300)
  // c.lineTo(400, 400)
  // c.moveTo(400, 0)
  // c.lineTo(500, 100)
  // c.moveTo(500, 100)
  // c.lineTo(400, 200)
  // c.strokeStyle = 'green'
  // c.stroke()
  // // arcs
  // var Arc = function (x, y, radius, startPos, endPos) {
  //   this.x = x
  //   this.y = y
  //   this.radius = radius
  //   this.startPos = startPos
  //   this.endPos = endPos
  //   this.draw = function () {
  //     c.beginPath()
  //     c.arc(this.x, this.y, this.radius, this.startPos, this.endPos)
  //     c.strokeStyle = 'green'
  //     c.fillStyle = '#555'
  //     c.fill()
  //     c.stroke()
  //   }
  // }
  // var arc1 = new Arc(100, 200, 40, 0, Math.PI * 2)
  // arc1.draw()
  // var arc2 = new Arc(200, 100, 40, 0, Math.PI * 2)
  // arc2.draw()
  // var arc3 = new Arc(200, 300, 40, 0, Math.PI * 2)
  // arc3.draw()
  // var arc4 = new Arc(300, 200, 40, 0, Math.PI * 2)
  // arc4.draw()
  // var arc5 = new Arc(300, 400, 40, 0, Math.PI * 2)
  // arc5.draw()
  // var arc6 = new Arc(400, 300, 40, 0, Math.PI * 2)
  // arc6.draw()
  // var arc7 = new Arc(400, 100, 40, 0, Math.PI * 2)
  // arc7.draw()
  // var arc8 = new Arc(100, 400, 40, 0, Math.PI * 2)
  // arc8.draw()
  // finish
  // practice 2
  var Circles = function (x, y, radius, dx, dy) {
    this.x = x
    this.y = y
    this.radius = radius
    this.dx = dx
    this.dy = dy
    this.draw = function () {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      c.fillStyle = 'lightblue'
      c.strokeStyle = 'blue'
      c.fill()
      c.stroke()
    }
    this.update = function () {
      if (this.x >= cv.width - this.radius || this.x < 0 + this.radius) {
        this.dx = -this.dx
      }
      if (this.y >= cv.height - this.radius || this.y < 0 + this.radius) {
        this.dy = -this.dy
      }
      this.x += this.dx
      this.y += this.dy
      this.draw()
    }
  }
  var radius = 30
  var x = (Math.random() * cv.width) + radius * 2 - radius
  console.log(x)
  var y = (Math.random() * cv.height) + radius * 2 - radius
  c.beginPath()
  c.arc(x, y, radius, 0, Math.PI * 2)
  c.fillStyle = 'lightblue'
  c.strokeStyle = 'blue'
  c.fill()
  c.stroke()
  // console.log(newData)
  // var circlesArray = []
  // for (var i = 0; i < 100; i++) {
  //   var radius = 30
  //   var x = (Math.random() * cv.width - radius * 2) + radius
  //   // console.log(x)
  //   var y = (Math.random() * cv.height - radius * 2) + radius
  //   var dx = (Math.random() * -0.5) * 8
  //   var dy = (Math.random() * -0.5) * 8
  //   circlesArray.push(new Circles(x, y, radius, dx, dy))
  // }
  // console.log(circlesArray)
  // function name () {
  //   window.requestAnimationFrame(name)
  //   c.clearRect(0, 0, cv.width, cv.height)
  //   for (var i = 0; i < circlesArray.length; i++) {
  //     circlesArray[i].update()
  //   }
  // }
  // name()
  // for (var i = 0; i < 100; i++) {
  //   var color = ['red', 'green', 'blue', 'skyblue', 'lightgray', 'lightblue']
  //   // console.log(Math.floor(Math.random() * color.length))
  //   var x = Math.random() * cv.width
  //   var y = Math.random() * cv.height
  //   c.beginPath()
  //   c.arc(x, y, 30, 0, Math.PI * 2)
  //   c.fillStyle = color[Math.floor(Math.random() * color.length)]
  //   c.strokeStyle = 'blue'
  //   c.fill()
  //   c.stroke()
  // }
}
