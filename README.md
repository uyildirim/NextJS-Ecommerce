![alt text](https://res.cloudinary.com/nola-butler/image/upload/v1699817354/SCR-20231112-svgk_zlznyo.png)
![alt text](https://res.cloudinary.com/nola-butler/image/upload/v1699817355/SCR-20231112-svme_z2suxj.png)
![alt text](https://res.cloudinary.com/nola-butler/image/upload/v1699817355/SCR-20231112-svjn_ebyi0p.png)

``` .env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

DATABASE_URL=

STRIPE_API_KEY=
FRONTEND_STORE_URL=
STRIPE_WEBHOOK_SECRET=
```


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npx prisma generate
npx prisma db push

npm run install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
