# Solo-Project

## NEXT:
- Decide what I want to do
  - query API for NASA pictures?
  - research the NASA API (start with the readme and/or googling)

## What question am I working on now?
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
