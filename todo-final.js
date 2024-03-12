const todoList = [{
	name: 'Buy Groceries', 
	dueDate: '2022-12-22'
	},
	{
	name: 'Complete the edits',
	dueDate: '2022-12-22'
}];

rendertodolist();
function rendertodolist(){
let todoListHTML = '';

todoList.forEach((todoObject,index)=> {
	const {name,dueDate} = todoObject;
	const html = `
		<div>${name}</div>
		<div> ${dueDate}</div>
		<button onclick="
			todoList.splice(${index},1);
			rendertodolist();
		" class="delete-todo-button">Delete</button>
		`;
	todoListHTML+=html;

});



document.querySelector('.js-todo-list').innerHTML = todoListHTML;
} 	
function addTodo(){
	const inputElement = document.querySelector('.js-name-input');
	const name = inputElement.value;

	const dateInputElement = document.querySelector('.js-date-input');
	const dueDate = dateInputElement.value;

	todoList.push({
		// name: name,
		// dueDate:dueDate
		name,
		dueDate

	});

	inputElement.value = ''; 
	rendertodolist();
}
