import VolunteerForm from "@/components/forms/VolunteerForm";

const VolunteerPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="px-4">
        <div className="max-w-4xl">
          <div className="text-start md:text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Volunteer with CCSO</h1>
            <p className="text-lg text-gray-600 mb-8">
              Join us in making a difference in South Sudan. Your skills and time can help transform lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Make an Impact</h3>
              <p className="text-gray-600">
                Directly contribute to improving lives in South Sudanese communities
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Gain Experience</h3>
              <p className="text-gray-600">
                Develop new skills and get hands-on experience in community development
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Cultural Exchange</h3>
              <p className="text-gray-600">
                Immerse yourself in South Sudanese culture and traditions
              </p>
            </div>
          </div>

            <VolunteerForm />
        </div>
      </div>
    </main>
  );
};

export default VolunteerPage;
