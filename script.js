function initalize(){

    e1 = document.getElementById("e1");
    e2 = document.getElementById("e2"); 
    e3 = document.getElementById("e3"); 
    e4 = document.getElementById("e4");
    d1 = document.getElementById("d1"); 
    d2 = document.getElementById("d2");
    d3 = document.getElementById("d3");   
    d4 = document.getElementById("d4");    
    t1 = document.getElementById("t1"); 

    proteinCal = document.getElementById("Protein");
    carbCal = document.getElementById("Carb");
    fatCal = document.getElementById("Fat");
    aTotal = document.getElementById("atotal");

    apCal = 0;
    acCal = 0;
    afCal = 0;

    epCal = 0;
    ecCal = 0;
    efCal = 0;

    dpCal = 0;
    dcCal = 0;
    dfCal = 0;
}

function changeCal(i, type, dish){ // i = change in cal; type = p/c/f; dish = a/e/d
    if(dish === "a" ){
        if(type === "p" && apCal + i >= 0){
            apCal += i;
        }
        if(type === "c" && acCal + i >= 0){
            acCal += i;
        }
        if(type === "f" && afCal + i >= 0){
            afCal += i;
        }
    }

    if(dish === "e"){
        if(type === "p" && epCal + i >= 0){
            epCal += i;
        }
        if(type === "c" && ecCal + i >= 0){
            ecCal += i;
        }
        if(type === "f" && efCal + i >= 0 ){
            efCal += i;
        }
    }

    if(dish === "d"){
        if(type === "p" && dpCal + i >= 0){
            dpCal += i;
        }
        if(type === "c" && dcCal + i >= 0){
            dcCal += i;
        }
        if(type === "f" && dfCal + i >= 0 ){
            dfCal += i;
        }
    }
        
    display();

}


function display(){
    proteinCal.innerHTML = apCal;
    carbCal.innerHTML = acCal;
    fatCal.innerHTML = afCal;
    atotal.innerHTML = apCal + acCal + afCal;

    e1.innerHTML = epCal; 
    e2.innerHTML = ecCal; 
    e3.innerHTML = efCal; 
    e4.innerHTML = epCal + ecCal + efCal; 

    d1.innerHTML = dpCal; 
    d2.innerHTML = dcCal; 
    d3.innerHTML = dfCal; 
    d4.innerHTML = dpCal + dcCal + dfCal; 

    t1.innerHTML = dpCal + dcCal + dfCal + apCal + acCal + afCal + epCal + ecCal + efCal; 

}