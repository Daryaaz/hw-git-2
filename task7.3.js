class Button{
    constructor(width, height, type, color){
        this.width = width;
        this.height = height;
        this.type = type;
        this.color = color;    
        this.props = [this.width, this.height, this.type, this.color]
    }

    onClick(){
    console.log(this.props)
   }
}

let newButton = new Button(20, 60, "button", "green");
console.log(newButton)


function testButton(){
    if (
    newButton.width == 20 &&
    newButton.height == 60 &&
    newButton.color == "green"&&
    newButton.type == "button"
  ) {   console.log("Buttons props are correct");  
     } else {
        console.log("Button props arent correct");
    }
      
}
testButton()




