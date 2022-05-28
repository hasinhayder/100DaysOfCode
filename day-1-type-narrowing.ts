//100DaysOfCode - Day 1

type Rectangle = {
  width: number
  height: number
}

type Circle = {
  radius: number
}

const pi: number = 3.1415_9265_3589_7932_38 // yes you can use underscores to make a long number readable

//type narrowing using property check
function getArea(shape: Rectangle | Circle): number {
  //we are accepting Rectangle or Circle types
  if ("radius" in shape) {
    //so this is shape is of Circle type
    return pi * Math.pow(shape.radius, 2)
  }
  return shape.width * shape.height
}

const c: Circle = {
  radius: 20,
}

const r: Rectangle = {
  width: 10,
  height: 8,
}

console.log(getArea(c))
console.log(getArea(r))
