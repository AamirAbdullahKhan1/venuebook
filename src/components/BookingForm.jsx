import { useState } from 'react';

export default function BookingForm() {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => { //submit handler event
        e.preventDefault();
        setSubmitted(true); 
    };

    return (
        <section className="p-8 bg-white shadow-lg rounded-lg">
            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">Book a Venue</h2>
                    <div>
                        <label className="block text-gray-700">Venue</label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg">
                            <option>Auditorium A</option>
                            <option>Conference Hall B</option> {/**can add more venues but will be changed respective to backend*/}
                            
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Date</label>
                        <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Time Slot</label>
                        <input type="time" className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg">
                        Submit Booking Request
                    </button>
                </form>
            ) : (
                <div className="text-center">
                    <h3 className="text-xl font-bold text-green-500">Booking Request Submitted!</h3>
                    <p>We will notify you about the approval status shortly.</p>
                </div>
            )}
        </section>
    );
}