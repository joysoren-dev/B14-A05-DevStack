import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaJsSquare,
  FaJava,
  FaDocker,
} from "react-icons/fa";

import {
  SiSvelte,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

import type { IconType } from "react-icons";

// ekhane ami technology-r name onujai kon icon use hobe seta rakhtesi
const technologyIcons: Record<string, IconType> = {
  React: FaReact,
  "Vue.js": FaVuejs,
  Svelte: SiSvelte,
  "Next.js": SiNextdotjs,
  "Node.js": FaNodeJs,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  JavaScript: FaJsSquare,
  TypeScript: SiTypescript,
  Java: FaJava,
  "Tailwind CSS": SiTailwindcss,
  Docker: FaDocker,
};

// ekhane ami protita technology-r original/recognizable brand color rakhtesi
const technologyIconColors: Record<string, string> = {
  React: "#61DAFB",
  "Vue.js": "#42B883",
  Svelte: "#FF3E00",
  "Next.js": "#000000",
  "Node.js": "#68A063",
  PostgreSQL: "#336791",
  Redis: "#DC382D",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Java: "#E76F00",
  "Tailwind CSS": "#06B6D4",
  Docker: "#2496ED",
};

type Technology = {
  id: number;
  name: string;
  badge: string | null;
  description: string;
  category: string;
  level: string;
  rating: number;
};

type TechnologyCardProps = {
  technology: Technology;
};

function TechnologyCard({ technology }: TechnologyCardProps) {
  // ekhane technology-r name diye correct icon ta khuje nicchi
  const Icon = technologyIcons[technology.name];

  // ekhane technology-r name diye tar brand color ta khuje nicchi
  const iconColor = technologyIconColors[technology.name];

  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* ekhane ami card-er top e technology-r icon ar badge rakhtesi */}
      <div className="flex items-start justify-between">
        {/* ekhane ami technology-r actual icon ar tar brand color use kortesi */}
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          {Icon && <Icon className="text-3xl" style={{ color: iconColor }} />}
        </div>

        {/* ekhane ami Figma-r moto badge ta card-er top-right e rakhtesi */}
        {technology.badge && (
          <span className="rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500">
            {technology.badge}
          </span>
        )}
      </div>

      {/* ekhane ami technology-r name ar description rakhtesi */}
      <div className="mt-5">
        <h3 className="text-xl font-bold text-gray-900">{technology.name}</h3>

        <p className="mt-2 text-sm leading-5 text-gray-400">
          {technology.description}
        </p>
      </div>

      {/* ekhane ami category, level ar rating-er section ta rakhtesi */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3">
        {/* ekhane ami category-r charpase halka background ar border dicchi */}
        <span className="rounded-md border border-gray-100 bg-gray-50 px-2 py-1 text-xs text-gray-500">
          {technology.category}
        </span>

        {/* ekhane ami technology-r level ta dekhaitesi */}
        <span className="text-xs text-gray-500">{technology.level}</span>

        {/* ekhane ami rating-er sathe star ta dekhaitesi */}
        <span className="text-xs text-gray-500">
          <span className="text-yellow-400">★</span> {technology.rating}
        </span>
      </div>

      {/* ekhane ami Figma-r main Add to Stack button ta rakhtesi */}
      <button className="mt-4 w-full rounded-lg bg-[#080d1b] py-3 text-sm font-medium text-white">
        Add to Stack
      </button>
    </div>
  );
}

export default TechnologyCard;
