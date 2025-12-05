import { Target, Heart, Zap, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            PulseMind: AI for Mental Health<br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              & Overdose Risk
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Combating the mental health crisis & Overdose Risk through innovative AI technology and wearable sensors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Early Detection</h3>
            <p className="text-gray-600 leading-relaxed">
              Detect mental distress through image analysis and physiological data before crisis escalation
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Overdose Prevention</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor SpO₂, heart rate variability, and GSR to identify overdose risk and alert caregivers immediately
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Non-invasive, opt-in wearable designed for schools and clinics with user-controlled data privacy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
