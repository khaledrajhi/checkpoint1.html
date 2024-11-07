var plusButton = Array.from(document.getElementsByClassName("fa-plus-circle"));

for(let i=0; i<plusButton.length; i++) {
    plusButton[i].addEventListener('click', function () {
        plusButton[i].nextElementSibling.innerHTML++
        totale()
    })
}


var minusButton = Array.from(document.getElementsByClassName("fa-minus-circle"));

for (let i = 0; i < minusButton.length; i++) {
    minusButton[i].addEventListener('click', function () {
        if(minusButton[i].previousElementSibling.innerHTML>0) {
        minusButton[i].previousElementSibling.innerHTML--;
        totale()
        }
    });
}




var trashIcons = Array.from(document.getElementsByClassName("fa-trash-alt"));

trashIcons.forEach(function(trashIcon) {
     trashIcon.addEventListener('click', function() {
        trashIcon.closest('.card-body').remove();
        totale()
})
})

var like = Array.from(document.getElementsByClassName("fa-heart"))
for(let i=0; i<like.length; i++) {
    like[i].addEventListener('click', function () {
        like[i].classList.toggle("like")
    })
}

function totale() {
    var total = document.getElementsByClassName("total");
    var quantity = Array.from(document.getElementsByClassName("quantity"))
    var price = Array.from(document.getElementsByClassName("unit-price"))
    var tot = 0;

    for(let i=0; i<price.length; i++) {
        tot = tot + (price[i].innerHTML * quantity[i].innerHTML)
    }
    return total[0].innerHTML = tot
}