window.onload = function() {
    let in_num = document.getElementById('in_num');
    let btn = document.getElementById('btn');
    let time = document.getElementById('time');
    function print(){

        let start = new Date().getTime();

        let counting = document.getElementById('counting');
        counting.innerText = ''
        for(let i=1;i<=parseInt(in_num.value);i++){
            let number = document.createElement('li');
            number.innerText = `${i}`;
            counting.appendChild(number);
        }

        let end = new Date().getTime();
        let total_time = end - start;
        time.innerText = 'Time for print counting is:' + total_time + 'milliseconds';
        in_num.value = ''
    }

    btn.onclick = print

    in_num.addEventListener('keyup', function(event) {
        if (event.keyCode == 13) {
          print()
        }
      })
    
}

