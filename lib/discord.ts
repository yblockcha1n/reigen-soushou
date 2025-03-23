export async function sendDiscordMessage(content: {
    name: string;
    email: string;
    type: string;
    message: string;
  }) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
      throw new Error("Discord webhook URL is not configured");
    }
  
    const { name, email, type, message } = content;
    
    // Discord用のメッセージ形式を作成
    const payload = {
      embeds: [
        {
          title: `新しいお問い合わせ: ${type}`,
          color: 3447003,
          fields: [
            {
              name: "お名前",
              value: name,
              inline: true
            },
            {
              name: "メールアドレス",
              value: email,
              inline: true
            },
            {
              name: "お問い合わせ種類",
              value: type,
              inline: true
            },
            {
              name: "メッセージ",
              value: message || "内容なし"
            }
          ],
          timestamp: new Date().toISOString()
        }
      ]
    };
  
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Discord API error: ${response.status} - ${errorText}`);
      }
  
      return true;
    } catch (error) {
      console.error("Failed to send Discord message:", error);
      throw error;
    }
  }