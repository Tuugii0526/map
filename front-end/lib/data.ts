import { TLink } from "./types";

export const links: TLink[] = [
  {
    id: 1,
    title: "Locator plus",
    path: "locator-plus",
    hasChildren: true,
    children: [
      {
        id: 1,
        title: "Basic",
        path: "basic",
      },
      {
        id: 2,
        title: "Intermediate",
        path: "intermediate",
      },
      {
        id: 3,
        title: "Advanced",
        path: "advanced",
      },
    ],
  },
];
