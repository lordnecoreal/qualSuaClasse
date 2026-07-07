import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";

import { IntroCard } from "@/components/quiz/IntroCard";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { ResultCard } from "@/components/quiz/ResultCard";
import { QUESTIONS, RPG_CLASSES, getInitialScores, getTopClasses } from "@/lib/rpg-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Descubra sua Classe de RPG" },
      {
        name: "description",
        content:
          "Responda 10 perguntas e descubra qual das 15 classes de fantasia mais combina com sua personalidade. Bárbaro, Elfo, Mago, Paladino e mais.",
      },
      { property: "og:title", content: "Descubra sua Classe de RPG" },
      {
        property: "og:description",
        content:
          "Responda 10 perguntas e descubra qual das 15 classes de fantasia mais combina com sua personalidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type QuizState = "intro" | "quiz" | "result";

function Index() {
  const [state, setState] = useState<QuizState>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>(getInitialScores);

  const startQuiz = useCallback(() => {
    setState("quiz");
    setCurrentQuestion(0);
    setScores(getInitialScores);
  }, []);

  const handleAnswer = useCallback(
    (answerScores: Record<string, number>) => {
      setScores((prev) => {
        const next = { ...prev };
        for (const [classId, points] of Object.entries(answerScores)) {
          next[classId] = (next[classId] ?? 0) + points;
        }
        return next;
      });

      if (currentQuestion + 1 >= QUESTIONS.length) {
        setState("result");
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
    },
    [currentQuestion],
  );

  const restartQuiz = useCallback(() => {
    setState("intro");
    setCurrentQuestion(0);
    setScores(getInitialScores);
  }, []);

  const topClasses = getTopClasses(scores);
  const winner = topClasses[0];
  const runnerUps = topClasses.slice(1);
  const maxScore = Math.max(...Object.values(scores), 1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        {state === "intro" && <IntroCard onStart={startQuiz} />}

        {state === "quiz" && (
          <QuestionCard
            question={QUESTIONS[currentQuestion]}
            currentStep={currentQuestion}
            totalSteps={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        )}

        {state === "result" && winner && (
          <ResultCard
            winner={winner}
            runnerUps={runnerUps}
            scores={scores}
            maxScore={maxScore}
            onRestart={restartQuiz}
          />
        )}
      </div>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        {RPG_CLASSES.length} classes disponíveis · {QUESTIONS.length} perguntas
      </footer>
    </main>
  );
}
