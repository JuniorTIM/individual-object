const car = {
  brand: "Audi",
  model: "RS6",
  quattro: true,
  color: "red",
  hoodCheck: false,
  engine: {
    engineStart: true,
    capacity: 4.4,
    horsePower: 605,
    fuel: 6,
  },

  changeColor: function (newColor) {
    this.color = newColor;
  },

  changeDrive: function (boolean) {
    if (boolean === false) {
      this.quattro = false;
    } else if (boolean === true) {
      this.quattro = true;
    }
  },

  goDrive: function () {
    if (this.engine.fuel > 0) {
      this.engine.fuel -= 5;
    }
  },

  hoodOpenLock: function (boolean) {
    if (boolean === true) {
      this.hoodCheck = true;
    } else if (boolean === false) {
      this.hoodCheck = false;
    }
  },

  engineOnOff: function (boolean) {
    if (boolean === true) {
      this.engine.engineStart = true;
    } else if (boolean === false) {
      this.engine.engineStart = false;
    }
  },
  
};
