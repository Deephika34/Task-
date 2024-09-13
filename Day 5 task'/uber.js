let baseFee = 10;
let cities = ["Chennai", "Coimbatore", "Trichy", "Madurai"];
let uberRates = [55, 40, 35, 20]
let gender = ["Male", "Female"]
let femaleCustomersDiscountPrice = 50;
let vehicleType = ["SUV", "SEDAN", "AUTO", "BIKE"];
let vehicleCharges = [50,80,30,10]

//User Inputs
let customerName = "Abhi"
let customerCity = "Coimbatore"
let customerGender = "male" 
let customerPreferredVehicle = "SEDAN"

console.log(`Hai, ${customerName} Welcome to Uber... Your Preferred Vehicle is ${customerPreferredVehicle}`)

   
    function getDistanceRate(customerCity, index){
        if(customerGender=="Female"){
            let distanceRate = ((uberRates[index] * baseFee) - femaleCustomersDiscountPrice)
            return distanceRate;
        }
        else
        {
            let distanceRate = (uberRates[index] * baseFee)
            return distanceRate;
        }
    
    }

    function getVehicleRate(vehicleType,index){

        let uberRate = vehicleCharges[index]
        return uberRate
    }
    
    console.log(customerCity, "rate is", getDistanceRate(customerCity,cities.indexOf(customerCity)) + getVehicleRate(customerPreferredVehicle,vehicleType.indexOf(customerPreferredVehicle)))

getDistanceRate(customerCity)
getVehicleRate(vehicleType)