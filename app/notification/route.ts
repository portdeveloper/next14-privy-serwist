import { type NextRequest, NextResponse } from "next/server";
import webPush from "web-push";

export const POST = async (req: NextRequest) => {
  if (
    !process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY ||
    !process.env.WEB_PUSH_EMAIL ||
    !process.env.WEB_PUSH_PRIVATE_KEY
  ) {
    throw new Error("Environment variables supplied not sufficient.");
  }
  const { subscription } = (await req.json()) as {
    subscription: webPush.PushSubscription;
  };
  try {
    webPush.setVapidDetails(
      `mailto:${process.env.WEB_PUSH_EMAIL}`,
      process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,
      process.env.WEB_PUSH_PRIVATE_KEY
    );
    const response = await webPush.sendNotification(
      subscription,
              JSON.stringify({
          title: "🚀 Test Notification",
          message: "This is a sample push notification. Customize this content in app/notification/route.ts",
        })
    );
    return new NextResponse(response.body, {
      status: response.statusCode,
      headers: response.headers,
    });
  } catch (err) {
    if (err instanceof webPush.WebPushError) {
      return new NextResponse(err.body, {
        status: err.statusCode,
        headers: err.headers,
      });
    }
    console.log(err);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
};
