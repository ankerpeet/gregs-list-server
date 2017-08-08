var express = require('express')
var bodyParser = require('body-parser')
var server = express()
var port = 3000

// MIDDLEWARE
server.use(express.static(__dirname + '/public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

//House functions
var houses = [{
  description: 'A Sweet House',
  sqft: '1500',
  price: 105000,
  img: '//placehold.it/200x200'
}]

function House(description, sqft, price, img) {
  this.description = description
  this.sqft = sqft
  this.price = price
  this.img = img
}

function addHouse(description, sqft, price, img) {
  var house = new House(description, sqft, price, img)
  houses.push(house)
}

server.get('/api/houses', function (req, res) {
  res.send(houses)
})

server.post('/api/houses', function (req, res) {
  var house = req.body
  addHouse(house.description, house.sqft, house.price, house.img)
  res.send(houses)
})

//Cars Functions 
var cars = [{
  description: 'A Sweet car',
  year: '1500',
  price: 8000,
  img: '//placehold.it/200x200'
}]

function Car(description, year, price, img) {
  this.description = description
  this.year = year
  this.price = price
  this.img = img
}

function addCar(description, year, price, img) {
  var car = new Car(description, year, price, img)
  cars.push(car)
}

server.get('/api/cars', function (req, res) {
  res.send(cars)
})

server.post('/api/cars', function (req, res) {
  var car = req.body
  addCar(car.description, car.year, car.price, car.img)
  res.send(cars)
})

//Jobs Functions 
var jobs = [{
  description: 'its a job',
  salary: 8000,
  img: '//placehold.it/200x200'
}]

function Job(description, salary, img) {
  this.description = description
  this.salary = salary
  this.img = img
}

function addJob(description, salary, img) {
  var job = new Job(description, salary, img)
  jobs.push(job)
}

server.get('/api/jobs', function (req, res) {
  res.send(jobs)
})

server.post('/api/jobs', function (req, res) {
  var job = req.body
  addJob(job.description, job.salary, job.img)
  res.send(jobs)
})

server.listen(port, () => {

  console.log(`
    Starting up node,
    Available on:
    http://127.0.0.1:${port}
    Hit CTRL-C to stop the server`)

})