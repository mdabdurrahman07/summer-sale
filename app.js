document.getElementById('card1').addEventListener('click' , function(){
  const itemOne = getItemName('item1')
  SetOfItems(itemOne)
  const money = getItemValue('money1')
  console.log(typeof(money))
   
})
// fetch the item id Name
function getItemName(name){
    const Element = document.getElementById(name)
    const ElementValue = Element.innerText
    return ElementValue
}
// fetch the item name and set it in the itemsArea
function SetOfItems(items){
    const setArea = document.getElementById('itemsArea')
    const p = document.createElement('p')
    p.classList.add('my-4')
    const count = setArea.childElementCount
    p.innerHTML = `<span class="text-xl font-medium">${count + 1}.  ${items}</span> `
    setArea.appendChild(p);
}
// fetching the items tk Amount
function getItemValue(money){
    const Element = document.getElementById(money)
    const ElementValue = Element.innerText
    const ElementValueNumber = parseFloat(ElementValue)
    const ElementValueNumberDecimalString = ElementValueNumber.toFixed(2)
    const ElementValueNumberDecimalNumber = parseInt(ElementValueNumberDecimalString)
    return ElementValueNumberDecimalNumber;
   
}