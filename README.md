# DEV environment for 🤖 CanadaBot

### PRB0T Configuration
 - Create a `.env` file at the root of the project
 - In your github account, navigate to `settings/Developper settings/Personal access tokens`
 - Click `Generate a new token`, you only need to select the `repo` option
 - Copy the token and add it to the `.env` file in this manner: `GH_TOKEN=[token]` (without the brackets)

Note: the token allows the communication between this api and your github repo. It's the equivalent of logging in as the API to your github account.

### Ore-ero Configuration
In your `_config.yml` file, change the following:
 - `prbot_url: http://localhost:3000`

If you want PRB0T to create the pull requests in a different repo (which you should for testing, or just to not overflow the actual project with test PRs), change these:
 - `github_username: [your github username | default: canada-ca]`
 - `github_repository: [your repo | default: ore-ero]`

You can apply these changes in your personal repo or directly in your clone of canada-ca/ore-ero. Just make sure you don't commit the changes when you're done.

### Starting the project
 - Start with a casual `npm install`
 - Followed by a `npm run build` to create the dist folder (You will need to call this each time you change anything in the .js files)
 - Then you can `npm run start` to launch the node server (hosted on http://localhost:3000)

Note: You can change the server's port in the `package.json` file on line 18: `"start": "micro -p [port] dist/micro.js",` (without the brackets).

### FAQ
**Creating a file without a name (".env") on Windows**

The easiest way to do so is to create it directly in your IDE instead of creating a new text document.txt and renaming it. Usually, Windows won't allow you to create a file without a name (because it's technically only an extension), but IDEs are usually more accepting.

**PRs are still sent to canada-ca/ore-ero instead of my personal repo**

Don't forget that changes to the `_config.yml` file are not applied until you restart the build completely. Stop running the program (`CTRL+C`), then run it again `bundle exec jekyll serve`.

**.js:310 POST https://localhost:3000/ net::ERR_SSL_PROTOCOL_ERROR**

Make sure the url for PRB0T isn't using **https**, use **http** instead.
