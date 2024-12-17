// eslint-disable-next-line react/prop-types
const UrlPage = ({ setUrl, onClick }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          Enter Blippar URL
        </h1>
        <form onSubmit={onClick} className="space-y-4">
          <div>
            <label
              htmlFor="blippar-url"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Blippar URL
            </label>
            <input
              id="blippar-url"
              type="url"
              placeholder="https://example.com/blippar-experience"
              onChange={(e) => setUrl(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <button type="submit" className="w-full bg-black text-white rounded">
            Proceed to Workout
          </button>
        </form>
      </div>
    </div>
  );
};

export default UrlPage;
