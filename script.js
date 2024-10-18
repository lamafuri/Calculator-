const sec = document.getElementById("second");
const min = document.getElementById("min");
const hr = document.getElementById("hour");
let myTime;
let s = 0, m = 0, h = 0;
const start = () => {
    myTime = setInterval(() => {
        s++;
        if (s === 60) {
            s = 0;
            m++;
        }
        if (m === 60) {
            m = 0;
            s = 0;
            h++;
        }
        sec.innerHTML = s.toString().padStart(2, "0");//parameters => stringLength and string to be padded in
        min.innerHTML = m.toString().padStart(2, "0");
        hr.innerHTML = h.toString().padStart(2, "0");

    }, 1000);
}
const stop = () => {
    clearInterval(myTime); //Stops the execution of the callBack Function in timeInterval with ID myTime
}
const reset = () => {
    s = m = h = 0;
    sec.innerHTML = "00";
    min.innerHTML = "00";
    hr.innerHTML = "00";
}
const on = document.getElementById("start");
const off = document.getElementById("stop");
const restart = document.getElementById("reset");


on.addEventListener("click", () => {
    start();
    on.style.padding = "8px"  //Decreses the size of the button image as box-sizing : border-box has been set in CSS
    resetPadding(on); //Resets the padding of all the images to 5px except the one which in clicked
});

off.addEventListener("click", () => {
    stop();
    off.style.padding = "8px"
    resetPadding(off);
});
restart.addEventListener("click", () => {
    reset();
    restart.style.padding = "8px"
    resetPadding(restart);
});
const images = document.querySelectorAll("img");
const imgArray = Array.from(images); //images is a nodeList so array method cannot be performed so need to convert it into array
const resetPadding = (exceptThis) => {
    imgArray.forEach(im => {
        if (im !== exceptThis) {
            im.style.padding = "5px";
        }
    })
}




