var year, size, product=1;
year=prompt("Enter your birth year");
size=prompt("Enter your shoe size");


function myfctn(){
    var product= (parseInt(size)*2+5)*50 - parseInt(year) + 1766;
    window.alert(product);
}

myfctn();