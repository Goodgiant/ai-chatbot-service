import { Content, GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
config();

interface ChitchatProps {
    message: string;
    history: Content[];
    systemInstruction?: string;
}

// Instantiate the GeneratveAI
const genAI = new GoogleGenerativeAI(process.env.AI_STUDIO_KEY as string);

// Asynchronous call to generate response
export async function chitchat(props: ChitchatProps) {

    // Select an LLM model
    const model = genAI.getGenerativeModel({ 
        model: "gemini-pro",
        // systemInstruction: props.systemInstruction || "You are an expert nutritionist with over 50 years of experience and vast knowledge in nutrition and west african meals.", 
    });

    const chat = model.startChat({
        history: props.history || [],
    });

    const {response} = await chat.sendMessage(props.message);
    
    return response;
}

// log response text
// chitchat();