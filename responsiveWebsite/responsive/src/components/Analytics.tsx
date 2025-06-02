import laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Gain real-time insights into your data with a centralized analytics
            dashboard. Monitor traffic patterns, user behavior, and key
            performance indicators from a single, intuitive interface. Our
            platform enables you to identify trends, uncover opportunities, and
            respond quickly to changes — all without needing a data science
            background. Whether you're optimizing a product or scaling your
            business, actionable insights are just a click away.
          </p>
          <button className="group bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 cursor-pointer border border-[#00df9a] transition-all duration-500 flex items-center justify-center gap-2 hover:gap-4">
            <span className="transition-all duration-300">Get Started</span>
            <svg
              className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
