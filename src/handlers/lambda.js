import PR from './../PullRequest';

console.log('start of file : lambda.js');

export function handler (event, context, done) {

    if (event.body) {
        console.log('lambda.js : parsing event.body');
        event = JSON.parse(event.body);
    }

    console.log('lambda.js : new PR');
    const pr = new PR(event.user, event.repo, event.branch, event.token)

    console.log('lambda.js : configure PR');
    pr.configure(event.files, event.commit, event.title, event.description);

    console.log('lambda.js : send PR');
    pr.send().then((pr) => {
        console.log('lambda.js : send success');
        console.log(pr);
        console.log('lambda.js : throw http status 200');
        done(null, {
            statusCode: 200,
            body: JSON.stringify(pr.data)
        });
    }).catch((e) => {
        console.log('lambda.js : catching error');
        console.log(e);
        console.log('lambda.js : throw http status 500');
        done(null, {
            statusCode: 500,
            body: 'Pull request can\'t be created!'
        });
    });

}
