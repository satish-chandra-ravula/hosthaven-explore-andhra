import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";
import { useToast } from "@/hooks/use-toast";

const VendorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - will be connected to Supabase later
    setTimeout(() => {
      toast({
        title: "Vendor Login",
        description: "Vendor dashboard coming soon! Backend integration required.",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <Link to="/" className="flex justify-center">
            <img src={logo} alt="HostHaven" className="h-20 w-auto" />
          </Link>

          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-3">
              <Building2 className="w-4 h-4" />
              Vendor Portal
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Partner Login
            </h1>
            <p className="text-muted-foreground mt-2">
              Access your vendor dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Business Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-muted border-0 rounded-xl"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 bg-muted border-0 rounded-xl"
                  required
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-sm text-muted-foreground">Remember me</span>
              </label>
              <Link to="/vendor/forgot-password" className="text-sm text-primary hover:underline">
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="hero"
              className="w-full"
              size="xl"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Login to Dashboard"}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-muted-foreground">
                New Partner?
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <Link to="/vendor/signup">
              <Button variant="outline" className="w-full" size="lg">
                <Building2 className="w-5 h-5 mr-2" />
                Register as Vendor
              </Button>
            </Link>
          </div>

          {/* Back Links */}
          <div className="flex justify-center gap-4 text-sm">
            <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors">
              Guest Login
            </Link>
            <span className="text-border">|</span>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Image (hidden on mobile) */}
      <div className="hidden lg:block lg:flex-1 relative">
        <div className="absolute inset-0 bg-heritage-brown" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-md text-center">
            <div className="w-20 h-20 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-cream-light mb-4">
              Vendor Dashboard
            </h2>
            <p className="text-cream-light/80 mb-6">
              Manage your properties, track bookings, and grow your business 
              with HostHaven's partner portal.
            </p>
            <div className="space-y-3">
              {[
                "Manage hotel & home listings",
                "Track bookings in real-time",
                "Upload images & videos",
                "View earnings & analytics",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 bg-cream-light/10 rounded-lg px-4 py-3">
                  <div className="w-2 h-2 rounded-full bg-gold-light" />
                  <span className="text-cream-light text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
