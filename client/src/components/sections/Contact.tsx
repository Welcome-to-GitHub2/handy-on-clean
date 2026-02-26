import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import type { ContactMessageInput } from "@shared/routes";

export function Contact() {
  const { mutate: submitContact, isPending } = useCreateContact();

  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      preferredDate: "",
      message: "",
    },
  });

  function onSubmit(data: ContactMessageInput) {
    submitContact(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 origin-top-right z-0 hidden lg:block"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="w-full lg:w-5/12 space-y-8">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">Let's make your space shine.</h2>
              <p className="text-lg text-muted-foreground">
                Ready for a spotless home or office? Fill out the form, and we'll get back to you with a free quote and scheduling options.
              </p>
            </div>

            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Call or WhatsApp</p>
                  <a href="tel:+270713953673" className="text-xl font-bold hover:text-primary transition-colors">+27 071 395 3673</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-border">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email Us</p>
                  <a href="mailto:Eleezy90@gmail.com" className="text-xl font-bold hover:text-secondary transition-colors">Eleezy90@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-border">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Business Hours</p>
                  <p className="text-lg font-bold">Mon - Sat: 8am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl border border-border relative">
              <h3 className="text-2xl font-bold mb-8">Request a Free Quote</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-300">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-12 bg-slate-50 dark:bg-slate-900/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-300">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="071 395 3673" className="h-12 bg-slate-50 dark:bg-slate-900/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-300">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="h-12 bg-slate-50 dark:bg-slate-900/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-300">Preferred Date</FormLabel>
                          <FormControl>
                            <Input type="date" className="h-12 bg-slate-50 dark:bg-slate-900/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-300">Service Required</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-slate-50 dark:bg-slate-900/50">
                              <SelectValue placeholder="Select a cleaning service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential Cleaning</SelectItem>
                            <SelectItem value="office">Office & Commercial</SelectItem>
                            <SelectItem value="deep_clean">Deep Clean</SelectItem>
                            <SelectItem value="move_in_out">Move-In / Move-Out</SelectItem>
                            <SelectItem value="specialty">Specialty Cleaning</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-300">Additional Details (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about the size of the space, specific areas of focus, etc." 
                            className="resize-none min-h-[120px] bg-slate-50 dark:bg-slate-900/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/25 transition-all hover:-translate-y-1"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
