function simulateTyping(text, delay, targetElement) {
    let index = 0;
    const intervalId = setInterval(() => {
        if (index < text.length) {
            targetElement.textContent += text[index];
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, delay);
}

function simulateDeleting(delay, targetElement) {
    let text = targetElement.textContent;
    let index = text.length - 1;
    const intervalId = setInterval(() => {
        if (index >= 0) {
            targetElement.textContent = text.substring(0, index);
            index--;
        } else {
            clearInterval(intervalId);
        }
    }, delay);
}

function simulateTypingDeleting(text, delay, targetElement) {
    simulateTyping(text, delay, targetElement);
    setTimeout(() => {
        simulateDeleting(delay, targetElement);
    }, text.length * delay);
}

const title = document.getElementById('title');

simulateTypingDeleting('<S/> ', 100, title);
setTimeout(() => {
    simulateTyping('<Sarxzer/>', 100, title);
}, 2000);