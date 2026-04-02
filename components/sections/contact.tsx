"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Loader2, Mail, MapPin } from "lucide-react";
import { useIntlayer } from "react-intlayer";
import { useLocale } from "next-intlayer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const content = useIntlayer("contact");
  const { locale } = useLocale();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const updateField =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Failed to send message");
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", service: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-ocean-50/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-ocean-500 block mb-4">
                {content.sectionLabel}
              </span>
              <h2 className="font-serif text-4xl lg:text-[3.25rem] text-foreground leading-tight">
                {content.headingLine1}
                <br />
                <span className="italic text-gradient-ocean">{content.headingLine2}</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-sm text-base">
              {content.description}
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:geral@oceaninformatix.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-ocean-600 transition-colors duration-150 group"
              >
                <span className="w-8 h-8 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-500 group-hover:bg-ocean-200 transition-colors duration-150 shrink-0">
                  <Mail className="size-3.5" />
                </span>
                {content.emailLabel}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-8 h-8 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-500 shrink-0">
                  <MapPin className="size-3.5" />
                </span>
                {content.locationLabel}
              </div>
            </div>

            <svg
              viewBox="0 0 200 40"
              fill="none"
              className="w-40 h-8 text-ocean-200 mt-4"
              aria-hidden
            >
              <motion.path
                d="M 0 20 C 25 5, 50 35, 75 20 C 100 5, 125 35, 150 20 C 175 5, 187 35, 200 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                animate={{
                  d: [
                    "M 0 20 C 25 5, 50 35, 75 20 C 100 5, 125 35, 150 20 C 175 5, 187 35, 200 20",
                    "M 0 20 C 25 35, 50 5, 75 20 C 100 35, 125 5, 150 20 C 175 35, 187 5, 200 20",
                    "M 0 20 C 25 5, 50 35, 75 20 C 100 5, 125 35, 150 20 C 175 5, 187 35, 200 20",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            {status === "success" ? (
              <div className="min-h-120 flex flex-col items-center justify-center space-y-5 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="w-14 h-14 rounded-full bg-ocean-100 border border-ocean-200 flex items-center justify-center text-ocean-600"
                >
                  <Check className="size-6" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="space-y-2"
                >
                  <h3 className="font-serif text-2xl text-foreground">{content.successHeading}</h3>
                  <p className="text-muted-foreground text-sm">{content.successDescription}</p>
                </motion.div>
                <Button
                  variant="outline"
                  className="rounded-full mt-2 border-ocean-200 hover:bg-ocean-50 hover:border-ocean-300"
                  onClick={() => setStatus("idle")}
                >
                  {content.sendAnother}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-[11px] tracking-[0.12em] uppercase font-semibold text-muted-foreground"
                    >
                      {content.labelName} <span className="text-ocean-400">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={updateField("name")}
                      placeholder={content.placeholderName.value}
                      required
                      className="bg-white border-border focus-visible:ring-ocean-400/50 focus-visible:border-ocean-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-[11px] tracking-[0.12em] uppercase font-semibold text-muted-foreground"
                    >
                      {content.labelEmail} <span className="text-ocean-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={updateField("email")}
                      placeholder={content.placeholderEmail.value}
                      required
                      className="bg-white border-border focus-visible:ring-ocean-400/50 focus-visible:border-ocean-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="company"
                    className="text-[11px] tracking-[0.12em] uppercase font-semibold text-muted-foreground"
                  >
                    {content.labelCompany}
                  </Label>
                  <Input
                    id="company"
                    value={form.company}
                    onChange={updateField("company")}
                    placeholder={content.placeholderCompany.value}
                    className="bg-white border-border focus-visible:ring-ocean-400/50 focus-visible:border-ocean-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="service"
                    className="text-[11px] tracking-[0.12em] uppercase font-semibold text-muted-foreground"
                  >
                    {content.labelServiceInterest} <span className="text-ocean-400">*</span>
                  </Label>
                  <Select
                    value={form.service}
                    onValueChange={(val) => setForm((prev) => ({ ...prev, service: val ?? "" }))}
                    required
                  >
                    <SelectTrigger
                      id="service"
                      className="w-full bg-white border-border focus:ring-ocean-400/50"
                    >
                      <SelectValue placeholder={content.placeholderSelectService.value} />
                    </SelectTrigger>
                    <SelectContent alignItemWithTrigger={false}>
                      {content.serviceOptions.map((s, i) => (
                        <SelectItem key={i} value={s.value}>
                          {s.value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-[11px] tracking-[0.12em] uppercase font-semibold text-muted-foreground"
                  >
                    {content.labelMessage} <span className="text-ocean-400">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={updateField("message")}
                    placeholder={content.placeholderMessage.value}
                    rows={5}
                    required
                    className="bg-white border-border focus-visible:ring-ocean-400/50 focus-visible:border-ocean-400 resize-none"
                  />
                </div>

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-destructive"
                  >
                    {errorMsg}
                  </motion.p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading" || !form.name || !form.email || !form.service || !form.message}
                  size="lg"
                  className="w-full rounded-full bg-clip-border shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      {content.submitting}
                    </>
                  ) : (
                    <>
                      {content.submitButton}
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
