"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/data";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};
    if (values.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }
    if (!/^[\d\s+()-]{10,15}$/.test(values.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.service) {
      next.service = "Please select a service you're interested in.";
    }
    if (values.message.trim().length < 10) {
      next.message = "Please tell us a little more (at least 10 characters).";
    }
    return next;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-primary/20 bg-secondary/40 p-10 text-center">
        <CheckCircle2 className="size-12 text-primary" />
        <h3 className="mt-4 font-serif-display text-xl font-semibold text-foreground">
          Thank You — Your Story Starts Now
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          We&apos;ve received your enquiry and our team will call you back
          within 24 hours to confirm your appointment.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full border-primary/30 text-primary hover:bg-secondary"
          onClick={() => setSubmitted(false)}
        >
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Full Name
        </label>
        <Input
          id="name"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Your full name"
          className="mt-1.5"
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+91 98765 43210"
            className="mt-1.5"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email (optional)
          </label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="you@example.com"
            className="mt-1.5"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium text-foreground">
          Service You&apos;re Interested In
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => handleChange("service", e.target.value)}
          className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-invalid={!!errors.service}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Tell Us About Your Story
        </label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Wedding date, preferred timing, or anything we should know..."
          rows={4}
          className="mt-1.5"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-full bg-primary hover:bg-primary/90"
      >
        Send Enquiry
        <Send className="size-4" />
      </Button>
    </form>
  );
}
