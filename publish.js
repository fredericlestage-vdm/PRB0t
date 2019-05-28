// Self Publishing with PRB0t
const PR = require('./dist/PullRequest').default;
const fs = require('fs');

console.log('start of file : publish.js');

const files =  [
    `${__dirname}/README.md`,
    `${__dirname}/index.js`,
    `${__dirname}/publish.js`,
    `${__dirname}/package-lock.json`,
    `${__dirname}/package.json`,
    `${__dirname}/src/PullRequest.js`,
    `${__dirname}/webpack.config.js`,
    `${__dirname}/.gitignore`
].map(file => {
    console.log('publish.js : mapping files');
    return { path: file.replace(`${__dirname}/`, ''), content: fs.readFileSync(file).toString() };
})

console.log('publish.js : new PR');
new PR('PRB0t', 'PRB0t', files, '🤖').catch(e => console.log(e));


