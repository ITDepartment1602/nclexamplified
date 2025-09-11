
import React from "react";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  CreditCard, 
  HelpCircle,
  Facebook,
  ExternalLink
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactSections = [
  {
    icon: <MessageCircle className="h-10 w-10 text-nclex-blue" />,
    title: "NCLEX Amplified Official Page",
    items: [
      {
        icon: <Phone className="h-5 w-5 text-gray-500" />,
        label: "Phone Number",
        value: "09261021491"
      },
      {
        icon: <Mail className="h-5 w-5 text-gray-500" />,
        label: "Email Address",
        value: "nclexamplified@gmail.com"
      }
    ]
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-nclex-blue" />,
    title: "NCLEX Amplified Consultation",
    items: [
      {
        icon: <Phone className="h-5 w-5 text-gray-500" />,
        label: "Phone Number",
        value: "09165297237"
      },
      {
        icon: <Mail className="h-5 w-5 text-gray-500" />,
        label: "Email Address",
        value: "consultation.amplifiedrc@gmail.com"
      }
    ]
  },
  {
    icon: <HelpCircle className="h-10 w-10 text-nclex-blue" />,
    title: "NCLEX Amplified Technical Support",
    items: [
      {
        icon: <Phone className="h-5 w-5 text-gray-500" />,
        label: "Phone Number",
        value: "09858099011"
      },
      {
        icon: <Mail className="h-5 w-5 text-gray-500" />,
        label: "Email Address",
        value: "nclexamplifiedtechnical@gmail.com"
      }
    ]
  }
];

const ContactInfo: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            Contact Information
          </h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-6"></div>
          <p className="text-gray-600">
            For Questions and Queries, feel free to message our Designated Links
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {contactSections.map((section, index) => (
              <Card key={index} className="border-blue-100 overflow-hidden hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="rounded-full w-14 h-14 bg-blue-100 flex items-center justify-center mb-4">
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">{section.title}</h3>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-center">
                        <div className="flex justify-center mb-2">
                          {item.icon}
                        </div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="text-gray-700 font-medium text-sm break-words">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 h-14 text-base font-medium flex-1">
              <a href="https://nclexamplifiedreviewcenter.com/nclex/login" className="flex items-center justify-center">
                <span>Student Login</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
            
            <Button asChild className="bg-nclex-blue hover:bg-blue-700 h-14 text-base font-medium flex-1">
              <a href="https://www.facebook.com/NCLEX.Amplified.Official" className="flex items-center justify-center">
                <Facebook className="h-5 w-5 mr-2" />
                <span>Facebook Page</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
