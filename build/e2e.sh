#! /bin/bash
# use a different port to avoid conflicting with npm run serve
export PORT=8082

# build and serve
node build/e2e-server.js &

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
