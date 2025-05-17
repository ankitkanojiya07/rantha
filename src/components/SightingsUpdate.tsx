import React from 'react';

const SightingsUpdate: React.FC = () => {
  const timingsByMonth = [
    {
      period: "October 1st – October 31st",
      morning: "6:30 AM – 10:00 AM",
      afternoon: "2:30 PM – 6:00 PM"
    },
    {
      period: "November 1st – January 31st",
      morning: "7:00 AM – 10:30 AM",
      afternoon: "2:00 PM – 5:30 PM"
    },
    {
      period: "February 1st – March 31st",
      morning: "6:30 AM – 10:00 AM",
      afternoon: "2:30 PM – 6:00 PM"
    },
    {
      period: "April 1st – May 15th",
      morning: "6:00 AM – 9:30 AM",
      afternoon: "3:00 PM – 6:30 PM"
    },
    {
      period: "May 16th – June 30th",
      morning: "6:00 AM – 9:30 AM",
      afternoon: "3:30 PM – 7:00 PM"
    }
  ];

  return (
    <section id="sightings" className="py-20 bg-[var(--color-surface)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[var(--color-primary)] inline-block border-b-4 border-[var(--color-secondary)] pb-2">
            Zone Timings & Updates
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-3xl mx-auto body-sans">
            Stay informed about zone availability and timings throughout the year at Ranthambore National Park.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {/* Zone Information Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-green-900 mb-4">Zone Availability</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-semibold">Zones Available:</span> 1/2/3/4/5/6/7/8/9/10
              </p>
              <div className="bg-amber-50 p-4 rounded-md">
                <p className="text-amber-800 font-medium">Weekly Closure Schedule:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-amber-700">
                  <li>Zones 1/2/3/4/5 are Closed on Every Wednesday</li>
                  <li>Zones 6/7/8/9/10 are Closed on Every Tuesday</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-md">
                <p className="text-green-800 font-medium">Monsoon Season Notice:</p>
                <p className="mt-2 text-green-700">
                  During Monsoon (July, August & September) season only zones 6 to 10 are Open.
                </p>
              </div>
            </div>
          </div>

          {/* Safari Timings Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">Safari Timings by Season</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-green-900">Months</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-green-900">Morning Safari</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-green-900">Afternoon Safari</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {timingsByMonth.map((timing, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{timing.period}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{timing.morning}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{timing.afternoon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SightingsUpdate;