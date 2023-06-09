# Solo-Project
- The problem: How to celebrate my birthday during Codesmith?
- The solution: ask for a gift from the Universe to get me through the day
- DEMO
- Challenges:
  - webpack - took 1 whole day, clean slate twice
  - successful request to a public api - took one whole day and 3 apis - finally success!
  - API that I wanted to pull from was mostly down
  - Remembering react (state anyone?) and styling components
- Stretch goals:
  - actually get pics from api
  - one click to set your google homepage  


## NASA API info
Account Email: abehenderson@gmail.com
Account ID: 11738ebb-db92-427b-a4f4-57b5b40523db
Key: lBlh4Uh58OH5CabW4IOa43ts6NaSoMOgPIEuhyQy
Sample Image: https://apod.nasa.gov/apod/image/2306/ic1396ASI294large_1030.jpg

## NEXT:
- ~~link a style sheet with a background~~
- ~~create a react contianer and link to app~~
- ~~style the container to look like a box~~
- ~~how do I add an image tag to a component?~~
- ~~how do I display an image within a component using a url?~~
- ~~How do I make an api request from my server?~~
- ~~how do I make a request to the server from a react component (triggering an api request and response)~~

## What question am I working on now?
- How do I create more than one component from the input field?


## What might I work on next?
- Container needs:
- needs an input field and button asking for a birthday
- needs an input field asking for the number of images requested
- based on the number of images requested
  - creates a component for each number of images
  - creates a year for each image - starting with previous year
  - sends request to api for each image (re-usable code)
  - (reminds me of one of our units...something with cards - markets??? or Star Wars???)



- ### What does `npm start` do?
  - spins up webpack.config (where it gets index.js at entry)

  - currently setup to run production mode
  - server listens on local host 3000 ONLY
  - spins up ONCE - if you make a change (on server.js) and refresh browser, the change will not be displayed (must use `npm run dev` to see changes without spinning up the server again)
- ### What does `npm run dev` do?
  - spins up webpack-dev-server (does it access webpack.config.js?)
  - creates bundle file in RAM - won't show up in the Solo Project folder 
  - runs in development mode - uses `nodemon` and the server continues listening for changes
  - server listens on local host 3000 AND 8080 (via proxy)
  - any changes on front or back end are updated in real time
    - front end changes (on port 8080) are updated real time
    - back end changes (port 3000) you have to refresh the browser to see changes (why the difference?)
- ### What does `npm run build` do?
  - creates /build/ folder and bundle.js file

NOTES:
  -  `killall node` -- if there are any duplicate ports running: 'Error: address already in use'
