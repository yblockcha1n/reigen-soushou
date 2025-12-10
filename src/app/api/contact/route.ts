import { NextResponse } from "next/server";
import { sendDiscordMessage } from "@/lib/discord";
import type { ContactFormData, ContactApiResponse } from "@/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidContactForm(data: unknown): data is ContactFormData {
  if (typeof data !== "object" || data === null) return false;
  const { name, email, type } = data as Record<string, unknown>;
  return (
    typeof name === "string" &&
    typeof email === "string" &&
    typeof type === "string" &&
    name.length > 0 &&
    email.length > 0 &&
    type.length > 0
  );
}

export async function POST(request: Request): Promise<NextResponse<ContactApiResponse>> {
  try {
    const body: unknown = await request.json();

    if (!isValidContactForm(body)) {
      return NextResponse.json(
        { success: false, error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    const { name, email, type, message } = body;

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "メールアドレスの形式が正しくありません" },
        { status: 400 }
      );
    }

    await sendDiscordMessage({ name, email, type, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("お問い合わせ送信エラー:", error);
    return NextResponse.json(
      { success: false, error: "お問い合わせの送信に失敗しました" },
      { status: 500 }
    );
  }
}