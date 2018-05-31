let fs = require('fs');

let getCategory = (line) => line.startsWith('ham') ? 'ham' : 'spam';

let lines = fs.readFileSync('spam.csv')
    .toString()
    .split(/\r?\n/);

let spamNumber = 0;
let hamNumber = 0;

lines.forEach((line) => {
        let category = getCategory(line);
        console.log(category == 'spam');
        
        if (category == 'spam')
            spamNumber++;
        else 
           hamNumber++;

        line = line.substring(category.length + 1);
        let words = line.split(/[\.,"' ]+/g); 
        let lowerCaseWords = words.map((w) => w.toLowerCase());
        let cleanWords = lowerCaseWords.filter((w) => w != '');
        //console.log(cleanWords);
    }); 
 console.log(lines.length);
 console.log(spamNumber);
 console.log(hamNumber);
 
 
 
// See https://regexr.com/ to debug regular expressions