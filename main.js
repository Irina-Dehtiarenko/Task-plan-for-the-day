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
	/* Mam fajny pomysł, ale nie wiem ja go zrealizować, muszę się położyć i przemyślić to. Chcę, żeby wykonane zadania się nie usuwały, a tylko wskakiwały do kolumny obok, z płynną zmianą ilości wykonanych zadań */
	const completedTask = e.target.parentNode
	completedTask.className = 'taskCompleted'
	console.log(completedTask);
	numbersCompleted++
	completedTasksNumbers.textContent = numbersCompleted
	e.target.parentNode.remove()
	exercise.textContent = document.querySelectorAll('.taskCompleted').length
	console.log(document.querySelectorAll('.taskCompleted'));

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

	exercise.textContent = document.querySelectorAll('.task').length

	allNumbers++
	allTaskNumbers.textContent = allNumbers;
	exercise.textContent = allNumbers;


	task.querySelector('button').addEventListener('click', tasksIsCompleted);

}

form.addEventListener('submit', createdTasks)
