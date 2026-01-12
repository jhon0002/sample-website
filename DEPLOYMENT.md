# Deployment Guide for Vercel

This guide will help you deploy all 5 websites to Vercel.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))

## Method 1: Deploy Each Website as Separate Projects (Recommended)

This method gives you 5 separate URLs, one for each website.

### Steps:

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push all files to the repository

2. **Deploy Website 1**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - In "Root Directory", set: `website-1-minimalist`
   - Click "Deploy"
   - Note the deployment URL

3. **Deploy Website 2**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import the same GitHub repository
   - In "Root Directory", set: `website-2-memphis-maximalist`
   - Click "Deploy"

4. **Repeat for Websites 3, 4, and 5**
   - Follow the same process, setting the root directory to:
     - `website-3-memphis-riot`
     - `website-4-dark-memphis`
     - `website-5-modern-creative`

## Method 2: Deploy All from Root (Alternative)

If you want all websites in one Vercel project:

1. Push to GitHub
2. Import to Vercel
3. Use the `vercel.json` configuration
4. Access websites at:
   - `your-domain.vercel.app/website-1`
   - `your-domain.vercel.app/website-2`
   - etc.

## Custom Domain Setup

For each deployed website:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

No environment variables are needed for these websites - they're fully static.

## Build Settings

- **Framework Preset**: Other
- **Build Command**: (leave empty)
- **Output Directory**: (leave empty or set to `.`)

## Troubleshooting

### CSS/JS not loading
- Make sure all file paths are relative (they are)
- Check that all files are in the correct root directory

### 404 errors
- Verify the root directory is set correctly in Vercel project settings
- Ensure `index.html` exists in the root directory

### Styling issues
- Clear browser cache
- Check browser console for errors
- Verify all CSS files are being served correctly

## Quick Deploy Commands

If using Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy each website
cd website-1-minimalist && vercel
cd ../website-2-memphis-maximalist && vercel
cd ../website-3-memphis-riot && vercel
cd ../website-4-dark-memphis && vercel
cd ../website-5-modern-creative && vercel
```

## Post-Deployment

After deployment, you'll have:
- 5 unique URLs (one per website)
- Automatic HTTPS
- Global CDN
- Automatic deployments on git push

---

**Made by kartik**
