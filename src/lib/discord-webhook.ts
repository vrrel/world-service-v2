import { NextResponse } from "next/server";

type DiscordWebhookPayload = {
  username?: string;
  avatar_url?: string;
  content?: string;
  embeds?: Array<Record<string, unknown>>;
};

export async function sendDiscordWebhook(
  webhookUrl: string | undefined,
  payload: DiscordWebhookPayload,
  options?: { errorLabel?: string },
): Promise<NextResponse> {
  const errorLabel = options?.errorLabel ?? "Webhook";

  try {
    if (!webhookUrl) {
      console.error(`${errorLabel} URL not configured`);
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`${errorLabel} error:`, error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
