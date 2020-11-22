const pass = document.querySelector('.password_Input');
const btnShow = document.querySelector('.showPass');
btnShow.innerHTML = 'POKAŻ';
btnShow.addEventListener('click', () =>{
    if(pass.type === 'password'){
        pass.type = 'text';
        btnShow.innerHTML = 'ZASŁOŃ';
        btnShow.style.color = '#40739e';
            }else{ 
                pass.type = 'password'; 
                btnShow.innerHTML = 'POKAŻ';
                btnShow.style.color = '#000000';
            }
});
