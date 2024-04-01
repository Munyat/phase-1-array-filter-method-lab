function findMatching(arrayDrivers, driverName) {
  return arrayDrivers.filter(function (driver) {
    return driver.toUpperCase() === driverName.toUpperCase();
  });
}

function fuzzyMatch(arrayDrivers, driverName) {
  const driver = arrayDrivers.filter((driver) =>
    driver.toLowerCase().startsWith(driverName.toLowerCase())
  );
  return driver;
}

function matchName(arrayDrivers, driverName) {
  const nameProperty = arrayDrivers.filter(
    (driverObject) => driverObject.name === driverName
  );
  return nameProperty;
}
