let priceNum = 0;

// item 1
document.getElementById('card1').addEventListener('click' , function(){
  const itemOne = getItemName('item1')
  SetOfItems(itemOne)
  const money = getItemValue('money1')

    priceNum = priceNum + money;

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
// item2
document.getElementById('card2').addEventListener('click' , function(){
  const itemOne = getItemName('item-2')
  SetOfItems(itemOne)
  const money = getItemValue('money-2')

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
// item3
document.getElementById('card3').addEventListener('click' , function(){
  const itemOne = getItemName('item-3')
  SetOfItems(itemOne)
  const money = getItemValue('money-3')

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
// item4
document.getElementById('card4').addEventListener('click' , function(){
  const itemOne = getItemName('item-4')
  SetOfItems(itemOne)
  const money = getItemValue('money-4')

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
// item5
document.getElementById('card5').addEventListener('click' , function(){
  const itemOne = getItemName('item-5')
  SetOfItems(itemOne)
  const money = getItemValue('money-5')

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
// item6
document.getElementById('card6').addEventListener('click' , function(){
  const itemOne = getItemName('item-6')
  SetOfItems(itemOne)
  const money = getItemValue('money-6')

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




// calculation
document.getElementById('apply-btn').addEventListener('click' , function(){
             if(getInputValue('coupon-id') !== 'SELL200'){
                return alert('Invalid Coupon')
             }
             else{
                   const discountPrice = priceNum * 20 / 100
                   document.getElementById('Discount-price').innerText = parseFloat(discountPrice.toFixed(2));
                   const subtotal = priceNum - discountPrice 
                   document.getElementById('Total-price').innerText =  parseFloat(subtotal.toFixed(2));
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
    return  ElementValueNumber;
   
}
// page reload
document.getElementById('go-home').addEventListener('click' , function(){
    window.location.reload();
})