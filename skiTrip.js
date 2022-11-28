function skiTrip (input) {

   let nightsCount = Number(input[0]) - 1; 
   let typeOfRoom = input[1]; 
   let feedback = input[2]; 

   let room = nightsCount * 18; 
   let apartment = nightsCount * 25; 
   let presidentApartment = nightsCount * 35; 

   let price = 0;

   switch (feedback) {
    
    case 'positive': 

    if (typeOfRoom === 'room for one person') {
      price = (room * 1.25).toFixed(2)
    } 

    if (typeOfRoom === 'apartment') {
      if (nightsCount < 10) {
        price = ((apartment * 0.70) * 1.25).toFixed(2);
      } else if (nightsCount > 10 && nightsCount < 15) {
        price = ((apartment * 0.65) * 1.25).toFixed(2);
      } else {
        price = ((apartment * 0.50) * 1.25).toFixed(2);
      }
    }

    if (typeOfRoom === 'president apartment') {
      if (nightsCount < 10) {
        price = ((presidentApartment * 0.90) * 1.25).toFixed(2);
      } else if (presidentApartment > 10 && nightsCount < 15) {
        price = ((presidentApartment * 0.85) * 1.25).toFixed(2);
      } else {
        price = ((presidentApartment * 0.80) * 1.25).toFixed(2);
      }
    }break;

      case 'negative': 

      if (typeOfRoom === 'room for one person') {
        price = (room * 0.90).toFixed(2)
      } 
  
      if (typeOfRoom === 'apartment') {
        if (nightsCount < 10) {
          price = ((apartment * 0.70) * 0.90).toFixed(2);
        } else if (nightsCount > 10 && nightsCount < 15) {
          price = ((apartment * 0.65) * 0.90).toFixed(2);
        } else {
          price = ((apartment * 0.50) * 0.90).toFixed(2);
        }
      }
  
      if (typeOfRoom === 'president apartment') {
        if (nightsCount < 10) {
          price = ((presidentApartment * 0.90) * 0.90).toFixed(2);
        } else if (nightsCount > 10 && nightsCount < 15) {
          price = ((presidentApartment * 0.85) * 0.90).toFixed(2);
        } else {
          price = ((presidentApartment * 0.80) * 0.90).toFixed(2);
        }
   } break;
   
}
console.log(price)
}
skiTrip (["30",

"president apartment",

"negative"])
