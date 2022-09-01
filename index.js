let mobileMenu = (function () {

    const body = document.querySelector('body');
    
    let menuHTML =  '<div class="footer">'+
    '       <div class="option" id="option1">'+
    '           <img src="./house-solid.svg" alt="home" class="icon" id="image1">'+
    '           <div class="text" id="text1">Home</div>'+
    '       </div>'+
    '       <div class="option" id="option2">'+
    '           <img src="./pen-solid.svg" alt="settings" class="icon" id="image2">'+
    '           <div class="text" id=\'text2\'>Create</div>'+
    '       </div>'+
    '       <div class="option" id="option3">'+
    '           <img src="./message-solid.svg" alt="messages" class="icon" id="image3">'+
    '           <div class="text" id="text3">Chat</div>'+
    '       </div>'+
    '       <div class="option" id="option4">'+
    '           <img src="./ellipsis-solid.svg" alt="settings" class="icon" id="image4">'+
    '           <div class="text" id="text4">Settings</div>'+
    '       </div>'+
    '   </div>';
    
    body.innerHTML = menuHTML;
    
    const options = document.querySelectorAll('.option');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
    const texts = document.querySelectorAll('.text');
    const text1 = document.querySelector('#text1');
    const text2 = document.querySelector('#text2');
    const text3 = document.querySelector('#text3');
    const text4 = document.querySelector('#text4');
    const icons = document.querySelectorAll('.icon');
    const image1 = document.querySelector('#image1');
    const image2 = document.querySelector('#image2');
    const image3 = document.querySelector('#image3');
    const image4 = document.querySelector('#image4');
    
    options.forEach(option => {
        option.addEventListener('touchend', () => {
            option.classList.add('scale');
        });
    
        option.addEventListener('transitionend', () => {
            option.classList.add('scale-2');
            option.classList.remove('scale-2');
            option.classList.remove('scale');
        });
    });
    
    return { body, options, option1, option2, option3, option4,
    texts, text1, text2, text3, text4, icons, image1, image2, image3, image4}
    
    })();
    
    