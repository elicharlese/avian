export default function CancellationPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold">Cancellation Policy</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-muted-foreground">Last Updated: May 19, 2025</p>

        <h2 className="mt-8 text-xl font-semibold">1. Introduction</h2>
        <p>
          At AVIAN, we understand that plans can change. This Cancellation Policy outlines the terms and conditions for
          cancellations, changes, and refunds for bookings made through our service.
        </p>

        <h2 className="mt-8 text-xl font-semibold">2. Standard Cancellation Policy</h2>
        <p>Our standard cancellation policy is as follows:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>72+ hours before departure:</strong> Full refund of the booking amount, minus a 5% processing fee.
          </li>
          <li>
            <strong>24-72 hours before departure:</strong> 50% refund of the booking amount.
          </li>
          <li>
            <strong>Less than 24 hours before departure:</strong> No refund.
          </li>
        </ul>
        <p>
          All times are calculated based on the scheduled departure time in the departure location's local time zone.
        </p>

        <h2 className="mt-8 text-xl font-semibold">3. Package-Specific Cancellation Policies</h2>
        <p>Different packages may have specific cancellation policies:</p>
        <h3 className="mt-4 text-lg font-medium">3.1 Day Flyer Package</h3>
        <p>Follows the standard cancellation policy.</p>

        <h3 className="mt-4 text-lg font-medium">3.2 Sky Sleeper Package</h3>
        <p>Due to the overnight accommodations included in this package:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>7+ days before departure:</strong> Full refund minus a 5% processing fee.
          </li>
          <li>
            <strong>3-7 days before departure:</strong> 75% refund.
          </li>
          <li>
            <strong>1-3 days before departure:</strong> 25% refund.
          </li>
          <li>
            <strong>Less than 24 hours before departure:</strong> No refund.
          </li>
        </ul>

        <h3 className="mt-4 text-lg font-medium">3.3 Cloud Explorer Package</h3>
        <p>Due to the extended duration and multiple accommodations:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>14+ days before departure:</strong> Full refund minus a 5% processing fee.
          </li>
          <li>
            <strong>7-14 days before departure:</strong> 75% refund.
          </li>
          <li>
            <strong>3-7 days before departure:</strong> 50% refund.
          </li>
          <li>
            <strong>Less than 3 days before departure:</strong> No refund.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">4. Rescheduling</h2>
        <p>Rescheduling a booking is subject to availability and the following conditions:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>72+ hours before departure:</strong> One free rescheduling, subject to availability. Any price
            difference will apply.
          </li>
          <li>
            <strong>24-72 hours before departure:</strong> Rescheduling fee of 25% of the original booking amount, plus
            any price difference.
          </li>
          <li>
            <strong>Less than 24 hours before departure:</strong> Treated as a cancellation with no refund, and a new
            booking must be made.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">5. Refund Process</h2>
        <p>Refunds will be processed using the original payment method:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Credit/Debit Card Payments:</strong> Refunds typically take 5-10 business days to appear on your
            statement.
          </li>
          <li>
            <strong>Solana Blockchain Payments:</strong> Refunds will be processed to the original wallet address within
            24-48 hours. Please note that blockchain transaction fees are non-refundable.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">6. Weather and Operational Cancellations</h2>
        <p>If AVIAN cancels a flight due to weather conditions, mechanical issues, or other operational reasons:</p>
        <ul className="list-disc pl-6">
          <li>You will receive a full refund with no processing fee, or</li>
          <li>You can reschedule your flight at no additional cost, subject to availability.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">7. Group Bookings</h2>
        <p>For bookings of 5 or more passengers:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>30+ days before departure:</strong> Full refund minus a 10% deposit.
          </li>
          <li>
            <strong>14-30 days before departure:</strong> 75% refund.
          </li>
          <li>
            <strong>7-14 days before departure:</strong> 50% refund.
          </li>
          <li>
            <strong>Less than 7 days before departure:</strong> No refund.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">8. Special Circumstances</h2>
        <p>
          In case of medical emergencies, bereavement, or other exceptional circumstances, please contact our customer
          service team as soon as possible. We may request documentation to support your claim for a special
          consideration refund.
        </p>

        <h2 className="mt-8 text-xl font-semibold">9. Changes to This Policy</h2>
        <p>
          AVIAN reserves the right to modify this Cancellation Policy at any time. Changes will be effective immediately
          upon posting to our website. Your continued use of our services after any changes indicates your acceptance of
          the updated policy.
        </p>

        <h2 className="mt-8 text-xl font-semibold">10. Contact Information</h2>
        <p>
          For questions about this Cancellation Policy or to request a cancellation or change to your booking, please
          contact our customer service team:
        </p>
        <p>
          Email: bookings@aviantravel.com
          <br />
          Phone: +1 (555) 123-4567
          <br />
          Hours: Monday-Friday, 9:00 AM - 6:00 PM; Saturday, 10:00 AM - 4:00 PM (Pacific Time)
        </p>
      </div>
    </div>
  )
}
