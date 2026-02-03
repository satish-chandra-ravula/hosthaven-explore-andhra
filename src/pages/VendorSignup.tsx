import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Building2, User, Phone, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";
import { useToast } from "@/hooks/use-toast";

const VendorSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate signup - will be connected to Supabase later
    setTimeout(() => {
      toast({
        title: "Registration Submitted!",
        description: "Your vendor account is under review. We'll contact you soon.",
      });
      setIsLoading(false);
      navigate("/vendor/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Image (hidden on mobile) */}
      <div className="hidden lg:block lg:w-2/5 relative">
        <div className="absolute inset-0 bg-heritage-brown" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-md text-center">
            <div className="w-20 h-20 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-cream-light mb-4">
              Partner With HostHaven
            </h2>
            <p className="text-cream-light/80 mb-8">
              Join our network of trusted hotel partners and reach thousands of 
              travelers exploring Andhra Pradesh's divine heritage.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Partners" },
                { value: "10K+", label: "Bookings" },
              ].map((stat) => (
                <div key={stat.label} className="bg-cream-light/10 rounded-xl p-4">
                  <p className="text-2xl font-bold text-gold-light">{stat.value}</p>
                  <p className="text-sm text-cream-light/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 overflow-y-auto">
        <div className="w-full max-w-lg space-y-6 py-8">
          {/* Logo */}
          <Link to="/" className="flex justify-center">
            <img src={logo} alt="HostHaven" className="h-16 w-auto" />
          </Link>

          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-3">
              <Building2 className="w-4 h-4" />
              Vendor Registration
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Register as a Partner
            </h1>
            <p className="text-muted-foreground mt-2">
              List your hotels and homes on HostHaven
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 h-12 bg-muted border-0 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Business/Hotel Name
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="businessName"
                    placeholder="Hotel or business name"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="pl-10 h-12 bg-muted border-0 rounded-xl"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  name="email"
                  placeholder="business@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 h-12 bg-muted border-0 rounded-xl"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 h-12 bg-muted border-0 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full h-12 pl-10 pr-4 bg-muted border-0 rounded-xl text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select location</option>
                    <option value="vijayawada">Vijayawada</option>
                    <option value="nandyala">Nandyala</option>
                    <option value="vetapalem">Vetapalem</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10 h-12 bg-muted border-0 rounded-xl"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 h-12 bg-muted border-0 rounded-xl"
                    required
                    minLength={6}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="rounded border-border mt-1" required />
              <span className="text-sm text-muted-foreground">
                I agree to the{" "}
                <Link to="/vendor-terms" className="text-primary hover:underline">Vendor Terms</Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </span>
            </div>

            <Button
              type="submit"
              variant="hero"
              className="w-full"
              size="xl"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Register as Vendor"}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Already a partner?{" "}
              <Link to="/vendor/login" className="text-primary font-medium hover:underline">
                Login to Dashboard
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSignup;
