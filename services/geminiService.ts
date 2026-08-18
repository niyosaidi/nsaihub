
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Language } from '../types';
import { content } from '../data/content';

// Initialize the GoogleGenAI client with the API key from environment variables.
// As per instructions, process.env.API_KEY is assumed to be pre-configured and available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chatSessions: { [lang in Language]?: Chat } = {};

function getChat(lang: Language): Chat {
  if (!chatSessions[lang]) {
    chatSessions[lang] = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: content[lang].chatbot.systemInstruction,
      },
    });
  }
  return chatSessions[lang] as Chat;
}

export const getChatbotResponse = async (message: string, lang: Language): Promise<string> => {
  try {
    const chat = getChat(lang);
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    if(lang === Language.RW){
        return "Habayeho ikibazo. Nyamuneka gerageza nyuma.";
    }
    return "An error occurred. Please try again later.";
  }
};
