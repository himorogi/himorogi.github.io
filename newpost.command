cd `dirname $0`
mdyear=$(date +"%Y")
mddate=$(date +"%Y-%m-%d")

hugo new ./content/memo/$mdyear/$mddate.md
open ./content/memo/$mdyear/$mddate.md -a "Visual Studio Code"
