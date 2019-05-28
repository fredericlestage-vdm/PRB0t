const PR = require("./../PullRequest");
const { json } = require("micro");
const cors = require("../cors")();

console.log('start of file : micro.js');

const handler = async (req, res) => {
    try {
        console.log('micro.js : try await json');
        const body = await json(req);

        console.log('micro.js : sets the author of the commit');
        // Set the commit author if requested.
        let author = {
            name: 'canada-bot',
            email: 'canada.pr.bot@gmail.com',
        };
        if (body.author) {
            author = body.author
        }

        console.log('micro.js : new PR');
        const pr = new PR(body.user, body.repo, body.branch, body.token);
        pr.configure(body.files, body.commit, body.title, body.description, author);
        const { data } = await pr.send();
        return data;
    } catch (err) {
        console.log('micro.js : catching error');
        console.log(err);
        throw err;
    }
};

module.exports = cors(handler);
