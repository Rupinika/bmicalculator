function calculate(){

    let givenweight = document.getElementById("weight").value
    let givenheight = document.getElementById("height").value
    let bmi = givenweight/(givenheight*givenheight)
    bmi = bmi.toFixed(1)
    if(bmi < 18.5){
        document.getElementById("bmi").innerHTML = "You Are Under-Weight, And Your Current BMI is: " + bmi
        document.getElementById("bmi").style.color = "rgb(255, 95, 95)"
    }
    else if (bmi < 24.9) {
        document.getElementById("bmi").innerHTML = "You Are Healthy, And Your Current BMI is: " + bmi
        document.getElementById("bmi").style.color = "limegreen"
    }
    else if (bmi < 29.9) {
        document.getElementById("bmi").innerHTML = "You Are Over-Weight, And Your Current BMI is: " + bmi
        document.getElementById("bmi").style.color = "red"
    }
    else if (bmi < 34.9) {
        document.getElementById("bmi").innerHTML = "You Are Obese, And Your Current BMI is: " + bmi
        document.getElementById("bmi").style.color = "darkred"
    }
    else if (bmi >= 35 ) {
        document.getElementById("bmi").innerHTML = "You Are Sevearly Obese, And Your Current BMI is: " + bmi
        document.getElementById("bmi").style.color = "purple"
    }
}
