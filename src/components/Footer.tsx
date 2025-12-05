import { Target, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">PulseMind</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Combating the mental health crisis and overdose risk through innovative AI technology and wearable sensors.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#background" className="hover:text-cyan-400 transition-colors">Background</a></li>
              <li><a href="#solution" className="hover:text-cyan-400 transition-colors">Our Solution</a></li>
              <li><a href="#app-device" className="hover:text-cyan-400 transition-colors">App & Device</a></li>
              <li><a href="#breakthroughs" className="hover:text-cyan-400 transition-colors">Breakthroughs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Mission</h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              Early detection saves lives. We're committed to providing accessible, privacy-first mental health monitoring
              for schools and communities.
            </p>
            <div className="flex items-center space-x-2 text-cyan-400">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">Making a difference together</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            PulseMind - AI for Mental Health & Overdose Risk Detection
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed for schools, clinics, and communities with user privacy as our top priority
          </p>
        </div>
      </div>
    </footer>
  );
}
