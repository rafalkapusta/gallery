/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
let allImg = document.querySelectorAll('img');
let body = document.querySelector('body');

// console.log(allLi, body);

allImg.forEach(function(img) {
    img.addEventListener('click', function (e) {
        let imgSrc = this.getAttribute('src');
        let fullScreen = document.createElement('div');
        fullScreen.className = 'fullScreen';
        fullScreen.innerHTML += `<img src=${imgSrc}>`;
        fullScreen.innerHTML += `<button class="close">Close</button>`;
        body.appendChild(fullScreen);
        let button = document.querySelector('button');
        button.addEventListener('click', function(e){
            body.removeChild(fullScreen);
        })
    })
})




