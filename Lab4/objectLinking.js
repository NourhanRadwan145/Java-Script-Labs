const humanMethods = {
    sleep(hours) {
      if (hours === 7) {
        this.sleepMood = 'happy';
      } else if (hours < 7) {
        this.sleepMood = 'tired';
      } else {
        this.sleepMood = 'lazy';
      }
    },
  
    eat(meals) {
      if (meals === 3) {
        this.healthRate = 100;
      } else if (meals === 2) {
        this.healthRate = 75;
      } else if (meals === 1) {
        this.healthRate = 50;
      }
    },
  
    buy(items) {
      this.money -= items * 10;
    }
  };
  
  function createPerson(fullName, money, sleepMood, healthRate) {
    const person = Object.create(humanMethods);
    person.fullName = fullName;
    person.money = money;
    person.sleepMood = sleepMood;
    person.healthRate = healthRate;
    return person;
  }
  
  // Creating a new instance of Person using OLOO
  var person3 = createPerson('Ali Ahmed', 200, 'lazy', 90);
  person3.sleep(7);
  person3.eat(1);
  person3.buy(5);

  console.log(person3);
  