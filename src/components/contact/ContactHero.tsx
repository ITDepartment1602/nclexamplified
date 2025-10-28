import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const ContactHero: React.FC = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50 font-[Poppins]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge className="mb-5 bg-nclex-blue text-white border-transparent tracking-wide px-4 py-1 rounded-full">
            Contact Support
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Let’s Talk About Your <span className="text-[#3E58A2]">NCLEX</span>{" "}
            <span className="text-[#BE4143]">Success</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12">
            Our friendly support team is always ready to guide you with anything
            you need. Fast, clear, and dedicated assistance delivered with care.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://m.me/100183112691578"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full"
            >
              <Button
                size="lg"
                className="rounded-full px-8 text-base bg-nclex-blue hover:bg-blue-800 shadow-md"
              >
                <Mail className="w-5 h-5 mr-2" /> Send a Message
              </Button>
            </a>

            <a href="tel:09261021491" className="rounded-full">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base border-blue-300 hover:border-blue-600 shadow-sm"
              >
                <Phone className="w-5 h-5 mr-2" /> Call Us Directly
              </Button>
            </a>
          </div>

          {/* Trust Signal */}
          <div className="flex justify-center gap-3 mt-12 text-gray-600 text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-nclex-blue" />
            <span>Trusted Support for Aspiring US-RN Nurses</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
