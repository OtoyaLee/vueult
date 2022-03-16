#!/usr/bin/env sh
set -e
npm run docs:build
cd docs/.vuepress/dist
# cp -r ../../../CNAME ./
# echo 'www.otimeum1.tk' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:OtoyaLee/VuePressBlog.git master:gh-pages

cd -