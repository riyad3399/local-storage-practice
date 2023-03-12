
let count = 0;
const changeValue = () => {
    count++;
    let arr = [];
    const text = document.getElementById('text-value');
    let textValue = text.innerText = count;
    let storedArr = JSON.parse(localStorage.getItem('textValue'))
    console.log(storedArr);
    if (storedArr) {
        arr = storedArr
    }
    arr.push(count);
    console.log(arr);
    localStorage.setItem('textValue', JSON.stringify(arr))
    
    return textValue;
}





