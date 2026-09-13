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
  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

      {/* ekhane ami card-er top e technology-r icon ar badge rakhtesi */}
      <div className="flex items-start justify-between">

        {/* ekhane আপাতত technology-r first letter diye icon-er jaygata bujhaitesi */}
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold text-gray-700">
          {technology.name.charAt(0)}
        </div>

        {/* ekhane ami Figma-r moto badge ta card-er top-right e rakhtesi */}
        {technology.badge && (
          <span className="rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500">
            {technology.badge}
          </span>
        )}
      </div>

      {/* ekhane ami technology-r name ar exact description ta rakhtesi */}
      <div className="mt-5">
        <h3 className="text-xl font-bold text-gray-900">
          {technology.name}
        </h3>

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
        <span className="text-xs text-gray-500">
          {technology.level}
        </span>

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