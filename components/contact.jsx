import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl space-y-8 text-left">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Have a question or want to work together? Fill out the form below
              and we'll get back to you as soon as possible.
            </p>
          </div>
          <form
            target="_blank"
            action="https://formsubmit.co/witespacestudios@gmail.com"
            method="POST"
            className="grid gap-6"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name" className="font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="border-input focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="border-input focus:border-primary focus:ring-primary"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2 mt-6">
              <Label htmlFor="message" className="font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message"
                className="border-input focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary mt-2"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
