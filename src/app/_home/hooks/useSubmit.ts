'use client';

import { useState } from "react";
import { useLanguageContext } from "@/hooks/useLanguageContext";

const ERROR_MESSAGES = {
  en: {
    invalidEmail: "Error: please, enter a valid email",
    missingFields: "Error: please, fill in all required fields",
    unknownError: "Error sending message",
    success: "Message sent successfully!",
  },
  es: {
    invalidEmail: "Error: por favor, utiliza un email válido",
    missingFields: "Error: por favor, completa todos los campos requeridos",
    unknownError: "Error enviando el mensaje",
    success: "¡Mensaje enviado con éxito!",
  },
};

export const useSubmit = () => {
  const { language } = useLanguageContext();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    const isValidEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!form.email || (form.email && !isValidEmail(form.email))) {
      setStatus(
        ERROR_MESSAGES[language].invalidEmail,
      );
      return;
    }

    if (!form.name || !form.message) {
      setStatus(
        ERROR_MESSAGES[language].missingFields,
      );
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!res.ok)
        throw new Error(
          ERROR_MESSAGES[language].unknownError
        );

      setForm({ name: "", email: "", message: "" });
      setStatus(
        ERROR_MESSAGES[language].success
      );
    } catch (e) {
      if (e instanceof Error) setStatus(e.message);
    }
  }

  return {
    form,
    handleChange,
    status,
    handleSubmit,
  };
};
