const allTaskNumbers = document.querySelector('span.allTaskNumbers')
const form = document.querySelector('form');
const input = document.querySelector('input');
const exercise = document.querySelector('span.exercise')
const taskToComplete = document.querySelector('article.allTask ul')
const completedTasks = document.querySelector('article.completedTasks ul')
const completedTasksNumbers = document.querySelector('span.completedTasksNumbers')

let allNumbers = 0;
let numbersCompleted = 0;


const tasksIsCompleted = e => {

	const tasks = [...document.querySelectorAll('.task')]

	const completedTask = e.target.parentNode
	completedTask.className = 'taskCompleted'
	let tbnCompleted = completedTask.querySelector('button')

	e.target.parentNode.remove()
	tbnCompleted.remove()
	completedTasks.appendChild(completedTask)

	exercise.textContent = tasks.length - 1
	numbersCompleted++
	completedTasksNumbers.textContent = numbersCompleted

}


const createdTasks = e => {
	e.preventDefault();

	let titleTask = input.value;

	if (titleTask === '') {
		return alert('Zadanie nie może być puste! Nie bądź leniwy - dodaj zadanie i zrób go!!!')
	}

	const task = document.createElement('li');
	task.className = 'task';
	task.innerHTML = titleTask + "<button>Wykonaj</button>";
	taskToComplete.appendChild(task);

	input.value = "";

	allNumbers++
	allTaskNumbers.textContent = allNumbers;

	const tasks = [...document.querySelectorAll('.task')]

	exercise.textContent = tasks.length

	task.querySelector('button').addEventListener('click', tasksIsCompleted)

}

form.addEventListener('submit', createdTasks)


