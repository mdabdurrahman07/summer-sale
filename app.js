let price = 0.00;
let priceNum = parseFloat(price.toFixed(2))

document.getElementById('card1').addEventListener('click' , function(){
  const itemOne = getItemName('item1')
  SetOfItems(itemOne)
  const money = getItemValue('money1')

    priceNum = priceNum + money  

    const totalPrice = document.getElementById('total-price')
    totalPrice.innerText = priceNum; 
    if(priceNum > 0){
        document.getElementById('purchase-btn').disabled = false;   
    }
    else{
        document.getElementById('purchase-btn').disabled = true; 
    }
    if(priceNum >= 200){
        document.getElementById('apply-btn').disabled = false;
        
    }
    else{
        document.getElementById('apply-btn').disabled = true;
    }
  
})
document.getElementById('apply-btn').addEventListener('click' , function(){
             if(getInputValue('coupon-id') !== 'SELL200'){
                return alert('Invalid Coupon')
             }
             else{
                   const discountPrice = priceNum * 20 / 100
                   document.getElementById('Discount-price').innerText = parseFloat(discountPrice.toFixed(2));
                   const subtotal = priceNum - discountPrice 
                   document.getElementById('Total-price').innerText = parseFloat(subtotal.toFixed(2))
             }
})







// fetch the item id Name
function getItemName(name){
    const Element = document.getElementById(name)
    const ElementValue = Element.innerText
    return ElementValue
}
// fetching the input value
function getInputValue(input){
    const Element = document.getElementById(input)
    const ElementValue2 = Element.value
    console.log(ElementValue2)
    return ElementValue2
} 
// fetch the item name and set it in the itemsArea
function SetOfItems(items){
    const setArea = document.getElementById('itemsArea')
    const p = document.createElement('p')
    p.classList.add('my-2')
    const count = setArea.childElementCount
    p.innerHTML = `<span class="text-xl font-medium">${count + 1}.  ${items}</span> `
    setArea.appendChild(p);
}
// fetching the items tk Amount
function getItemValue(money){
    const Element = document.getElementById(money)
    const ElementValue3 = Element.innerText
    const ElementValueNumber = parseFloat(ElementValue3)
    const ElementValueNumberDecimalString = ElementValueNumber.toFixed(2)
    const ElementValueNumberDecimalNumber = parseFloat(ElementValueNumberDecimalString)
    return ElementValueNumberDecimalNumber;
   
}