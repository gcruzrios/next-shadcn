import { ButtonShad } from "@/components/ui/button"
import { MailOpen } from "lucide-react"
export default function Button() {
  return (
    <div>
      <ButtonShad>Default</ButtonShad>
      <ButtonShad variant="secondary">Secondary</ButtonShad>
      <ButtonShad variant="outline">Outline</ButtonShad>
      <ButtonShad variant="ghost">Ghost</ButtonShad>
      <ButtonShad>
      <MailOpen /> Login with Email
     </ButtonShad>
    </div>
  );
}