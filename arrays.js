

function addElementToBeginningOfArray(arr, e){
  var r = [...arr]
  r.unshift(e)
  return r
}

function destructivelyAddElementToBeginningOfArray(arr,e){
  arr.unshift(e)
  return r
}

cars = ["Honda","Toyota"]

console.log(addElementToBeginningOfArray(cars,"BMW"))
