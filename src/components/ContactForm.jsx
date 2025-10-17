import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from './Toast';

/**
 * ContactForm
 *
 * Environment variables (set these in .env and DO NOT commit secrets):
 * VITE_EMAILJS_SERVICE_ID
 * VITE_EMAILJS_TEMPLATE_ID
 * VITE_EMAILJS_PUBLIC_KEY
 *
 * Example template fields expected: name, email, message
 */
export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);
  const { addToast } = useToast();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validate = () => {
    if (!name.trim() || !email.trim() || !message.trim()) return 'Please fill all fields.';
    // simple email check
    if (!/\S+@\S+\.\S+/.test(email)) return 'Please provide a valid email address.';
    if (!serviceId || !templateId || !publicKey) return 'Email service is not configured.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return addToast(err, 'error');
    setSending(true);

    try {
      // use send instead of sendForm for clarity
      await emailjs.send(serviceId, templateId, { name, email, message }, publicKey);
      addToast('Message sent — we will get back to you shortly.', 'success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (e) {
      console.error('EmailJS error', e);
      addToast('Failed to send message. Please try again later.', 'error');
    } finally {
      setSending(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
      <label className="block">
        <span className="text-sm font-medium">Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded border border-gray-300 p-2"
          required
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">Email</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded border border-gray-300 p-2"
          type="email"
          required
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded border border-gray-300 p-2 min-h-[120px]"
          required
        />
      </label>

      <div>
        <button
          type="submit"
          disabled={sending}
          className="inline-block bg-primary text-white px-4 py-2 rounded disabled:opacity-60"
        >
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
