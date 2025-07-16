
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
      color: "from-blue-500 to-indigo-600",
      image: "/lovable-uploads/f8f9532b-19c4-46e9-9e23-797c0d36b3dc.png"
    },
    {
      title: "Reasoning Ability", 
      description: "Logical and analytical reasoning mastery",
      features: ["4000+ Questions", "Topic-wise Practice", "Latest PYQs 2024", "Quick Solutions"],
      rating: 4.9,
      color: "from-green-500 to-emerald-600",
      image: "/lovable-uploads/990d2757-4229-4333-9890-5206b6dca6a1.png"
    },
    {
      title: "English Language",
      description: "Grammar, vocabulary and comprehension excellence", 
      features: ["4000+ Questions", "Topic-wise Practice", "Grammar Rules", "Vocab Building", "Latest PYQs 2024"],
      rating: 4.7,
      color: "from-purple-500 to-violet-600",
      image: "/lovable-uploads/45dc86a6-734f-41b8-ba01-743873d7f26c.png"
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
            <div className="relative">
              <img 
                src={book.image} 
                alt={`${book.title} SmartBook`}
                className="w-full h-64 object-contain bg-gray-50 p-4"
              />
              <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold text-gray-700">{book.rating}</span>
              </div>
            </div>
            <CardContent className="p-6">
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
