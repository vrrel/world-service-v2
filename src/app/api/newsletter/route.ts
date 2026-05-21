import { sendDiscordWebhook } from "@/lib/discord-webhook";

export async function POST(request: Request) {
  const values = await request.json();
  const webhookURL = process.env.DISCORD_WEBHOOK_URL_NEWSLETTER;

  return sendDiscordWebhook(
    webhookURL,
    {
      username: "Newsletter Bot",
      avatar_url: "https://worldservice.vercel.app/bot/newsletter.jpg",
      content: "📰 **New Newsletter Subscriber!**",
      embeds: [
        {
          title: "New Subscription Confirmed",
          color: 5763719,
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
    },
    { errorLabel: "Newsletter" },
  );
}
