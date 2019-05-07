const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var node = document.createElement("LI");
  var div = document.createElement("div");
  
  var checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.onclick = function() {
    uncheckedCountSpan.innerHTML = verifyCheckbox();
  }

  var label = document.createElement('label');
  label.appendChild(document.createTextNode('TODO APP'));

  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Delete";
  btn.onclick =  function(){
    list.removeChild(node);
    itemCountSpan.innerText = count();
    uncheckedCountSpan.innerText = verifyCheckbox();
  }

  label.className = classNames.TODO_TEXT;
  checkbox.className = classNames.TODO_CHECKBOX;
  div.appendChild(label);
  div.appendChild(checkbox);
  div.appendChild(btn);
  div.className =  classNames.TODO_ITEM;
  node.appendChild(div);
  list.appendChild(node);  
  uncheckedCountSpan.innerHTML = verifyCheckbox();

  itemCountSpan.innerHTML = count();
}


function verifyCheckbox(){
   return count() - list.querySelectorAll('input[type="checkbox"]:checked').length;
}

function count(){
  var lilist = list.getElementsByTagName("li").length;
  console.log(lilist);
  return lilist;
}
   