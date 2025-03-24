cd `dirname $0`
git add .
git commit -m "Update"
git branch -M main
git remote add origin git@github.com:himorogi/himorogi.github.io.git
git push -u -f origin main