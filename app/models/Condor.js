class Condor {
  constructor(
      name = '',
      color = '',
      gender = '',
      weight = 0,
      wingspan = "",
      beakSize = '',
  ) {
      this.id = 2,
      this.name = name;
      this.color = color;
      this.gender = gender;
      this.weight = weight;
      this.wingspan = wingspan;
      this.beakSize = beakSize;
  }
  eat(food){
      console.log(`Chomp chomp all the ${food}ies.`)
  }
}

export default Condor;