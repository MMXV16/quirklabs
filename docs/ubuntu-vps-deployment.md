# Deploying QuirkLabs Website on Ubuntu VPS

This guide provides step-by-step instructions for deploying the QuirkLabs website on an Ubuntu VPS.

## Prerequisites

- Ubuntu 20.04 LTS or newer
- Root or sudo access to the server
- Domain name (optional but recommended)
- Basic knowledge of Linux command line

## Step 1: Update the System

First, update your system packages:

```bash
sudo apt update
sudo apt upgrade -y
```

## Step 2: Install Node.js and npm

Install Node.js and npm:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify the installation:

```bash
node -v
npm -v
```

## Step 3: Install pnpm

```bash
sudo npm install -g pnpm
```

Verify the installation:

```bash
pnpm -v
```

## Step 4: Install Nginx

```bash
sudo apt install nginx -y
```

Start Nginx and enable it to start on boot:

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

## Step 5: Configure Firewall (if enabled)

Allow HTTP and HTTPS traffic:

```bash
sudo ufw allow 'Nginx Full'
```

## Step 6: Clone the Repository

Install Git if not already installed:

```bash
sudo apt install git -y
```

Create a directory for the application:

```bash
mkdir -p /var/www/quirklabs
```

Clone the repository (replace with your actual repository URL):

```bash
git clone https://github.com/yourusername/quirklabs.git /var/www/quirklabs
```

Alternatively, upload your project files to the server using SCP or SFTP.

## Step 7: Install Dependencies and Build the Project

Navigate to the project directory:

```bash
cd /var/www/quirklabs
```

Install dependencies:

```bash
pnpm install
```

Build the project:

```bash
pnpm run build
```

## Step 8: Configure Nginx

Create a new Nginx server block:

```bash
sudo nano /etc/nginx/sites-available/quirklabs
```

Add the following configuration (replace `yourdomain.com` with your actual domain):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/quirklabs/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000";
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

Create a symbolic link to enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/quirklabs /etc/nginx/sites-enabled/
```

Test the Nginx configuration:

```bash
sudo nginx -t
```

If the test is successful, reload Nginx:

```bash
sudo systemctl reload nginx
```

## Step 9: Set Up SSL with Let's Encrypt (Optional but Recommended)

Install Certbot:

```bash
sudo apt install certbot python3-certbot-nginx -y
```

Obtain and install SSL certificate:

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts to complete the setup.

## Step 10: Set Up Automatic Deployment (Optional)

For automatic deployment, you can set up a simple deployment script:

Create a deployment script:

```bash
nano /var/www/quirklabs/deploy.sh
```

Add the following content:

```bash
#!/bin/bash
cd /var/www/quirklabs
git pull
pnpm install
pnpm run build
```

Make the script executable:

```bash
chmod +x /var/www/quirklabs/deploy.sh
```

You can run this script manually or set up a webhook to trigger it automatically when changes are pushed to your repository.

## Troubleshooting

### 403 Forbidden Error

Check the ownership and permissions of your files:

```bash
sudo chown -R www-data:www-data /var/www/quirklabs
sudo chmod -R 755 /var/www/quirklabs
```

### 502 Bad Gateway Error

Check Nginx error logs:

```bash
sudo tail -f /var/log/nginx/error.log
```

### Cannot Connect to the Server

Ensure your firewall allows HTTP/HTTPS traffic:

```bash
sudo ufw status
```

## Maintenance

### Updating the Website

To update the website with new changes:

```bash
cd /var/www/quirklabs
git pull
pnpm install
pnpm run build
```

### Monitoring the Server

Install and configure monitoring tools like Netdata or Prometheus for server monitoring.

### Regular Backups

Set up regular backups of your website files and configuration:

```bash
# Example backup command
sudo tar -czf /backup/quirklabs-$(date +%Y%m%d).tar.gz /var/www/quirklabs
```

## Conclusion

Your QuirkLabs website should now be successfully deployed on your Ubuntu VPS. If you encounter any issues, refer to the troubleshooting section or consult the official documentation for the tools used.
