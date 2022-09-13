const aCar = { 
    owner : "Joe Bloggs", 
    type : {
        make : 'Toyota', 
        model : 'Corolla',
        cc : 1.8,
    },
    registration : {
        year : 201,
        county : 'WD',
        number : 1058,  
    },
};
aCar.mileage = 10000
aCar.colour = {
    exteriorColour : 'red',
    interiorFabric : {
        texture : 'leather',
        shade : 'cream',
    },
}

console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log("Reg. = " + aCar.registration.year + "-" + aCar.registration.county +
        "-" + aCar.registration.number);
console.log("It is a " + aCar.colour.exteriorColour + " car, " + 
        aCar.mileage + " mileage, with " + aCar.colour.interiorFabric.texture + " interior.")
