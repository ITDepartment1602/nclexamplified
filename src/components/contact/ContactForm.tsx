
import React, { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      // Initialize emailjs
      emailjs.init("WDZ2MlsX2bBXgruDp"); // Replace with your EmailJS public key
      
      await emailjs.send(
        "service_t6qj3ve", // Replace with your EmailJS service ID
        "template_l9c5v1b", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "nclexamplified@gmail.com" // Destination email
        }
      );
      
      setStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
      
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
      setErrorMessage("Failed to send email. Please try again later.");
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <Card className="shadow-lg border-0">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h3>
        
        {status === "success" && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span>Your message has been sent successfully!</span>
          </div>
        )}
        
        {status === "error" && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center">
            <XCircle className="mr-2 h-5 w-5" />
            <span>{errorMessage}</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nclex-blue focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nclex-blue focus:border-transparent"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nclex-blue focus:border-transparent"
                placeholder="NCLEX Inquiry"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nclex-blue focus:border-transparent"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            
            <Button 
              type="submit" 
              disabled={status === "loading"}
              className="w-full bg-nclex-blue hover:bg-blue-700 py-3 text-base"
            >
              {status === "loading" ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
