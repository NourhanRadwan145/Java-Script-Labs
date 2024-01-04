const PersonMethods = {
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
    return {
      fullName,
      money,
      sleepMood,
      healthRate,
      ...PersonMethods
    };
  }
  
  // Creating a new instance of Person using Factory Function
  const person4 = createPerson('Mona Mohammed', 80, 'happy', 95);
  person4.sleep(5);
  person4.eat(2);
  person4.buy(4);

  console.log(person4);
  