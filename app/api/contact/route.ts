import { NextResponse } from 'next/server';
import { sendDiscordMessage } from '@/lib/discord';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, type, message } = body;

    // 基本的なバリデーション
    if (!name || !email || !type) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // メールアドレスの簡易バリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'メールアドレスの形式が正しくありません' },
        { status: 400 }
      );
    }

    // Discordへ送信
    await sendDiscordMessage({
      name,
      email,
      type,
      message
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('お問い合わせ送信エラー:', error);
    return NextResponse.json(
      { error: 'お問い合わせの送信に失敗しました' },
      { status: 500 }
    );
  }
}