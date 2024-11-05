var plusButton = Array.from(document.getElementsByClassName("fa-plus-circle"));

for(let i=0; i<plusButton.length; i++) {
    plusButton[i].addEventListener('click', function () {
        plusButton[i].nextElementSibling.innerHTML++
    })
}


var minusButton = Array.from(document.getElementsByClassName("fa-minus-circle"));

for (let i = 0; i < minusButton.length; i++) {
    minusButton[i].addEventListener('click', function () {
        minusButton[i].nextElementSibling.innerHTML--;
    });
}




var trashIcons = Array.from(document.getElementsByClassName("fa-trash-alt"));

trashIcons.forEach(function(trashIcon) {
     trashIcon.addEventListener('click', function() {
        trashIcon.closest('.card-body').remove();
})
}