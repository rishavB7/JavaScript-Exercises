let file1 = "sample.txt";
let file2 = "img.png";
let file3 = "test.pdf";
let ext;

function getExxtension(fname) {
    ext = fname.split('.').pop();
    console.log(`File Extension : ${ext}`);
}
getExxtension(file3);