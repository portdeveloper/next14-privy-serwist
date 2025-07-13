# Next.js 14 + Serwist PWA

A modern Progressive Web Application built with Next.js 14, featuring offline capabilities powered by Serwist.

## 🚀 Features

- **📱 Progressive Web App**: Full PWA capabilities with offline support via Serwist
- **🔔 Push Notifications**: Web push notifications for user engagement
- **🌙 Dark/Light Mode**: Responsive design with theme support
- **📱 Mobile-First**: Optimized for mobile devices with install prompts
- **⚡ Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **PWA**: Serwist (Service Worker)
- **State Management**: TanStack Query
- **Notifications**: Web Push API

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd next14-privy-serwist
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
# Option 1: Copy from example (if .env.example exists)
cp .env.example .env.local

# Option 2: Create manually
touch .env.local
```

Add the following environment variables to your `.env.local` file:

```env
# Web Push
WEB_PUSH_EMAIL=user@example.com
WEB_PUSH_PRIVATE_KEY=your_vapid_private_key
NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY=your_vapid_public_key
```

> **Important**: Replace all placeholder values with your actual credentials. See the steps below for obtaining these values.

### 4. Generate VAPID Keys

Generate VAPID keys for web push notifications:

```bash
npx web-push generate-vapid-keys --json
```

Copy the generated keys to your `.env.local` file.

## 🏃‍♂️ Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production Mode

For full PWA functionality (including install prompts):

```bash
npm run build && npm run start
```

> **Note**: The install app button only works in production mode (`npm run build && npm run start`)

## 📱 PWA Features

### Installation

- **Desktop**: Install button appears in supported browsers
- **Mobile**: Add to Home Screen prompts on iOS/Android
- **Offline**: Service worker enables offline functionality

### Push Notifications

The app includes web push notification capabilities for user engagement and updates.

## Changing the app name

- Edit the `manifest.json` file
- Change the `name` and `short_name` fields
- Run `npm run build` to update the app

## 🔧 Project Structure

```
next14-privy-serwist/
├── app/
│   ├── components/          # React components
│   │   ├── InstallPWA.tsx  # PWA install prompt
│   │   └── ...
│   ├── ~offline/           # Offline page
│   └── ...
├── public/                 # Static assets
└── ...
```

## 🔗 Key Components

- **InstallPWA**: PWA installation prompts

## 🌐 API Integration

The app integrates with:

- **Web Push API**: For notifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Join [Monad Dev Discord](https://discord.gg/monaddev)
2. Check the [Next.js 14](https://nextjs.org/) documentation
3. Check the [Serwist](https://serwist.pages.dev/) documentation
