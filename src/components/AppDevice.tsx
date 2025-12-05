import { Smartphone, Activity, Bluetooth, Heart, Waves, Zap, Camera, CheckCircle } from 'lucide-react';

export default function AppDevice() {
  return (
    <section id="app-device" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Smartphone className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">App & Device</h2>
          <p className="text-xl text-gray-600">Complete ecosystem for mental health and overdose detection</p>
        </div>

        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 shadow-2xl mb-20 border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience the PulseMind App</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative mb-4 overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/app-1_home copy.png"
                    alt="PulseMind App Home Screen"
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Your Health, Amplified</h4>
                <p className="text-gray-600">Advanced image classification and GSR to detect early signs of mental and physical health conditions</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative mb-4 overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/app-3_image_capture copy.png"
                    alt="PulseMind Image Capture"
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Emotion Analysis</h4>
                <p className="text-gray-600">Point your camera to assess mood through advanced facial emotion recognition</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative mb-4 overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/app-5_feedback copy.png"
                    alt="PulseMind Mood Score"
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Personalized Insights</h4>
                <p className="text-gray-600">Receive mood scores and tailored wellness recommendations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-cyan-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">PulseMind Mobile App</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                <Activity className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Real-Time Dashboard</p>
                  <p className="text-gray-600 text-sm">Trends + biometric visualizations</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors">
                <Heart className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Mood Check-Ins</p>
                  <p className="text-gray-600 text-sm">Daily emotional tracking</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors">
                <Zap className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Automated Risk Alerts</p>
                  <p className="text-gray-600 text-sm">Notifies nurses, counselors, or caregivers</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
                <Zap className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Emergency Tools</p>
                  <p className="text-gray-600 text-sm">One-tap help, naloxone instructions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
                <CheckCircle className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Encrypted Data</p>
                  <p className="text-gray-600 text-sm">Strong privacy + on-device security</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                <Smartphone className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Multi-Device Support</p>
                  <p className="text-gray-600 text-sm">Works on phones & tablets</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Wearable Sensor Array</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="w-6 h-6 text-red-600" />
                  <h4 className="text-lg font-bold text-gray-900">SpO₂ Monitoring</h4>
                </div>
                <p className="text-gray-700">Blood oxygen saturation tracking for overdose detection</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <Activity className="w-6 h-6 text-blue-600" />
                  <h4 className="text-lg font-bold text-gray-900">Heart Rate Variability (HRV)</h4>
                </div>
                <p className="text-gray-700">Stress and autonomic nervous system analysis</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 border-2 border-cyan-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <Waves className="w-6 h-6 text-cyan-600" />
                  <h4 className="text-lg font-bold text-gray-900">Galvanic Skin Response (GSR)</h4>
                </div>
                <p className="text-gray-700">Emotional arousal and stress level detection</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2 text-white">
                <Bluetooth className="w-5 h-5" />
                <p className="font-semibold">Seamless Bluetooth connectivity to mobile app</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl mb-16 border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">System Architecture</h3>
          <div className="max-w-4xl mx-auto">
            <img
              src="/pulsemind_oct31 copy.png"
              alt="PulseMind System Architecture"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <Camera className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Image Input</h4>
                <p className="text-sm text-gray-600">Facial emotion detection using deep learning</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <Activity className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Arduino Integration</h4>
                <p className="text-sm text-gray-600">Real-time sensor data processing</p>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-xl">
                <Heart className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Biosensor Array</h4>
                <p className="text-sm text-gray-600">Heart rate, GSR, and SpO₂ monitoring</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl mb-16 border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Physical Prototype</h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/pro_gsr_led-2 copy.jpg"
                alt="PulseMind Wearable Prototype"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">3D-Printed Design</h4>
                  <p className="text-gray-600">Custom engineered wearable housing with integrated sensor mount and display</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Integrated Display</h4>
                  <p className="text-gray-600">Real-time stress monitoring with OLED display showing sensor values</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Non-Invasive Sensors</h4>
                  <p className="text-gray-600">Comfortable fabric-integrated biosensors for continuous monitoring</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                <p className="text-white font-semibold">Functional prototype demonstrating real-time GSR monitoring with wireless connectivity to the PulseMind mobile application</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-6 text-center">PulseMind System Overview</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">AI Early Detection</h4>
              <p className="text-blue-100">Mental distress + overdose prediction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Image Analysis</h4>
              <p className="text-blue-100">Facial-emotion monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Wearable Integration</h4>
              <p className="text-blue-100">Continuous vitals tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
