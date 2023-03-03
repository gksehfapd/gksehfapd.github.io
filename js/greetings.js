const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(event) {
	event.preventDefault()
	loginForm.style.display = 'none'
	const username = localStorage.getItem(USERNAME_KEY)
	localStorage.setItem(USERNAME_KEY, loginInput.value)
	paintGreetings(username)
}

function paintGreetings() {
	const username = localStorage.getItem(USERNAME_KEY)
	greeting.innerText = `Hello ${username}`
	greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
	//show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME)
	loginForm.addEventListener('submit', onLoginSubmit)
} else {
	loginForm.style.display = 'none'
	//show the greetings
	paintGreetings(savedUsername)
}
