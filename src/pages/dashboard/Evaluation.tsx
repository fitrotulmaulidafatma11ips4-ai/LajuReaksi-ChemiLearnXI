import React, { useState } from "react";
import { ComicCard } from "../../components/ui/ComicCard";
import { ComicButton } from "../../components/ui/ComicButton";
import { questions } from "../../data/questions";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";

export const Evaluation = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedSticker, setSelectedSticker] = useState<string | null>(null);

  const handleAnswer = (optionId: string) => {
    if (isAnswered) return;
    setSelectedAnswer(optionId);
    setIsAnswered(true);

    if (optionId === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowScore(false);
    setSelectedSticker(null);
  };

  const handleStickerClick = (stickerId: string, emoji: string) => {
    setSelectedSticker(stickerId);

    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const scalar = 3;
    const emojiShape = confetti.shapeFromText({ text: emoji, scalar });

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Fireworks
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: Math.random(), y: Math.random() - 0.2 } 
      }));
      
      // Emoji
      confetti(Object.assign({}, defaults, { 
        particleCount: 10, 
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        shapes: [emojiShape],
        scalar: scalar
      }));
    }, 250);
  };

  const stickers = [
    { id: "happy", emoji: "🤩", label: "Puas Banget!" },
    { id: "cool", emoji: "😎", label: "Gampang!" },
    { id: "confused", emoji: "🤔", label: "Masih Bingung" },
    { id: "sad", emoji: "😭", label: "Susah Banget" },
  ];

  if (showScore) {
    return (
      <ComicCard variant="purple" className="h-full flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-5xl font-black uppercase mb-4 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '2px black' }}>
          Misi Selesai!
        </h1>
        <div className="bg-white border-8 border-black p-8 rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8 transform rotate-2">
          <p className="text-2xl font-bold uppercase mb-2">Skor Akhirmu:</p>
          <p className="text-8xl font-black text-purple-500 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '3px black' }}>
            {score * 5}
          </p>
          <p className="text-xl font-bold mt-4">Benar {score} dari {questions.length} soal</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-black uppercase mb-4">Pilih Stiker Refleksi:</h3>
          <div className="flex gap-4 justify-center">
            {stickers.map(sticker => (
              <button
                key={sticker.id}
                onClick={() => handleStickerClick(sticker.id, sticker.emoji)}
                className={`text-6xl p-4 border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-110 ${selectedSticker === sticker.id ? 'bg-yellow-400 scale-110' : 'bg-white'}`}
              >
                {sticker.emoji}
                <p className="text-sm font-bold uppercase mt-2">{sticker.label}</p>
              </button>
            ))}
          </div>
        </div>

        <ComicButton variant="primary" onClick={resetQuiz} className="text-xl">
          COBA LAGI
        </ComicButton>
      </ComicCard>
    );
  }

  const q = questions[currentQuestion];
  const isCorrect = selectedAnswer === q.answer;

  return (
    <div className="h-full flex flex-col gap-4">
      <ComicCard variant="white" className="flex-shrink-0 flex justify-between items-center">
        <h1 className="text-2xl font-black uppercase">Evaluasi HOTS</h1>
        <div className="bg-purple-300 border-4 border-black px-4 py-2 rounded-xl font-black text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Soal {currentQuestion + 1} / {questions.length}
        </div>
      </ComicCard>

      <div className="flex-1 overflow-y-auto bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col relative">
        <h2 className="text-xl font-bold mb-6 text-justify leading-relaxed" dangerouslySetInnerHTML={{ __html: q.question }}></h2>

        <div className="space-y-3 mb-8 flex-1">
          {q.options.map((opt) => {
            let btnClass = "bg-white hover:bg-gray-100";
            if (isAnswered) {
              if (opt.id === q.answer) {
                btnClass = "bg-green-400"; // Correct answer always green
              } else if (opt.id === selectedAnswer) {
                btnClass = "bg-red-400"; // Wrong selected answer red
              } else {
                btnClass = "bg-gray-200 opacity-50"; // Others dimmed
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleAnswer(opt.id)}
                disabled={isAnswered}
                className={`w-full text-left p-4 border-4 border-black rounded-xl font-bold transition-all ${btnClass} ${!isAnswered ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]' : ''}`}
              >
                <span className="inline-block w-8 h-8 bg-black text-white text-center leading-8 rounded-full mr-3 border-2 border-white">{opt.id}</span>
                <span dangerouslySetInnerHTML={{ __html: opt.text }}></span>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 border-4 border-black rounded-xl mb-6 ${isCorrect ? 'bg-green-200' : 'bg-red-200'}`}
            >
              <h3 className="text-2xl font-black uppercase mb-2 flex items-center gap-2">
                {isCorrect ? '🎉 TEPAT SEKALI!' : '💥 YAH, KURANG TEPAT!'}
              </h3>
              <p className="font-bold text-lg mb-2">
                <span className="underline">Pembahasan:</span> <span dangerouslySetInnerHTML={{ __html: q.explanation }}></span>
              </p>
              {!isCorrect && (
                <p className="font-bold text-md text-red-800 bg-red-100 p-3 border-2 border-red-800 rounded-lg mt-2">
                  <span className="underline">Kenapa salah?</span> <span dangerouslySetInnerHTML={{ __html: q.wrongExplanation }}></span>
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-end mt-auto">
          {isAnswered && (
            <ComicButton variant="primary" onClick={nextQuestion}>
              {currentQuestion < questions.length - 1 ? 'SOAL BERIKUTNYA' : 'LIHAT SKOR'}
            </ComicButton>
          )}
        </div>
      </div>
    </div>
  );
};
