const readline = require('readline');
const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout,
    prompt: '\x1b[36mCOMMAND>\x1b[0m '
  }
);

function Dog(name, breed, age) {
  this.dogName = name;
  this.dogAge = age;
  this.dogBreed = breed;

  this.getName = function () {
    return this.dogName;
  }

  this.getAge = function () {
    return this.dogAge;
  }

  this.getBreed = function () {
    return this.dogBreed;
  }

  this.renameDog = function (newName) {
    this.dogName = newName;
  }

  this.changeAge = function (newAge) {
    this.dogAge = newAge;
  }
}

console.log(
  '\x1b[32mDog v1.0\x1b[0m\n' +
  'Type \'help\' to display possible commands.\n'
);

var dogs = [];

rl.prompt();
rl.on('line', (userInput) =>
  {
    console.log(userInput);
    var inputData = userInput.trim().split(" ");
    switch (inputData[0]) {
      default:
        console.log('\x1b[31mUnknown command\x1b[0m');
        rl.prompt();
        break;

      case 'exit':
        process.exit(0);

      case 'help':
        console.log(
          'Usage:\n' +
          '\x1b[32madd <dog name> <dog breed> <dog age>\x1b[0m - Adds dog\n' +
          '\x1b[32mshow\x1b[0m - Display all dogs\n' +
          '\x1b[32mshow details <dog name>\x1b[0m - Display detailed information about a dog\n' +
          '\x1b[32mhelp\x1b[0m - Display this crap\n' +
          '\x1b[32mexit\x1b[0m - Close program\n'
        );
        rl.prompt();
        break;

      case 'show':
        switch (inputData[1]) {
          default:
            if (dogs.length == 0) {
                console.log('No dogs to show');
              } else {
                console.log('Your dogs:');
                for (i in dogs) {
                  console.log('\x1b[32m' + dogs[i].getName() + '\x1b[0m');
                }
            }
            break;

          case 'details':
            for (i in dogs) {
              if (dogs[i].getName() == inputData[2]) {
                console.log(
                  'Name: \x1b[32m' + dogs[i].getName() + '\x1b[0m\n' +
                  'Breed: \x1b[32m' + dogs[i].getBreed() + '\x1b[0m\n' +
                  'Age: \x1b[32m' + dogs[i].getAge() + '\x1b[0m\n'
                );
              }
            }
            break;
        }
        rl.prompt();
        break;

      case 'add':
        var dog = new Dog(inputData[1], inputData[2], inputData[3]);
        dogs.push(dog);
        console.log('\x1b[32m' + inputData[1] + '\x1b[0m added');
        rl.prompt();
        break;

      case 'age':
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
        for (i in dogs) {
          averageAge.dogAge += dogs[i].getAge();
          averageAge.dogCount++;
        }
        console.log('Average age is: ' + averageAge.value());
        rl.prompt();
        break;
    }
  }
);
