
import { Link } from 'react-router-dom';
import { Mail, PhoneCall, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-edconnect-beige-light/50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 edconnect-gradient rounded-md flex items-center justify-center">
                <span className="text-white font-bold">EC</span>
              </div>
              <span className="font-bold text-xl">EdConnect</span>
            </Link>
            <p className="text-muted-foreground">
              Connecting schools with volunteers to create better educational experiences for students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-edconnect-orange">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-edconnect-orange">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-edconnect-orange">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-edconnect-orange">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-edconnect-orange">Home</Link>
              </li>
              <li>
                <Link to="/schools" className="text-foreground/70 hover:text-edconnect-orange">Schools</Link>
              </li>
              <li>
                <Link to="/volunteers" className="text-foreground/70 hover:text-edconnect-orange">Volunteers</Link>
              </li>
              <li>
                <Link to="/events" className="text-foreground/70 hover:text-edconnect-orange">Events</Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-edconnect-orange">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-edconnect-orange">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faqs" className="text-foreground/70 hover:text-edconnect-orange">FAQs</Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-edconnect-orange">Blog</Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-foreground/70 hover:text-edconnect-orange">Success Stories</Link>
              </li>
              <li>
                <Link to="/support" className="text-foreground/70 hover:text-edconnect-orange">Support</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-foreground/70 hover:text-edconnect-orange">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-foreground/70 hover:text-edconnect-orange">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-edconnect-orange shrink-0 mt-0.5" />
                <span className="text-foreground/70">
                  123 Education Lane<br />
                  Knowledge City, ED 54321
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-edconnect-orange" />
                <span className="text-foreground/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-edconnect-orange" />
                <span className="text-foreground/70">info@edconnect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} EdConnect. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-foreground/60 hover:text-edconnect-orange">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-foreground/60 hover:text-edconnect-orange">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-foreground/60 hover:text-edconnect-orange">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
