import { Brain, Shield, TrendingUp, CheckCircle } from 'lucide-react';

export default function Solution() {
  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Brain className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solution</h2>
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

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-8 h-8" />
            <h3 className="text-3xl font-bold">Model Performance</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Confusion Matrix Analysis</h4>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span className="font-semibold">Happy Classification</span>
                  <span className="text-2xl font-bold text-green-300">98.7%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span className="font-semibold">Sad Classification</span>
                  <span className="text-2xl font-bold text-green-300">99.4%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Angry Classification</span>
                  <span className="text-2xl font-bold text-green-300">100%</span>
                </div>
              </div>
              <p className="mt-4 text-blue-100 italic">
                Exceptional accuracy across all emotion categories with minimal false positives
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Training Progress</h4>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span className="font-semibold">Final Test Accuracy</span>
                  <span className="text-2xl font-bold text-green-300">99.4%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span className="font-semibold">Training Accuracy</span>
                  <span className="text-2xl font-bold text-green-300">99.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Model Convergence</span>
                  <span className="text-lg font-bold">Epoch 30</span>
                </div>
              </div>
              <p className="mt-4 text-blue-100">
                After 50 training epochs
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur rounded-xl p-6">
            <p className="text-lg font-semibold">
              Key Achievement: PyTorch-based deep learning model demonstrates exceptional performance with minimal overfitting,
              achieving 99.4% accuracy on unseen test data across 1,560 emotion samples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
