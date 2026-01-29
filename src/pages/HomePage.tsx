import { Target, Heart, Zap, Users } from 'lucide-react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Patent from '../components/Patent';

export default function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <Statistics />
      <Patent />
    </div>
  );
}
