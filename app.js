
const count = require('word-count')

const lodash = require('lodash')

const fs = require('fs');
const { log } = require('console');

function getDataFile() {
    return new Promise(function (resolve, reject) {
        fs.readFile('data.txt', 'utf-8', function (err, data) {
            if (err) throw err;
            resolve(data)
        })
    })
}

// // // Return count " "
// getDataFile()
//     .then(data => console.log(data.split(' ').length))

// // Return reversed data
// getDataFile()
//     .then(data => console.log(
//         lodash.reverse(data.split(''))  // reverse array 
//             .join('')) // join array to a long string
//     )

// // Return uniq str Whit Out Duplicates
// getDataFile()
//     .then(data => {
//         const arrayData = data.split(' ');
//         const arrayDuplicates = (arrayData.filter((item, index) => arrayData.indexOf(item) !== index));
//         const arrayWhitOutDuplicates = arrayData.filter(item => !arrayDuplicates.includes(item))
//         console.log(arrayWhitOutDuplicates.join(' '));
//     });


// // Return num of words Whit Out Duplicates
// getDataFile()
//     .then(data => {
//         const arrayData = data.split(' ');
//         const arrayDuplicates =
//             (arrayData.filter((item, index) => arrayData.indexOf(item) !== index));
//         const arrayWhitOutDuplicates =
//             arrayData.filter(item => !arrayDuplicates.includes(item))
//         console.log(arrayWhitOutDuplicates.length);
//     });

// // Return uniq str Whit Out Duplicates toUpperCase
// getDataFile()
//     .then(data => {
//         const arrayData = data.split(' ');
//         const arrayDuplicates =
//             (arrayData.filter((item, index) => arrayData.indexOf(item) !== index));
//         const arrayWhitOutDuplicates =
//             arrayData.filter(item => !arrayDuplicates.includes(item))
//         console.log(arrayWhitOutDuplicates.join(' ').toUpperCase());
//     });

// // Return uniq str Whit Out Duplicates tath begger then five letters
// getDataFile()
//     .then(data => {
//         const arrayData = data.split(' ');
//         const arrayDuplicates =
//             (arrayData.filter((item, index) => arrayData.indexOf(item) !== index));
//         const arrayWhitOutDuplicates =
//             arrayData.filter(item => !arrayDuplicates.includes(item))
//         const arrayWhitOutDuplicatesBeggerFiveLenth =
//             arrayWhitOutDuplicates.filter(item => item.length > 5)
//         console.log(arrayWhitOutDuplicatesBeggerFiveLenth.join(' '));
//     });

// Return uniq str Whit Out Duplicates tath begger then five letters
getDataFile()
    .then(data => {
        const arrayData = data.split(' ');
        const arrayDuplicates =
            (arrayData.filter((item, index) => arrayData.indexOf(item) !== index));
        const arrayWhitOutDuplicates =
            arrayData.filter(item => !arrayDuplicates.includes(item))
        const vowels = ['o', 'e', 'i', 'y', 'a']
        const arrayWhitOutDuplicatesAndVowels =
            arrayWhitOutDuplicates.filter(item => !vowels.includes(item))
        console.log(arrayWhitOutDuplicatesAndVowels.join(' '));
    });