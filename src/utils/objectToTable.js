const objectToTable = (objectArray = []) => {
  if (typeof (objectArray) !== "object") {
    throw new Error("Expected array")
  }
  let values = []
  objectArray.forEach((element) => {
    let row = []
    Object.keys(element).forEach(function (key) {
      row.push(element[key]);
    });
    values.push(row);
  })
  return values;
}

export default objectToTable;