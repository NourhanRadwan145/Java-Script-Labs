class Triple {
    static customName = "Tripler";
    static description = "I triple any number you provide";
  
    static calculate(n = 1) {
      return n * 3;
    }
  }
  
  class SquaredTriple extends Triple {
    static description = "I square the triple of any number you provide";
    static longDescription;
  
    static calculate(n) {
      return super.calculate(n) * super.calculate(n);
    }
  }
  
  // Example test
  console.log(Triple.description); // Output: 'I triple any number you provide'
  console.log(Triple.calculate()); // Output: 3
  console.log(Triple.calculate(6)); // Output: 18
  console.log(Triple.customName); // Output: 'Tripler'
  
  console.log(SquaredTriple.calculate(3)); // Output: 81
  console.log(SquaredTriple.description); // Output: 'I square the triple of any number you provide'
  console.log(SquaredTriple.longDescription); // Output: undefined
  console.log(SquaredTriple.customName); // Output: 'Tripler'
  