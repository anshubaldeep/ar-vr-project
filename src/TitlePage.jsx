/* eslint-disable react/prop-types */
export default function FitnessApp({ onClick }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 pt-10">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">FitShoe Pro</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 mb-8">
          <img src="/shoe.jpg" alt="FitShoe Pro" />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-2">
            The Ultimate Push-Up Shoe
          </h2>
          <p className="text-gray-600">
            Designed with advanced grip technology and ergonomic support,
            FitShoe Pro maximizes your push-up performance and comfort.
          </p>
        </div>
      </main>

      <footer className="mt-auto pb-5">
        <button
          className="w-full py-3 pb- text-lg bg-blue-600 text-white rounded"
          onClick={onClick}
        >
          Show Workout
        </button>
      </footer>
    </div>
  );
}
