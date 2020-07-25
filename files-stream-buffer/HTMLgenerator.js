const $FS = require('fs');

const content = 
`
<!doctype html>

<html lang="pl">
<head>
  <meta charset="utf-8">

  <title>Main Page</title>
  <meta name="description" content="My private site">
  <meta name="author" content="Kamil Cecherz">
  <link rel="stylesheet" href="css/main.css?v=1.0">
</head>

<body>
  <script src="js/main.js"></script>
</body>
</html>
`
const content_css = ``;
const content_js = ``;

function createFiles() {
  $FS.writeFile('index.html', content, (error) => {
      if(error) throw error;
      console.log('File index.html has been created.');
  });
  $FS.writeFile('main.css', content_css, (error) => {
      if(error) throw error;
      console.log('File main.css has been created.');
  });
  $FS.writeFile('main.js', content_js, (error) => {
      if(error) throw error;
      console.log('File main.js has been created.');
  });
}
function createDirs() {
  $FS.mkdir('./page', (error) => {
      if(error) throw error;
      console.log('Dir page has been created.');
  });
  $FS.mkdir('./page/css', {recursive: true}, (error) => {
      if(error) throw error;
      console.log('Dir css has been created.');
  });
  $FS.mkdir('./page/js', {recursive: true}, (error) => {
      if(error) throw error;
      console.log('Dir js has been created.');
  });
}
function moveFiles() {
  $FS.rename('index.html', './page/index.html', (error) => {
    if(error) throw error;
    console.log('File index.html is moved to page dir.') 
  });
  $FS.rename('main.css', './page/css/main.css', (error) => {
      if(error) throw error;
      console.log('File main.css is moved to css dir.') 
  });
  $FS.rename('main.js', './page/js/main.js', (error) => {
      if(error) throw error;
      console.log('File main.js is moved to js dir.') 
  });
}
function removePage() {
  $FS.rmdir('./page', {recursive: true}, (error) => {
      if(error) throw error;
      console.log('Page has been removed.') 
  });
}
setTimeout(() => { createFiles(); }, 1000);
setTimeout(() => { createDirs(); }, 2000);
setTimeout(() => { moveFiles(); }, 3000);
setTimeout(() => { removePage(); }, 4000);



