export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-4xl font-bold text-gray-600 text-center my-4">
        Contact Us
      </h2>
      <p className="text-gray-600 text-center my-4">
        Have questions, ideas, or want to join a trip? Send us a message and
        we’ll get back to you soon!
      </p>
      <form className="flex flex-col border-2 border-gray-200 shadow-xl bg-gray-100 rounded-2xl p-4 mt-6">
        <label className="text-gray-600  text-lg font-semibold my-2">
          Name
        </label>
        <input
          type="text"
          placeholder="Your full name"
          name="name"
          className="border-1 bg-gray-50 text-gray-600 p-2 rounded mb-2"
        />

        <label className="text-gray-600 text-lg font-semibold my-2">
          E-Mail
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="border-1 bg-gray-50 text-gray-600 p-2 rounded mb-2"
        />

        <label className="text-gray-600  text-lg font-semibold my-2">
          Message
        </label>
        <textarea
          placeholder="Type your message here..."
          name="message"
          rows="4"
          className="border-1 bg-gray-50 text-gray-600 p-2 rounded mb-4"
        ></textarea>

        <button onClick={handleSubmit} className="btn btn-primary text-xl">
          Send
        </button>
      </form>
      <div className="mt-16">
        <h3 className="text-4xl font-bold text-gray-600 text-center my-4">
          More Information
        </h3>
        <div className="flex flex-col border-2 border-gray-200 shadow-xl bg-gray-100 rounded-2xl p-4 mt-6">
          <ul>
            <li className="text-gray-600 my-2">
              <strong>Phone:</strong> +49 1234 56789
            </li>
            <li className="text-gray-600 my-2">
              <strong>E-Mail:</strong> you@example.com
            </li>
            <li className="text-gray-600 my-2">
              <strong>Address:</strong> Example Street 23, City
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
