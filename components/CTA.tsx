import React from 'react'

const CTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-green-500 to-blue-600 text-light-100 text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-5xl font-extrabold mb-8">Join Us in Building a Better Future</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto">
          Your support can transform lives. Whether through donations, volunteering, or partnerships, you can help us create a resilient and self-reliant South Sudan.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300">
            Donate Now
          </button>
          <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-green-600 transition-all duration-300">
            Partner With Us
          </button>
          <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-green-600 transition-all duration-300">
            Volunteer
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA