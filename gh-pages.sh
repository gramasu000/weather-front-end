# Delete existing gh-pages branch - both locally and globally
git branch -d gh-pages
git push --delete origin gh-pages

# Add new gh-pages branch with same commit history as master (locally)
git branch gh-pages
git checkout gh-pages

# Remove files besides the static website and gitignored files (and this file)

rm webpack.config.js package.json package-lock.json postcss.config.js .babelrc
rm README.md

mv src/appid.js ./
rm src/* -r
mv appid.js src/

mv public/index.html ./
rm public/ -r

# Commit changes to gh-pages branch
git add -A
git commit -m "Configured gh-pages from master branch"
git push -u origin gh-pages

# Go back to master branch
git checkout master
