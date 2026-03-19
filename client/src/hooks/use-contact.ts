import { useMutation } from "@tanstack/react-query";
import { api, type ContactMessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateContact() {
  const { toast } = useToast();
  
  return useMutation({
 mutationFn: async (data: ContactMessageInput) => {
  const message = `
🚿 *NEW CLEANING REQUEST*

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email}

🧹 Service: ${data.serviceType}
📅 Date: ${data.preferredDate}

📝 Details:
${data.message}

📍 Source: Website
`;

  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/27713953673?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");

  return { success: true }; // fake success for React Query
},
    onSuccess: () => {
      toast({
        title: "Message sent successfully! ✨",
        description: "We'll be in touch shortly to confirm your booking.",
        className: "bg-primary text-primary-foreground border-none",
      });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
