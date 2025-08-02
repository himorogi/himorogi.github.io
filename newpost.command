cd `dirname $0`
mdyear=$(date +"%Y")
mddate=$(date +"%Y-%m-%d")

hugo new ./content/posts/$mdyear/$mddate.md
open ./content/posts/$mdyear/$mddate.md -a "Visual Studio Code"
