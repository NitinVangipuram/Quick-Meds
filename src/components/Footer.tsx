
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { categories } from '@/data/categories';

interface FooterProps {
  onCategorySelect: (category: string) => void;
  categories: string[];
}

const Footer = ({ onCategorySelect, categories: propCategories }: FooterProps) => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (category: string) => {
    onCategorySelect(category);
    scrollToTop();
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MediCare Pharmacy
              </h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Your trusted partner for health and wellness. Quality medicines and healthcare products delivered to your doorstep.
              </p>
              <div className="space-y-3">
                <p className="text-blue-300 font-medium">
                  🏥 Licensed Pharmacy
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-300">
                    Developed and Designed by Vedant Prashant Buge @ EMA LAB IITDH PC
                  </p>
                  <p className="text-sm font-semibold text-gray-300">
                    Technically Assisted by Nitin Vangipuram @ EMA LAB IITDH PC
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-6 text-blue-300">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-gray-300 hover:text-blue-300 text-left justify-start transition-colors duration-200"
                      onClick={() => setShowAboutUs(true)}
                    >
                      📋 About Us
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-gray-300 hover:text-blue-300 text-left justify-start transition-colors duration-200"
                      onClick={() => window.open('mailto:bugevedant@gmail.com', '_blank')}
                    >
                      📧 Contact
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-gray-300 hover:text-blue-300 text-left justify-start transition-colors duration-200"
                      onClick={() => alert('Feature coming soon!')}
                    >
                      📦 Track Order
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-gray-300 hover:text-blue-300 text-left justify-start transition-colors duration-200"
                      onClick={() => setShowReturnPolicy(true)}
                    >
                      🔄 Return Policy
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-gray-300 hover:text-blue-300 text-left justify-start transition-colors duration-200"
                      onClick={() => setShowPrivacyPolicy(true)}
                    >
                      🔒 Privacy Policy
                    </Button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-6 text-blue-300">Contact Info</h4>
                <div className="space-y-3">
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-gray-300 hover:text-blue-300 text-left justify-start transition-colors duration-200"
                    onClick={() => window.open('mailto:bugevedant@gmail.com', '_blank')}
                  >
                    📧 bugevedant@gmail.com
                  </Button>
                  <p className="text-gray-300">📍 123 Health Street, Medical District</p>
                  <p className="text-green-300 font-medium">🕒 Open 24/7</p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-gray-300 hover:text-green-300 text-left justify-start transition-colors duration-200"
                    onClick={() => alert('WhatsApp support coming soon!')}
                  >
                    💬 WhatsApp Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 MediCare Pharmacy. All rights reserved. | 
              <span className="text-blue-300"> Your Health, Our Priority</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Dialog */}
      <Dialog open={showPrivacyPolicy} onOpenChange={setShowPrivacyPolicy}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p><strong>Last updated:</strong> January 2025</p>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">Information We Collect</h3>
              <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, delivery address, and payment information.</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">How We Use Your Information</h3>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers.</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Information Sharing</h3>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Data Security</h3>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at bugevedant@gmail.com.</p>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      {/* Return Policy Dialog */}
      <Dialog open={showReturnPolicy} onOpenChange={setShowReturnPolicy}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Return & Exchange Policy</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p><strong>Last updated:</strong> January 2025</p>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">Return Eligibility</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Items must be returned within 7 days of delivery</li>
                <li>Products must be in original packaging and unopened</li>
                <li>Prescription medicines cannot be returned once delivered</li>
                <li>Personal care items and medical devices are non-returnable for hygiene reasons</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Return Process</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Contact our support team at bugevedant@gmail.com</li>
                <li>Provide your order number and reason for return</li>
                <li>Our team will guide you through the return process</li>
                <li>Pack the items securely in original packaging</li>
                <li>We will arrange pickup or provide return shipping label</li>
              </ol>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Refund Policy</h3>
              <p>Refunds will be processed within 5-7 business days after we receive and inspect the returned items. Refunds will be credited to the original payment method.</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Damaged or Wrong Items</h3>
              <p>If you receive damaged or incorrect items, please contact us immediately. We will arrange for immediate replacement or full refund at no additional cost.</p>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      {/* About Us Dialog */}
      <Dialog open={showAboutUs} onOpenChange={setShowAboutUs}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>About MediCare Pharmacy</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
              <p>At MediCare Pharmacy, we are committed to providing accessible, affordable, and reliable healthcare solutions to our community. We strive to be your trusted healthcare partner, ensuring that quality medicines and health products are always within your reach.</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Developed at EMA Lab, IIT Dharwad</h3>
              <p>This platform is developed at the Emerging MultiMedia and AI (EMA) Laboratory at the Indian Institute of Technology Dharwad. The EMA Lab is a state-of-the-art research facility that focuses on Technologies and research in emerging AI, their applications, and innovative technological solutions.</p>
              
              <div className="mt-3 space-y-2">
                <h4 className="font-medium text-base">About EMA Lab:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Research Excellence: Focuses on research in computer science and technology, web devlopment, iot AR-VR, Digital Twin and their applications in healthcare and technology</li>
                  <li>Innovation Hub: Develops practical solutions for real-world challenges through interdisciplinary approaches</li>
                  <li>Academic Excellence: Part of IIT Dharwad, one of India's premier technological institutes</li>
                  <li>Industry Collaboration: Works closely with industry partners to translate research into practical applications</li>
                  <li>Student Development: Provides opportunities for undergraduate and graduate students to engage in meaningful research</li>
                </ul>
              </div>

              <div className="mt-3 space-y-2">
                <h4 className="font-medium text-base">IIT Dharwad:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Location: Dharwad, Karnataka, India</li>
                  <li>Established as one of the newer IITs with a focus on innovation and technology</li>
                  <li>Known for its interdisciplinary approach to engineering and technology education</li>
                  <li>Committed to addressing societal challenges through technological solutions</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Why Choose Us?</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Licensed and certified pharmacy with qualified pharmacists</li>
                <li>Genuine medicines sourced directly from authorized distributors</li>
                <li>24/7 availability for urgent medication needs</li>
                <li>Fast and reliable delivery service</li>
                <li>Competitive pricing and regular discounts</li>
                <li>Expert consultation and medication counseling</li>
                <li>Secure and confidential handling of prescriptions</li>
                <li>Research-backed platform developed with academic rigor</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Our Services</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Prescription Medicine Delivery</li>
                <li>Over-the-Counter (OTC) Products</li>
                <li>Health and Wellness Products</li>
                <li>Medical Equipment and Devices</li>
                <li>Online Consultation Services</li>
                <li>Medication Reminder Services</li>
                <li>Health Checkup Packages</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Technology & Innovation</h3>
              <p>Our platform leverages advanced technology developed through rigorous research at EMA Lab, IIT Dharwad. We combine academic excellence with practical healthcare solutions to create a seamless, efficient, and user-friendly pharmacy experience.</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
              <p>📧 Email: bugevedant@gmail.com</p>
              <p>📍 Address: 123 Health Street, Medical District</p>
              <p>🕒 Operating Hours: 24/7</p>
              <p>🏛️ Developed at: EMA Lab, IIT Dharwad, Karnataka</p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
