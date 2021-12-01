var items=[];
var list=document.getElementById("list");

function listItems(){
    shoppingList=[];
    items.forEach(function(element){
        shoppingList.push("<li>"+element+"</li>");
    });

    list.innerHTML=shoppingList.join('');
}

//buttons
function addToEnd(){
    items.push(prompt("Enter the item you need to add to the end of your lsit"));
    listItems();
}

function removeFromEnd(){
    items.pop();
    listItems();
}

function addToStart(){
    items.unshift(prompt("Enter item you want to the list at the top of your list"));
    listItems();
}

function removeFromStart(){
    items.shift();
    listItems();
}