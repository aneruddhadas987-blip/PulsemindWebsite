import { Brain, Shield, TrendingUp, CheckCircle } from 'lucide-react';

export default function SolutionPage() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Brain className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Solution</h1>
          <p className="text-xl text-gray-600">Advanced AI technology for mental health and overdose detection</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Brain className="w-7 h-7 text-cyan-600 mr-3" />
              Deep Learning Architecture
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">PyTorch Framework</p>
                  <p className="text-gray-600 text-sm">State-of-the-art deep learning for emotion classification</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Multi-class Classification</p>
                  <p className="text-gray-600 text-sm">Happy, Sad, Angry emotion detection with 99%+ accuracy</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Real-time Inference</p>
                  <p className="text-gray-600 text-sm">Sub-second emotion analysis from image analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Continuous Learning</p>
                  <p className="text-gray-600 text-sm">Model improves with user consent and feedback</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-7 h-7 text-green-600 mr-3" />
              Privacy & Security
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Opt-in Only</p>
                  <p className="text-gray-600 text-sm">Users maintain complete control over data collection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">End-to-end Encryption</p>
                  <p className="text-gray-600 text-sm">All sensor data encrypted in transit and at rest</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">User-Controlled Sharing</p>
                  <p className="text-gray-600 text-sm">Students/patients choose who receives alerts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Model Performance</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Confusion Matrix Analysis</h3>
              <div className="flex justify-center mb-8">
                <img
                  src="/screenshot_2025-10-30_at_6.03.31_pm.png"
                  alt="Confusion Matrix"
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-700 italic text-center">
                Exceptional accuracy across all emotion categories with minimal false positives
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
                <h4 className="text-xl font-bold mb-4">Classification Accuracy</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-green-400">
                    <span className="font-semibold">Happy Classification</span>
                    <span className="text-3xl font-bold">98.7%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-green-400">
                    <span className="font-semibold">Sad Classification</span>
                    <span className="text-3xl font-bold">99.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Angry Classification</span>
                    <span className="text-3xl font-bold">100%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
                <h4 className="text-xl font-bold mb-4">Training Progress</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                    <span className="font-semibold">Final Test Accuracy</span>
                    <span className="text-3xl font-bold">99.4%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                    <span className="font-semibold">Training Accuracy</span>
                    <span className="text-3xl font-bold">99.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Model Convergence</span>
                    <span className="text-2xl font-bold">Epoch 30</span>
                  </div>
                </div>
                <p className="mt-4 text-blue-100 text-sm">After 50 training epochs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <p className="text-lg font-semibold text-center">
            Key Achievement: PyTorch-based deep learning model demonstrates exceptional performance with minimal overfitting,
            achieving 99.4% accuracy on unseen test data across 1,560 emotion samples.
          </p>
        </div>
      </div>
    </section>
  );
}
