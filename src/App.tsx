import { useState, FormEvent } from 'react'
import './App.css'

function App() {
  const [sameAsShipping, setSameAsShipping] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Form submitted! Check your browser\'s autocomplete to see saved values on next visit.')
  }

  return (
    <div className="container">
      <header>
        <h1>HTML Autocomplete Demo</h1>
        <p className="subtitle">Demonstrating WHATWG HTML Standard autocomplete attributes</p>
        <div className="info-box">
          <strong>Try it:</strong> Start typing in any field to see browser autocomplete suggestions based on previously saved data.
        </div>
      </header>

      <form onSubmit={handleSubmit}>

        {/* Personal Information Section */}
        <section className="form-section">
          <h2>Personal Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="honorific-prefix">Title</label>
              <input type="text" id="honorific-prefix" name="honorific-prefix"
                     autoComplete="honorific-prefix" placeholder="Mr., Mrs., Dr." />
              <span className="autocomplete-hint">autoComplete="honorific-prefix"</span>
            </div>

            <div className="form-group">
              <label htmlFor="given-name">First Name</label>
              <input type="text" id="given-name" name="given-name"
                     autoComplete="given-name" placeholder="John" required />
              <span className="autocomplete-hint">autoComplete="given-name"</span>
            </div>

            <div className="form-group">
              <label htmlFor="additional-name">Middle Name</label>
              <input type="text" id="additional-name" name="additional-name"
                     autoComplete="additional-name" placeholder="Michael" />
              <span className="autocomplete-hint">autoComplete="additional-name"</span>
            </div>

            <div className="form-group">
              <label htmlFor="family-name">Last Name</label>
              <input type="text" id="family-name" name="family-name"
                     autoComplete="family-name" placeholder="Smith" required />
              <span className="autocomplete-hint">autoComplete="family-name"</span>
            </div>

            <div className="form-group full-width">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name"
                     autoComplete="name" placeholder="John Michael Smith" />
              <span className="autocomplete-hint">autoComplete="name"</span>
            </div>

            <div className="form-group">
              <label htmlFor="nickname">Nickname</label>
              <input type="text" id="nickname" name="nickname"
                     autoComplete="nickname" placeholder="Johnny" />
              <span className="autocomplete-hint">autoComplete="nickname"</span>
            </div>

            <div className="form-group">
              <label htmlFor="organization">Organization</label>
              <input type="text" id="organization" name="organization"
                     autoComplete="organization" placeholder="Acme Corp" />
              <span className="autocomplete-hint">autoComplete="organization"</span>
            </div>

            <div className="form-group">
              <label htmlFor="organization-title">Job Title</label>
              <input type="text" id="organization-title" name="organization-title"
                     autoComplete="organization-title" placeholder="Software Engineer" />
              <span className="autocomplete-hint">autoComplete="organization-title"</span>
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="form-section">
          <h2>Contact Details</h2>
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email"
                     autoComplete="email" placeholder="john.smith@example.com" required />
              <span className="autocomplete-hint">autoComplete="email"</span>
            </div>

            <div className="form-group full-width">
              <label htmlFor="tel">Phone Number</label>
              <input type="tel" id="tel" name="tel"
                     autoComplete="tel" placeholder="+1 (555) 123-4567" required />
              <span className="autocomplete-hint">autoComplete="tel"</span>
            </div>

            <div className="form-group">
              <label htmlFor="tel-country-code">Country Code</label>
              <input type="tel" id="tel-country-code" name="tel-country-code"
                     autoComplete="tel-country-code" placeholder="+1" />
              <span className="autocomplete-hint">autoComplete="tel-country-code"</span>
            </div>

            <div className="form-group">
              <label htmlFor="tel-national">National Number</label>
              <input type="tel" id="tel-national" name="tel-national"
                     autoComplete="tel-national" placeholder="(555) 123-4567" />
              <span className="autocomplete-hint">autoComplete="tel-national"</span>
            </div>

            <div className="form-group full-width">
              <label htmlFor="url">Website</label>
              <input type="url" id="url" name="url"
                     autoComplete="url" placeholder="https://example.com" />
              <span className="autocomplete-hint">autoComplete="url"</span>
            </div>
          </div>
        </section>

        {/* Shipping Address Section */}
        <section className="form-section">
          <h2>Shipping Address</h2>
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="shipping-address-line1">Address Line 1</label>
              <input type="text" id="shipping-address-line1" name="shipping-address-line1"
                     autoComplete="shipping address-line1" placeholder="123 Main Street" required />
              <span className="autocomplete-hint">autoComplete="shipping address-line1"</span>
            </div>

            <div className="form-group full-width">
              <label htmlFor="shipping-address-line2">Address Line 2</label>
              <input type="text" id="shipping-address-line2" name="shipping-address-line2"
                     autoComplete="shipping address-line2" placeholder="Apt 4B" />
              <span className="autocomplete-hint">autoComplete="shipping address-line2"</span>
            </div>

            <div className="form-group">
              <label htmlFor="shipping-address-level2">City</label>
              <input type="text" id="shipping-address-level2" name="shipping-address-level2"
                     autoComplete="shipping address-level2" placeholder="New York" required />
              <span className="autocomplete-hint">autoComplete="shipping address-level2"</span>
            </div>

            <div className="form-group">
              <label htmlFor="shipping-address-level1">State/Province</label>
              <input type="text" id="shipping-address-level1" name="shipping-address-level1"
                     autoComplete="shipping address-level1" placeholder="NY" required />
              <span className="autocomplete-hint">autoComplete="shipping address-level1"</span>
            </div>

            <div className="form-group">
              <label htmlFor="shipping-postal-code">Postal Code</label>
              <input type="text" id="shipping-postal-code" name="shipping-postal-code"
                     autoComplete="shipping postal-code" placeholder="10001" required />
              <span className="autocomplete-hint">autoComplete="shipping postal-code"</span>
            </div>

            <div className="form-group">
              <label htmlFor="shipping-country">Country</label>
              <input type="text" id="shipping-country" name="shipping-country"
                     autoComplete="shipping country-name" placeholder="United States" required />
              <span className="autocomplete-hint">autoComplete="shipping country-name"</span>
            </div>
          </div>
        </section>

        {/* Billing Address Section */}
        <section className="form-section">
          <h2>Billing Address</h2>
          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" id="same-as-shipping"
                     checked={sameAsShipping}
                     onChange={(e) => setSameAsShipping(e.target.checked)} />
              Same as shipping address
            </label>
          </div>
          <div className="form-grid" style={{ opacity: sameAsShipping ? 0.5 : 1 }}>
            <div className="form-group full-width">
              <label htmlFor="billing-address-line1">Address Line 1</label>
              <input type="text" id="billing-address-line1" name="billing-address-line1"
                     autoComplete="billing address-line1" placeholder="456 Oak Avenue"
                     required={!sameAsShipping} disabled={sameAsShipping} />
              <span className="autocomplete-hint">autoComplete="billing address-line1"</span>
            </div>

            <div className="form-group full-width">
              <label htmlFor="billing-address-line2">Address Line 2</label>
              <input type="text" id="billing-address-line2" name="billing-address-line2"
                     autoComplete="billing address-line2" placeholder="Suite 200"
                     disabled={sameAsShipping} />
              <span className="autocomplete-hint">autoComplete="billing address-line2"</span>
            </div>

            <div className="form-group">
              <label htmlFor="billing-address-level2">City</label>
              <input type="text" id="billing-address-level2" name="billing-address-level2"
                     autoComplete="billing address-level2" placeholder="Los Angeles"
                     required={!sameAsShipping} disabled={sameAsShipping} />
              <span className="autocomplete-hint">autoComplete="billing address-level2"</span>
            </div>

            <div className="form-group">
              <label htmlFor="billing-address-level1">State/Province</label>
              <input type="text" id="billing-address-level1" name="billing-address-level1"
                     autoComplete="billing address-level1" placeholder="CA"
                     required={!sameAsShipping} disabled={sameAsShipping} />
              <span className="autocomplete-hint">autoComplete="billing address-level1"</span>
            </div>

            <div className="form-group">
              <label htmlFor="billing-postal-code">Postal Code</label>
              <input type="text" id="billing-postal-code" name="billing-postal-code"
                     autoComplete="billing postal-code" placeholder="90001"
                     required={!sameAsShipping} disabled={sameAsShipping} />
              <span className="autocomplete-hint">autoComplete="billing postal-code"</span>
            </div>

            <div className="form-group">
              <label htmlFor="billing-country">Country</label>
              <input type="text" id="billing-country" name="billing-country"
                     autoComplete="billing country-name" placeholder="United States"
                     required={!sameAsShipping} disabled={sameAsShipping} />
              <span className="autocomplete-hint">autoComplete="billing country-name"</span>
            </div>
          </div>
        </section>

        {/* Payment Information Section */}
        <section className="form-section">
          <h2>Payment Information</h2>
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="cc-name">Cardholder Name</label>
              <input type="text" id="cc-name" name="cc-name"
                     autoComplete="cc-name" placeholder="John M Smith" required />
              <span className="autocomplete-hint">autoComplete="cc-name"</span>
            </div>

            <div className="form-group full-width">
              <label htmlFor="cc-number">Card Number</label>
              <input type="text" id="cc-number" name="cc-number"
                     autoComplete="cc-number" placeholder="1234 5678 9012 3456"
                     pattern="[0-9\s]{13,19}" required />
              <span className="autocomplete-hint">autoComplete="cc-number"</span>
            </div>

            <div className="form-group">
              <label htmlFor="cc-exp-month">Expiry Month</label>
              <input type="text" id="cc-exp-month" name="cc-exp-month"
                     autoComplete="cc-exp-month" placeholder="MM"
                     pattern="[0-9]{2}" maxLength={2} required />
              <span className="autocomplete-hint">autoComplete="cc-exp-month"</span>
            </div>

            <div className="form-group">
              <label htmlFor="cc-exp-year">Expiry Year</label>
              <input type="text" id="cc-exp-year" name="cc-exp-year"
                     autoComplete="cc-exp-year" placeholder="YYYY"
                     pattern="[0-9]{4}" maxLength={4} required />
              <span className="autocomplete-hint">autoComplete="cc-exp-year"</span>
            </div>

            <div className="form-group">
              <label htmlFor="cc-csc">Security Code (CVV)</label>
              <input type="text" id="cc-csc" name="cc-csc"
                     autoComplete="cc-csc" placeholder="123"
                     pattern="[0-9]{3,4}" maxLength={4} required />
              <span className="autocomplete-hint">autoComplete="cc-csc"</span>
            </div>

            <div className="form-group">
              <label htmlFor="cc-type">Card Type</label>
              <input type="text" id="cc-type" name="cc-type"
                     autoComplete="cc-type" placeholder="Visa" />
              <span className="autocomplete-hint">autoComplete="cc-type"</span>
            </div>
          </div>
        </section>

        {/* Birthday Section */}
        <section className="form-section">
          <h2>Birthday</h2>
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="bday">Birthday (Full)</label>
              <input type="date" id="bday" name="bday" autoComplete="bday" />
              <span className="autocomplete-hint">autoComplete="bday"</span>
            </div>

            <div className="form-group">
              <label htmlFor="bday-day">Day</label>
              <input type="number" id="bday-day" name="bday-day"
                     autoComplete="bday-day" placeholder="DD" min={1} max={31} />
              <span className="autocomplete-hint">autoComplete="bday-day"</span>
            </div>

            <div className="form-group">
              <label htmlFor="bday-month">Month</label>
              <input type="number" id="bday-month" name="bday-month"
                     autoComplete="bday-month" placeholder="MM" min={1} max={12} />
              <span className="autocomplete-hint">autoComplete="bday-month"</span>
            </div>

            <div className="form-group">
              <label htmlFor="bday-year">Year</label>
              <input type="number" id="bday-year" name="bday-year"
                     autoComplete="bday-year" placeholder="YYYY" min={1900} max={2025} />
              <span className="autocomplete-hint">autoComplete="bday-year"</span>
            </div>
          </div>
        </section>

        {/* Account Credentials Section */}
        <section className="form-section">
          <h2>Account Credentials</h2>
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username"
                     autoComplete="username" placeholder="johnsmith123" required />
              <span className="autocomplete-hint">autoComplete="username"</span>
            </div>

            <div className="form-group full-width">
              <label htmlFor="new-password">Password</label>
              <input type="password" id="new-password" name="new-password"
                     autoComplete="new-password" placeholder="Enter password" required />
              <span className="autocomplete-hint">autoComplete="new-password"</span>
            </div>

            <div className="form-group full-width">
              <label htmlFor="one-time-code">Verification Code</label>
              <input type="text" id="one-time-code" name="one-time-code"
                     autoComplete="one-time-code" placeholder="123456"
                     pattern="[0-9]{6}" maxLength={6} />
              <span className="autocomplete-hint">autoComplete="one-time-code"</span>
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <div className="form-actions">
          <button type="submit" className="btn-primary">Submit Form</button>
          <button type="reset" className="btn-secondary">Reset</button>
        </div>
      </form>

      {/* Information Footer */}
      <footer className="info-footer">
        <h3>About Autocomplete</h3>
        <p>
          The <code>autoComplete</code> attribute helps browsers automatically fill in form fields
          based on values the user has previously entered. This demo showcases the WHATWG HTML
          Standard autocomplete tokens for common form fields.
        </p>
        <p>
          <strong>Note:</strong> For autocomplete to work, you need to have previously saved data
          in your browser. Try filling out this form and submitting it, then refresh the page to
          see the autocomplete suggestions appear.
        </p>
        <p>
          <a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill"
             target="_blank" rel="noopener">View WHATWG Specification →</a>
        </p>
      </footer>
    </div>
  )
}

export default App
