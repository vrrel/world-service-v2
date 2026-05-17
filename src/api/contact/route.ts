import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const values = await request.json();
    const webhookURL = process.env.DISCORD_WEBHOOK_URL_REQUEST;

    if (!webhookURL) {
      console.error('Webhook URL not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const discordMessage = {
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
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
