import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ContactForm } from "./ContactForm";
import { ReactNode, useState } from "react";

interface ContactDialogProps {
  children: ReactNode;
}

export const ContactDialog = ({ children }: ContactDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-black tracking-tighter">Let's build something <span className="text-primary-glow">extraordinary</span>.</DialogTitle>
          <DialogDescription className="text-lg">
            Tell me about your vision, and I'll help you architect the solution.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <ContactForm onSuccess={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
