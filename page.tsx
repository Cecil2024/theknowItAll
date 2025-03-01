"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Lottie  from 'lottie-react';
import animationData from './components/animation.json'; 
import styles from'./page.module.css';

export default function KnowItAll() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [greeting, setGreeting] = useState("Hi, what is your question??")

  const handleBotClick = (botType: string) => {
    if (!question) {
      setGreeting("Please type a question first!")
      setAnswer("")
      return
    }

    // Simple responses based on bot type
    switch (botType) {
      case "funny":
        setAnswer("😄 Here's a funny answer to your question!")
        break
      case "rude":
        setAnswer("🙄 Whatever... here's your answer I guess...")
        break
      case "nerd":
        setAnswer("🤓 According to my calculations...")
        break
    }
  }

  return (
    <div className="min-h-screen bg-[#fff9e6] flex flex-col justify-center items-center px-4 py-8">
      <h1 className="text-[#ff4500] text-4xl md:text-5xl mb-8 header-font" style={{fontFamily: 'Pacifico'}}>
        The Know-it-all
      </h1>
  
      <div className={styles.icon}>
      <Lottie animationData={animationData} loop={true} />
      </div>
  
      <p className="text-center mb-4">{greeting}</p>
  
      <Input
        className="max-w-xl w-full mb-8 bg-white"
        placeholder="Type your question here"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
  
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button className="bg-[#ff4500] hover:bg-[#ff4500]/90" onClick={() => handleBotClick("funny")}>
          Ask funny bot
        </Button>
        <Button className="bg-[#ff4500] hover:bg-[#ff4500]/90" onClick={() => handleBotClick("rude")}>
          Ask rude bot
        </Button>
        <Button className="bg-[#ff4500] hover:bg-[#ff4500]/90" onClick={() => handleBotClick("nerd")}>
          Ask nerd bot
        </Button>
      </div>
  
      {answer && <p className="text-center">{answer}</p>}
    </div>
  )
}