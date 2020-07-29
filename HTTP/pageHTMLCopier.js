const $HTTP = require('http');
const $FS = require('fs');

/* 
TODO: Method can't write all content from URL
? Maybe buffer is too small.. ?
*/
function loadAndCopyPage(url, fileSite, message) {
    $HTTP.get(url, (response) => {
        response.on('data', (data) => {
            $FS.writeFile(fileSite, data, (error) => {
                if(error) {
                    throw error;
                } else {
                    console.log(message);
                    console.log(data.toString());
                }
            });
        }); 
    });
}
loadAndCopyPage('http://html5.cecherz.pl/dw.html', './dw.html', 'File dw.html has been created.');