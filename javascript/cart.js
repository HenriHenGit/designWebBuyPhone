function cart() {
    var cartItem = document.querySelectorAll('.cart .cart-sp');
    var sum = document.querySelector('.pirce-total span');
    var cartId = document.querySelector('.cart');
    var priceAfter = 0;
    for (var i=0; i<cartItem.length; i++){
        var inputValue = cartItem[i].querySelector('input');
        var productPrice = cartItem[i].querySelector('.price').innerText;
        var pirce = parseFloat(productPrice, 10);
        inputValue.onclick = function(e) {
            var sl = this.value;
            var priceFirst = sl*pirce*1000000;
            console.log(priceFirst)
            priceAfter = priceAfter + priceFirst;
            var priceEnd = priceAfter.toLocaleString('de-DE');
            sum.innerHTML = priceEnd;
            if(sl < 1){
                var ok = confirm('ban muon xoa san pham');
                if(ok){
                    cartId.style.display = 'none';
                };
            };
        };
    };
};
function deletes() {
    var A = document.querySelector('.delette');
    var del = document.querySelector('.cart');
    A.onclick = function(e) {
        var kt = confirm('ban muon xoa san pham');
        if(kt){
            del.style.display = 'none';
        }
    }
};
cart();
deletes();