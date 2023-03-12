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



// send button function way 1

// const convertObject = () => {
//     let cart = {};
//     let name = localStorage.getItem('name')
//     let email = localStorage.getItem('email')
//     let message = localStorage.getItem('message')
//     cart = { name, email, message }
//     localStorage.setItem('cart', JSON.stringify(cart))
// }


const convertObject = () => {
    let cart = {};
    let name = localStorage.getItem('name')
    let email = localStorage.getItem('email')
    let message = localStorage.getItem('message')
    cart = { name, email, message };
    localStorage.setItem('cart', JSON.stringify(cart));
}






//send button function way 2

// const convertObject = () => {
//     const arr = ['name', 'email', 'message'];
//     let cart = {};
//     for (const key of arr) {
//         cart[key] = localStorage.getItem(key)
//     }
//     localStorage.setItem('cart', JSON.stringify(cart))
    
// }