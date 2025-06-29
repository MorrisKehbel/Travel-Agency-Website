import { useNavigate } from "react-router";
import { useState } from "react";
export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    setInputValue(event.target.value);
    navigate(`destinations/search?q=${encodeURIComponent(inputValue)}`);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-4xl font-bold text-gray-600 text-center my-4">
        Find Your Next Student Adventure
      </h2>
      <p className="text-gray-600 text-center my-4">
        Whether you're dreaming of hackathons in Berlin, tech tours in Silicon
        Valley, or cultural deep-dives across Europe — we've got you covered.
        Our student trips combine learning, networking, and unforgettable
        memories, all at student-friendly prices. Let your next adventure start
        here.
      </p>
      <form
        onSubmit={handleOnSubmit}
        className="max-w-4xl w-full mx-auto bg-gray-100 shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-5 gap-4"
      >
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          className="input w-full bg-gray-400 placeholder:text-gray-100"
        />
        <input
          type="text"
          name="destination"
          value={inputValue}
          onChange={handleChange}
          placeholder="Destination"
          className="input w-full bg-gray-400 placeholder:text-gray-100"
        />
        <input
          type="date"
          name="startDate"
          className="input w-full bg-gray-400"
        />
        <input
          type="date"
          name="returnDate"
          className="input w-full  bg-gray-400"
        />

        <button className="btn btn-primary w-full">Search</button>
      </form>
    </div>
  );
};
