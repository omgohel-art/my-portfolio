"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Loader2, CheckCircle, XCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS not configured. Using mailto fallback.");
      window.location.href = `mailto:omjigneshgohel@gmail.com?subject=Project Inquiry from ${formState.name}&body=${formState.message}`;
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setStatus("success");
      setStatusMessage("Message sent successfully! I'll get back to you soon.");
      setFormState({ name: "", email: "", message: "" });
      setIsSuccessModalOpen(true);
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      console.warn("EmailJS failed. Using mailto fallback.");
      window.location.href = `mailto:omjigneshgohel@gmail.com?subject=Project Inquiry from ${formState.name}&body=${formState.message}`;
      setStatus("error");
      setStatusMessage("Failed to send via EmailJS. Redirecting to your email client...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-[#0C0C0C]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#888] text-sm uppercase tracking-widest font-medium mb-3">
            Get in Touch
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            Let's Work Together
          </h2>
          <p className="text-[#888] max-w-md mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-[#333] bg-[#0a0a0a] flex items-center justify-center group-hover:border-[#7C3AED] transition-colors">
                  <Mail className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-sm text-[#888] uppercase tracking-widest mb-1">Email</p>
                  <a
                    href="mailto:omjigneshgohel@gmail.com"
                    className="text-xl font-bold text-white hover:text-[#7C3AED] transition-colors"
                  >
                    omjigneshgohel@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-[#333] bg-[#0a0a0a] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-sm text-[#888] uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold text-white">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#222]">
              <p className="text-sm text-[#888] uppercase tracking-widest mb-6">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/omgohel-art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-[#333] bg-[#0a0a0a] flex items-center justify-center hover:bg-[#7C3AED] hover:border-[#7C3AED] transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-[#888] group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/omgohel1328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-[#333] bg-[#0a0a0a] flex items-center justify-center hover:bg-[#7C3AED] hover:border-[#7C3AED] transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-[#888] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-[#888]">
                Name
              </label>
              <Input
                id="name"
                name="user_name"
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="YOUR NAME"
                className="bg-[#0a0a0a] border-[#333] text-white focus:border-[#7C3AED] rounded-none py-6 h-14 uppercase placeholder:text-[#444]"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#888]">
                Email
              </label>
              <Input
                id="email"
                name="user_email"
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="YOUR@EMAIL.COM"
                className="bg-[#0a0a0a] border-[#333] text-white focus:border-[#7C3AED] rounded-none py-6 h-14 uppercase placeholder:text-[#444]"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-[#888]">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="TELL ME ABOUT YOUR PROJECT..."
                rows={5}
                className="bg-[#0a0a0a] border-[#333] text-white focus:border-[#7C3AED] rounded-none resize-none uppercase placeholder:text-[#444] pt-4"
                required
                disabled={isLoading}
              />
            </div>

            {/* Status Message */}
            {status !== "idle" && (
              <div
                className={`flex items-center gap-2 p-4 rounded-none ${status === "success"
                  ? "bg-[#7C3AED]/20 text-[#7C3AED]"
                  : "bg-red-500/10 text-red-400"
                  }`}
              >
                {status === "success" ? (
                  <CheckCircle className="w-5 h-5 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0" />
                )}
                <p className="text-sm font-bold tracking-wider">{statusMessage}</p>
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-4 rounded-full font-medium uppercase tracking-widest text-sm sm:text-base text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1',
                outline: '2px solid white',
                outlineOffset: '-3px'
              }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  SENDING...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
      {/* Success Modal */}
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border shadow-2xl">
          <DialogHeader className="pt-4">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                <CheckCircle className="w-10 h-10 text-green-500 animate-in zoom-in duration-500" />
              </div>
              <DialogTitle className="text-2xl font-bold text-foreground">
                Message Sent Successfully!
              </DialogTitle>
              <p className="text-muted-foreground leading-relaxed">
                Thank you for reaching out. I have received your message and will get back to you as soon as possible.
              </p>
            </div>
          </DialogHeader>
          <DialogFooter className="sm:justify-center pt-4 pb-2">
            <Button
              type="button"
              onClick={() => setIsSuccessModalOpen(false)}
              className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground min-w-[120px]"
            >
              OK
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
