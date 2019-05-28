# DEV environment for 🤖 CanadaBot
The Pull Request Bot for Anonymous contributions on GitHub!

### Configuration
 - Create a `.env` file. at the root of the project
 - In your github account, navigate to `settings/Developper settings/Personal access tokens`
 - Click `Generate a new token`, you only need to select the `repo` option
 - Copy the token and add it to the `.env` file in this manner: `GH_TOKEN=[token]` (without the brackets)

Note: the token allows the communication between this api and your github repo. It's the equivalent of logging in as the API to your github account.

### Then you can start the project
 - Start with a casual `npm install`
 - Followed by a `npm run build` to create the dist folder (You will need to call this each time you change anything in the .js files)
 - Then you can `npm run start` to launch the node server (hosted on localhost:3000)

Note: You can change the server's port in the `package.json` file on line 18: `"start": "micro -p [port] dist/micro.js",` (without the brackets).