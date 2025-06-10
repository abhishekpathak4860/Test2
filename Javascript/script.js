const text=document.getElementById('text');
const todo_list=document.getElementById('todo_list');
const button=document.querySelector('.add');

const addtask=()=>{
    if(text.value===''){
        alert("Blank content can't be added");
    }
    else{
        let add_list=document.createElement('li');
        add_list.innerHTML=text.value;
        todo_list.appendChild(add_list);
        let cross =document.createElement("span");
        cross.innerHTML="\u00d7";
        add_list.appendChild(cross);
    }
    text.value='';
    store_data();
}

todo_list.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("done");
        store_data();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        store_data();
    }
});

const store_data=()=>{
    localStorage.setItem("data", todo_list.innerHTML);
}

const display_todo_task=()=>{
    todo_list.innerHTML=localStorage.getItem("data");
}
display_todo_task();

button.addEventListener("click", ()=>{
    addtask();
})
