import html from './message.html';
import './message.css';

let body;

export function show(networkHandle) {
  body = document.getElementsByTagName('body')[0];
  const div = document.createElement('div');
  div.innerHTML = html.trim();
  body.appendChild(div);
  addSmsOption(networkHandle.smsNumber);
  const widget = document.getElementById('tdcWidgetDialog');
  widget.addEventListener('click', toggle);
  body.addEventListener('click', close);
}

export function close() {
	const tcdWidgetOptionContainer = document.getElementById('tcdWidgetOptionContainer');
	tcdWidgetOptionContainer.classList.add('tdc-widget-closed');
}

export function toggle(event) {
  event.stopPropagation();
	const tcdWidgetOptionContainer = document.getElementById('tcdWidgetOptionContainer');
	tcdWidgetOptionContainer.classList.toggle('tdc-widget-closed');
}

export function openModal(event) {
  event.stopPropagation();
  const tdcWidgetSMSFormOverlay = document.querySelector('.tdc-widget-sms-form-overlay');
  tdcWidgetSMSFormOverlay.classList.remove('tdc-widget-hidden');
}

export function closeModal(event) {
  event.stopPropagation();
  const tdcWidgetSMSFormOverlay = document.querySelector('.tdc-widget-sms-form-overlay');
  tdcWidgetSMSFormOverlay.classList.add('tdc-widget-hidden');
}

function stopPropagation(event) {
  event.stopPropagation();
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
} 

function addSmsOption(handle) {
  const smsOption =  document.getElementById('tdcWidgetSmsOption');
  smsOption.classList.remove('tdc-widget-hidden');
  if (isMobile()) {
    smsOption.querySelector('#tdcWidgetSmsLink').href = `sms:${handle}`;
  } else {
    const tdcWidgetSMSFormOverlay = document.querySelector('.tdc-widget-sms-form-overlay');
    tdcWidgetSMSFormOverlay.querySelector('.tdc-widget-sms-number').href = `sms:${handle}`;
    tdcWidgetSMSFormOverlay.querySelector('.tdc-widget-sms-number').innerText = handle;
    tdcWidgetSMSFormOverlay.querySelector('.tdc-widget-modal-close').addEventListener('click', closeModal);
    tdcWidgetSMSFormOverlay.querySelector('.tdc-widget-sms-form').addEventListener('click', stopPropagation);
    tdcWidgetSMSFormOverlay.addEventListener('click', closeModal);
    smsOption.querySelector('#tdcWidgetSmsLink').addEventListener('click', openModal);
  }
}
