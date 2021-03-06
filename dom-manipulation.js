let val;

val = document; // Log source
val = document.all; // Array off tags
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links; // Array of links
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList[1];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);

// document.getElementById()

console.log(document.getElementById('task-title'));

//Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling

taskTitle.style.background = '#000';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
taskTitle.style.width = '150px';
taskTitle.style.textAlign = 'center';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerHTML = 'My tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

//document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.task-class'))
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello world';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#ccc';

// document.getElementsByClass
const items = document.getElementsByClassName('collection-item');

 console.log(items);
 console.log(items[0]);
 items[0].style.color = '#efe';
 items[3].textContent = 'Third task';

 const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
 console.log(listItems);

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);  
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Another task';

// Convert HTML collection into array
lis = Array.from(lis);

lis.forEach(function(li, index){
  console.log(li);
  li.textContent = `${index}: Hello`;
})
console.log(lis);

// document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item, index){
  item.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f5f5f9';
};

console.log(items);

// Traversing DOM
let trav;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

trav = listItem;
trav = list;

// Get child nodes
trav = list.childNodes;
trav = list.childNodes[0];
trav = list.childNodes[0].nodeName;
trav = list.childNodes[3].nodeType;
// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children nodes
trav = list.children;
trav = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
trav = list.children[3].children[0];
list.children[3].children[0].id = 'test-link';
// First child
trav = list.firstChild;
trav = list.firstElementChild;
// Last child
trav = list.lastChild;
trav = list.lastElementChild;

// Count child element
trav = list.childElementCount;

//Get parent node
trav = listItem.parentNode;
trav = listItem.parentElement;
trav = listItem.parentElement.parentElement;

// Get next sibling
trav = listItem.nextSibling;
trav = listItem.nextElementSibling;

// Get prev sibling
trav = listItem.previousSibling;
trav = listItem.previousElementSibling;


console.log(trav);