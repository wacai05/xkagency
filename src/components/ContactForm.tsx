import { useState } from "react";
import { Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Tell me a bit more").max(1000),
});

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const ContactForm = ({ className, onSuccess }: ContactFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    try {
      await emailjs.send(
        "service_yr4aw1n",
        "template_ba6nx48",
        {
          name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.message,
        },
        { publicKey: "4aYTvQ2U7KsF7cKhu" }
      );
      toast.success("Message sent — I'll reply within 24h.");
      setForm({ name: "", email: "", message: "" });
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Could not send message. Please try again or email directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Your Name</label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Enter your name"
          className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white outline-none focus:border-primary focus:bg-white/[0.05] transition-all"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Email Address</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Enter your email"
          className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white outline-none focus:border-primary focus:bg-white/[0.05] transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Message</label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project..."
          className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white outline-none focus:border-primary focus:bg-white/[0.05] transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="magnetic-button w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg shadow-glow-primary flex items-center justify-center gap-3 disabled:opacity-50 group"
      >
        {submitting ? "Sending..." : "Send Message"}
        <Send className={cn("w-5 h-5", !submitting && "group-hover:translate-x-1 transition-transform")} />
      </button>
    </form>
  );
};
