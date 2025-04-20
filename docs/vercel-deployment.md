# Deploying QuirkLabs Website on Vercel

This guide provides step-by-step instructions for deploying the QuirkLabs website on Vercel, a cloud platform for static sites and serverless functions.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- Your QuirkLabs project pushed to a repository
- A Vercel account (you can sign up at [vercel.com](https://vercel.com) using your GitHub, GitLab, or Bitbucket account)

## Step 1: Prepare Your Project for Deployment

Ensure your project is ready for deployment:

1. Make sure all dependencies are correctly listed in your `package.json` file
2. Verify that your build script is correctly configured in `package.json`
3. Test your build locally to ensure it works:

```bash
pnpm run build
```

## Step 2: Create a Vercel Account

If you don't already have a Vercel account:

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose to sign up with GitHub, GitLab, or Bitbucket
4. Follow the authentication process

## Step 3: Install Vercel CLI (Optional)

For command-line deployment, install the Vercel CLI:

```bash
npm install -g vercel
```

Or with pnpm:

```bash
pnpm add -g vercel
```

## Step 4: Deploy via Vercel Dashboard (Recommended for First Deployment)

1. Log in to your Vercel account
2. Click "New Project" on the dashboard
3. Import your repository from GitHub, GitLab, or Bitbucket
   - You may need to install the Vercel integration for your Git provider if you haven't already
4. Configure your project:
   - **Framework Preset**: Select "React" or "Next.js" (depending on your project)
   - **Build Command**: `pnpm run build` (or your custom build command)
   - **Output Directory**: `dist` (or your custom output directory)
   - **Environment Variables**: Add any required environment variables
5. Click "Deploy"

Vercel will automatically build and deploy your project.

## Step 5: Configure Custom Domain (Optional)

To add a custom domain to your Vercel deployment:

1. Go to your project on the Vercel dashboard
2. Click on "Settings" > "Domains"
3. Enter your domain name and click "Add"
4. Follow the instructions to configure your DNS settings:
   - For a root domain (example.com), you'll need to add an A record
   - For a subdomain (www.example.com), you'll need to add a CNAME record
5. Wait for DNS propagation (can take up to 48 hours, but usually much faster)

## Step 6: Deploy via Vercel CLI (Alternative Method)

If you prefer using the command line:

1. Navigate to your project directory:

```bash
cd /path/to/quirklabs
```

2. Log in to Vercel:

```bash
vercel login
```

3. Deploy your project:

```bash
vercel
```

4. Follow the interactive prompts to configure your deployment

## Step 7: Set Up Continuous Deployment

Vercel automatically sets up continuous deployment when you connect your Git repository. Every time you push changes to your repository, Vercel will automatically rebuild and redeploy your site.

For more control over when deployments happen:

1. Go to your project on the Vercel dashboard
2. Click on "Settings" > "Git"
3. Configure your preferred deployment settings:
   - Production branch (usually `main` or `master`)
   - Preview branches (for preview deployments)
   - Ignored build step (to skip unnecessary builds)

## Step 8: Team Collaboration (Optional)

To collaborate with team members:

1. Go to your Vercel dashboard
2. Click on your profile picture > "Teams"
3. Create a new team or select an existing one
4. Invite team members by email
5. Transfer your project to the team if needed

## Step 9: Monitoring and Analytics

Vercel provides built-in analytics and monitoring:

1. Go to your project on the Vercel dashboard
2. Click on "Analytics" to view:
   - Visitor data
   - Performance metrics
   - Error reports

## Step 10: Advanced Configuration

### Environment Variables

For environment-specific configuration:

1. Go to your project on the Vercel dashboard
2. Click on "Settings" > "Environment Variables"
3. Add your variables for different environments (Production, Preview, Development)

### Serverless Functions (Optional)

If your project uses serverless functions:

1. Create an `api` directory in your project
2. Add your serverless functions as JavaScript files
3. They will be automatically deployed as API endpoints

## Troubleshooting

### Build Failures

If your build fails:

1. Check the build logs on the Vercel dashboard
2. Verify that your build command and output directory are correct
3. Ensure all dependencies are properly installed
4. Test your build locally before deploying

### Domain Configuration Issues

If you have problems with your custom domain:

1. Verify your DNS records are correctly set up
2. Check for DNS propagation using a tool like [dnschecker.org](https://dnschecker.org)
3. Ensure your domain is verified in Vercel

## Conclusion

Your QuirkLabs website should now be successfully deployed on Vercel. The platform offers many additional features like preview deployments, serverless functions, and edge caching that you can explore to enhance your website further.

For more detailed information, refer to the [official Vercel documentation](https://vercel.com/docs).
