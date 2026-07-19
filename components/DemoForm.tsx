"use client";

import { useState } from "react";

/**
 * Demo / contact request form.
 *
 * NOTE: This is not yet wired to a backend. On submit it shows a confirmation
 * but does not deliver the message anywhere. To make it functional, POST the
 * form state to your CRM / email service / API route from handleSubmit().
 */
export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send `new FormData(e.currentTarget)` to a real endpoint.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <h3>Thanks — we&apos;ll be in touch.</h3>
        <p>
          A member of the Procela team will reach out shortly to schedule your
          walkthrough.
        </p>
      </div>
    );
  }

  return (
    <form className="form-wrap" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" required />
        </div>
        <div className="field">
          <label htmlFor="industry">Industry</label>
          <select id="industry" name="industry" defaultValue="">
            <option value="" disabled>
              Select an industry
            </option>
            <option>Defense &amp; Aerospace</option>
            <option>Financial Services</option>
            <option>Healthcare &amp; Life Sciences</option>
            <option>Government &amp; Public Sector</option>
            <option>Energy &amp; Utilities</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="message">What are you trying to govern?</label>
          <textarea id="message" name="message" placeholder="Tell us about your environment and stack." />
        </div>
        <button type="submit" className="btn-primary-lg full">
          Request a demo
        </button>
      </div>
      <p className="form-note">
        We&apos;ll only use your details to contact you about Procela.
      </p>
    </form>
  );
}
