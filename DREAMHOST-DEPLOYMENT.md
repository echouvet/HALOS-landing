# 🚀 Dreamhost Deployment Guide for Halos Bio Landing Page

## ✅ Overview

Your Halos Bio landing page has been successfully built as a **static site** that can be hosted on Dreamhost shared hosting. All files are in the `/out` folder and ready for upload.

---

## 📋 Pre-Deployment Checklist

### 1. Set Up Email Form Service (Required)

Since Dreamhost shared hosting can't run server-side code, you need to set up a third-party form service for the email capture:

**Option A: Formspree (Recommended - Free)**

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (50 submissions/month)
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xvgpqrst`)
5. Update line 61 in `/components/email-capture-dialog.tsx`:
   ```typescript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_ACTUAL_FORM_ID";
   ```
6. Rebuild the site: `pnpm run build`

**Option B: Alternative Services**
- **Basin** (https://usebasin.com) - Free tier available
- **Getform** (https://getform.io) - Free tier: 50 submissions/month
- **Web3Forms** (https://web3forms.com) - Free, unlimited

### 2. Verify Your Build

The `/out` folder should contain:
- ✅ `index.html` (homepage)
- ✅ `_next/` folder (JavaScript & CSS)
- ✅ `privacy/index.html`
- ✅ `terms/index.html`
- ✅ `robots.txt`
- ✅ `sitemap.xml`
- ✅ `logo.svg`

---

## 🌐 Dreamhost SFTP Upload Instructions

### Step 1: Get Your SFTP Credentials

1. Log into your **Dreamhost Panel** at [https://panel.dreamhost.com](https://panel.dreamhost.com)
2. Navigate to **Users** → **Manage Users**
3. Find your user account or create a new SFTP user
4. Note down:
   - **Hostname**: Usually `halos.bio` or your server name (e.g., `greta.dreamhost.com`)
   - **Username**: Your SFTP username
   - **Password**: Your SFTP password
   - **Port**: `22` (SFTP default)

### Step 2: Install an SFTP Client

Choose one of these free SFTP clients:

**For Mac:**
- **FileZilla** (Recommended): [https://filezilla-project.org/download.php?type=client](https://filezilla-project.org/download.php?type=client)
- **Cyberduck**: [https://cyberduck.io](https://cyberduck.io)

**For Windows:**
- **FileZilla**: Same link as above
- **WinSCP**: [https://winscp.net](https://winscp.net)

### Step 3: Connect to Your Dreamhost Server

#### Using FileZilla (Recommended):

1. Open FileZilla
2. Click on **File** → **Site Manager**
3. Click **New Site** and enter:
   ```
   Protocol: SFTP - SSH File Transfer Protocol
   Host: halos.bio (or your Dreamhost server hostname)
   Port: 22
   Logon Type: Normal
   User: your_dreamhost_username
   Password: your_dreamhost_password
   ```
4. Click **Connect**
5. If prompted about unknown host key, click **OK** to trust it

#### Using Cyberduck (Mac Alternative):

1. Open Cyberduck
2. Click **Open Connection**
3. Select **SFTP (SSH File Transfer Protocol)**
4. Enter:
   ```
   Server: halos.bio
   Port: 22
   Username: your_dreamhost_username
   Password: your_dreamhost_password
   ```
5. Click **Connect**

### Step 4: Navigate to Your Website Directory

1. Once connected, you'll see your remote server files on the right side
2. Navigate to the directory for `halos.bio`:
   - Usually located at: `/home/username/halos.bio/`
   - Or: `/home/username/domain.com/`
3. You should see a folder structure like:
   ```
   /home/username/halos.bio/
   ├── logs/
   └── (possibly some default files)
   ```

### Step 5: Upload Your Site Files

**IMPORTANT: You need to upload the CONTENTS of the `/out` folder, not the folder itself**

#### Using FileZilla:

1. **On your local computer (left pane)**:
   - Navigate to: `/Users/anthony/Desktop/halosbiolanding/out/`
   - You should see: `index.html`, `_next/`, `privacy/`, etc.

2. **On the remote server (right pane)**:
   - Navigate to: `/home/username/halos.bio/`

3. **Select and Upload**:
   - Select ALL files and folders inside the `out` folder:
     - `404.html`
     - `404/` folder
     - `_next/` folder
     - `index.html`
     - `logo.svg`
     - `privacy/` folder
     - `robots.txt`
     - `sitemap.xml`
     - `terms/` folder
   - Right-click and select **Upload**
   - Or drag and drop them to the right pane

4. **Wait for Upload**:
   - This may take 5-15 minutes depending on your connection
   - FileZilla will show progress at the bottom

#### Using Cyberduck:

1. Navigate to `/Users/anthony/Desktop/halosbiolanding/out/` on your Mac
2. Open Cyberduck and navigate to `/home/username/halos.bio/`
3. Drag all contents from the `out` folder into the Cyberduck window
4. Wait for upload to complete

### Step 6: Verify Upload

After upload completes, your remote directory should look like:

```
/home/username/halos.bio/
├── _next/
│   ├── static/
│   └── (other files)
├── 404/
├── privacy/
├── terms/
├── 404.html
├── index.html
├── logo.svg
├── robots.txt
└── sitemap.xml
```

### Step 7: Test Your Website

1. Open a web browser
2. Go to: `https://halos.bio`
3. Your landing page should load!

**Check these features:**
- ✅ Homepage loads with particle effect
- ✅ "Join Waitlist" button opens dialog
- ✅ "Investor/Partner Inquiry" button opens email
- ✅ Privacy page works: `https://halos.bio/privacy/`
- ✅ Terms page works: `https://halos.bio/terms/`
- ✅ Site is responsive on mobile

