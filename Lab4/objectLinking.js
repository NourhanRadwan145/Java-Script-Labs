const humanMethods = {
    init(fullName, money, sleepMood, healthRate) {
      this.fullName = fullName;
      this.money = money;
      this.sleepMood = sleepMood;
      this.healthRate = healthRate;
      return this;
    },
  
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
  
  const createHuman = (fullName, money, sleepMood, healthRate) => {
    const person = Object.create(humanMethods);
    person.init(fullName, money, sleepMood, healthRate);
    return person;
  };
  
  // Creating a new instance of Person using OLOO with init method
  const person = createHuman('Alice', 200, 'happy', 90);
  person.sleep(7);
  person.eat(2);
  person.buy(3);
  
  console.log(person);
  
  