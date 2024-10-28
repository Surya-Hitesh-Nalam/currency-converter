var select = document.querySelectorAll('.currancy'),
input =document.querySelector('.input'),
output = document.querySelector('.output');
var btn= document.querySelector('.btn')

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    
    const entries= Object.entries(data);
    for(i=0;i<entries.length;i++){
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
  });
  btn.addEventListener('click',()=>{
    var input_curr = input.value;
    if(select[0].value != select[1].value){
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${input_curr}&from=${select[0].value}&to=${select[1].value}`)
        .then((val) =>val.json())
        .then((val) => {
        output.value = Object.values(val.rates)[0]
  });
    }
    else{
        alert('select different currancies');
    }

  });