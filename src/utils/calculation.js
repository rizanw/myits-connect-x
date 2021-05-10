export function circularPositionFrom(index, boxSize, radius = 10) {
  const diameter = radius * 2;
  const circumference = diameter * Math.PI;
  let itemsPerCircle = Math.floor(circumference / (boxSize * 6));
  let radiansPerIndex = (Math.PI * 2) / itemsPerCircle;

  let yIndex = Math.floor((index + itemsPerCircle) / itemsPerCircle);
  let y =
    yIndex % 2 === 0 ? 4 * yIndex * boxSize : Math.ceil(4 * yIndex * boxSize);

  let circleIndex = (index + itemsPerCircle) % itemsPerCircle;
  let angle = circleIndex * radiansPerIndex;

  console.log("angle", angle);
  let x = Math.sin(angle) * radius;
  let z = Math.cos(angle) * radius;

  console.log("before", { x, z });
  return { x: x, y: y, z: z };
}

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
