import html from './message.html';
import './message.css';

let body;

export function show(networkHandle) {
  body = document.getElementsByTagName('body')[0];
  const div = document.createElement('div');
  div.innerHTML = html.trim();
  body.appendChild(div);
  if (isMobile()) {
    addSmsOption(networkHandle.handle); 
    // Showing SMS option only on mobile devices
  }
  const widget = document.getElementById('jsWidgetDialog');
  widget.addEventListener('click', toggle);
  body.addEventListener('click', close);
}

export function close() {
	const optionContainer = document.getElementById('optionContainer');
	optionContainer.classList.add('closed');
}

export function toggle(event) {
  event.stopPropagation();
	const optionContainer = document.getElementById('optionContainer');
	optionContainer.classList.toggle('closed');
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
} 

function addSmsOption(handle) {
  const smsOption =  document.getElementById('smsOption');
  smsOption.classList.remove('hidden');
  smsOption.querySelector('#smsLink').href = `sms:${handle}`;
}
