import logo from "../assets/logo-text.png"; // ekhane ami assets theke navbar-er logo ta import kortesi
import banner from "../assets/banner-stack.png"; // ekhane ami hero section-er banner image ta import kortesi

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* ekhane ami navbar ta top e sticky rakhtesi ar niche halka border dicchi */}
      <nav className="sticky top-0 z-50 h-[68px] border-b border-gray-100 bg-white">
        {/* ekhane ami navbar-er content ta fixed width er moddhe center kortesi */}
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between">
          {/* ekhane ami left side e logo ta rakhtesi */}
          <div className="flex items-center">
            <img src={logo} alt="Dev Stack" className="h-8" />
          </div>

          {/* ekhane ami Figma-r moto middle e navigation link gula rakhtesi */}
          <div className="hidden items-center gap-7 md:flex">
            {/* ekhane Home active thakay pink color dicchi */}
            <a href="#" className="text-sm font-medium text-pink-500">
              Home
            </a>

            <a href="#" className="text-sm font-medium text-gray-600">
              Technologies
            </a>

            <a href="#" className="text-sm font-medium text-gray-600">
              Projects
            </a>

            <a href="#" className="text-sm font-medium text-gray-600">
              About
            </a>

            <a href="#" className="text-sm font-medium text-gray-600">
              Contact
            </a>
          </div>

          {/* ekhane ami right side e Sign In ar Sign Up rakhtesi */}
          <div className="flex items-center gap-4">
            {/* ekhane Sign In ke simple text button hisebe rakhtesi */}
            <button className="text-sm font-medium text-gray-600">
              Sign In
            </button>

            {/* ekhane ami Figma-r moto Sign Up ke rounded pink button banaitesi */}
            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-fuchsia-600 px-5 py-2 text-sm font-medium text-white">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* ekhane ami navbar-er niche hero section ta rakhtesi */}
      <section className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-24">
        {/* ekhane ami hero-r left side e heading, details ar button gula rakhtesi */}
        <div className="max-w-xl">
          {/* ekhane ami heading-er main part ta rakhtesi */}
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Build Your Ideal
            <br />
            {/* ekhane ami heading-er second line e gradient color use kortesi */}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* ekhane ami Figma-r moto hero section-er details text ta rakhtesi */}
          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* ekhane ami hero-r duita button ek sathe rakhtesi */}
          <div className="mt-8 flex items-center gap-4">
            {/* ekhane ami primary button-e same gradient use kortesi */}
            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-medium text-white">
              Explore Technologies
            </button>

            {/* ekhane ami second button-ta simple outlined rakhtesi */}
            <button className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700">
              Learn More
            </button>
          </div>
        </div>

        {/* ekhane ami hero-r right side e banner image ta rakhtesi */}
        <div>
          <img src={banner} alt="Technology stack" className="w-[440px]" />
        </div>
      </section>
    </div>
  );
}

export default App;
