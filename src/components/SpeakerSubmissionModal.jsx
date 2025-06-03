import React, { useState } from 'react';

const SpeakerSubmissionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    talkTitle: '',
    talkType: '',
    talkDescription: '',
    previousSpeakingExperience: false,
    termsAccepted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        
        <h2 className="text-3xl font-bold mb-4 text-center text-black tracking-wide">
          SUBMIT YOUR TALK PROPOSAL
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Share your expertise with the Postman community. Fill out the form below to submit your talk for consideration.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Organization
            </label>
            <input
              type="text"
              name="organization"
              placeholder="Company or organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Talk Title
            </label>
            <input
              type="text"
              name="talkTitle"
              placeholder="Title of your proposed talk"
              value={formData.talkTitle}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Talk Type
            </label>
            <select
              name="talkType"
              value={formData.talkType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              required
            >
              <option value="">Select talk format</option>
              <option value="technical">Technical Session</option>
              <option value="casestudy">Case Study</option>
              <option value="workshop">Workshop</option>
              <option value="lightning">Lightning Talk</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">
              Select the format that best suits your topic
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Talk Description
            </label>
            <textarea
              name="talkDescription"
              placeholder="Describe your talk, target audience, and key takeaways"
              value={formData.talkDescription}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md h-32 text-black"
              required
              minLength={50}
            />
            <p className="text-sm text-gray-500 mt-1">
              Please provide a detailed description (at least 50 characters)
            </p>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="previousSpeakingExperience"
              checked={formData.previousSpeakingExperience}
              onChange={handleChange}
              className="mt-1 mr-2"
            />
            <label className="text-sm text-gray-700">
              Previous Speaking Experience
              <p className="text-sm text-gray-500">
                Check this box if you've presented at conferences before
              </p>
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mt-1 mr-2"
              required
            />
            <label className="text-sm text-gray-700">
              Terms and Conditions
              <p className="text-sm text-gray-500">
                I agree that my talk may be recorded and shared, and I consent to having my information stored for the purposes of this event.
              </p>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 text-white font-semibold rounded-md"
            style={{
              background: 'linear-gradient(to right, #cc5200, #ff8000)',
            }}
          >
            Submit Proposal
          </button>
        </form>
      </div>
    </div>
  );
};

export default SpeakerSubmissionModal; 