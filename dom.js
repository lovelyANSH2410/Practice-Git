// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';

// var items = document.getElementsByClassName('title');
// console.log(items);
// items[0].style.fontWeight = 'bold';
// items[0].style.color = '#008000';
// //items.textContent.style.color = 'solid 3px #008000';


//using getelementbyclassname

// var item = document.getElementsByClassName('list-group-item');
// console.log(item);
// item[2].style.backgroundColor = 'green';

// //error
// //item.style.fontWeight = 'bold';

// for(var i = 0; i<item.length; i++){
//     item[i].style.fontWeight = 'bold';
// }

// //get element by tag name

// var li = document.getElementsByTagName('li');
// li[2].style.backgroundColor = 'green';

// error
// item.style.fontWeight = 'bold';

// for(var i = 0; i<li.length; i++){
//     li[i].style.fontWeight = 'bold';
// }

//query selector

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'white';


//query selector all





// traversing the dom

var itemList = document.querySelector('#items');
//parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//parenet element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentNode);

//child nodes
// console.log(itemList.childNodes);

//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //first child
// console.log(itemList.firstChild);

// //first element child

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hellow';


//last child
// console.log(itemList.lastChild);

// //last element child

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hellow';


//siblings