#! /bin/bash
if ! git config user.email || ! git config user.name; then
  git config user.email "i@posva.net"
  git config user.name "Circle CI"
fi

npm run doc && \
cp dist/index.html dist/doc-bundle.js doc/favicon.ico . && \
git add -f index.html doc-bundle.js favicon.ico && \
git commit -a --amend --no-edit && \
git push origin gh-pages && \
