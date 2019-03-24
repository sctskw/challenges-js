/*
 * convert 07:05:45PM => 19:05:45
 *
 */

function timeConversion (str) {
  let [h, m, s] = str.split(':')
  let hours = parseInt(h)
  let mins = parseInt(m)
  let secs = parseInt(s.slice(0, 2))
  let pm = /PM/ig.test(str) === true

  // convert to 24HR
  if (pm) hours = hours + 12
  if (hours >= 24) hours = hours - 24

  // pad the units with 0's
  function pad (unit) {
    return unit.toString().padStart(2, 0)
  }

  return [pad(hours), pad(mins), pad(secs)].join(':')
}

console.log(timeConversion('07:05:45PM'))
