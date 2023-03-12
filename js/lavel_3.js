const textField = document.getElementById('textField');

const setTheValue = () => {
    document.getElementById('btn-send');
    let textFieldValue = textField.value;
    localStorage.setItem('name', textFieldValue)
    textField.value = '';
}

const deleteValue = () => {
    localStorage.removeItem('name')
}


const emailField = document.getElementById('emailField')
const setTheEmail = () => {
    const emailFieldValue = emailField.value;
    localStorage.setItem('email', emailFieldValue)
    emailField.value = '';
}

const deleteEmail = () => {
    localStorage.removeItem('email')
}


const setMessage = () => {
    const messageField = document.getElementById('messageField');
    const messageFieldValue = messageField.value;
    messageField.value = '';
    localStorage.setItem('message', messageFieldValue);
}

const deleteMessage = () => {
    localStorage.removeItem('message');
}


// reset button 

const clearLocalStorage = () => {
    localStorage.clear();
}