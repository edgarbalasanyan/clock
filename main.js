function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rotateClockHands() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");
    const clock = document.getElementById("clock");
  
    const hourDegrees = (hours % 12) * 30 + minutes / 2;
    const minuteDegrees = minutes * 6;
    const secondDegrees = seconds * 6;
  
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    clock.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }
   
  setInterval(rotateClockHands, 1000);
  
  rotateClockHands();
  