"use client"

import { useState } from "react"
import { CIRCUMCISION_LEADS_FORM } from "@/lib/forms"
import { CIRCUMCISION_BRANCH } from "./content"

export default function CircumcisionForm() {
  const [sending, setSending] = useState(false)
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) return form.reportValidity()
    setSending(true)
    const value = Object.fromEntries(new FormData(form)) as Record<string, string>
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: value.name, phone: value.phone, email: value.email, address: value.address, area: value.concern, callTime: value.callTime, callDate: "", branch: CIRCUMCISION_BRANCH, formName: CIRCUMCISION_LEADS_FORM, source: "direct", pageUrl: window.location.href }) })
      if (!response.ok) throw new Error()
      form.reset()
      window.location.href = "/thank-you"
    } catch { setSending(false); alert("That did not go through. Please call 98949 84103 instead.") }
  }
  return <form onSubmit={submit} className="c-form grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
    <Input label="Name" name="name" /> <Input label="Phone Number" name="phone" type="tel" pattern="[6-9][0-9]{9}" />
    <Input label="Email" name="email" type="email" /> <Input label="Address" name="address" />
    <label className="sm:col-span-2"><span>Concern</span><select name="concern" required defaultValue=""><option value="" disabled>Select your concern</option><option>Bleeding</option><option>Pain</option><option>Swelling or Lump</option><option>Itching</option><option>Other</option></select></label>
    <label className="sm:col-span-2"><span>Preferred Call Time</span><select name="callTime" required defaultValue=""><option value="" disabled>Select a suitable time</option><option>9 AM–12 PM</option><option>12 PM–3 PM</option><option>3 PM–6 PM</option></select></label>
    <button disabled={sending} className="c-button sm:col-span-2" type="submit">{sending ? "Sending…" : "Book Your Consultation"}</button>
  </form>
}
function Input({ label, name, type = "text", pattern }: { label: string; name: string; type?: string; pattern?: string }) { return <label><span>{label}</span><input name={name} type={type} pattern={pattern} required /></label> }
