import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, X } from 'lucide-react';

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const RegistrationForm = ({ isOpen, onClose, onSuccess }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    whatsapp: '',
    consent: ''
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateIndianPhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      email: '',
      whatsapp: '',
      consent: ''
    };

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validateIndianPhone(formData.whatsapp)) {
      newErrors.whatsapp = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!consent) {
      newErrors.consent = 'Please consent to receive communications';
    }

    setErrors(newErrors);

    if (newErrors.email || newErrors.whatsapp || newErrors.consent) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess();
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
          <CardTitle className="text-2xl font-bold text-center text-gray-900">
            Register for Contest
          </CardTitle>
          <p className="text-center text-gray-600 mt-2">
            Test on 23rd July from 11 AM to 5 PM (6 hours window)
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="text"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                required
                className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <Label htmlFor="whatsapp">Mobile Number *</Label>
              <Input
                id="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                placeholder="Enter your 10-digit mobile number"
                required
                className={`mt-1 ${errors.whatsapp ? 'border-red-500' : ''}`}
                maxLength={10}
              />
              {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
                className={`mt-1 ${errors.consent ? 'border-red-500' : ''}`}
              />
              <div className="flex-1">
                <Label htmlFor="consent" className="text-sm">
                  I consent to receive communications regarding the contest, test updates, and promotional content on my provided email and mobile number. *
                </Label>
                {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Important:</strong> Test link will be shared on your registered email address. 
                Contest reminders will be sent on email.
              </p>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-[#1967d2] hover:bg-blue-700 text-white font-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Register Now'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;