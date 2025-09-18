# Lumo - AI Learning Companion

A real-time AI teaching platform that provides personalized learning experiences through interactive companions and sessions.

## Features

- **AI Companions**: Interactive AI tutors for various subjects
- **Real-time Sessions**: Live learning sessions with voice interaction
- **Personalized Learning**: Track your learning journey and progress
- **Subject Categories**: Support for multiple academic subjects (Math, Science, History, etc.)
- **User Authentication**: Secure sign-in with Clerk
- **Responsive Design**: Optimized for desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Authentication**: Clerk
- **Database**: Supabase
- **AI/Voice**: Vapi.ai
- **Error Tracking**: Sentry
- **Deployment**: Vercel

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ai-learning-companion
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Vapi.ai
VAPI_API_KEY=your_vapi_api_key

# Sentry (optional)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

## Running the Application

1. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
ai-learning-companion/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── companions/        # Companions pages
│   ├── my-journey/        # Learning journey page
│   ├── sign-in/           # Authentication pages
│   └── subscription/      # Subscription page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── ...               # Feature-specific components
├── lib/                  # Utility functions and configurations
│   ├── actions/          # Server actions
│   └── ...               # Other utilities
├── constants/            # Application constants
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

The easiest way to deploy this application is using Vercel:

1. Connect your GitHub repository to Vercel
2. Add your environment variables in the Vercel dashboard
3. Deploy the application

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
