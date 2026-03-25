import { NextResponse } from "next/server";

const INDEXNOW_KEY = "04f21c93c2fc71b2deb963071e0b35e8";
const SITE_URL = "https://www.reigen-soushou.com";

const ALL_URLS = [
  SITE_URL,
  `${SITE_URL}/about`,
  `${SITE_URL}/works`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/legal`,
  `${SITE_URL}/privacy`,
];

export async function POST() {
  try {
    const payload = {
      host: "www.reigen-soushou.com",
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: ALL_URLS,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      return NextResponse.json({
        success: true,
        message: `IndexNow: ${ALL_URLS.length} URLs submitted`,
        status: response.status,
      });
    }

    const errorText = await response.text();
    return NextResponse.json(
      { success: false, error: `IndexNow API error: ${response.status} - ${errorText}` },
      { status: response.status }
    );
  } catch (error) {
    console.error("IndexNow submission error:", error);
    return NextResponse.json(
      { success: false, error: "IndexNow submission failed" },
      { status: 500 }
    );
  }
}
