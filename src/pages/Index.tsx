import heroImage from "@/assets/hero-image.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, Calendar, Users, Clock, Star, ArrowRight } from "lucide-react";
const Index = () => {
  const handleCTA = () => {
    window.location.href = "mailto:kyle@telora.ca?subject=Free Demo Request&body=Hi Kyle, I'd like to book a free demo of Telora AI Receptionist for my business.";
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/a3cb00ca-d467-476e-a1c8-60b41ae01ab4.png" 
                alt="Telora AI Receptionist Logo" 
                className="h-16 mx-auto mb-6"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Your 24/7 AI Receptionist —{" "}
              <span className="text-primary">Never Miss a Call Again</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Telora answers your business calls, books appointments, and greets customers automatically.
            </p>
            <Button onClick={handleCTA} variant="cta" size="lg" className="text-lg px-8 py-6 mb-12">
              Book a Free Demo
              <ArrowRight className="ml-2" />
            </Button>
            <div className="relative max-w-4xl mx-auto">
              <img src={heroImage} alt="Professional AI receptionist service" className="w-full rounded-lg shadow-card-hover" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Every Missed Call is a Lost Opportunity
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Small businesses lose thousands in revenue every month due to these common problems:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Missed Calls</h3>
                <p className="text-muted-foreground">
                  Can't answer every call during busy hours, losing potential customers to competitors.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expensive Staff</h3>
                <p className="text-muted-foreground">
                  Hiring full-time receptionists costs $30,000+ annually, straining your budget.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">After Hours</h3>
                <p className="text-muted-foreground">
                  No coverage outside business hours means missing appointments and urgent inquiries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet Telora: Your AI-Powered Solution
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional call handling that works 24/7, costs less than a part-time employee, and never takes a sick day.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-primary/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Call Answering</h3>
                <p className="text-muted-foreground">
                  Answers calls with your custom greeting, handles common questions, and transfers important calls.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-primary/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Appointment Booking</h3>
                <p className="text-muted-foreground">
                  Automatically schedules appointments based on your availability and sends confirmations.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-primary/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Greeting</h3>
                <p className="text-muted-foreground">
                  Custom-trained to represent your brand perfectly with natural, professional conversations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              How Telora Works in 3 Simple Steps
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Setup & Training</h3>
              <p className="text-muted-foreground">
                We customize Telora with your business info, greeting, and common questions in just 24 hours.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Forward Your Calls</h3>
              <p className="text-muted-foreground">
                Simply forward your business line to Telora's number. No new hardware or complex setup required.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Capturing Leads</h3>
              <p className="text-muted-foreground">
                Telora handles calls 24/7, books appointments, and sends you detailed summaries of every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Telora works perfectly for service-based businesses that need professional call handling:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {['Medical Practices', 'Law Firms', 'Dental Offices', 'Real Estate', 'Consulting', 'Home Services', 'Salons & Spas', 'Professional Services'].map(industry => <Card key={industry} className="text-center p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardContent className="pt-4">
                  <Check className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-medium">{industry}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Start Saving Time Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of businesses already using Telora to never miss another important call.
            </p>
            <Button onClick={handleCTA} variant="cta-outline" size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-primary-foreground">
              Book Your Free Demo
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/a3cb00ca-d467-476e-a1c8-60b41ae01ab4.png" 
                alt="Telora AI Receptionist Logo" 
                className="h-12 mx-auto mb-4"
              />
              <p className="text-muted-foreground mb-6">
                Your 24/7 AI Receptionist for Professional Business Communication
              </p>
              <div className="space-y-2">
                <p className="text-foreground">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:kyle@telora.ca" className="text-primary hover:underline">
                    kyle@telora.ca
                  </a>
                </p>
                <p className="text-foreground">
                  <strong>Website:</strong>{" "}
                  <a href="https://telora.ca" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    telora.ca
                  </a>
                </p>
              </div>
            </div>
            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground">
                © 2025 Telora. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;