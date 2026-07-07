import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Sword, Wand2 } from "lucide-react";

interface IntroCardProps {
  onStart: () => void;
}

export function IntroCard({ onStart }: IntroCardProps) {
  return (
    <Card className="w-full max-w-2xl border-2 border-primary/20 parchment-texture shadow-xl">
      <CardHeader className="space-y-4 text-center">
        <div className="flex justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sword className="h-6 w-6" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/50 text-secondary-foreground">
            <Shield className="h-6 w-6" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Wand2 className="h-6 w-6" />
          </div>
        </div>
        <div className="space-y-2">
          <CardTitle className="text-3xl font-extrabold text-foreground">
            Descubra sua Classe de RPG
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            Responda 10 perguntas e descubra qual das 15 classes de fantasia mais combina com sua
            personalidade.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>15 classes únicas: Bárbaro, Elfo, Mago, Paladino e mais</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>10 perguntas sobre personalidade, combate e valores</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Resultado com descrição detalhada e pontuação completa</span>
          </div>
        </div>
        <Button onClick={onStart} size="lg" className="w-full gap-2 text-base font-bold">
          <Sparkles className="h-4 w-4" />
          Iniciar jornada
        </Button>
      </CardContent>
    </Card>
  );
}
