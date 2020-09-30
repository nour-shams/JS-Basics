var images = document.querySelector("#image1");

function toggle(){
    image_element= document.getElementById("image1");
    
    
    if((image_element.src).match("image1")){
        image_element.src="images/image1_2.jpg";
 
    }
    else{
        image_element.src="images/image1.jpg";
    }

}