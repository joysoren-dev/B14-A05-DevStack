import { useState } from "react";
import { Menu, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../assets/logo-text.png";
import banner from "../assets/banner-stack.png";
import { technologies } from "./technologies";
import TechnologyCard from "./TechnologyCard";

function App() {
  // ekhane ami user je technology-gulo stack-e add korbe segulo rakhtesi
  const [stack, setStack] = useState<number[]>([]);

  // ekhane ami mobile menu open naki close seta manage kortesi
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ekhane ami technology-r id niye stack-e add kortesi
  const addToStack = (technologyId: number) => {
    // ekhane ami age check kortesi technology-ta already stack-e ache kina
    const alreadyAdded = stack.includes(technologyId);

    if (alreadyAdded) {
      // ekhane duplicate add korle ekta warning toast dekhaitesi
      toast.warning("This technology is already in your stack.");
      return;
    }

    // ekhane technology-ta stack-e add kortesi
    setStack((currentStack) => [...currentStack, technologyId]);

    // ekhane successfully add hole success toast dekhaitesi
    const technology = technologies.find((item) => item.id === technologyId);

    if (technology) {
      toast.success(`${technology.name} added to your stack!`);
    }
  };

  // ekhane ami stack-e add kora technology-gular full data khuje nicchi
  const selectedTechnologies = technologies.filter((technology) =>
    stack.includes(technology.id),
  );

  // ekhane ami stack theke ekta technology remove kortesi
  const removeFromStack = (technologyId: number) => {
    const technology = technologies.find((item) => item.id === technologyId);

    // ekhane technology-ta stack theke remove kortesi
    setStack((currentStack) =>
      currentStack.filter((id) => id !== technologyId),
    );

    // ekhane remove korar por success toast dekhaitesi
    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  // ekhane ami stack-er sob technology ek sathe remove kortesi
  const removeAll = () => {
    // ekhane stack empty hole kono kaj kortesi na
    if (stack.length === 0) {
      return;
    }

    // ekhane sob technology stack theke remove kortesi
    setStack([]);

    // ekhane sob remove hole ekta toast dekhaitesi
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== NAVBAR ==================== */}

      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6">
          {/* ekhane ami mobile-e hamburger button rakhtesi */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>

          {/* ekhane ami logo ta rakhtesi */}
          <div className="flex items-center md:mr-auto">
            <img src={logo} alt="Dev Stack" className="h-8" />
          </div>

          {/* ekhane ami desktop navigation link gula rakhtesi */}
          <div className="hidden items-center gap-7 md:flex">
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
          <div className="flex items-center gap-3 md:ml-auto md:gap-4">
            <button className="text-sm font-medium text-gray-600">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white md:px-5">
              Sign Up
            </button>
          </div>
        </div>

        {/* ekhane ami mobile-e hamburger click korle navigation menu dekhaitesi */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-pink-500"
              >
                Home
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-600"
              >
                Technologies
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-600"
              >
                Projects
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-600"
              >
                About
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO SECTION ==================== */}

      <section className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-24">
        {/* ekhane ami hero-r left side e heading ar details rakhtesi */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* ekhane ami hero-r duita button rakhtesi */}
          <div className="mt-8 flex items-center gap-4">
            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-medium text-white">
              Explore Technologies
            </button>

            <button className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700">
              Learn More
            </button>
          </div>
        </div>

        {/* ekhane ami hero-r right side e banner image rakhtesi */}
        <div className="hidden md:block">
          <img src={banner} alt="Technology stack" className="w-[440px]" />
        </div>
      </section>

      {/* ==================== TECHNOLOGIES ==================== */}

      <section className="mx-auto max-w-[1200px] px-6 py-12">
        {/* ekhane ami technologies section-er heading rakhtesi */}
        <div>
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Explore{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-base text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* ekhane ami technology grid ar Your Stack sidebar pasapasi rakhtesi */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          {/* ==================== TECHNOLOGY GRID ==================== */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                addToStack={addToStack}
                isAdded={stack.includes(technology.id)}
              />
            ))}
          </div>

          {/* ==================== YOUR STACK ==================== */}

          <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            {/* ekhane ami Your Stack heading ar selected count rakhtesi */}
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Your Stack</h2>

                <p className="mt-1 text-sm text-gray-500">
                  {stack.length}{" "}
                  {stack.length === 1
                    ? "Technology Selected"
                    : "Technologies Selected"}
                </p>
              </div>

              {/* ekhane stack-e technology thaklei Remove All button dekhaitesi */}
              {stack.length > 0 && (
                <button
                  onClick={removeAll}
                  className="text-sm font-medium text-red-500 hover:text-red-600"
                >
                  Remove All
                </button>
              )}
            </div>

            {/* ==================== EMPTY STATE ==================== */}

            {selectedTechnologies.length === 0 && (
              <div className="mt-6 rounded-xl bg-gray-50 p-6 text-center">
                <div className="text-3xl">🧰</div>

                <p className="mt-3 text-sm font-medium text-gray-600">
                  Your stack is empty.
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-400">
                  Add technologies from the list to build your stack.
                </p>
              </div>
            )}

            {/* ==================== SELECTED TECHNOLOGIES ==================== */}

            {selectedTechnologies.length > 0 && (
              <div className="mt-5 space-y-3">
                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-3"
                  >
                    {/* ekhane selected technology-r information dekhaitesi */}
                    <div className="flex min-w-0 items-center gap-3">
                      {/* ekhane technology-r icon dekhaitesi */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
                        <span className="text-sm font-bold text-pink-500">
                          {technology.name.charAt(0)}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-gray-800">
                          {technology.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {technology.category}
                        </p>
                      </div>
                    </div>

                    {/* ekhane selected technology-ta remove korar button rakhtesi */}
                    <button
                      onClick={() => removeFromStack(technology.id)}
                      className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg font-bold text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* ekhane ami sob toast ek jaygay render kortesi */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />

      {/* ==================== FOOTER ==================== */}

      <footer className="mt-16 border-t border-gray-100 bg-white">
        {/* ekhane ami footer-er main content fixed width-er moddhe rakhtesi */}
        <div className="mx-auto max-w-[1200px] px-6 py-14">
          {/* ekhane ami brand ar link group-gula pasapasi rakhtesi */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
            {/* ==================== BRAND BLOCK ==================== */}

            <div className="md:col-span-2">
              {/* ekhane ami footer-e Dev Stack-er logo rakhtesi */}
              <div className="flex items-center">
                <img src={logo} alt="Dev Stack" className="h-8" />
              </div>

              {/* ekhane ami brand-er short description rakhtesi */}
              <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>

              {/* ekhane ami social links-gula rakhtesi */}
              <div className="mt-5 flex items-center gap-5">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-800"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-800"
                >
                  Twitter
                </a>

                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-800"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* ==================== PRODUCT ==================== */}

            <div>
              {/* ekhane ami Product link group-er heading rakhtesi */}
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-800">
                Product
              </h3>

              {/* ekhane ami Product-er link gula rakhtesi */}
              <div className="mt-5 space-y-3">
                <a
                  href="#"
                  className="block text-sm text-gray-400 hover:text-gray-700"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-400 hover:text-gray-700"
                >
                  Technologies
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-400 hover:text-gray-700"
                >
                  Projects
                </a>
              </div>
            </div>

            {/* ==================== COMPANY ==================== */}

            <div>
              {/* ekhane ami Company link group-er heading rakhtesi */}
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-800">
                Company
              </h3>

              {/* ekhane ami Company-r link gula rakhtesi */}
              <div className="mt-5 space-y-3">
                <a
                  href="#"
                  className="block text-sm text-gray-400 hover:text-gray-700"
                >
                  About
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-400 hover:text-gray-700"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-400 hover:text-gray-700"
                >
                  Careers
                </a>
              </div>
            </div>

            {/* ==================== LEGAL ==================== */}

            <div>
              {/* ekhane ami Legal link group-er heading rakhtesi */}
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-800">
                Legal
              </h3>

              {/* ekhane ami Legal-er link gula rakhtesi */}
              <div className="mt-5 space-y-3">
                <a
                  href="#"
                  className="block text-sm text-gray-400 hover:text-gray-700"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-400 hover:text-gray-700"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* ==================== FOOTER BOTTOM ==================== */}

          {/* ekhane ami main footer content-er niche divider dicchi */}
          <div className="mt-12 border-t border-gray-100 pt-7">
            {/* ekhane ami copyright ar Privacy/Terms link ek sathe rakhtesi */}
            <div className="flex flex-col gap-4 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Dev Stack. All rights reserved.</p>

              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-gray-700">
                  Privacy
                </a>

                <a href="#" className="hover:text-gray-700">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
