$ErrorActionPreference = "Stop"

# Fetch both remotes
git fetch origin
git fetch target

$ORIGIN = git rev-parse origin/main
$TARGET = git rev-parse target/main

if ($ORIGIN -eq $TARGET) {
    Write-Host "Target is already up to date with origin. Nothing to do."
    exit 0
}

# Make sure local is on origin/main
git reset --hard origin/main

# Rebase commits since target/main, resetting author to AliTechHype
git rebase $TARGET --exec "git commit --amend --reset-author --no-edit"

# Push to target (Vercel auto-deploys)
git push target main --force

# Reset local back to origin/main for clean next run
git reset --hard origin/main

Write-Host ""
Write-Host "Done - pushed to target as AliTechHype."
