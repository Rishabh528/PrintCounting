window.onload = function() {
    let in_num = document.getElementById('in_num');
    let btn = document.getElementById('btn');

    btn.onclick = function() {
        
        let counting = document.getElementById('counting');
        counting.innerText = ''
        for(let i=1;i<=parseInt(in_num.value);i++){
            let number = document.createElement('li');
            number.innerText = `${i}`;
            counting.appendChild(number);
        }

    }
    
}