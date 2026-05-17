import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const values = await request.json();
    const webhookURL = process.env.DISCORD_WEBHOOK_URL_NEWSLETTER;

    if (!webhookURL) {
      console.error("Newsletter webhook URL not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const discordMessage = {
      username: "Newsletter Bot",
      avatar_url: "https://worldservice.vercel.app/bot/newsletter.jpg",
      content: "📰 **New Newsletter Subscriber!**",
      embeds: [
        {
          title: "New Subscription Confirmed",
          color: 5763719, // Warna hijau
          fields: [
            {
              name: "Subscriber Email",
              value: `\`${values.email}\``,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Crystal Realms Lead Generation",
          },
        },
      ],
    };

    const response = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordMessage),
    });

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
