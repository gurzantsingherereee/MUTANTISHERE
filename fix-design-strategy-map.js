const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

for (let i = 1; i <= 5; i += 1) {
  html = html.split(`assets/design-strategy/ds${i}.png`).join(`assets/images/ds${i}.png`);
}

fs.writeFileSync(file, html);
console.log('Mapped Design Strategy images to assets/images/ds1.png through ds5.png.');
