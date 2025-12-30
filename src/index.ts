import * as core from "@actions/core";
import axios from "axios";

interface TelegramResponse {
    ok: boolean;
    description?: string;
}

async function run(): Promise<void> {
    try {
        const token = core.getInput("bot_token", { required: true });
        const chatId = core.getInput("chat_id", { required: true });
        const messageThreadId = core.getInput("message_thread_id", {
            required: false,
        }) || undefined;
        const message = core.getInput("message", { required: true });
        const parseMode = core.getInput("parse_mode") || "Markdown";

        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const res = await axios.post<TelegramResponse>(url, {
            chat_id: chatId,
            message_thread_id: messageThreadId,
            text: message,
            parse_mode: parseMode,
        });

        if (!res.data.ok) {
            throw new Error(res.data.description || "Telegram API error");
        }

        core.info("✅ Telegram notification sent");
    } catch (err) {
        if (err instanceof Error) {
            core.setFailed(err.message);
        } else {
            core.setFailed("Unknown error");
        }
    }
}

run();