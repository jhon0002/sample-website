# Complete Vercel Deployment Guide

This guide will walk you through deploying all 5 websites to Vercel, each with its own unique URL.

## Prerequisites

- ✅ GitHub repository: `jhon0002/sample-website` (already done!)
- Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)

## Step-by-Step Deployment

### Step 1: Sign in to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

### Step 2: Deploy Website 1 (Minimalist Design Studio)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Find and select **`jhon0002/sample-website`**
4. Click **"Import"**
5. **IMPORTANT**: In the project settings:
   - **Root Directory**: Click "Edit" → Enter `website-1-minimalist`
   - **Framework Preset**: Leave as "Other" or "Other"
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty (or `.`)
6. Click **"Deploy"**
7. Wait for deployment (usually 30-60 seconds)
8. **Copy the deployment URL** (e.g., `website-1-minimalist-xyz.vercel.app`)

### Step 3: Deploy Website 2 (Memphis Maximalist)

1. Go to [vercel.com/new](https://vercel.com/new) again
2. Import the same repository: **`jhon0002/sample-website`**
3. **IMPORTANT**: Change settings:
   - **Project Name**: `website-2-memphis-maximalist` (or any name you like)
   - **Root Directory**: `website-2-memphis-maximalist`
4. Click **"Deploy"**
5. Copy the deployment URL

### Step 4: Deploy Website 3 (Memphis Riot)

1. Repeat the process:
   - Import: `jhon0002/sample-website`
   - **Root Directory**: `website-3-memphis-riot`
   - **Project Name**: `website-3-memphis-riot`
2. Deploy and copy URL

### Step 5: Deploy Website 4 (Dark Memphis)

1. Repeat:
   - Import: `jhon0002/sample-website`
   - **Root Directory**: `website-4-dark-memphis`
   - **Project Name**: `website-4-dark-memphis`
2. Deploy and copy URL

### Step 6: Deploy Website 5 (Modern Creative)

1. Repeat:
   - Import: `jhon0002/sample-website`
   - **Root Directory**: `website-5-modern-creative`
   - **Project Name**: `website-5-modern-creative`
2. Deploy and copy URL

## Quick Reference: Root Directories

| Website | Root Directory |
|---------|---------------|
| Website 1 | `website-1-minimalist` |
| Website 2 | `website-2-memphis-maximalist` |
| Website 3 | `website-3-memphis-riot` |
| Website 4 | `website-4-dark-memphis` |
| Website 5 | `website-5-modern-creative` |

## After Deployment

Each website will have:
- ✅ Unique URL (e.g., `website-1-minimalist.vercel.app`)
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push

## Custom Domains (Optional)

To add custom domains:

1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Issue: 404 errors
- **Solution**: Make sure Root Directory is set correctly

### Issue: CSS/JS not loading
- **Solution**: Check that all files are in the correct root directory

### Issue: Build fails
- **Solution**: These are static sites - no build needed. Make sure Build Command is empty.

## Updating Websites

When you make changes:

1. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Update websites"
   git push
   ```

2. Vercel will automatically redeploy all projects!

## Your Deployment URLs

After deployment, you'll have 5 URLs like:
- `https://website-1-minimalist.vercel.app`
- `https://website-2-memphis-maximalist.vercel.app`
- `https://website-3-memphis-riot.vercel.app`
- `https://website-4-dark-memphis.vercel.app`
- `https://website-5-modern-creative.vercel.app`

---

**Made by kartik**
