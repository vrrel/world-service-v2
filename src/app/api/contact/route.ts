import { sendDiscordWebhook } from "@/lib/discord-webhook";
import { getServiceById } from "@/lib/site-data";

export async function POST(request: Request) {
  const values = await request.json();
  const webhookURL = process.env.DISCORD_WEBHOOK_URL_REQUEST;

  const service = values.serviceType
    ? getServiceById(values.serviceType)
    : undefined;

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
              name: "Service",
              value: service?.name ?? values.serviceType ?? "Not specified",
              inline: true,
            },
            {
              name: "Client Name",
              value: `${values.firstName} ${values.lastName || ""}`.trim(),
              inline: true,
            },
            {
              name: "Discord",
              value: values.discordUsername ?? "—",
              inline: true,
            },
            {
              name: "Email",
              value: values.email,
              inline: true,
            },
            {
              name: "World ID",
              value: values.worldId || "—",
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
