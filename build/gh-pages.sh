#! /bin/bash
br=$(git rev-parse --abbrev-ref HEAD)
git checkout gh-pages && \
git pull --rebase || exit 1

if ! git config user.email || ! git config user.name; then
  git config user.email "i@posva.net"
  git config user.name "Circle CI"
fi
git pull --rebase && \
git merge --no-edit $br && \
npm run doc && \
git commit -a --amend --no-edit && \
git push origin gh-pages && \
git checkout $br || exit 1
