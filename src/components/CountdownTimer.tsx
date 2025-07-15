
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to July 22, 2024, 11:59 PM
    const targetDate = new Date('2024-07-22T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-4">
        <Clock className="h-6 w-6 mr-2 text-yellow-300" />
        <span className="text-lg font-semibold text-yellow-300">Contest Ends In:</span>
      </div>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white/20 rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</div>
          <div className="text-sm text-blue-200">Days</div>
        </div>
        <div className="bg-white/20 rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-sm text-blue-200">Hours</div>
        </div>
        <div className="bg-white/20 rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-sm text-blue-200">Minutes</div>
        </div>
        <div className="bg-white/20 rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-sm text-blue-200">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
