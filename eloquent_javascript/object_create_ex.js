const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Pranav'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();

  const School = {
      approved:false,
      printapproved: function(){
          console.log(`${this.college} is approved`)
      }
  }
  const col = Object.create(School);
  col.college = 'Insphere';
  col.approved - true;
  col.printapproved();