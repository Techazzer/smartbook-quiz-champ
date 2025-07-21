import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import promotional images
import promoSquareV1 from "@/assets/promo-square-1080-v1.jpg";
import promoBannerV1 from "@/assets/promo-banner-1920-v1.jpg";
import promoCoverV1 from "@/assets/promo-cover-725-v1.jpg";
import promoInstagramV2 from "@/assets/promo-instagram-1080-v2.jpg";
import promoBannerV2 from "@/assets/promo-banner-1920-v2.jpg";
import promoSquareV2 from "@/assets/promo-square-1080-v2.jpg";
import promoCreativeV3 from "@/assets/promo-creative-1080-v3.jpg";

const Promotions = () => {
  const navigate = useNavigate();

  const promoVariations = [
    {
      title: "Professional Design Variation",
      description: "Clean, corporate style with blue and gold theme",
      images: [
        { src: promoSquareV1, size: "1080x1080", format: "Square (Instagram Post)" },
        { src: promoBannerV1, size: "1920x1080", format: "Banner (Website/YouTube)" },
        { src: promoCoverV1, size: "725x512", format: "Cover (Facebook/LinkedIn)" },
        { src: promoInstagramV2, size: "1080x1080", format: "Square Alt (Social Media)" }
      ]
    },
    {
      title: "Energetic Design Variation",
      description: "Bold, vibrant style with orange and blue colors",
      images: [
        { src: promoBannerV2, size: "1920x1080", format: "Banner (YouTube Thumbnail)" },
        { src: promoSquareV2, size: "1080x1080", format: "Square (Minimalist)" },
        { src: promoCreativeV3, size: "1080x1080", format: "Square (Creative)" },
        { src: promoCoverV1, size: "725x512", format: "Cover (Social Media)" }
      ]
    }
  ];

  const downloadImage = (imageUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Contest</span>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Promotional Materials</h1>
              <p className="text-gray-600">Download contest promotional images in various sizes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contest Info Banner */}
      <div className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Smartest Aspirant Quiz Contest</h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span>📅 23rd July 2025, 11 AM - 5 PM</span>
              <span>💰 Cash Prize: ₹5000</span>
              <span>⏰ Registration closes: 23rd July, 9 AM</span>
              <span>🏆 Results: 24th July</span>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Images */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          {promoVariations.map((variation, variationIndex) => (
            <Card key={variationIndex} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{variation.title}</CardTitle>
                <p className="text-gray-600">{variation.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {variation.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="space-y-4">
                      <div className="relative group">
                        <img
                          src={image.src}
                          alt={`Promotional image ${image.format}`}
                          className="w-full h-auto rounded-lg shadow-md transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                          <Button
                            onClick={() => downloadImage(image.src, `smartest-aspirant-quiz-${image.size}-v${variationIndex + 1}.jpg`)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            size="sm"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                      <div className="text-center space-y-1">
                        <h4 className="font-medium text-gray-900">{image.format}</h4>
                        <p className="text-sm text-gray-600">{image.size} pixels</p>
                        <Button
                          onClick={() => downloadImage(image.src, `smartest-aspirant-quiz-${image.size}-v${variationIndex + 1}.jpg`)}
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download {image.size}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Usage Guidelines */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Image Sizes & Best Use Cases:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>1080x1080:</strong> Instagram posts, Facebook posts, Twitter posts</li>
                  <li><strong>1920x1080:</strong> Website banners, YouTube thumbnails, presentations</li>
                  <li><strong>725x512:</strong> Facebook covers, LinkedIn banners, blog headers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Design Variations:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>Professional:</strong> Clean, corporate style suitable for formal channels</li>
                  <li><strong>Energetic:</strong> Bold, vibrant design for social media engagement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Promotions;