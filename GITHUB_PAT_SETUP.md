# GitHub Personal Access Token (PAT) Setup

## Why do I need this?
A Personal Access Token lets the website automatically deploy updates to GitHub Pages without asking for your password every time.

## Step-by-Step Setup

### 1. Log into GitHub
- Go to https://github.com
- Sign in with your account

### 2. Access Token Settings
- Click your profile picture (top right)
- Click **Settings**
- Scroll down to **Developer settings** (left sidebar, at the bottom)
- Click **Personal access tokens**
- Click **Tokens (classic)**

### 3. Generate New Token
- Click **Generate new token** → **Generate new token (classic)**
- Give it a name: `Ireland Tours Deployment`
- Set expiration: **365 days** (you'll need to renew annually)

### 4. Select Permissions
Check these boxes:
- ✅ **repo** (all checkboxes under it)
- ✅ **workflow**

### 5. Generate and Save
- Click **Generate token** (green button at bottom)
- **IMPORTANT**: Copy the token immediately! It looks like: `ghp_AbCdEfGhIjKlMnOpQrStUvWxYz1234567890`
- You won't be able to see it again!

### 6. Store the Token
Add it to your `.env` file:
```
GITHUB_TOKEN=ghp_your_actual_token_here
```

## Security Notes
- Never share this token
- Never commit it to GitHub
- If exposed, regenerate immediately
- Set a calendar reminder to renew before expiration

## That's it!
The website can now automatically deploy updates without asking for passwords.