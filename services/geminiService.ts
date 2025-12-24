
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const generateLegalAdvice = async (userPrompt: string) => {
  if (!API_KEY) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: userPrompt,
    config: {
      systemInstruction: "Você é o assistente jurídico virtual do Advogado Paloma. Seu tom é extremamente formal, luxuoso, educado e profissional. Você não dá aconselhamento jurídico definitivo, mas orienta o usuário sobre como o escritório Advogado Paloma pode ajudá-lo em diversas áreas do direito. Sempre enfatize a excelência e o prestígio do escritório.",
      temperature: 0.7,
      topP: 0.95,
    },
  });

  return response.text;
};
