const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);
    const result = document.querySelector(".box");
    if(weight==0 || weight<0 || isNaN(weight)){
        result.innerHTML = "<h3>Please give a valid weight...</h3>";
    }else if(height==0 || height<0 || isNaN(height)){
        result.innerHTML = "<h3>Please give a valid height...</h3>";
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML = `<h3>Your BMI index is ${bmi}<br>you are under weight</h3>`
        }else if(bmi>=18.6 && bmi<24.9){
            result.innerHTML = `<h3>Your BMI index is ${bmi}<br>you are Normal weight</h3>`
        }else{
            result.innerHTML = `<h3>Your BMI index is ${bmi}<br>you are Over weight</h3>`
        }
    }
})