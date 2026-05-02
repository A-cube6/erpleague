import { NextResponse } from "next/server";

type EnquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  serviceInterest?: string;
  message?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryPayload;

    // Honeypot field. Real users will not fill this hidden field.
    if (body.website) {
      return NextResponse.json({ message: "Thanks. Your enquiry has been received." }, { status: 200 });
    }

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const serviceInterest = body.serviceInterest?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !serviceInterest || !message) {
      return NextResponse.json({ message: "Please complete the required fields." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const enquiry = {
      name,
      email,
      phone: body.phone?.trim() || "Not provided",
      company: body.company?.trim() || "Not provided",
      serviceInterest,
      message,
      receivedAt: new Date().toISOString(),
    };

    // For now this logs the enquiry in the Vercel/server console.
    // Later integration options:
    // 1. Send email via Resend, SendGrid, Mailgun, Microsoft Graph, or FormSubmit.
    // 2. Store enquiries in Supabase/Postgres.
    // 3. Trigger CRM or support workflow automation.
    console.info("ERPLeague enquiry received", enquiry);

    return NextResponse.json(
      {
        message: "Thanks. Your enquiry has been received. ERPLeague Australia will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API error", error);
    return NextResponse.json({ message: "Unable to submit enquiry right now. Please try again." }, { status: 500 });
  }
}
