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
