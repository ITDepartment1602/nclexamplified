import React from "react";
import { Mail, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden font-sans">
      {/* Ambient blobs */}
      <motion.div
        className="absolute top-[10%] left-[6%] w-80 h-80 bg-blue-200/25 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 22, -22, 0], y: [0, -18, 18, 0] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[5%] right-[6%] w-96 h-96 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -28, 28, 0], y: [0, 22, -22, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500 mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-nclex-blue" />
            Contact Support
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-slate-900 leading-tight">
            Let's Talk About Your{" "}
            <span className="text-nclex-blue">NCLEX</span>{" "}
            <span className="text-nclex-red">Success</span>
          </h1>

          <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Our friendly support team is always ready to guide you. Fast, clear,
            and dedicated assistance — delivered with care.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="https://www.facebook.com/NCLEXAmplifiedReviewCenter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-full px-8 text-sm bg-nclex-blue hover:bg-blue-800 shadow-md"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send a Message
              </Button>
            </a>
            <a href="tel:09261021491">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-sm border-slate-200 hover:border-nclex-blue hover:text-nclex-blue shadow-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us Directly
              </Button>
            </a>
          </div>

          <div className="flex justify-center items-center gap-2 mt-10 text-slate-400 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-nclex-blue" />
            Trusted Support for Aspiring US-RN Nurses
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
