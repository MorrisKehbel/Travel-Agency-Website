export const About = () => {
  return (
    <div className="max-w-7xl flex flex-col mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-600 text-center my-4">
          About Us
        </h2>
        <p className="text-gray-600 text-center my-4">
          Welcome to Travel Agency — your gateway to unforgettable experiences!
          We specialize in affordable, student-friendly travel packages tailored
          for Software Engineering students.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-12 p-4">
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-center md:text-left text-gray-600 my-4">
            Why Travel with Us?
          </h3>
          <ul className="text-gray-600 text-center md:text-left my-4">
            <li>• Affordable, curated student trips</li>
            <li>• Group packages to tech hubs & hackathons</li>
            <li>• Safe, reliable, and fun experiences</li>
            <li>• Led by students, for students</li>
          </ul>
        </div>
        <div>
          <img
            className="rounded-xl"
            src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="person looking at a map"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-12 p-4">
        <div>
          <img
            className="rounded-xl"
            src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Close up of a globe"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-center md:text-right text-gray-600 my-4">
            What Makes Us Different?
          </h3>
          <ul className="text-gray-600 text-center md:text-right my-4">
            <li>Partnerships with top universities and tech companies •</li>
            <li>
              Itineraries designed to balance fun, learning, and culture •
            </li>
            <li>24/7 support from experienced student trip leaders •</li>
            <li>Feedback-driven improvements after every trip •</li>
          </ul>
        </div>
      </div>
      <div className="bg-primary rounded-lg text-white">
        <h2 className="text-4xl font-bold text-center my-4">Our Mission</h2>
        <p className="text-center my-4">
          To connect SE students through shared travel adventures, fostering
          learning, friendships, and unforgettable memories — all while staying
          budget-friendly.
        </p>
      </div>
    </div>
  );
};
