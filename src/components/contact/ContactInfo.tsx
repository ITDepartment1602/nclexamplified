
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
    icon: <MessageCircle className="h-10 w-10 text-purple-700" />,
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
    icon: <CreditCard className="h-10 w-10 text-purple-700" />,
    title: "NCLEX Amplified Payment Transaction",
    items: [
      {
        icon: <Phone className="h-5 w-5 text-gray-500" />,
        label: "Phone Number",
        value: "09054741481"
      },
      {
        icon: <Mail className="h-5 w-5 text-gray-500" />,
        label: "Email Address",
        value: "nclexamplifiedpayment@gmail.com"
      }
    ]
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-purple-700" />,
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
        value: "nclexamplifiedconsultation@gmail.com"
      }
    ]
  },
  {
    icon: <HelpCircle className="h-10 w-10 text-purple-700" />,
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            Contact Information
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            For Questions and Queries, feel free to message our Designated Links
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactSections.map((section, index) => (
            <Card key={index} className="border-purple-100 overflow-hidden hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full w-14 h-14 bg-purple-100 flex items-center justify-center mr-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                </div>
                
                <div className="space-y-4 mt-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="mt-1 mr-3">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="text-gray-700 font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 h-14 text-base font-medium">
            <a href="https://nclexamplifiedreviewcenter.com/nclex/login" className="flex items-center justify-center">
              <span>Student Login</span>
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
          
          <Button asChild className="bg-purple-700 hover:bg-purple-800 h-14 text-base font-medium">
            <a href="https://www.facebook.com/OurPathwayOfficial" className="flex items-center justify-center">
              <Facebook className="h-5 w-5 mr-2" />
              <span>Processing Center</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
