#! /bin/bash
# use a different port to avoid conflicting with npm run serve
export PORT=8082

# serve example
node build/dev-server.js &

# run e2e tests, make sure to kill the server no matter pass or fail
./node_modules/.bin/mocha-phantomjs "http://localhost:$PORT/test/unit" \
  && kill $! || (kill $! && exit 1)
