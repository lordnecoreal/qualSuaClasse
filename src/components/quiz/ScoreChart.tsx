import type { RpgClass } from "@/lib/rpg-data";

interface ScoreChartProps {
  scores: Record<string, number>;
  topClasses: RpgClass[];
  maxScore: number;
}

export function ScoreChart({ scores, topClasses, maxScore }: ScoreChartProps) {
  return (
    <div className="space-y-3">
      {topClasses.map((cls) => {
        const score = scores[cls.id];
        const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
        const Icon = cls.icon;

        return (
          <div key={cls.id} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <Icon className="h-4 w-4" style={{ color: cls.color }} />
                <span>{cls.name}</span>
              </div>
              <span className="font-bold tabular-nums text-foreground">{score} pts</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: cls.color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
