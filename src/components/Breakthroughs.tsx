import { Lightbulb, Scale, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Breakthroughs() {
  return (
    <section id="breakthroughs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Lightbulb className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Breakthroughs & Consequences</h2>
          <p className="text-xl text-gray-600">Future vision and impact assessment</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Lightbulb className="w-8 h-8 text-orange-500" />
              <h3 className="text-3xl font-bold text-gray-900">Technological Breakthroughs Needed</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="text-2xl">🎭</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Ultra-Accurate Multimodal Emotion Recognition</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Combine facial and physiological data</li>
                      <li>• Target accuracy: greater than 95%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="text-2xl">📡</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Next-Generation Biosensors</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Low-cost, flexible, non-intrusive</li>
                      <li>• Measure heart rate, SpO₂, stress chemicals, breathing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="text-2xl">⏱️</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Real-Time Predictive Overdose Modeling</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Predict overdose risk before symptoms appear</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Privacy-Safe Edge Computing</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• On-device AI processing with encryption</li>
                      <li>• No data leaves the device</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Scale className="w-8 h-8 text-cyan-600" />
              <h3 className="text-3xl font-bold text-gray-900">Benefits and Challenges</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h4 className="text-2xl font-bold text-gray-900">Positive Impacts</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Early intervention to prevent mental health crises and overdoses</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Reduces stigma around seeking help</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Real-time support for families and schools</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Encourages responsible use of AI in communities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-300">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                  <h4 className="text-2xl font-bold text-gray-900">Negative Impacts</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold mt-1">!</span>
                    <span>Potential misuse of sensitive data if privacy fails</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold mt-1">!</span>
                    <span>Over-reliance on AI instead of human counseling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold mt-1">!</span>
                    <span>False alarms could cause stress</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold mt-1">!</span>
                    <span>Schools might depend too heavily on technology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Our Commitment</h3>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            PulseMind is dedicated to responsible AI development that prioritizes user privacy, enhances human intervention,
            and serves as a complement—not replacement—to professional mental health care. We believe technology should
            empower communities while maintaining the highest ethical standards.
          </p>
        </div>
      </div>
    </section>
  );
}
