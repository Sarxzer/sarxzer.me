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

const title = document.getElementById('title');

simulateDeleting(100, title);
simulateTyping('<Sarxzer/>', 100, title);