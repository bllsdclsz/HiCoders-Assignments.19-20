function renderMenu(){
  let menu= menuProducts.map((item,rndmValue)=>{
    rndmValue=Math.floor(Math.random()*10)+1;
    return `<li id="${item}" class="${item}">${item}</li>`
  }).join('');
  document.querySelector("#menus").innerHTML=menu;
}

function renderOrder(){
  let order= orderProducts
    .map((item, index, items) => {
    const count = items.filter(a => a == item).length;
    return {key:item, value: count};
  })
  .reduce((sum, current)=>{
    if(!sum.map(a => a.key).includes(current.key)){
      sum.push(current);
    }
    return sum;
  },[])
  .map(item=>{
    return `<li id="${item.key}" class="${item.key}">${item.key}*${item.value}<span class="delete">x<span></li>`
  })
  .sort()
  .join('');
  document.querySelector("#orders").innerHTML=order;
}

function addEventsMenu(){
  menu.addEventListener('click', function(e){
    const selectedItem = e.target.className;
    orderProducts.push(selectedItem);
    renderOrder()
  }.bind())
}

function addEventsOrder(){
  order.addEventListener('click', function(e){
    const selectedItem = e.target.className;
    if(selectedItem == 'delete'){
      const parentClass = e.target.parentElement.className;
      const indexItem = orderProducts.indexOf(parentClass);
      orderProducts.splice(indexItem, 1);
      renderOrder();
    }
  }.bind())
}

function start(){
  renderMenu();
  addEventsMenu();
  addEventsOrder();
}
