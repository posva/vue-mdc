#! /bin/bash
# use a different port to avoid conflicting with npm run serve
PORT=8080

# build static files. Nightwatch need the bundled test file
./node_modules/.bin/webpack \
  --config build/webpack.test.config.js

# serve example
./node_modules/.bin/http-server --p $PORT >/dev/null 2>/dev/null &

if [[ ! "$1" ]]; then
  browsers='chrome,firefox'
else
  browsers="$1"
fi

# run e2e tests, make sure to kill the server no matter pass or fail
./node_modules/.bin/nightwatch \
  -c build/nightwatch.json \
  -e "$browsers" \
  && kill $! || (kill $! && exit 1)
