# DEV environment for 🤖 CanadaBot
Goes along with [DEV environment for ore-ero](https://github.com/fredericlestage-vdm/ore-ero/)

### Configuration
 - Create a `.env` file at the root of the project
 - In your github account, navigate to `settings/Developper settings/Personal access tokens`
 - Click `Generate a new token`, you only need to select the `repo` option
 - Copy the token and add it to the `.env` file in this manner: `GH_TOKEN=[token]` (without the brackets)

Note: the token allows the communication between this api and your github repo. It's the equivalent of logging in as the API to your github account.

### Then you can start the project
 - Start with a casual `npm install`
 - Followed by a `npm run build` to create the dist folder (You will need to call this each time you change anything in the .js files)
 - Then you can `npm run start` to launch the node server (hosted on http://localhost:3000)

Note: You can change the server's port in the `package.json` file on line 18: `"start": "micro -p [port] dist/micro.js",` (without the brackets).

### FAQ
One of the main difficulty is to create a file without a name (".env"). The easiest way to do so is to create it directly in your IDE instead of creating a new text document.txt and renaming it. Usually, Windows won't allow you to create a file with only an extension, but IDEs are usually more accepting.
