"use client";

import { useSubmit } from "../../hooks/useSubmit";
import { data } from "@/data/Data";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { useMobileBreakpoint } from "@/hooks/useMobileBreakpoint";
import styles from "./ContactSlide.module.css";

function ContactSlide() {
  const { form, status, handleChange, handleSubmit } = useSubmit();
  const { language } = useLanguageContext();
  const { isMobile } = useMobileBreakpoint();

  return (
    <div className={styles.container}>
      <div className={isMobile ? styles.contactPageMobile : styles.contactPage}>
        <p className={`title ${isMobile ? styles.contactPageMobileTitle : ""}`}>
          {data[language].contact.title}
        </p>
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder={data[language].contact.form.name}
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            placeholder={data[language].contact.form.message}
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          <div className={styles.sendGroup}>
            <button type="submit">{data[language].contact.form.send}</button>
            {status && (
              <p
                className={`${status.startsWith("Error") ? styles.error : "text"}`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSlide;
