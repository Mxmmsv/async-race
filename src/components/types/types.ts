export type CarValue = {
  id: number;
  name: string;
  color: string;
  wins: number;
};

export type CreateCarFormValue = Omit<CarValue, "id" | "wins">;
