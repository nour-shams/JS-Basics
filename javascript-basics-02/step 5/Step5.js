var images = document.querySelector("#image1");
var images2 = document.querySelector("#image2");
var images3 = document.querySelector("#image3");
var images4 = document.querySelector("#image4");
var images5 = document.querySelector("#image5");

function toggle(){
    image_element= document.getElementById("image1");
    image_element2= document.getElementById("image2");
    image_element3= document.getElementById("image3");
    image_element4= document.getElementById("image4");
    image_element5= document.getElementById("image5");
    
    
    if((image_element.src).match("image1")){
        image_element.src="images/image1_2.jpg";
 
    }
    else{
        image_element2.src="images/image1.jpg";
    }

    if((image_element2.src).match("image2")){
        image_element2.src="images/image2_2.jpg";
 
    }
    else{
        image_element2.src="images/image2.jpg";
    }
    if((image_element3.src).match("image3")){
        image_element3.src="images/image3_2.jpg";
 
    }
    else{
        image_element3.src="images/image3.jpg";
    }
    if((image_element4.src).match("image4")){
        image_element4.src="images/image4_2.jpg";
 
    }
    else{
        image_element4.src="images/image4.jpg";
    }

    if((image_element5.src).match("image5")){
        image_element5.src="images/image5_2.jpg";
 
    }
    else{
        image_element5.src="images/image5.jpg";
    }

}