import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Email() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);
  const userName = formData.get('user_name');
  const userEmail = formData.get('user_email');
  const userInterest = formData.get('user_interest');
  console.log(userName, userEmail, userInterest);

  emailjs
    .sendForm("service_58j8oxu", "template_2empwmj", form.current, {
      publicKey: "7q-j2p6gtmA-Sfsru", 
    })
    .then(
      () => {
        console.log("SUCCESS!");
        setSubmitted(true); 
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};

  return (
    <div className="bg-gray-100 w-1/2 text-gray-800 p-6 rounded-2xl">

      {submitted ? (
        <div className="text-center py-10 rounded-lg">
          <h3 className="text-xl text-black font-semibold mb-2">Thank you for reaching out!</h3>
          <p>We'll get back to you soon.</p>
        </div>
      ) : (
        <div>
          <h2 className="text-md p-2">Stay Connected</h2>
          <form
            className="flex flex-col text-gray-700"
            onSubmit={sendEmail}
            ref={form}
          >
            <p className="py-2">Your Name</p>
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
            className="border border-gray-300 bg-gray-200 rounded-lg px-4 py-2 mb-4 w-full"
            required
          />
          <label className="py-2">Email Address</label>
          <input
            type="email"
            name="user_email"
            placeholder="john@example.com"
            className="border border-gray-300 bg-gray-200 rounded-lg px-4 py-2 mb-4 w-full"
            required
          />
          <label className="py-2">Your Interest</label>
          <select
            name="user_interest"
            className="border border-gray-300 bg-gray-200 rounded-lg px-4 py-2 mb-4 w-full"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Volunteer">Volunteer</option>
            <option value="Management">Management</option>
            <option value="Social Media">Social Media</option>
            <option value="Content Creation">Content Creation</option>
            <option value="Design">Design</option>
          </select>
          <input
            type="submit"
            value="Join Our Team"
            className="w-1/4 bg-gradient-to-r from-orange-700 to-orange-400 text-white justify-center rounded-lg px-4 py-2 mt-4 mx-auto block"
          />
        </form>
        </div>
      )}

      {!submitted && (
        <p className="text-xs text-gray-600 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Postman Community Pune.
        </p>
      )}
    </div>
  );
}

export default Email;
