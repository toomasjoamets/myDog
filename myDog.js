function Dog(name, age, breed) {
  this.dogName = name;
  this.dogAge = age;
  this.breed = breed;

  this.getName = function () {
    return this.dogName;
  }

  this.getAge = function () {
    return this.dogAge;
  }

  this.renameDog = function (newName) {
    this.dogName = newName;
  }
}

var dogs = [];

var dog = new Dog("Blue", 14, "ACD");
dogs.push(dog);

var dog = new Dog("Daisy", 11, "ACD");
dogs.push(dog);

for (dog in dogs) {
  console.log(dogs[dog].getName());
}

for (dog in dogs) {
  if (dogs[dog].getName() == "Blue") {
    dogs[dog].renameDog("Putukas");
  }
}

for (dog in dogs) {
  console.log(dogs[dog].getName());
}

var averageAge = {
  dogAge: 0,
  dogCount: 0,
  value: function () {
    if (this.dogCount == 0) {
      age = 0;
    } else {
      age = this.dogAge / this.dogCount;
    }
    return age;
  }
}

for (dog in dogs) {
  averageAge.dogAge += dogs[dog].getAge();
  averageAge.dogCount++;
}

console.log(averageAge.value());
