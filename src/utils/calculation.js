export function circularPositionFromIndex(index, total, radius = 4) {
  let degree = 270 / total;
  let angle = degrees_to_radians(degree) * index + 1;
  let x = Math.sin(angle) * radius;
  let z = Math.cos(angle) * radius;
  let y = 2;

  return { x, y, z };
}

function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export function circularPositionFrom(index, total, row = 2, radius = 6) {
  let quotient = Math.floor(total / row);
  let remain = total % row;
  let y = 0;
  var degree = 360 / quotient;
  if (index > quotient) {
    degree = 360 / quotient;
    y = 3.4;
  } else {
    degree = 360 / (quotient + remain);
    y = 1;
  }
  let angle = degrees_to_radians(degree) * index;
  let x = Math.sin(angle) * radius;
  let z = Math.cos(angle) * radius;

  return { x, y, z };
}

export function circularFriendPositionFrom(index, total, radius = 5) {
  let quotient = Math.floor(total / 3);
  let remain = total % 3;
  let y = 0;
  var degree = 360 / quotient;
  console.log(index, quotient, remain);
  if (index < quotient) {
    degree = 360 / quotient;
    y = 3.1;
    console.log("---");
  } else if (index >= 10 && index < 20) {
    console.log("--");
    degree = 360 / quotient;
    y = 2;
  } else {
    degree = 360 / (quotient + remain);
    console.log("-");
    y = 0.9;
  }
  let angle = degrees_to_radians(degree) * index;
  let x = Math.sin(angle) * radius;
  let z = Math.cos(angle) * radius;

  return { x, y, z };
}
