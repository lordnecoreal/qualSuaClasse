import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScoreChart } from "./ScoreChart";
import { RotateCcw, Trophy } from "lucide-react";
import type { RpgClass } from "@/lib/rpg-data";

interface ResultCardProps {
  winner: RpgClass;
  runnerUps: RpgClass[];
  scores: Record<string, number>;
  maxScore: number;
  onRestart: () => void;
}

export function ResultCard({ winner, runnerUps, scores, maxScore, onRestart }: ResultCardProps) {
  const Icon = winner.icon;

  return (
    <Card className="w-full max-w-2xl overflow-hidden border-2 border-primary/20 parchment-texture shadow-2xl">
      <div
        className="h-3 w-full"
        style={{ backgroundColor: winner.color }}
      />
      <CardHeader className="space-y-4 text-center">
        <div className="mx-flex mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary/20 bg-card shadow-lg">
          <Icon className="h-10 w-10" style={{ color: winner.color }} />
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <Trophy className="h-4 w-4" />
            Sua classe é
          </div>
          <CardTitle className="text-4xl font-extrabold text-foreground">{winner.name}</CardTitle>
          <CardDescription className="text-lg italic text-muted-foreground">
            {winner.tagline}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-center text-base leading-relaxed text-foreground">
          {winner.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {winner.strengths.map((strength) => (
            <Badge key={strength} variant="secondary" className="text-xs font-semibold">
              {strength}
            </Badge>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-card/50 p-5">
          <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Pontuação das principais classes
          </h3>
          <ScoreChart scores={scores} topClasses={[winner, ...runnerUps]} maxScore={maxScore} />
        </div>

        <Button onClick={onRestart} size="lg" className="w-full gap-2 text-base font-bold">
          <RotateCcw className="h-4 w-4" />
          Refazer o teste
        </Button>
      </CardContent>
    </Card>
  );
}
