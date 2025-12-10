import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxOx_BLw0onyOCZke0bzuYaMEN0hRb-rlDYFkQrOEak7iasi1J-CxlNFwBo8v9RpZSIcw/exec";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const res = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...body, secret: "very secret secret" }),
        });

        if (!res.ok) {
            console.error("Google Script error:", await res.text());
            return NextResponse.json({ error: "Upstream error" }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Waitlist API error:", err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}