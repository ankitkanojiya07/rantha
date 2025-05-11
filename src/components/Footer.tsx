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
    <footer id="contact" className="bg-[#115E59F2] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <PawPrint className="h-8 w-8 text-[#BBB157]" />
              <h3 className="text-xl font-bold ml-2 border-b-2 border-[#BBB157] pb-1">About Ranthambore</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Ranthambore National Park is a premier tiger reserve in Rajasthan, India. 
              With a rich blend of history, wildlife, and natural beauty, it offers an 
              unforgettable safari experience.
            </p>
            <p className="text-gray-300">
              Once the private hunting grounds of Jaipur's Maharajas, Ranthambore now thrives 
              as a conservation success story under Project Tiger.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#BBB157] pb-1">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#BBB157] transition-colors flex items-center">
                  <span className="mr-2">•</span> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#BBB157] transition-colors flex items-center">
                  <span className="mr-2">•</span> About
                </a>
              </li>
              <li>
                <a href="#wildlife" className="text-gray-300 hover:text-[#BBB157] transition-colors flex items-center">
                  <span className="mr-2">•</span> Wildlife
                </a>
              </li>
              <li>
                <a href="#zones" className="text-gray-300 hover:text-[#BBB157] transition-colors flex items-center">
                  <span className="mr-2">•</span> Park Zones
                </a>
              </li>
              <li>
                <a href="#safari" className="text-gray-300 hover:text-[#BBB157] transition-colors flex items-center">
                  <span className="mr-2">•</span> Safari Information
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-300 hover:text-[#BBB157] transition-colors flex items-center">
                  <span className="mr-2">•</span> Book Safari
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-[#BBB157] transition-colors flex items-center">
                  <span className="mr-2">•</span> Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#BBB157] pb-1">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#BBB157] transition-colors flex items-center">
                  <span className="mr-2">•</span> Travel Guide
                </a>
              </li>
              <li>
                <a href="#conservation" className="text-gray-300 hover:text-[#BBB157] transition-colors flex items-center">
                  <span className="mr-2">•</span> Conservation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#BBB157] transition-colors flex items-center">
                  <span className="mr-2">•</span> FAQs
                </a>
              </li>
              <li>
                <a href="#tips" className="text-gray-300 hover:text-[#BBB157] transition-colors flex items-center">
                  <span className="mr-2">•</span> Park Rules
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#BBB157] transition-colors flex items-center">
                  <span className="mr-2">•</span> Wildlife Calendar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#BBB157] pb-1">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#BBB157] mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Tourism Reception Centre<br />
                  Sawai Madhopur, Rajasthan<br />
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#BBB157] mr-2 flex-shrink-0" />
                <span className="text-gray-300">+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#BBB157] mr-2 flex-shrink-0" />
                <a href="mailto:contact@ranthamborepark.in" className="text-gray-300 hover:text-[#BBB157] transition-colors">
                  contact@ranthamborepark.in
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-[#BBB157] mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  <strong>Office Hours:</strong><br />
                  Monday–Saturday: 9:00 AM–6:00 PM IST<br />
                  Sunday: 10:00 AM–4:00 PM IST
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-bold text-[#BBB157] mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#BBB157] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#BBB157] transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#BBB157] transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#BBB157] transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ranthambore National Park All Rights Reserved.
          </p>
          {/* <p className="text-gray-400 mt-2">
            Website designed by <a href="https://www.example.com" className="text-[#BBB157] hover:text-[#BBB157]">Ankit</a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;