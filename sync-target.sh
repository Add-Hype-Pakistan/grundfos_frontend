#!/bin/bash
set -e

# Record current HEAD (always equals origin/main after this script runs)
PREV=$(git rev-parse HEAD)

# Fetch latest from origin
git fetch origin

ORIGIN_NEW=$(git rev-parse origin/main)

if [ "$PREV" = "$ORIGIN_NEW" ]; then
    echo "Already up to date. Nothing to push."
    exit 0
fi

# Fast-forward merge — clean because local always matches origin/main
git merge --ff-only origin/main

# Rebase only the new commits and reset author to AliTechHype
git rebase "$PREV" --exec "git commit --amend --reset-author --no-edit"

# Push to target (Vercel auto-deploys from here)
git push target main --force

# Reset local back to origin/main so next run is a clean fast-forward
git reset --hard origin/main

echo ""
echo "Done — pushed to target as AliTechHype."
