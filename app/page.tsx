import type { Metadata } from "next";

import SendNotification from "./SendNotification";
import { InstallPWA } from "./InstallPWA";
import UseLoginPrivy from "./Privy";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <h1>Next.js + Serwist</h1>
      <InstallPWA />
      <SendNotification />
      <UseLoginPrivy />
    </>
  );
}
