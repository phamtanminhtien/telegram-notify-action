# MinTin Telegram Notify

This GitHub Action sends a notification to a Telegram chat.

## Inputs

- `bot_token`: (Required) Your Telegram bot token.
- `chat_id`: (Required) The ID of the chat to send the notification to.
- `message_thread_id`: (Optional) The ID of the message thread to send the notification to.
- `message`: (Required) The message to send.
- `parse_mode`: (Optional) The parse mode for the message. Can be `Markdown` or `HTML`. Defaults to `Markdown`.

## Example usage

```yaml
uses: phamtanminhtien/telegram-notify-action@v1.0.0
with:
  bot_token: ${{ secrets.TELEGRAM_BOT_TOKEN }}
  chat_id: ${{ secrets.TELEGRAM_CHAT_ID }}
  message: "Hello, world!"
```

## Author

MinTin
