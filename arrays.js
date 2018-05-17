
var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"]


function addElementToBeginningOfArray(arr, e){
  var r = [...arr]
  r.unshift(e)
  return r
}

function destructivelyAddElementToBeginningOfArray(arr,e){
  arr.unshift(e)
  return r
}

function addElementToEndOfArray (){
  var r = [...arr]
  r.push(e)
  return r
}

function destructivelyAddElementToEndOfArray(){
  arr.push(e)
  return r
}

cars = ["Honda","Toyota"]

console.log(addElementToBeginningOfArray(cars,"BMW"))
