// Простая программа: генератор случайного числа
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").textContent = `Случайное число: ${randomNumber}`;
}

// Создаем кнопку и элемент для вывода
const button = document.createElement("button");
button.textContent = "Сгенерировать число";
button.onclick = generateRandomNumber;

document.body.appendChild(button);

const numberElement = document.createElement("div");
numberElement.id = "randomNumber";
numberElement.style.fontSize = "24px";
numberElement.style.marginTop = "10px";
document.body.appendChild(numberElement);
