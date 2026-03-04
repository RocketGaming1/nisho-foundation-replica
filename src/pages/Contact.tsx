import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:nishofoundation@gmail.com?subject=Contact from ${formData.firstName} ${formData.lastName}&body=${formData.message}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8">CONTACT</h1>
          
          <p className="text-muted-foreground mb-12 text-lg">
            For any questions or partnership opportunities, please feel free to contact us using the information provided below.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Postal address</h2>
              <div className="space-y-2 text-muted-foreground mb-8">
                <p className="font-semibold text-foreground">Stichting Nisho Foundation</p>
                <p>Rekkenbrink 3</p>
                <p>7544 LA Enschede</p>
                <p>The Netherlands</p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="font-semibold text-foreground min-w-[60px]">Tel:</span>
                  <a href="tel:+31617475410" className="text-primary hover:text-primary/80 transition-colors">+31 6 174 754 10</a>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold text-foreground min-w-[60px]">E-mail:</span>
                  <a href="mailto:nishofoundation@gmail.com" className="text-primary hover:text-primary/80 transition-colors">nishofoundation@gmail.com</a>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold text-foreground min-w-[60px]">KVK:</span>
                  <span className="text-muted-foreground">72359889</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold text-foreground min-w-[60px]">RSIN:</span>
                  <span className="text-muted-foreground">859084012</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">First Name</label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Last Name</label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                  <Textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
