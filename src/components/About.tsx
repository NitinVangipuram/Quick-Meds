
import React from 'react';
import { Shield, Award, Users, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About MedStore</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            MedStore is a cutting-edge pharmaceutical e-commerce platform developed at the prestigious 
            EMA Lab, IIT Dharwad. Our platform leverages advanced technology to make healthcare 
            accessible and affordable for everyone across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Developed at IIT Dharwad EMA Lab</h3>
            <p className="text-gray-600">
              The EMA (Emerging Materials and Applications) Lab at IIT Dharwad is at the forefront of 
              innovative research and development. Our team combines cutting-edge technology with 
              practical healthcare solutions to create platforms that serve the Indian pharmaceutical ecosystem.
            </p>
            <p className="text-gray-600">
              IIT Dharwad, located in Karnataka, is one of India's premier technological institutes, 
              known for its excellence in engineering, technology, and research. The EMA Lab focuses on 
              developing sustainable solutions for real-world challenges in healthcare and materials science.
            </p>
            <div className="flex items-center space-x-2 text-blue-600">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">IIT Dharwad, Karnataka, India</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600">
                All medications are sourced from licensed manufacturers and distributors, 
                ensuring authenticity and quality in every order.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Research-Driven</h4>
              <p className="text-gray-600">
                Built on extensive research in pharmaceutical distribution and e-commerce 
                optimization, ensuring efficient and reliable service delivery.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Customer-Centric</h4>
              <p className="text-gray-600">
                Designed with user experience as our priority, making healthcare accessible 
                to everyone across urban and rural India.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Secure Platform</h4>
              <p className="text-gray-600">
                Advanced security measures protect your personal information and ensure 
                safe, confidential transactions for all medical purchases.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600">
                Continuous innovation in pharmaceutical e-commerce, leveraging the latest 
                technology trends and research from IIT Dharwad.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              To revolutionize pharmaceutical distribution in India by creating an accessible, 
              reliable, and technology-driven platform that bridges the gap between patients 
              and quality healthcare. Through innovation and research excellence at IIT Dharwad's 
              EMA Lab, we aim to make healthcare affordable and available to every Indian.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
