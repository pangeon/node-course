const $FS = require('fs');

function createFileFromStream(baseFile, newFile, encoding, message) {
  const readStream = $FS.createReadStream(baseFile, encoding);
  const writeStream = $FS.createWriteStream(newFile);

  readStream.on('data', (chunk) => {
    writeStream.write(chunk);
    console.log(message);
  });
}
function createFileWithPipe(baseFile, newFile, message) {
  const readStream = $FS.createReadStream(baseFile);
  const writeStream = $FS.createWriteStream(newFile);

  readStream.pipe(writeStream);
  console.log(message);
}
const content_js = ``;

function createFiles() {
  createFileFromStream('./content.txt', './index.html', {encoding: 'utf-8'}, 'Copy content.txt to index.html.');
  createFileWithPipe('./reset_css.txt', './main.css', 'Copy reset_css.txt to main.css');

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



