
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  Gift, 
  CheckCircle, 
  Clock, 
  Users, 
  Star,
  BookOpen,
  Award,
  Timer,
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import FAQSection from '@/components/FAQSection';
import SmartBookCarousel from '@/components/SmartBookCarousel';

const Index = () => {
  const [stickyVisible, setStickyVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartQuiz = () => {
    // This would typically redirect to quiz page or open quiz modal
    console.log('Starting quiz...');
    alert('Quiz functionality would be implemented here!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1967d2] via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-yellow-500/20 text-yellow-300 border-yellow-400 text-sm font-semibold px-4 py-2">
              🏆 LIVE CONTEST
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Are You the <span className="text-yellow-300">Smartest</span> Banking Aspirant in India?
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Attempt 20 Questions. Rank in the Top 20.<br/>
              <span className="font-semibold text-yellow-300">Win a SmartBook – Absolutely FREE!</span>
            </p>

            <CountdownTimer />

            <div className="mt-12">
              <Button 
                onClick={handleStartQuiz}
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                👉 Start Quiz Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="mt-4 text-sm text-blue-200">
                📢 Result on: 23rd July | ⏰ Contest Ends: 22nd July, 11:59 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to win your SmartBook
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 border-2 hover:border-[#1967d2] transition-colors duration-300 hover:shadow-lg">
              <div className="bg-[#1967d2] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">🎯 Attempt the Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                Solve 20 banking-level MCQs in one go. Test your knowledge across all subjects.
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-[#1967d2] transition-colors duration-300 hover:shadow-lg">
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">📈 Secure Your Rank</h3>
              <p className="text-gray-600 leading-relaxed">
                Top 20 users with highest score + speed will win. Every second counts!
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-[#1967d2] transition-colors duration-300 hover:shadow-lg">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">🎁 Win a SmartBook FREE</h3>
              <p className="text-gray-600 leading-relaxed">
                Top 20 get free SmartBook.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleStartQuiz}
              size="lg" 
              className="bg-[#1967d2] hover:bg-blue-700 text-white font-bold text-lg px-8 py-3 rounded-full"
            >
              👉 Start Quiz Now
            </Button>
          </div>
        </div>
      </section>

      {/* Prize Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎉 What Will You Win?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-yellow-100">
              <div className="text-center">
                <Trophy className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Top 20 Rankers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Get 1 SmartBook <span className="font-bold text-yellow-600">FREE</span>
                </p>
                <Badge className="bg-yellow-500 text-white">
                  Reasoning / Quant / English – Your Choice
                </Badge>
              </div>
            </Card>

            <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-center">
                <Users className="h-16 w-16 text-[#1967d2] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">All Participants</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Flat <span className="font-bold text-[#1967d2]">50% OFF</span> on remaining SmartBooks
                </p>
                <Badge className="bg-[#1967d2] text-white">
                  Instant Discount Applied
                </Badge>
              </div>
            </Card>
          </div>

          <SmartBookCarousel />
        </div>
      </section>

      {/* Why SmartBooks Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Banking SmartBooks?
            </h2>
            <p className="text-xl text-gray-600">
              The complete preparation solution trusted by toppers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">12,000+ Topic-wise Questions</h4>
                  <p className="text-gray-600">All Subjects Covered comprehensively</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Answer Key</h4>
                  <p className="text-gray-600">Ideal Time, Success Rate, Skip Analytics</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Detailed Solutions</h4>
                  <p className="text-gray-600">Step-by-step explanations for every question</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Latest 2024 PYPs</h4>
                  <p className="text-gray-600">Previous Year Papers completely covered</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">10+ Years of Data</h4>
                  <p className="text-gray-600">Based on extensive attempt analytics</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Toppers' First Choice</h4>
                  <p className="text-gray-600">Trusted by successful banking aspirants</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#1967d2] text-[#1967d2] hover:bg-[#1967d2] hover:text-white font-bold text-lg px-8 py-3 rounded-full"
              >
                👉 See All SmartBooks
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Terms & Conditions */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Terms & Conditions</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#1967d2] rounded-full mt-2 flex-shrink-0"></div>
                <p>One entry per user allowed</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#1967d2] rounded-full mt-2 flex-shrink-0"></div>
                <p>No fake entries or cheating permitted</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#1967d2] rounded-full mt-2 flex-shrink-0"></div>
                <p>Winners must claim prize within 48 hours</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#1967d2] rounded-full mt-2 flex-shrink-0"></div>
                <p>SmartBook delivery subject to availability</p>
              </div>
              <div className="flex items-start space-x-2 md:col-span-2">
                <div className="w-2 h-2 bg-[#1967d2] rounded-full mt-2 flex-shrink-0"></div>
                <p>Testbook reserves all final decision rights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      {stickyVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1967d2] text-white p-4 shadow-lg z-50 animate-slide-up">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm md:text-base">
              <Zap className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">Smartest Aspirant Quiz LIVE</span>
              <span className="hidden sm:inline">| Ends 22 July</span>
            </div>
            <Button 
              onClick={handleStartQuiz}
              size="sm" 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-full"
            >
              Start Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
