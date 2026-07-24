const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const styles = `
<style id="wavex-big-idea-responsive-fix">
  .big-idea-responsive {
    position: relative;
    width: 100%;
    min-height: 0 !important;
    aspect-ratio: 16 / 9 !important;
    padding: 0 !important;
    overflow: hidden;
    background:
      radial-gradient(circle at 72% 32%, rgba(241,90,0,.12), transparent 38%),
      #0b0b09;
  }

  .big-idea-responsive > img[data-asset-number="5"] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    object-fit: contain !important;
    object-position: center center !important;
    transform: none !important;
  }

  @media (max-width: 760px) {
    .big-idea-responsive {
      aspect-ratio: 16 / 9 !important;
      border-radius: 18px;
    }
  }

  @media (max-width: 420px) {
    .big-idea-responsive {
      aspect-ratio: 16 / 9 !important;
      border-radius: 14px;
    }
  }
</style>`;

const script = `
<script id="wavex-big-idea-responsive-script">
(function(){
  document.querySelectorAll('img[data-asset-number="5"]').forEach(function(img){
    const holder = img.closest('.slot');
    if(holder) holder.classList.add('big-idea-responsive');
  });
})();
</script>`;

html = html.replace(/<style id="wavex-big-idea-responsive-fix">[\s\S]*?<\/style>/, '');
html = html.replace(/<script id="wavex-big-idea-responsive-script">[\s\S]*?<\/script>/, '');
html = html.replace('</head>', styles + '\n</head>');
html = html.replace('</body>', script + '\n</body>');

fs.writeFileSync(file, html);
console.log('Applied full-visibility responsive sizing to assets/images/5.png.');
