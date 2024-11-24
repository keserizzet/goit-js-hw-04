function isEnoughCapacity(products, containerSize) {

    let totalAmount = 0;

    for(let product in products) {
        totalAmount += products[product];
    }

    return totalAmount <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14));
console.log(isEnoughCapacity({ apples: 18, patatos: 5, oranges: 2 }, 7));