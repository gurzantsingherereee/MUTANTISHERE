const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');
const version = (process.env.GITHUB_SHA || Date.now().toString(36)).slice(0, 12);

for (let i = 1; i <= 5; i += 1) {
  const target = `assets/images/ds${i}.png`;
  const sourcePattern = new RegExp(`assets/(?:design-strategy|images)/ds${i}\\.png(?:\\?v=[^"']*)?`, 'g');
  html = html.replace(sourcePattern, `${target}?v=${version}`);

  if (!fs.existsSync(target)) {
    console.warn(`Missing Design Strategy image: ${target}`);
  }
}

fs.writeFileSync(file, html);
console.log(`Mapped Design Strategy images to assets/images/ds1.png through ds5.png with cache version ${version}.`);
