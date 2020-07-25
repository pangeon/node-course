const $fileSystem = require('fs');

const allFileList = $fileSystem.readdirSync('./../');
console.log('repository dir structure:');
console.log(allFileList);

$fileSystem.readdir('./../key_skills', (error, keySkillsDirFileList) => {
    (keySkillsDirFileList != undefined) ? console.log('dir key_skills:') : console.log(error);
    (keySkillsDirFileList != undefined) ? console.log(keySkillsDirFileList) : console.log(error);
});
$fileSystem.readFile('./../key_skills/quiz.js', 'utf-8', (error, content) => {
    if(error) throw error;
    console.log('File quiz.js');
    console.log('------------');
    console.log(content);
});

