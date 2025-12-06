import { Play } from 'lucide-react';
import AppDevice from '../components/AppDevice';

export default function AppDevicePage() {
  return (
    <div className="pt-16">
      <AppDevice />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Play className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See It In Action</h2>
            <p className="text-xl text-gray-600">Watch a detailed demonstration of the PulseMind system</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-cyan-200 max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/nj5colDu-zE"
                title="PulseMind System Demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-gray-900 mb-2">Mobile Interface</h3>
              <p className="text-gray-600 text-sm">Intuitive design for easy daily use</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Real-Time Data</h3>
              <p className="text-gray-600 text-sm">Live biometric tracking and insights</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
              <div className="text-3xl mb-3">🔔</div>
              <h3 className="font-bold text-gray-900 mb-2">Smart Alerts</h3>
              <p className="text-gray-600 text-sm">Immediate notifications to caregivers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
