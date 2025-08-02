cd `dirname $0`
git checkout --orphan cleaned-history 
git add .
git commit -am "Update"
git branch -D main
git branch -m main
git remote add origin git@github.com:himorogi/himorogi.github.io.git
git push -u -f origin main