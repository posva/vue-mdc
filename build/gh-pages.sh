#! /bin/bash
br=$(git rev-parse --abbrev-ref HEAD)
git pull --rebase && \
git checkout gh-pages && \
git pull --rebase && \
git merge doc && \
npm run doc && \
git commit -a --amend -m "$(date)" && \
git push origin gh-pages && \
git checkout $br || exit 1
