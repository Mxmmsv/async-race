import type { CarValue } from "@/components/types/types";

export type PaginationsInfo = {
  page?: number;
  limit?: number;
};

export type CarsApiResponse = {
  cars: CarValue[];
  totalCount: number;
};
