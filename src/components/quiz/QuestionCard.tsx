import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { Question } from "@/lib/rpg-data";

interface QuestionCardProps {
  question: Question;
  currentStep: number;
  totalSteps: number;
  onAnswer: (scores: Record<string, number>) => void;
}

export function QuestionCard({ question, currentStep, totalSteps, onAnswer }: QuestionCardProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <Card className="w-full max-w-2xl border-2 border-primary/20 parchment-texture shadow-xl">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
          <span>
            Pergunta {currentStep + 1} de {totalSteps}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
        <CardTitle className="text-2xl font-bold leading-snug text-foreground">
          {question.text}
        </CardTitle>
        <CardDescription className="text-base">
          Escolha a opção que mais combina com você.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        {question.answers.map((answer, index) => (
          <Button
            key={index}
            variant="outline"
            size="lg"
            onClick={() => onAnswer(answer.scores)}
            className="h-auto justify-start whitespace-normal border-border/80 bg-card px-5 py-4 text-left text-base font-medium leading-relaxed text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
              {String.fromCharCode(65 + index)}
            </span>
            {answer.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
