//Get all the countries from Asia continent /region using Filter function


let xmlh = new XMLHttpRequest
xmlh.open("GET","https://restcountries.com/v3.1/all");
xmlh.send()
xmlh.onload = function () {
    const data =JSON.parse(xmlh.response);

    data.filter((countries)=>{
        return countries.region ==="Asia";
    })
    console.log(xmlh);
}

//---------------------------------------------------------------------------------------------

//b.Get all the countries with a population of less than 2 lakhs using Filter function



let xmlh1 = new XMLHttpRequest
xmlh1.open("GET","https://restcountries.com/v3.1/all");
xmlh1.send()
xmlh1.onload = function () {
    const data1 =JSON.parse(xmlh1.response);

    const pop = data1.filter((element)=>{
        return element.population<200000;
    })
    console.log(pop)
}

//--------------------------------------------------------------------------------------------------
//c.Print the following details name, capital, flag using forEach function


let xmlh2 = new XMLHttpRequest
xmlh2.open("GET","https://restcountries.com/v3.1/all");
xmlh2.send()
xmlh2.onload = function () {
    const data2 =JSON.parse(xmlh2.response);

    const details = data2.forEach((element)=>{
        
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    });

}

//-------------------------------------------------------------------------------------------------
//d.Print the total population of countries using reduce function

let xmlh3 = new XMLHttpRequest
xmlh3.open("GET","https://restcountries.com/v3.1/all");
xmlh3.send()
xmlh3.onload = function () {
    const data3 =JSON.parse(xmlh2.response);

    const total = data3.reduce((acc,curr)=>{
        return acc+curr.population;
        
       
    },0);
    console.log(total);

}

//----------------------------------------------------------------------------

//e.Print the country which uses US Dollars as currency

let xmlh4 = new XMLHttpRequest
xmlh4.open("GET","https://restcountries.com/v3.1/all");
xmlh4.send()
xmlh4.onload = function () {
    const data4 =JSON.parse(xmlh4.response);

    const currency = data4.filter((element)=>{
        for (let key in element.currencies)
{
    if(element.currencies[key].code==="USD"){
        return element
    }
}        
       
    })
    console.log(currency);

}