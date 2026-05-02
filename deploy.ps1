# deploy.ps1 — Run this once after installing Git + Node.js
# Usage: Right-click PowerShell -> Run as Administrator -> .\deploy.ps1

Write-Host "`n=== Compunnel Site Deployment ===" -ForegroundColor Cyan

# 1. Init git
Write-Host "`n[1/5] Initialising git repo..." -ForegroundColor Yellow
git init
git add .
git commit -m "feat: initial Compunnel Next.js + WordPress build"

# 2. Push to GitHub (update the URL below to your repo)
Write-Host "`n[2/5] Pushing to GitHub..." -ForegroundColor Yellow
git remote add origin https://github.com/amittomar-hue/comp.git
git branch -M main
git push -u origin main --force

# 3. Install dependencies
Write-Host "`n[3/5] Installing npm dependencies..." -ForegroundColor Yellow
npm install

# 4. Deploy to Vercel
Write-Host "`n[4/5] Deploying to Vercel..." -ForegroundColor Yellow
npx vercel --prod `
  --env WP_SITE=compu81.wordpress.com `
  --env REVALIDATE_SECRET=change-me-to-a-random-string

Write-Host "`n[5/5] Done! Your site is live on Vercel." -ForegroundColor Green
Write-Host "Next: Go to https://vercel.com/dashboard and set environment variables under Project Settings > Environment Variables" -ForegroundColor Cyan
