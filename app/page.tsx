import type { Metadata } from "next";

import SendNotification from "./SendNotification";
import { InstallPWA } from "./InstallPWA";
import UseLoginPrivy from "./Privy";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
              Next.js + Privy + Serwist
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A modern web3 application with embedded wallets, PWA capabilities, and push notifications
          </p>
          <div className="flex items-center justify-center mt-6 space-x-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Next.js 14
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Privy Auth
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Serwist PWA
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <SendNotification />
          <UseLoginPrivy />
        </div>
      </div>
      <InstallPWA />
    </div>
  );
}
