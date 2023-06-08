# Solo-Project

## NASA API info
Account Email: abehenderson@gmail.com
Account ID: 11738ebb-db92-427b-a4f4-57b5b40523db
Key: lBlh4Uh58OH5CabW4IOa43ts6NaSoMOgPIEuhyQy

## NEXT:
- ~~link a style sheet with a background~~
- ~~create a react contianer and link to app~~
- ~~style the container to look like a box~~
- 

## What question am I working on now?
- how do I add an image tag to a component?

## What might I work on next?
- How do I make a successful request to an api?



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
