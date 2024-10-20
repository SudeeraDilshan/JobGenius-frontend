import React, { useEffect, useState } from 'react'
import ChatBot from "react-chatbotify";
import './ChatBox.css'

export const ChatBox = ({getTextQuery}) => {
    
    const flow = {
        start: {
            message: "Hii what type of job do you want?",
            path: "end"
        },
        end: {
            message: (params) => {
                getTextQuery(params.userInput);
                return "Ok! I will help you to find what you are looking for"
            },
            chatDisabled: true
        },

    }

    const themes = [
        { id: "minimal_midnight", version: "0.1.0" },
        { id: "simple_blue", version: "0.1.0" }
    ]


    const settings = {
        general: {
            embedded: true
        },
        chatHistory: {
            storageKey: "conversations_summary",
            disabled: true
        }
    }

    return (
        <div>
            <ChatBot settings={settings} flow={flow} 
            themes={themes}
             />
        </div>
    )
}
// export default ChatBox