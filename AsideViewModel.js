class AsideViewModel{

    contructor(){
        //check if we're in mobile mode
        if(document.querySelector("body").offsetWidth < "401px"){
            console.log("test");
        }

        //add event listeners
    }
    dispose(){
        //dispose of event listeners
        //set buttons to null
    }

    //METHODS
    toggleLeftAside(){
        //Check value of leftAside "data-closed" data-attribute
    }

    toggleRightAside(){
        //Check value of rightAside "data-closed" data-attribute
    }

    //GETTERS & SETTERS
    get btnToggleLeftAside(){
        //get leftButton
        if(this.btnToggleLeftAside == null){
            this.leftAside = document.querySelector("#leftAside");
        }
    }

    set btnToggleLeftAside(newValue){
        //set the value of leftButton
    }

    get btnToggleRightAside(){
        //get rightButton
    }
    set btnToggleRightAside(newValue){
        //set value of rightButton
    }

}