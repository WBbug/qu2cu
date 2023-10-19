export function qu2cu(points) {
  const result = [];
  for (let i = 0; i < points.length; i += 2) {
    const start = points[i + 0];
    assertExists(start);
    const controlPoint = points[i + 1];
    assertExists(controlPoint);
    const end = points[i + 2];
    assertExists(end);

    const cubicControl1 = [
        controlPoint[0] + (start[0] - controlPoint[0]) / 3,
        controlPoint[1] + (start[1] - controlPoint[1]) / 3,
      ];
      const cubicControl2 = [
        controlPoint[0] + (end[0] - controlPoint[0]) / 3,
        controlPoint[1] + (end[1] - controlPoint[1]) / 3,
      ];

    if (i === 0) {
      result.push(start, cubicControl1, cubicControl2, end);
    } else {
      result.push(cubicControl1, cubicControl2, end);
    }
  }
  return result;
}

function assertExists(val) {
  if (val === null || val === undefined) {
    throw new Error("val does not exist");
  }
}
