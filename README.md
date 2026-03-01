This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## Contact Form -> Gmail Inbox Setup

This project includes a server API route at `src/app/api/contact/route.js` that sends form submissions to your inbox.

### 1. Create `.env.local`

Copy `.env.example` to `.env.local` and set:

```env
GMAIL_USER=yourgmail@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
CONTACT_TO_EMAIL=yourgmail@gmail.com
CONTACT_FROM_EMAIL=yourgmail@gmail.com
```

### 2. Enable Gmail App Password

1. Open your Google Account settings.
2. Enable `2-Step Verification`.
3. Open `App passwords`.
4. Create an app password for `Mail`.
5. Put that 16-character value into `GMAIL_APP_PASSWORD`.

Do not use your normal Gmail password.

### 3. Run locally

Restart the dev server after env changes:

```bash
npm run dev
```

Submit the contact form from the site and verify the message arrives in `CONTACT_TO_EMAIL`.

### 4. Deploy (Vercel)

Add the same env variables in Vercel:

- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Then redeploy.

### Notes

- The API includes basic anti-spam protection:
  - Honeypot field
  - IP rate limit (5 requests / 10 minutes)
- If Gmail blocks sign-in attempts, confirm app password + 2FA are set correctly.
