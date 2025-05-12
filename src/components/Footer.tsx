import React from 'react';
import { 
  PawPrint, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[var(--color-primary)] text-[var(--color-surface)] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <PawPrint className="h-8 w-8 text-[var(--color-secondary)]" />
              <h3 className="text-xl font-bold ml-2 border-b-2 border-[var(--color-secondary)] pb-1 heading-serif">About Ranthambore</h3>
            </div>
            <p className="text-[var(--color-text-light)] mb-4 body-sans">
              Ranthambore National Park is a premier tiger reserve in Rajasthan, India. 
              With a rich blend of history, wildlife, and natural beauty, it offers an 
              unforgettable safari experience.
            </p>
            <p className="text-[var(--color-text-light)] body-sans">
              Once the private hunting grounds of Jaipur's Maharajas, Ranthambore now thrives 
              as a conservation success story under Project Tiger.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--color-secondary)] pb-1 heading-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors flex items-center">
                  <span className="mr-2">•</span> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors flex items-center">
                  <span className="mr-2">•</span> About
                </a>
              </li>
              <li>
                <a href="#wildlife" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors flex items-center">
                  <span className="mr-2">•</span> Wildlife
                </a>
              </li>
              <li>
                <a href="#zones" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors flex items-center">
                  <span className="mr-2">•</span> Park Zones
                </a>
              </li>
              <li>
                <a href="#safari" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors flex items-center">
                  <span className="mr-2">•</span> Safari Information
                </a>
              </li>
              <li>
                <a href="#booking" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors flex items-center">
                  <span className="mr-2">•</span> Book Safari
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors flex items-center">
                  <span className="mr-2">•</span> Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--color-secondary)] pb-1 heading-serif">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors flex items-center">
                  <span className="mr-2">•</span> Travel Guide
                </a>
              </li>
              <li>
                <a href="#conservation" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors flex items-center">
                  <span className="mr-2">•</span> Conservation
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors flex items-center">
                  <span className="mr-2">•</span> FAQs
                </a>
              </li>
              <li>
                <a href="#tips" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors flex items-center">
                  <span className="mr-2">•</span> Park Rules
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors flex items-center">
                  <span className="mr-2">•</span> Wildlife Calendar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--color-secondary)] pb-1 heading-serif">Get In Touch</h3>
            <ul className="space-y-3 body-sans">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[var(--color-secondary)] mr-2 mt-1 flex-shrink-0" />
                <span className="text-[var(--color-text-light)]">
                  Tourism Reception Centre<br />
                  Sawai Madhopur, Rajasthan<br />
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[var(--color-secondary)] mr-2 flex-shrink-0" />
                <span className="text-[var(--color-text-light)]">+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[var(--color-secondary)] mr-2 flex-shrink-0" />
                <a href="mailto:contact@ranthamborepark.in" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors">
                  contact@ranthamborepark.in
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-[var(--color-secondary)] mr-2 mt-1 flex-shrink-0" />
                <span className="text-[var(--color-text-light)]">
                  <strong>Office Hours:</strong><br />
                  Monday–Saturday: 9:00 AM–6:00 PM IST<br />
                  Sunday: 10:00 AM–4:00 PM IST
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-bold text-[var(--color-secondary)] mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--color-border-dark)] pt-8 text-center">
          <p className="text-[var(--color-text-light)] body-sans">
            &copy; {new Date().getFullYear()} Ranthambore National Park All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;