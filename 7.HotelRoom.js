function hotelRoom (input){

    let month = input[0];
    let numNights = Number (input[1]);
    let price = 0;

    let placeType = '' ;

    if (month === "May" || month === "October"){
        placeType = "Studio" ;
        price = numNights * 50 ;
    } else {
        placeType = "Apartment" ;
        price = numNights * 65 ;
    }
    if (month === "June" || month === "September"){
        placeType = "Studio" ;
        price = numNights * 75.20 ;
    } else {
        placeType = "Apartment" ;
        price = numNights * 68.70 ;
    }
    if (month === "July" || month === "August"){
        placeType = "Studio" ;
        price = numNights * 76 ;
    } else {
        placeType = "Apartment" ;
        price = numNights * 77 ;
    }


    let discountApartment = 0;
    let discountStudio = 0;


    if (placeType === "Studio" && (month === "May" || month === "October") && numNights > 7) {
        discountStudio = price * 0.95;
      } else if (placeType === "Studio" && numNights > 14 && (month === "May" || month === "October")){
        discountStudio = price * 0.70;
      } else if (placeType === "Studio" && numNights > 14 && (month === "June" || month === "September")){
        discountStudio = price * 0.80;
      } else if (placeType === "Apartment" && numNights > 14){
        discountApartment = price * 0.90;
      } 

      let totalPriceApartment = price - discountStudio;
      let totalPriceStudio =  price - discountApartment;


      console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
      console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);

} 

hotelRoom (["May","15"])
hotelRoom (["June","14"])
