class Person {
    constructor(fullName,gender,height,weight) {
        this.fullName = fullName;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }

getName(fullName,gender) {
    
    if(this.gender=="male") {
        return "Hello Mr." + this.fullName;
    } else 
        return "Hello Ms." + this.fullName;

}

getBmi(height,weight) {
    let bmi = this.weight / (this.height * this.height)
    return bmi
}

}

let person1 = new Person("Hema","female",163,65)
console.log(person1.getName(),"Your BMI is " + person1.getBmi())