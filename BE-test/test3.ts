/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

type Data = typeof data
function formatSession2(data: Data) {
  return data.map(format)
}

function format(item: Data[0]) {

  return Object.fromEntries(Object.entries(item).filter(v => v !== undefined || v !== null))
}

// console.log(formatSession2(data));
console.log(JSON.stringify(formatSession2(data)));
