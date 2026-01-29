import { CheckCircle2, Award } from 'lucide-react';

export default function Patent() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 sm:mb-6">
            Officially Patented
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-2xl">
            PulseMind's innovative technology is protected by the United States Patent and Trademark Office
          </p>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-200 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <img
              src="/screenshot_2026-01-28_at_10.03.41_pm.png"
              alt="PulseMind USPTO Patent Confirmation"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            <div className="relative bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100 group-hover:border-blue-300 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 sm:mb-8 mx-auto">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-3 sm:mb-4">Official Recognition</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Confirmed and approved by the USPTO on January 28, 2026, validating our breakthrough technology
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            <div className="relative bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100 group-hover:border-cyan-300 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full mb-6 sm:mb-8 mx-auto">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-3 sm:mb-4">IP Protection</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Complete intellectual property protection for our proprietary AI algorithms and sensor integration technology
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            <div className="relative bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100 group-hover:border-blue-300 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full mb-6 sm:mb-8 mx-auto">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-3 sm:mb-4">Market Leadership</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Industry-first innovation in mental health detection and overdose prevention with patented safeguards
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <p className="text-sm sm:text-base text-gray-500 font-medium">
            Patent Title: <span className="text-gray-900 font-semibold">PulseMind: AI for Mental Health & Overdose Risk</span>
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Filed with the United States Patent and Trademark Office (USPTO)
          </p>
        </div>
      </div>
    </section>
  );
}
