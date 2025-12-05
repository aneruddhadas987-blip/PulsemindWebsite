import { Clock, Eye, AlertCircle } from 'lucide-react';

export default function Background() {
  const timeline = [
    {
      period: '1960-1990',
      title: 'Early GSR System',
      description: 'GSR is widely used in psychology studies; heart-rate monitors exist but are bulky and less precise.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      period: '1997',
      title: 'Facial Expression Models',
      description: 'First facial-expression recognition models appeared, marking a significant advance.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      period: '2010',
      title: 'Emotion Classification Models',
      description: 'Computer vision models trained on datasets classified basic emotions with moderate success.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      period: '2017-2019',
      title: 'On-device ML',
      description: 'TensorFlow Lite and PyTorch Mobile brought ML to phones, improving privacy and speed.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      period: '2020-2025',
      title: 'Wearable Mental Health',
      description: 'Wearables now track stress and oxygen levels, yet deep emotion analysis is still developing.',
      color: 'from-green-500 to-green-600'
    },
    {
      period: '2025-2026',
      title: 'PulseMind',
      description: 'AI for Mental Health & Overdose Risk - Mobile App integrated with measuring wearable device',
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  return (
    <section id="background" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Clock className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Evolution of Mental Health Technology</h2>
          <p className="text-xl text-gray-600">From early detection systems to AI-powered solutions</p>
        </div>

        <div className="relative mb-16">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-blue-600"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}>
                <div className={`md:${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className={`bg-gradient-to-br ${item.color} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}>
                    <div className="font-bold text-lg mb-2 opacity-90">{item.period}</div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/90 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4 bg-white border-4 border-cyan-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <Eye className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Where We Are Today</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Mental health and overdose detection still rely on human observation</li>
              <li>• Schools depend on teachers/counselors to notice behavioral changes</li>
              <li>• Overdoses often discovered too late</li>
              <li>• Wearables track heart rate/SpO₂, but not early mental-health signals</li>
            </ul>
          </div>

          <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Science Behind Current Tools</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• PPG: Heart-rate via blood-volume changes</li>
              <li>• GSR: Stress tracking through skin conductivity</li>
              <li>• Computer Vision (CNNs): Facial-expression detection</li>
              <li>• Anomaly Detection: Flags unusual vital-sign patterns</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
            <AlertCircle className="w-10 h-10 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">What's Missing</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Devices and systems are disconnected</li>
              <li>• Emotional and physical crises detected late</li>
              <li>• No unified, real-time monitoring solution</li>
            </ul>
            <div className="mt-4 p-3 bg-orange-100 rounded-lg">
              <p className="text-sm font-semibold text-orange-900">This is where PulseMind comes in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