---

## 🔧 Troubleshooting

### Issue: "404 Not Found" on subpages

**Solution**: Check that folders have `index.html` files
- `/privacy/index.html` should exist
- `/terms/index.html` should exist

If they're missing, upload failed. Try again.

### Issue: Particle effect not working

**Possible causes**:
1. JavaScript files didn't upload properly
2. Check that the `_next/` folder uploaded completely
3. Try clearing your browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Issue: Email form not submitting

**Solution**: You need to set up Formspree or another form service (see Pre-Deployment Checklist above)

The form will show an error until you:
1. Sign up for Formspree
2. Update the form endpoint in the code
3. Rebuild: `pnpm run build`
4. Re-upload the new files

### Issue: Upload fails or times out

**Solutions**:
1. Check your internet connection
2. Try uploading in smaller batches:
   - First: `index.html`, `robots.txt`, `sitemap.xml`, `logo.svg`
   - Then: `_next/` folder
   - Finally: Other folders
3. Contact Dreamhost support if issues persist

### Issue: Mixed Content Warnings (HTTP/HTTPS)

**Solution**: 
1. In Dreamhost Panel, go to **Websites** → **Manage Websites**
2. Find `halos.bio`
3. Enable **HTTPS/SSL** (should be automatic with Let's Encrypt)
4. Wait 10-15 minutes for SSL to activate
5. Force HTTPS by creating `.htaccess` file (see below)

---

## 🔒 Force HTTPS with .htaccess (Recommended)

After your site is uploaded, create a `.htaccess` file in the root directory:

1. Using FileZilla or Cyberduck, create a new file named `.htaccess`
2. Add this content:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1/ [L,R=301]
```

3. Upload it to `/home/username/halos.bio/.htaccess`

This will:
- Force all traffic to HTTPS
- Handle URL redirects properly

---

## 📊 Post-Deployment Tasks

### 1. Set Up Form Service (if not done)
Follow the Formspree setup in Pre-Deployment Checklist

### 2. Update Email Addresses
- Test the "Investor/Partner Inquiry" button
- It should open email to `anthony@halos.bio`

### 3. Monitor Form Submissions
- If using Formspree, log into your dashboard to see submissions
- Set up email notifications for new signups

### 4. Optional: Add Analytics
Consider adding:
- **Plausible Analytics** (privacy-friendly)
- **Google Analytics**
- **Fathom Analytics**

To add analytics, you'll need to:
1. Edit `app/layout.tsx`
2. Add the tracking script
3. Rebuild: `pnpm run build`
4. Re-upload the files

---

## 🔄 Updating Your Site in the Future

When you need to make changes:

1. **Make changes** in the source files in `/halosbiolanding/`
2. **Rebuild** the static site:
   ```bash
   cd /Users/anthony/Desktop/halosbiolanding
   pnpm run build
   ```
3. **Re-upload** the contents of the `out/` folder via SFTP
4. **Clear cache** and test

**Pro Tip**: You only need to upload files that changed. FileZilla can auto-detect newer files.

---

## 📦 What's Included in Your Upload

Your static site export includes:

```
out/
├── _next/                    # JavaScript, CSS, and optimized assets
│   ├── static/
│   │   ├── chunks/          # Code-split JavaScript bundles
│   │   ├── css/             # Compiled Tailwind CSS
│   │   └── media/           # Font files (Inter)
│   └── (build manifests)
├── 404/                      # Custom 404 page
├── privacy/                  # Privacy policy page
├── terms/                    # Terms of use page
├── 404.html                  # Fallback 404
├── index.html                # Homepage (landing page)
├── logo.svg                  # Halos Bio logo
├── robots.txt                # Search engine directives
└── sitemap.xml               # Site map for SEO
```

**Total Size**: ~2-3 MB (quick to upload!)

---

## 📞 Support Resources

### Dreamhost Support
- Panel: [https://panel.dreamhost.com](https://panel.dreamhost.com)
- Wiki: [https://help.dreamhost.com/hc/en-us](https://help.dreamhost.com/hc/en-us)
- Specific help: [SFTP Guide](https://help.dreamhost.com/hc/en-us/articles/115000675027-FTP-overview-and-credentials)

### FileZilla Support
- Documentation: [https://wiki.filezilla-project.org/](https://wiki.filezilla-project.org/)

### Formspree Support
- Documentation: [https://help.formspree.io/](https://help.formspree.io/)

---

## ✅ Final Checklist

Before considering deployment complete:

- [ ] All files uploaded to `/home/username/halos.bio/`
- [ ] Homepage loads at `https://halos.bio`
- [ ] Privacy page accessible at `https://halos.bio/privacy/`
- [ ] Terms page accessible at `https://halos.bio/terms/`
- [ ] Particle effect animates on homepage
- [ ] "Join Waitlist" button opens dialog
- [ ] Form service (Formspree) is set up and working
- [ ] "Investor/Partner Inquiry" opens email to `anthony@halos.bio`
- [ ] SSL/HTTPS is working (green padlock in browser)
- [ ] Site is responsive on mobile devices
- [ ] `.htaccess` file uploaded (optional but recommended)

---

## 🎉 You're Done!

Your Halos Bio landing page is now live on Dreamhost! 

If you need to make updates, just edit the files, rebuild (`pnpm run build`), and re-upload the `out/` folder contents.

**Questions?** Refer back to this guide or contact Dreamhost support for hosting-specific issues.

