import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const isValidEmail = (e: string) => /\S+@\S+\.\S+/.test(e);

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out all fields.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const to = "spiderwebsconnect@gmail.com";
    const subject = `Website message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // open user's mail client with prefilled email — user must send it from their client
    window.location.href = mailto;
    setSent(true);
    // optionally clear fields:
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

        <div className="mb-6 text-center space-y-2">
          <div className="flex items-center justify-center gap-3 text-lg">
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:spiderwebsconnect@gmail.com" className="hover:text-primary transition-colors">
              spiderwebsconnect@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 text-lg">
            <Phone className="h-5 w-5 text-primary" />
            <a href="tel:+919835404392" className="hover:text-primary transition-colors">
              +919835404392
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-card p-6 rounded-md shadow-sm max-w-xl mx-auto">
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium">Name</span>
              <input
                className="mt-1 block w-full rounded-md border px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Email address</span>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Message</span>
              <textarea
                className="mt-1 block w-full rounded-md border px-3 py-2 h-32"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                required
              />
            </label>

            {error && <p className="text-sm text-destructive">{error}</p>}
            {sent && <p className="text-sm text-success">Mail composer opened — please send the email from your mail client.</p>}

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center bg-primary text-white px-5 py-2 rounded-md hover:opacity-90"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}