class Donkey {
  constructor(
      name = '',
      pattern = '',
      gender = '',
      weight = 0,
      height = "",
      age = 0,
  ) {
      this.id = 3,
      this.name = name;
      this.pattern = pattern;
      this.gender = gender;
      this.weight = weight;
      this.height = height;
      this.age = age;
  }
  eat(food){
      console.log(`Chomp chomp all the ${food}ies.`)
  }
}

export default Donkey;