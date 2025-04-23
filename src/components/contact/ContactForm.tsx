
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Create a timestamp for the message
      const now = new Date();
      const formattedDate = now.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      const formattedTime = now.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });
      
      const timestamp = `${formattedDate} at ${formattedTime}`;
      
      // Prepare the template parameters
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        timestamp
      };
      
      await emailjs.send(
        'service_nclex_amplified',
        'template_contact_form',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );
      
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you as soon as possible.",
      });
      
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Input
            placeholder="Your Name"
            {...register("name")}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Input
            placeholder="Your Email"
            type="email"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Input
            placeholder="Subject"
            {...register("subject")}
            className={errors.subject ? "border-red-500" : ""}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>
        
        <div>
          <Textarea
            placeholder="Your Message"
            rows={5}
            {...register("message")}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <Button type="submit" className="w-full bg-nclex-blue hover:bg-blue-700 py-6" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
