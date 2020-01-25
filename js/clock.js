function ClockJs({containerId}){
    let container = document.querySelector(`#${containerId}`);
    if(this.createClockElements(()=>appendElems(container,this.clockFace))){
        this.styleClockElements();
        this.init()
    }
}

ClockJs.prototype.createClockElements = function(callback){
    this.clockFace = createElement();
    this.clockCentre = createElement();
    this.secondHand = createElement();
    this.minuteHand = createElement();
    this.hourHand = createElement();

    if(appendElems(this.clockFace, [this.clockCentre, this.secondHand, this.minuteHand, this.hourHand])){
        if(callback)
            callback();
    }

    return true
}

ClockJs.prototype.styleClockElements = function(){
    styleElement(this.clockFace,{
        "margin": "100px auto",
        "position": "relative",
        "border": "10px solid white",
        "width": "300px",
        "height": "300px",
        "border-radius": "50%",
        "background-color": "lightblue",
        "box-shadow": "5px 10px 18px black"
    })

    styleElement(this.clockCentre, {
        "position":"absolute",
        "top": "48%",
        "right": "140px",
        "background": "black",
        "height": "20px",
        "width": "20px",
        "border-radius": "50%"
    })

    styleElement(this.secondHand,{
       "width": "59%",
        "top": "51%",
        "right": "38%",
        "height": "3px",
        "position": "absolute",
        "background": "black",
        "transform": "rotate(90deg)",
        "transform-origin": "80%",
        "transition-timing-function": "cubic-bezier(0.1, 2.7, 0.58, 1)"
    })

    styleElement(this.minuteHand,{
        "width": "45%",
        "right": "50%",
        "position": "absolute",
        "background": "black",
        "height": "6px",
        "top": "50%",
        "transform-origin": "100%", /**edge of x-axis by default it's 50%**/ 
        "transform": "rotate(90deg)",
        "transition-timing-function": "cubic-bezier(0.1, 2.7, 0.58, 1)"
    })

    styleElement(this.hourHand,{
        "width": "25%",
        "height": "9px",
        "right": "50%",
        "position": "absolute",
        "background": "black",
        "top": "50%",
        "transform-origin": "100%", /**edge of x-axis by default it's 50%**/ 
        "transform": "rotate(90deg)",
        "transition-timing-function": "cubic-bezier(0.1, 2.7, 0.58, 1)"
    })
}

ClockJs.prototype.setDate = function(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegree = ((seconds/60)*360) + 90;
    this.secondHand.style.transform = `rotate(${secondsDegree}deg)`

    const minuteDegree = ((minutes/60)*360) + 90;
    this.minuteHand.style.transform = `rotate(${minuteDegree}deg)`

    const hourDegree = ((hours/12)*360) + 90;
    this.hourHand.style.transform = `rotate(${hourDegree}deg)`
}

ClockJs.prototype.init = function(){
    setInterval(this.setDate.bind(this),1000)
}

