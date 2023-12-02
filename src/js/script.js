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

function copyCode() {
    const codeToCopy = document.getElementById('codeToCopy');
    const textarea = document.createElement('textarea');
    textarea.textContent = codeToCopy.innerText;
    document.body.append(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      console.log('Copying to clipboard was successful!');
    } catch (err) {
      console.error('Could not copy text: ', err);
    }
    textarea.remove(); // clean up
  }