import Image from "next/image";

const About = () => {
  return (
    <section className="font-serif py-20 mt-8">
      <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">
        Get to know <span className="text-green-600">CCSO</span>
      </h2>
      <div className="flex flex-col md:flex-row it mt-4ems-center gap-10 max-w-6xl mx-auto px-6">
        <Image
          src="/images/impact4.jpg"
          alt="Impact"
          width={400}
          height={300}
          className="rounded-lg shadow-lg object-cover"
        />
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-700 mb-4 max-w-2xl">
            We are an indigenous South Sudanese NGO committed to alleviating
            poverty, promoting peace, and empowering vulnerable communities to
            achieve sustainable livelihoods.
          </p>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl">
            Inspired by the compassion of Jesus Christ, we work to restore
            dignity, self-respect, and self-reliance in Lakes State and beyond.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <div className="flex items-center gap-3">
              <button className="bg-white shadow-lg p-4 rounded-full border border-gray-300 hover:bg-gray-100">
                <Image
                  src="/images/donate.png"
                  alt="Donate"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </button>
              <p className="text-lg font-semibold text-gray-800">Donate</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white shadow-lg p-4 rounded-full border border-gray-300 hover:bg-gray-100">
                <Image
                  src="/images/sponsor.png"
                  alt="Sponsor"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </button>
              <p className="text-lg font-semibold text-gray-800">Sponsor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
