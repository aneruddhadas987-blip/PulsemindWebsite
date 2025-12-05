import { Heart, AlertTriangle, TrendingUp, Brain } from 'lucide-react';

export default function Statistics() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Heart className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">The Mental Health Crisis</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              National data highlighting the urgent need for early detection and intervention
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="text-3xl font-bold text-blue-600 mb-1">40%</p>
                    <p className="text-gray-700 font-medium">U.S. high school students</p>
                    <p className="text-gray-600 text-sm mt-1">Report persistent depressive symptoms (CDC)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <p className="text-3xl font-bold text-orange-600 mb-1">19%</p>
                    <p className="text-gray-700 font-medium">U.S. adults with depression</p>
                    <p className="text-gray-600 text-sm mt-1">Diagnosed with depression; 13% with anxiety (CDC)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <p className="text-3xl font-bold text-red-600 mb-1">60%</p>
                    <p className="text-gray-700 font-medium">Depression increase</p>
                    <p className="text-gray-600 text-sm mt-1">Last decade nationally</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-cyan-500 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3">
                  <Brain className="w-6 h-6 text-cyan-600 mt-1" />
                  <div>
                    <p className="text-3xl font-bold text-cyan-600 mb-1">29%</p>
                    <p className="text-gray-700 font-medium">Lifetime anxiety prevalence</p>
                    <p className="text-gray-600 text-sm mt-1">11-18% adult anxiety rate (Wikipedia)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-8">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">Why This Matters: Loudoun County, VA</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
                <p className="text-4xl font-bold mb-2">137</p>
                <p className="text-red-100 font-medium mb-1">Total overdoses in 2023</p>
                <p className="text-sm text-red-100 opacity-90">71 opioid-related non-fatal, 19 opioid-related fatalities</p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
                <p className="text-4xl font-bold mb-2">10</p>
                <p className="text-orange-100 font-medium mb-1">Suspected student overdoses via LCPS</p>
                <p className="text-sm text-orange-100 opacity-90">4 required Narcan administration in one school year</p>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
                <p className="text-4xl font-bold mb-2">8</p>
                <p className="text-pink-100 font-medium mb-1">Park View HS overdoses</p>
                <p className="text-sm text-pink-100 opacity-90">4 on campus, leading to state executive action</p>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-white shadow-lg">
                <p className="text-4xl font-bold mb-2">56%</p>
                <p className="text-red-100 font-medium mb-1">Increase in youth suicide rate</p>
                <p className="text-sm text-red-100 opacity-90">Ages 10-24 since 2014</p>
              </div>
            </div>

            <div className="mt-8 bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <p className="text-red-900 font-semibold text-lg">
                The crisis is real and happening in our communities. Early detection and intervention can save lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Users({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
