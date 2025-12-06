import { Target, Heart, Zap, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 sm:mb-6 shadow-lg">
            <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            PulseMind: AI for Mental Health<br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              & Overdose Risk
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            Combating the mental health crisis & Overdose Risk through innovative AI technology and wearable sensors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Early Detection</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Detect mental distress through image analysis and physiological data before crisis escalation
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-red-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Overdose Prevention</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Monitor SpO₂, heart rate variability, and GSR to identify overdose risk and alert caregivers immediately
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Community Support</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Non-invasive, opt-in wearable designed for schools and clinics with user-controlled data privacy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
