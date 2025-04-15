import Contact from "@/database/contact.model";
import dbConnect from "@/lib/mongoose";
import { contactSchema } from "@/lib/validator";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const validatedData = contactSchema.safeParse(body);

    if (!validatedData.success) {
      throw new Error("Validation Error");
    }

    const { firstName, lastName, email, phoneNumber, message, radiotype } =
      validatedData.data;

    const existingUser = await Contact.findOne({ email });

    if (existingUser) {
      await existingUser.messages.push({ text: message, type: radiotype });
      await existingUser.save();

      return NextResponse.json(
        { success: true, data: existingUser },
        { status: 200 },
      );
    }

    const newContact = await Contact.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      messages: [{ text: message, type: radiotype }],
    });
    return NextResponse.json(
      { success: true, data: newContact },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 },
    );
  }
}
