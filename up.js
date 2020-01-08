const { execSync } = require("child_process");

execSync("gitbook build ./ ./docs");
execSync("git pull");
execSync("git add .");
execSync("git commit -m 'liu=>快速提交'");
execSync("git push origin master");
