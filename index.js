// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (localDriver) {
    if (localDriver.hometown === hometown) {
      console.log(localDriver.name);
    }
  });
};
