<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1w7l4OFt-ZT-IGhcU84L39OrpAyXy_qdF

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## DeepSeek / OpenRouter (optional)

If you want the chatbot to use an external model (DeepSeek / OpenRouter), configure these environment variables in a local env file (do NOT commit this file):

1. Create `.env.local` in the project root.
2. Add the following lines (example):

```
VITE_DEEPSEEK_KEY=sk-or-REPLACE_WITH_YOUR_KEY
VITE_DEEPSEEK_DAILY_LIMIT=3
# Optional: custom endpoint (default uses OpenRouter chat endpoint)
VITE_DEEPSEEK_ENDPOINT=https://api.openrouter.ai/v1/chat/completions
```

- The app reads `VITE_DEEPSEEK_KEY` at runtime and will only call the external API when the local datasets can't answer a question.
- Daily usage is tracked in `localStorage` and resets each day; when the daily limit is reached the bot will automatically fall back to stored / local Q&A to avoid exhausting the key.
- For production, host a server-side proxy or server endpoint to keep the secret key off the client — storing secrets in client-side env is insecure.

You can pre-populate the `public/chatbot/faqs_ar.json` and `public/chatbot/interactive_ar.json` files with larger datasets. There is a helper script `scripts/generate_chatbot_data.js` to assist generating question/answer files.
