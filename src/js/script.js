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

function timeSince(date,type) {
    const now = new Date();
    const providedDate = new Date(date);
    const diffInSeconds = Math.floor((now - providedDate) / 1000);

    if (type === 'auto') {
        if (Math.floor(diffInSeconds / 31536000) >= 1) {
            return Math.floor(diffInSeconds / 31536000) + ' years';
        }
        if (Math.floor(diffInSeconds / 2592000) >= 1) {
            return Math.floor(diffInSeconds / 2592000) + ' Months';
        }
        if (Math.floor(diffInSeconds / 86400) >= 1) {
            return Math.floor(diffInSeconds / 86400) + ' days';
        }
        if (Math.floor(diffInSeconds / 3600) >= 1) {
            return Math.floor(diffInSeconds / 3600) + ' hours';
        }
        if (Math.floor(diffInSeconds / 60) >= 1) {
            return Math.floor(diffInSeconds / 60) + ' minutes';
        }
        return Math.floor(diffInSeconds) + ' secondes';

    }else{
        if (type === 'years') {
            return Math.floor(diffInSeconds / 31536000);
        }
        if (type === 'months') {
            return Math.floor(diffInSeconds / 2592000);
        }
        if (type === 'days') {
            return Math.floor(diffInSeconds / 86400);
        }
        if (type === 'hours') {
            return Math.floor(diffInSeconds / 3600);
        }
        if (type === 'minutes') {
            return Math.floor(diffInSeconds / 60);
        }
        return Math.floor(diffInSeconds);
    }


}