import React from "react";
import {
  MessageCircle,
  HelpCircle,
  Facebook,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const contactSections = [
  {
    icon: <MessageCircle className="h-10 w-10 text-nclex-blue" />,
    title: "NCLEX Amplified Official Page",
    href: "https://m.me/100183112691578",
    items: [
      { label: "Email Address", value: "nclexamplified@gmail.com" },
    ],
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-nclex-blue" />,
    title: "NCLEX Amplified Consultation",
    href: "https://m.me/913514575178519",
    items: [
      { label: "Email Address", value: "consultation.amplifiedrc@gmail.com" },
    ],
  },
  {
    icon: <HelpCircle className="h-10 w-10 text-nclex-blue" />,
    title: "NCLEX Amplified Technical Support",
    href: "https://m.me/", // update if needed
    items: [
      { label: "Email Address", value: "nclexamplifiedtechnical@gmail.com" },
    ],
  },
];

const ContactInfo: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Connect with Our Team of NCLEX Experts
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Fast support. Real answers. Let’s build your NCLEX success plan together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {contactSections.map((section, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative"
            >
              <Card className="border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="rounded-full w-16 h-16 bg-blue-50 flex items-center justify-center mb-4">
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {section.title}
                    </h3>
                  </div>

                  <div className="mt-6">
                    <a
                      href={section.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-nclex-blue font-semibold hover:underline"
                    >
                      <Facebook className="h-5 w-5" />
                      Open Messenger
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center max-w-xl mx-auto"
        >
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 h-14 text-base font-semibold flex-1 rounded-xl"
          >
            <a
              href="https://nclexamplifiedreviewcenter.com/nclex/login"
              className="flex items-center justify-center"
            >
              <span>Student Login</span>
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>

          <Button
            asChild
            className="bg-nclex-blue hover:bg-blue-600 h-14 text-base font-semibold flex-1 rounded-xl"
          >
            <a
              href="https://www.facebook.com/NCLEX.Amplified.Official"
              className="flex items-center justify-center"
            >
              <Facebook className="h-5 w-5 mr-2" />
              <span>Facebook Page</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
