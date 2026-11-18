/*
//First time to get the code to local:

Git clone first time : child branch
git clone --branch feature/playwright-framework --single-branch https://github.com/nagalakshmikothuru/Playwright_End_to_End.git
Git clone first time : main
git clone --branch main --single-branch https://github.com/nagalakshmikothuru/Playwright_End_to_End.git


//First Time push the code :
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPOSITORY>.git
git push -u origin main

//suppose we are in child branch, working, we need to push the code in child branch in git
git status
git add .
git commit -m ‘child’
git push 

//Now I want to merge the child branch to main:
Switch to main
Git pull origin main   --get the latest code of main to the vscode
Git merge faetue/playwright-framework
Git push origin main


//some commaands
git switch -c <branch_name>  --create new branch and switch to that branch
git switch <branch_name>  --switch to the existing branch
git merge <branch_name>  --merge the branch to the current branch
git add .  --add all the files to the staging area
git commit -m "message"  --commit the changes to the local repo
git push origin <branch_name>  --push the changes to the remote repo
git pull origin <branch_name>  --pull the changes from the remote repo to the local repo

*/