
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, BookOpen } from 'lucide-react';

const SmartBookCarousel = () => {
  const smartBooks = [
    {
      title: "Quantitative Aptitude",
      description: "Master numerical ability and data interpretation",
      features: ["4000+ Questions", "Topic-wise Practice", "Latest PYQs 2024", "Detailed Solutions"],
      rating: 4.8,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Reasoning Ability", 
      description: "Logical and analytical reasoning mastery",
      features: ["4000+ Questions", "Topic-wise Practice", "Latest PYQs 2024", "Quick Solutions"],
      rating: 4.9,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "English Language",
      description: "Grammar, vocabulary and comprehension excellence", 
      features: ["4000+ Questions", "Topic-wise Practice", "Grammar Rules", "Vocab Building", "Latest PYQs 2024"],
      rating: 4.7,
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Choose Your SmartBook
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {smartBooks.map((book, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className={`h-24 bg-gradient-to-r ${book.color}`}></div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <BookOpen className="h-8 w-8 text-gray-600" />
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-700">{book.rating}</span>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{book.description}</p>
              
              <div className="space-y-2">
                {book.features.map((feature, idx) => (
                  <Badge key={idx} variant="secondary" className="mr-2 mb-2">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SmartBookCarousel;
