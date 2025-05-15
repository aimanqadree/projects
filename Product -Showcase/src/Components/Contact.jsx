const Contact = () => {
  return (
    <div
      className="bg-cover bg-center py-16 mt-"
      style={{
        backgroundImage: "url('./backgroundimg.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-white">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-cursive">
              Our Contacts
            </h2>
            <p className="mb-4">
              At Product Showcase, we value your experience and are always ready
              to assist you. Whether you have questions about a product, need
              help with your order, or want to know more about delivery —we’re
              just a message away.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 font-cursive">
              Use the below form to get in touch with us..
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="p-2 rounded bg-white text-black cursor-pointer"
                />
                <input
                  type="text"
                  placeholder="Your phone"
                  className="p-2 rounded bg-white text-black cursor-pointer"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 rounded bg-white text-black cursor-pointer"
                />
              </div>
              <textarea
                placeholder="Your message"
                rows="4"
                className="w-full p-2 rounded bg-white text-black cursor-pointer"
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-500 ease-in-out cursor-pointer"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;
