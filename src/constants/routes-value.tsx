import { CarOutlined, StarOutlined } from "@ant-design/icons";

import GarageComponent from "@/components/main/Garage";
import ScoreComponent from "@/components/main/Score";

import type { ReactElement } from "react";

type RouteConfig = {
  path: string;
  label?: string;
  icon?: ReactElement;
  element?: ReactElement;
};

type RoutesValue = {
  root: RouteConfig;
  garage: RouteConfig;
  score: RouteConfig;
};

export const routesValue: RoutesValue = {
  root: {
    path: "/",
  },
  garage: {
    path: "/garage",
    label: "Garage",
    icon: <CarOutlined />,
    element: <GarageComponent />,
  },
  score: {
    path: "/score",
    label: "Score",
    icon: <StarOutlined />,
    element: <ScoreComponent />,
  },
} as const;
