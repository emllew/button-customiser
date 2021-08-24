let values = Array.from(document.querySelectorAll('input'));
let button = document.querySelector('button');
let randomBtn = document.getElementById('random');
let resetBtn = document.getElementById('resetBtn');

randomBtn.addEventListener('click', randomColor);
resetBtn.addEventListener('click', reset);
values.forEach((input) => input.addEventListener('change', update));

function randomColor() {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var h = randomInt(0, 360);
  var s = randomInt(42, 98);
  var l = randomInt(40, 90);
  button.style.setProperty('--bgColor', `hsl(${h},${s}%,${l}%)`);
  button.style.setProperty(
    '--bgColorLight',
    `hsl(${h + 10},${s + 10}%,${l + 14}%)`
  );
  button.style.setProperty('--border-outer', ' rgb(240, 240, 240)');
  button.style.setProperty(
    '--border-inner-lighter',
    `rgba(255, 255, 255, 0.194)`
  );
  button.style.setProperty('--border-inner-darker', `rgba(0, 0, 0, 0.447)`);
}

function reset() {
  var form = document.querySelector('#customiseForm');
  form.reset();
  button.style.removeProperty('--font-color');
  button.style.removeProperty('--bgColor');
  button.style.removeProperty('--bgColorLight');
  button.style.removeProperty('--border-outer');
  button.style.removeProperty('--border-inner-lighter');
  button.style.removeProperty('--border-inner-darker');
  button.style.removeProperty('--padding-X');
  button.style.removeProperty('--padding-Y');
  button.style.removeProperty('--border-radius');
  document.querySelector('.paddingX').textContent = `X-Axis Padding: 20px`;
  document.querySelector('.paddingY').textContent = `Y-Axis Padding: 30px`;
  document.querySelector('.borderRadius').textContent = `Border radius: 10px`;
}

function update() {
  if (this.id === 'fontColor') {
    button.style.setProperty('--font-color', this.value);
  } else if (this.id === 'bgColor') {
    button.style.setProperty('--bgColor', this.value);
    button.style.setProperty('--bgColorLight', this.value);
    button.style.setProperty('--border-outer', ' rgb(240, 240, 240)');
    button.style.setProperty(
      '--border-inner-lighter',
      `rgba(255, 255, 255, 0.194)`
    );
    button.style.setProperty('--border-inner-darker', `rgba(0, 0, 0, 0.447)`);
  } else if (this.id === 'paddingX') {
    button.style.setProperty('--padding-X', this.value + 'px');
    document.querySelector(
      '.paddingX'
    ).textContent = `X-Axis Padding: ${this.value}px`;
  } else if (this.id === 'paddingY') {
    button.style.setProperty('--padding-Y', this.value + 'px');
    document.querySelector(
      '.paddingY'
    ).textContent = `Y-Axis Padding: ${this.value}px`;
  } else if (this.id === 'borderRadius') {
    button.style.setProperty('--border-radius', this.value + 'px');
    document.querySelector(
      '.borderRadius'
    ).textContent = `Border radius: ${this.value}px`;
  }
}
