import { sendDiscordWebhook } from "@/lib/discord-webhook";

export async function POST(request: Request) {
  const values = await request.json();
  const webhookURL = process.env.DISCORD_WEBHOOK_URL_REQUEST;

  return sendDiscordWebhook(
    webhookURL,
    {
      username: "Order Bot",
      avatar_url: "https://worldservice.vercel.app/bot/order.png",
      embeds: [
        {
          title: `Subject: ${values.subject}`,
          color: 3447003,
          fields: [
            {
              name: "Client Name",
              value: `${values.firstName} ${values.lastName || ""}`,
              inline: true,
            },
            {
              name: "Email Address",
              value: values.email,
              inline: true,
            },
            {
              name: "Message Details",
              value: values.message,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Crystal Realms Service Department",
          },
        },
      ],
    },
    { errorLabel: "Contact form" },
  );
}
