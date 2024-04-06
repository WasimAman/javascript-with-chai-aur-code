const getRandomColor = ()=>{
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[parseInt(Math.random()*15)];
    }
    return color;
};

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

let interval;
const startChangingBGColor = ()=>{
    const changeBGColor = ()=>{
        document.body.style.backgroundColor = getRandomColor();
    }
    document.getElementById("msg").innerHTML = "Background Changing started...Click stop button to stop changing BGC"
    interval = setInterval(changeBGColor,1000);
}

const stopChangingBGColor = ()=>{
    clearInterval(interval);
    document.getElementById("msg").innerHTML = "Background Changing stopped...Click start button to start changing BGC"
    interval = null;
}
startBtn.addEventListener('click',startChangingBGColor);
stopBtn.addEventListener('click',stopChangingBGColor)