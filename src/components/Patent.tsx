import { Award, Shield, Zap } from 'lucide-react';

export default function Patent() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-2xl mb-4 sm:mb-6">
            <Award className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Intellectual Property Protection
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            PulseMind is backed by provisional patent protection, safeguarding our innovative AI and wearable technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center mb-12 sm:mb-16">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-200 hover:shadow-3xl transition-shadow duration-300">
              <img
                src="/screenshot_2026-01-28_at_9.58.48_pm.png"
                alt="PulseMind Patent Documentation"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Provisional Patent Status</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                PulseMind has secured provisional patent protection for its proprietary AI algorithms and integrated wearable sensor technology, establishing priority rights for our innovation
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Protected Innovation</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our comprehensive patent covers advanced mental health detection, overdose prevention mechanisms, and the seamless integration of biometric sensors with AI-driven analysis
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-lg">
              <p className="text-sm sm:text-base font-semibold leading-relaxed">
                With provisional patent protection in place, PulseMind maintains competitive advantage while continuing to develop and refine our life-saving technology
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 sm:mb-3">IP</div>
            <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Intellectual Property</h4>
            <p className="text-xs sm:text-sm text-gray-600">Fully protected technology</p>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl sm:text-4xl font-bold text-cyan-600 mb-2 sm:mb-3">AI</div>
            <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Proprietary Algorithms</h4>
            <p className="text-xs sm:text-sm text-gray-600">Cutting-edge detection</p>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2 sm:mb-3">Patent</div>
            <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Priority Protection</h4>
            <p className="text-xs sm:text-sm text-gray-600">Provisional patent filed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
