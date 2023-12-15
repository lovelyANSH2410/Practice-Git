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

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'white';