"use strict"

console.log(_.map([1, 2, 3], x => x * x))
console.log(
  _.map(
    {
      a: 1,
      b: 2,
      c: 3
    },
    (v, k) => k + "=" + v
  )
)

var obj = {
  name: "bob",
  school: "No.1 middle school",
  address: "xueyuan road"
}

var upper = _.map(obj, (v, k) => k + "=" + v)
console.log(JSON.stringify(upper))

console.log(_.every([1, 4, 7, -3, -9], x => x > 0))
console.log(_.some([1, 4, 7, -3, -9], x => x > 0))

console.log(
  _.every(
    obj,
    (value, key) => key === key.toLowerCase() && value === value.toLowerCase()
  )
)
console.log(
  _.some(
    obj,
    (value, key) => key === key.toLowerCase() && value === value.toLowerCase()
  )
)

var arr = [3, 5, 7, 9]
console.log(_.max(arr))
console.log(_.min(arr))

console.log(_.max([]))
console.log(_.min([]))

console.log(
  _.max({
    a: 1,
    b: 2,
    c: 3
  })
)

var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99]
var groups = _.groupBy(scores, x => {
  if (x < 60) {
    return "C"
  } else if (x < 80) {
    return "B"
  } else {
    return "A"
  }
})
console.log(groups)

console.log(_.shuffle([1, 2, 3, 4, 5, 6]))
console.log(_.sample([1, 2, 3, 4, 5, 6]))
console.log(_.sample([1, 2, 3, 4, 5, 6], 3))

arr = [2, 4, 6, 8]
console.log(_.first(arr))
console.log(_.last(arr))

console.log(_.flatten([1, [2], [[4], [5]]]))

var names = ["Adam", "Lisa", "Bart"]
var scores = [85, 92, 59]
console.log(_.zip(names, scores))
console.log(_.object(names, scores))

var namesAndScores = [
  ["Adam", 85],
  ["Lisa", 92],
  ["Bart", 59]
]
console.log(_.unzip(namesAndScores))

console.log(_.range(10))
console.log(_.range(1, 11))
console.log(_.range(0, 30, 5))
console.log(_.range(0, -10, -1))

arr = ["Apple", "orange", "banana", "ORANGE", "apple", "PEAR"]
console.log(
  _.uniq(
    arr,
    false,
    _.iteratee(x => x.toUpperCase())
  )
)

var s = " Hello  "
var fn = _.bind(s.trim, s)
console.log(fn())

var pow2N = _.partial(Math.pow, 2)
console.log(pow2N(3))
console.log(pow2N(5))
console.log(pow2N(10))

var cube = _.partial(Math.pow, _, 3)
console.log(cube(3))
console.log(cube(5))
console.log(cube(10))

// function factorial(n) {
//   console.log("start calculate " + n + "!...")
//   var s = 1,
//     i = n
//   while (i > 1) {
//     s = s * i
//     i--
//   }
//   console.log(n + "! = " + s)

//   return s
// }

// console.log(factorial(10))

var factorial = _.memoize(n => {
  console.log("start calculate " + n + "!...")
  var s = 1,
    i = n
  while (i > 1) {
    s = s * i
    i--
  }
  console.log(n + "! = " + s)

  return s
})

console.log(factorial(10))
console.log(factorial(10))

var register = _.once(() => {
  console.log("Register ok!")
})

register()
register()
register()

_.delay(() => console.log("delayed"), 2000)

var log = _.bind(console.log, console)
_.delay(log, 2000, "Hello,", "world!")

function Student(name, age) {
  this.name = name
  this.age = age
}

Student.prototype.school = "No.1 Middle School"

var xiaoming = new Student("小明", 20)
console.log(_.keys(xiaoming))
console.log(_.allKeys(xiaoming))

var obj = {
  name: "小明",
  age: 20
}
console.log(_.values(obj))

obj = { a: 1, b: 2, c: 3 }
console.log(_.mapObject(obj, (v, k) => 100 + v))

obj = { Adam: 90, Lisa: 85, Bart: 59 }
console.log(_.invert(obj))

var a = { name: "Bob", age: 20 }
console.log(_.extend(a, { age: 15 }, { age: 88, city: "Beijing" }))

var source = {
  name: "小明",
  age: 20,
  skills: ["JavaScript", "CSS", "HTML"]
}
var copied = _.clone(source)
console.log(JSON.stringify(copied, null, "  "))
console.log(source.skills === copied.skills)

var o1 = { name: "Bob", skills: { Java: 90, JavaScript: 99 } }
var o2 = { name: "Bob", skills: { JavaScript: 99, Java: 90 } }
console.log(o1 === o2)
console.log(_.isEqual(o1, o2))
