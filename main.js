const allTaskNumbers = document.querySelector('span.allTaskNumbers')
const form = document.querySelector('form');
const input = document.querySelector('input');
const exercise = document.querySelector('span.exercise')
const taskToComplete = document.querySelector('article.allTask ul')
const completedTasks = document.querySelector('article.completedTasks ul')
const completedTasksNumbers = document.querySelector('span.completedTasksNumbers')

let allNumbers = 0;

const tasksIsCompleted = e => {
	console.log("wykonano");
}

const createdTasks = e => {
	e.preventDefault();

	let titleTask = input.value;

	if (titleTask === '') {
		return alert('Zadanie nie może być puste! Nie bądź leniwy - dodaj zadanie i zrób go!!!')
	}

	const task = document.createElement('li');
	task.innerHTML = titleTask + "<button>Wykonaj</button>";
	taskToComplete.appendChild(task);

	input.value = "";

	allNumbers++
	allTaskNumbers.textContent = allNumbers;
	exercise.textContent = allNumbers;


	task.querySelector('button').addEventListener('click', tasksIsCompleted);

}

form.addEventListener('submit', createdTasks)
