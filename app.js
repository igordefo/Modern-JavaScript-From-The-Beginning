// Create element
const li = document.createElement('li');
// Add class
li.className = 'collection-item';
// Add id
li.id = 'new-item';
// Add attribute
li.setAttribute('title', 'New Item');
// Create text node and append
li.appendChild(document.createTextNode('Hello World'));
// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add inner html
link.innerHTML = '<i class="fa fa-remove"></i>';
// Append link into li
li.appendChild(link);
// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

// Replace element
// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('World List'));
// Get old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');
//Replace
cardAction.replaceChild(newHeading, oldHeading);
// Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// Remove list item
lis[0].remove();
// Remove child element
list.removeChild(lis[3]);

// Classes & attr
const firstLi = document.querySelector('li:first-child');
const linkLi = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
linkLi.classList.add('test');
linkLi.classList.remove('test');
val = linkLi;

val = linkLi.getAttribute('href');
val = linkLi.setAttribute('href', 'http://google.com');
linkLi.setAttribute('title', 'Google');
val = linkLi.hasAttribute('title');
linkLi.removeAttribute('title');
val = linkLi;

console.log(val);

// Event listners
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick (e) {
  //console.log('Clicked');
  let val;
  val = e;
  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;
  // Timestamp
  val = e.timeStamp
  // Coords event relative to the windows
  val = e.clientY;
  val = e.clientX;
  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;
  
  console.log(val);
}

// Mouse events
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// Double click
clearBtn.addEventListener('dblclick', runEvent);
// Mouse down
clearBtn.addEventListener('mousedown', runEvent);
// Mouse up
clearBtn.addEventListener('mouseup', runEvent);
// Mouse enter
clearBtn.addEventListener('mouseenter', runEvent);
// Mouse leave
clearBtn.addEventListener('mouseleave', runEvent);
// Mouse ovet
card.addEventListener('mouseover', runEvent);
// Mouse out
card.addEventListener('mouseout', runEvent);
// Mouse move
card.addEventListener('mousemove', runEvent);
// Event Handler
function runEvent(e) {
  console.log(`Event type: ${e.type}`); // Event type: click 
  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}