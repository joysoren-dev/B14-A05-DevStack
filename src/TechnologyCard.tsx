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

// ekhane ami protita badge-r jonno Figma-r moto halka background ar text color rakhtesi
const badgeColors: Record<string, string> = {
  Popular: "bg-purple-50 text-purple-600 border-purple-100",
  Versatile: "bg-green-50 text-green-600 border-green-100",
  Fast: "bg-orange-50 text-orange-600 border-orange-100",
  Standard: "bg-blue-50 text-blue-600 border-blue-100",
  "Top SQL": "bg-blue-50 text-blue-600 border-blue-100",
  Cache: "bg-red-50 text-red-600 border-red-100",
  Ubiquitous: "bg-yellow-50 text-yellow-600 border-yellow-100",
  Essential: "bg-violet-50 text-violet-600 border-violet-100",
  Robust: "bg-orange-50 text-orange-600 border-orange-100",
  Modern: "bg-cyan-50 text-cyan-600 border-cyan-100",
  Containers: "bg-blue-50 text-blue-600 border-blue-100",
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

  // ekhane ami App theke technology stack-e add korar function ta nicchi
  addToStack: (technologyId: number) => void;

  // ekhane ami check kortesi technology-ta already stack-e ache kina
  isAdded: boolean;
};

function TechnologyCard({
  technology,
  addToStack,
  isAdded,
}: TechnologyCardProps) {
  // ekhane technology-r name diye correct icon ta khuje nicchi
  const Icon = technologyIcons[technology.name];

  // ekhane technology-r name diye tar brand color ta khuje nicchi
  const iconColor = technologyIconColors[technology.name];

  // ekhane technology-r badge onujai tar color-er class khuje nicchi
  const badgeStyle = technology.badge ? badgeColors[technology.badge] : "";

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
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${badgeStyle}`}
          >
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

      {/* ekhane ami technology age add hole button-ta disabled kortesi */}
      <button
        onClick={() => addToStack(technology.id)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-3 text-sm font-medium text-white ${
          isAdded ? "cursor-not-allowed bg-gray-400" : "bg-[#080d1b]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;
