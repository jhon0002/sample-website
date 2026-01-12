# GitHub Setup Guide

Your local Git repository is ready! Follow these steps to push to GitHub:

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in:
   - **Repository name**: `portfolio-websites` (or any name you prefer)
   - **Description**: "5 sample websites for my portfolio service"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## Step 2: Connect and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-websites.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo create portfolio-websites --public --source=. --remote=origin --push
```

## What's Next?

After pushing, you can:
1. Deploy to Vercel (see DEPLOYMENT.md)
2. Share your repository
3. Continue making changes and pushing updates

---

**Made by kartik**
