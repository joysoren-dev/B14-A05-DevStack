import logo from "../assets/logo-text.png"; // ekhane ami assets theke navbar-er logo ta import kortesi


function App() {
  return (
    <div>
      {/* ekhane ami navbar ta top e sticky rakhtesi ar niche halka border dicchi */}
      <nav className="sticky top-0 z-50 h-[68px] border-b border-gray-100 bg-white">

        {/* ekhane ami navbar-er content ta fixed width er moddhe center kortesi */}
        <div className="mx-auto flex h-full max-w-[1040px] items-center justify-between">

          {/* ekhane ami left side e logo ta rakhtesi */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-8"
            />
          </div>


          {/* ekhane ami Figma-r moto middle e navigation link gula rakhtesi */}
          <div className="hidden items-center gap-7 md:flex">

            {/* ekhane Home active thakay pink color dicchi */}
            <a
              href="#"
              className="text-sm font-medium text-pink-500"
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-600"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-600"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-600"
            >
              About
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-600"
            >
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
    </div>
  );
}

export default App;