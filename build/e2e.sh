#! /bin/bash
# use a different port to avoid conflicting with npm run serve
PORT=8082

# serve example
./node_modules/.bin/webpack-dev-server \
  --config build/webpack.test.config.js \
  --port $PORT &

if [[ ! "$1" ]]; then
  browsers='chrome,firefox'
else
  browsers="$1"
fi

sleep 2

# run e2e tests, make sure to kill the server no matter pass or fail
PORT=$PORT ./node_modules/.bin/nightwatch \
  -c build/nightwatch.json \
  -e "$browsers" \
  && kill $! || (kill $! && exit 1)
