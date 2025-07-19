import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail, MessageCircle, Calendar } from 'lucide-react';

interface SuccessPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessPage = ({ isOpen, onClose }: SuccessPageProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-lg">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Successfully Registered! 🎉
            </h2>
            <p className="text-gray-600">
              You're all set for the Smartest Banking Aspirant Contest
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <Mail className="h-5 w-5 text-blue-600 mt-1" />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">Test Link via Email</h4>
                <p className="text-sm text-gray-600">
                  You'll receive the contest link on your registered email address before the test starts.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
              <Mail className="h-5 w-5 text-green-600 mt-1" />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">Email Reminders</h4>
                <p className="text-sm text-gray-600">
                  We'll send you contest reminders and updates on email.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
              <Calendar className="h-5 w-5 text-yellow-600 mt-1" />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">Contest Schedule</h4>
                <p className="text-sm text-gray-600">
                  <strong>Date:</strong> 23rd July, 2025<br/>
                  <strong>Time:</strong> 11:00 AM - 5:00 PM (6 hours)<br/>
                  <strong>Registration closes:</strong> 23rd July, 9:00 AM
                </p>
              </div>
            </div>
          </div>
          
          <Button
            onClick={onClose}
            className="w-full bg-[#1967d2] hover:bg-blue-700 text-white font-bold"
          >
            Got It! Close
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessPage;