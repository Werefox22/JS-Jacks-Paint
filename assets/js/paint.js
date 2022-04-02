function configureListeners() {
    let images = document.querySelectorAll("img")


    for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners      
        images[i].addEventListener("mouseenter", (e) => {addOpacity(e)})
        images[i].addEventListener("mouseleave", (e) => {removeOpacity(e)})
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    event.target.classList.add("dim")

    getProductInfo(event.target.id);
}

function removeOpacity(event) {
     //remove appropriate CSS class
     event.target.classList.remove("dim")

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    switch (paintColor) {
        case 'pn1':
            // set variables for price and color name and invoke a function to update the price
            updatePrice("Lime Green", "$14.99")
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price
            updatePrice("Medium Brown", "$11.14")
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            updatePrice("Royal Blue", "$22.99")
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price
            updatePrice("Solid Red", "$13.42")
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price
            updatePrice("Solid White", "$21.98")
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price
            updatePrice("Solid Black", "$4.99")
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price
            updatePrice("Solid Cyan", "$8.22")
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price
            updatePrice("Solid Purple", "$11.99")
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            updatePrice("Solid Yellow", "$14.99")
            break;   
          default:
    }

    function updatePrice(colorName, price)
    {
        // select element with corresponding id
        let colorPrice = document.getElementById("color-price")
        // display price
        colorPrice.textContent = price

        // select element with corresponding id
        let color = document.getElementById("color-name")
        //display color name
        color.textContent = colorName
    }
    
}
