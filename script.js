let itemList = {
    mask: 999,
    sanitizer: 500,
    paracetamol: 900
}

let itemPrice = {
    mask: 20,
    sanitizer: 400,
    paracetamol: 50
}

let overalPrice = {
    overal_price: itemList.mask*itemPrice.mask + itemList.sanitizer*itemPrice.sanitizer + itemList.paracetamol*itemPrice.paracetamol
}

console.log(itemList);
console.log(itemPrice);
console.log('mask' + '=' + itemList.mask*itemPrice.mask, 'sanitizer' + '=' + itemList.sanitizer*itemPrice.sanitizer, 'paracetamol' + '=' + itemList.paracetamol*itemPrice.paracetamol);
console.log('overal price' + '=' + overalPrice.overal_price);