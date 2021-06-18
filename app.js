let form = document.getElementById("form");
let form_wrap = document.querySelector(".form-warp");
let item = document.getElementById("item");
let all = document.getElementById("all");
let active = document.getElementById("active");
let completed = document.getElementById("completed");
let clear = document.getElementById("clear");
var cleardem=0;
let todolist=[{title:"home-work", Active:true},{title:"Eating", Active:true}];
 
 let render = function (value) {
     let ul = document.createElement("ul");
     ul.id="todolist";
     for (let index = 0; index < value.length; index++) 
     {
         const element = value[index];
         let li = document.createElement("li");
         if (element.Active === false) {
             li.classList.add("done");
            }
            let btn = document.createElement("button");
            btn.innerText="Delete";
            btn.style.marginLeft=`15px`;
            btn.style.color="red";
            
            li.innerText=element.title;
            li.appendChild(btn);
            btn.onclick = function(){
                value[index].Active = !value[index].Active;
                if(!value[index].Active){
                    li.classList.add("done");
                }
                else{
                    
                    li.classList.remove("done");
                }
            }
            ul.appendChild(li);  
        }
        form_wrap.appendChild(ul);
        let lii = document.querySelectorAll('li');
        item.innerText = `${lii.length} item`;
    }
    form.onsubmit = function (event)
    {
        event.preventDefault();
        let ul = document.getElementById("todolist");
        ul.remove();
        let Value =form.todo.value;
        let newTodolist={title: Value, Active: true};
        todolist.push(newTodolist);
        render(todolist);
    }
    render(todolist);
    
    
    
all.onclick = function(){
    let li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        if(li[i].classList.contains("delete")==true)
        {
            li[i].classList.remove("delete");
        }
    }
    item.innerText = `${li.length-cleardem} item`;
}
active.onclick = function(){
    let dem=0;
    let li = document.querySelectorAll('li');
    for (let i = 0  ; i < li.length; i++) {
        if(li[i].classList.contains("done")==true)
        {
            li[i].classList.add("delete")
            dem++;
        }
        else if(li[i].classList.contains("done")==false)
        {
            li[i].classList.remove("delete")
        }
    }
    item.innerText = `${li.length-dem} item`;
}
completed.onclick = function(){
    let dem=0;
    let li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        if(li[i].classList.contains("done")==false)
        {
            li[i].classList.add("delete");
            dem++;
        }
        else if(li[i].classList.contains("done")==true)
        {
            li[i].classList.remove("delete");
        }
    }
    item.innerText = `${li.length-dem} item`;
}
clear.onclick = function(){
    let li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        if(li[i].classList.contains("done")==true)
        {
        li[i].classList.add("complete");
        cleardem++;
        }
    }
    item.innerText = `${li.length-cleardem} item`;
}
