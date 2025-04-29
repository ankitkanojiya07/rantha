import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  date: string;
  time: string;
  safariType: string;
  guests: string;
  message: string;
}

const BookingSafari: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    date: '',
    time: '',
    safariType: '',
    guests: '1',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          date: '',
          time: '',
          safariType: '',
          guests: '1',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-20 bg-[#E8DDC2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#451A03] inline-block border-b-4 border-[#451A03] pb-2">
            Book Your Safari
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-[#451A03]">
            Reserve your spot for an unforgettable wildlife adventure in Ranthambore National Park.
            Early booking is recommended, especially during peak season.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="h-16 bg-[#f5eedd]"></div>
            <div className="px-6 py-8 md:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 mb-6">
                    <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Booking Requested!</h3>
                  <p className="mt-2 text-gray-600">
                    Thank you for your interest in Ranthambore National Park.
                    We'll contact you shortly to confirm your safari reservation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9A46]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9A46]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Safari Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9A46]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Safari Time</label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9A46]"
                        required
                      >
                        <option value="">Select Time</option>
                        <option value="morning">Morning (6:30 AM - 10:00 AM)</option>
                        <option value="evening">Evening (2:30 PM - 6:00 PM)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="safariType" className="block text-gray-700 font-medium mb-2">Safari Type</label>
                      <select
                        id="safariType"
                        name="safariType"
                        value={formData.safariType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9A46]"
                        required
                      >
                        <option value="">Select Safari Type</option>
                        <option value="gypsy">Gypsy Safari (6-Seater)</option>
                        <option value="canter">Canter Safari (20-Seater)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">Number of Guests</label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        min="1"
                        max="20"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9A46]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Special Requests</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9A46]"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className={`px-8 py-3 bg-[#f5eedd] text-[#1A3C34] font-bold rounded-full hover:bg-[#1A3C34] hover:text-white transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Book Now'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          
          <div className="mt-8 bg-[#B45309] text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Important Booking Information</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Bookings should be made at least 90 days in advance for the best chances of securing your preferred slot.</li>
              <li>A valid government-issued photo ID is required for all visitors entering the park.</li>
              <li>Children below 5 years of age are not recommended for safaris.</li>
              <li>Park entry fees are not included in the booking and must be paid separately at the park entrance.</li>
              <li>Cancellations made less than 48 hours before the scheduled safari are non-refundable.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSafari;