![Group 965](https://user-images.githubusercontent.com/63470294/131759654-ce9ca4ed-25e1-403d-a679-78526a74bbf8.png)


# A Haiku creating and sharing social app
Provoking creativity and connecting creators. Users create haikus according to the 5/7/5 syllable count and publish for the world to see.

# Collect Haikus
Users can collect haikus from other users to add to their collection. The limit for collection is 1 haiku per 24 hours. Your collection should represent your absolute favorites!

# Connecting Illustrators with Authors
Users can submit haikus from their collection to our platform sponsored artist/illustrators for review. If accepted, the illustrator will create a rendering of their own visual interpretation of the haiku and featured in the app-wide gallery for viewing.

![Uploading iPhone 12 Pro Max (3).png…]()

## Getting started

You need these things to run the Oku app. Follow the instructions supplied below or on their links before you continue with *Installation*.
* Wordnik. Get API key [here](https://www.wordnik.com/)
* Neo4j local database, including the Neo4j Desktop App. Download and install from [here](https://www.neo4j.org/) 


## Installation
1. Clone this repo and enter

   ```bash
   git clone https://github.com/aaronzomback/oku.git
   cd oku
   ```

2. Install dependencies, by running ````npm install```` both in the client and the server folder

3. Add API keys as listed in the .env.example file.

4. Start the server by running ````nodemon```` in the server folder.
5. Create a database called "oku" with Neo4j Desktop.

5. For a better experience, you might want to populate your DB with mock data. To do so follow these steps:
      * In the server folder, find the "mock_data" folder
      * Open your psql CLI, paste and run the entire content of _Logins_.sql, _Users_.sql, _Products_.sql.
      * In server/index.js uncomment line 9 ("const populate = ...") and restart the server. Comment it back out.
      * Do the same for line 10.

5. In the client folder, run ````npm start```` to start the development server.
 
 ## Tech Stack
 [React-Native](https://reactjs.org/), [GraphQL](https://www.typescriptlang.org/), [Apollo](https://styled-components.com/), [Neo4j](https://www.postgresql.org/), [NodeJS](https://expressjs.com/).
