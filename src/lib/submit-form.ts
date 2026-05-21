import { toast } from "sonner";

export async function submitToApi<T extends Record<string, unknown>>(
  endpoint: string,
  body: T,
  options: {
    successMessage: string;
    errorMessage: string;
    logLabel?: string;
  },
): Promise<{ ok: boolean }> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      toast.success(options.successMessage);
      return { ok: true };
    }

    throw new Error("Request failed");
  } catch (error) {
    console.error(options.logLabel ?? "Form submission error:", error);
    toast.error(options.errorMessage);
    return { ok: false };
  }
}
