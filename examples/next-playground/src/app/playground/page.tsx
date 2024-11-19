"use server";
import { redirect } from "next/navigation";

export default async function PlaygroundRedirect(): Promise<void> {
  // Generate a random ownerId
  const ownerId = Math.random().toString(36).substring(2, 15);

  // Redirect to /{ownerId}
  redirect(`/playground/fake-user-${ownerId}`);
}
