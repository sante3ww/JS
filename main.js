function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateTime, 1000);

const clockElement = document.createElement("div");
clockElement.id = "clock";
clockElement.style.fontSize = "24px";
clockElement.style.fontFamily = "Arial, sans-serif";
clockElement.style.marginTop = "20px";
document.body.appendChild(clockElement);

updateTime();
