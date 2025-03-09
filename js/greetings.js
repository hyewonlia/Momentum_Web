const $loginForm = document.querySelector('#login-form');
const $loginInput = document.querySelector('#login-form input');
const $greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

//
function loginSubmit(event) {
  event.preventDefault();
  const username = $loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(event) {
  $greeting.classList.remove(HIDDEN_CLASSNAME);
  $loginForm.classList.add(HIDDEN_CLASSNAME);
  $loginInput.value = '';

  const hours = new Date().getHours();
  $greeting.textContent =
    hours > 0 && hours < 12
      ? `Good Morning ${event}`
      : hours >= 12 && hours < 18
      ? `Good afternoon ${event}`
      : `Good Night ${event}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  $loginForm.classList.remove(HIDDEN_CLASSNAME);
  $loginForm.addEventListener('submit', loginSubmit);
} else {
  paintGreetings(savedUsername);
}
