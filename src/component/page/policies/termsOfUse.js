import React from 'react';
import { logoUrl } from '../../../assets/allImg';

const TermsOfUse = () => {
  return (
     <div className="min-h-screen w-full  text-left">
        <a className="flex w-full py-5  bg-black items-center justify-start text-gray-900 lg:items-start lg:justify-start px-12 mb-4 md:mb-0">
                    <img className='w-24 h-auto' src={logoUrl} alt='logo' />
                </a>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-white p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Use</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">The Romanelli Group, LLC</h2>
          
          <p className="text-sm text-gray-600 mb-8">LAST UPDATED: 1 Dec 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Please read these Terms of Use ("Agreement") carefully. This Agreement is a legal agreement between you and The Romanelli Group, LLC ("we," "us," or "our"), governing your access to and use of any website, platform, or digital service we provide (collectively, the "Services"). "You" and "your" refer to both an individual user and, if applicable, any entity on whose behalf you are using the Services.
            </p>
            
            <p className="mb-6">
              By accessing the Services, creating an account, or selecting "accept," "agree," or similar prompts, you consent to these Terms of Use and any future modifications.
            </p>
            
            <p className="mb-8">
              <strong>Note:</strong> The Romanelli Group, LLC ("TRG") is an independently operated real estate team within KW Greater Columbus Realty. This Agreement applies only to the Services provided directly by TRG. Any real estate brokerage services, transaction services, or related offerings provided through KW Greater Columbus Realty or its licensed agents (collectively, the "Other Services") are governed by their own terms, policies, and agreements. Please consult KW Greater Columbus Realty or its agents for terms applicable to brokerage services.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Effective Date</h2>
            
            <p className="mb-4">
              The "Last Updated" date at the top indicates when this Agreement was most recently revised. We may update this Agreement at any time by posting the revised version through the Services.
            </p>
            
            <p className="mb-2">We may also, at any time and without liability:</p>
            <ul className="list-disc pl-6 mb-8 space-y-1">
              <li>(a) change or discontinue any part of the Services; or</li>
              <li>(b) impose, modify, or waive any fees relating to the Services (where applicable).</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. License to Use the Services</h2>
            
            <p className="mb-4">
              Subject to your compliance with this Agreement, TRG grants you a limited, revocable, non-exclusive license to access and use the Services for your personal use.
            </p>
            
            <p className="mb-4">
              All content, features, and technology within the Services are owned by TRG or licensed to TRG. You may not reproduce, distribute, modify, or exploit any part of the Services without our written permission.
            </p>
            
            <p className="mb-8">
              You are solely responsible for obtaining and maintaining the devices, internet connection, and tools necessary to use the Services.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Registration; Account Security; Communications</h2>
            
            <p className="mb-4">
              Some features may require you to create an account. You may be asked to provide your name, email address, phone number, and other information. We may reject or require changes to any username or registration details.
            </p>
            
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your username and password and for all activity under your account.
            </p>
            
            <p className="mb-2">By using our Services, you:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>(a) consent to receiving electronic communications from us;</li>
              <li>(b) agree that electronic notices satisfy legal communication requirements; and</li>
              <li>(c) authorize us to contact you—including via automated calls, texts, or prerecorded messages—regarding the Services or related real estate offerings.</li>
            </ul>
            
            <p className="mb-8">
              Consent to automated marketing communications is not required to purchase any services. You may opt out at any time.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Collected Through the Services</h2>
            
            <p className="mb-4">
              You agree that any information you provide is accurate and that you will update it as necessary.
            </p>
            
            <p className="mb-4">
              By using the Services, you acknowledge that we may automatically collect information from your device, including pages visited, session data, or input typed into the Services.
            </p>
            
            <p className="mb-8">
              You consent to TRG sharing information with our affiliated partners—including KW Greater Columbus Realty—and third parties consistent with our Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Conduct</h2>
            
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use the Services for unlawful, fraudulent, or harmful purposes</li>
              <li>Post or transmit harmful, offensive, defamatory, or infringing materials</li>
              <li>Access the Services using bots, scrapers, AI tools, or automated systems without written permission</li>
              <li>Attempt to reverse engineer, disrupt, or damage the Services</li>
              <li>Impersonate other users</li>
              <li>Collect information about others without authorization</li>
              <li>Upload malicious code of any kind</li>
              <li>Interfere with the operation or security of the Services</li>
            </ul>
            
            <p className="mb-8">
              We may monitor your usage and remove any content or access at our discretion.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Materials</h2>
            
            <p className="mb-4">
              The Services may contain links or integrations involving third-party content, applications, or tools ("Third-Party Materials").
            </p>
            
            <p className="mb-4">
              We do not endorse or control Third-Party Materials and are not responsible for their content, terms, or policies. You are responsible for reviewing and complying with all third-party terms.
            </p>
            
            <p className="mb-8">
              We may block or restrict access to Third-Party Materials at any time.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Artificial Intelligence Tools</h2>
            
            <p className="mb-4">Some features of the Services may incorporate AI. By choosing to use these features, you acknowledge that:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>AI may produce inaccurate, biased, or unexpected outputs</li>
              <li>You must review AI-generated information for accuracy</li>
              <li>You are responsible for ensuring your use complies with all applicable laws</li>
              <li>Data processed through AI tools may involve privacy risks</li>
              <li>You use AI-powered features at your own risk.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Transactions</h2>
            
            <p className="mb-4">
              If the Services allow purchases or paid features ("Transactions"), you may be required to provide billing details.
            </p>
            
            <p className="mb-4">
              You represent that you have the right to use any payment method provided and authorize us to share payment details with third-party processors.
            </p>
            
            <p className="mb-4">
              Unless otherwise stated, all Transactions are final and non-refundable.
            </p>
            
            <p className="mb-8">
              You are responsible for paying all charges and taxes associated with any Transaction.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Feedback</h2>
            
            <p className="mb-8">
              Any ideas, suggestions, or proposals you provide ("Feedback") may be used by TRG without restriction, compensation, or obligation.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Submissions</h2>
            
            <p className="mb-8">
              You grant TRG a worldwide, royalty-free, perpetual license to use, reproduce, distribute, modify, and display any content you submit through the Services ("Submissions"), consistent with our Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Intellectual Property</h2>
            
            <p className="mb-4">
              All text, logos, graphics, branding, and materials within the Services—including those of TRG or third parties—are protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <p className="mb-8">
              You may not use TRG's trademarks or branding without written permission.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Disclaimer of Warranties</h2>
            
            <p className="mb-4">
              THE SERVICES ARE PROVIDED "AS IS," WITHOUT WARRANTIES OF ANY KIND. TRG DOES NOT GUARANTEE THAT THE SERVICES WILL BE ERROR-FREE OR UNINTERRUPTED.
            </p>
            
            <p className="mb-8">
              Some states do not allow exclusions of certain warranties; these limitations may not apply to you.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Limitation of Liability</h2>
            
            <p className="mb-4">To the fullest extent permitted by law:</p>
            <p className="mb-4">
              TRG, its affiliates, owners, agents, contractors, and representatives ("Affiliated Entities") shall not be liable for indirect, incidental, special, consequential, or punitive damages.
            </p>
            
            <p className="mb-2">The maximum liability of TRG or its Affiliated Entities is the greater of:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>(a) the amount paid by you in the past 12 months; or</li>
              <li>(b) $50.00.</li>
            </ul>
            
            <p className="mb-8">Your sole remedy is to discontinue using the Services.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Indemnification</h2>
            
            <p className="mb-4">You agree to defend and indemnify TRG and its Affiliated Entities from any claims or liabilities arising from:</p>
            <ul className="list-disc pl-6 mb-8 space-y-1">
              <li>your use of the Services,</li>
              <li>your Submissions, or</li>
              <li>your violation of this Agreement.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Termination</h2>
            
            <p className="mb-4">
              We may suspend or terminate your access to the Services at any time without notice.
            </p>
            
            <p className="mb-8">
              Upon termination, all rights granted to you under this Agreement cease immediately.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Governing Law; Dispute Resolution; Class Action Waiver</h2>
            
            <p className="mb-4">
              This Agreement is governed solely by the laws of the State of Ohio, without regard to conflict-of-law principles.
            </p>
            
            <p className="mb-4">
              Any dispute must be resolved through alternative dispute resolution rather than litigation.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mediation & Arbitration</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>First, both parties agree to negotiate in good faith for 90 days.</li>
              <li>If unresolved, the parties will attempt mediation administered by the American Arbitration Association in Columbus, Ohio.</li>
              <li>If still unresolved, the dispute will be resolved by binding arbitration (AAA Commercial Rules) in Columbus, Ohio.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">Time Limits</h3>
            <p className="mb-4">Unless prohibited by law, arbitration must be completed within 180 days of filing.</p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">Class Action Waiver</h3>
            <p className="mb-8">
              YOU AGREE THAT DISPUTES WILL BE RESOLVED ONLY ON AN INDIVIDUAL BASIS. CLASS ACTIONS AND CLASS ARBITRATIONS ARE NOT PERMITTED.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Information or Complaints</h2>
            
            <p className="mb-4">If you have questions or concerns about the Services, contact:</p>
            
            <div className="">
              <p className=""><strong>The Romanelli Group, LLC</strong></p>
              <p className="">380 Polaris Pkwy, Suite 150</p>
              <p className="">Westerville, OH 43082</p>
              <p className="">Email: <a href="mailto:theromanelligroup@gmail.com" className="text-blue-600 hover:text-blue-800">theromanelligroup@gmail.com</a></p>
              <p>Phone: <a href="tel:740-816-3112" className="text-blue-600 hover:text-blue-800">740-816-3112</a></p>
            </div>
            
            <p className="mb-8 text-sm italic">
              Email communications may not be secure; please do not send sensitive personal information via email.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Copyright Infringement (DMCA)</h2>
            
            <p className="mb-4">If you believe content within the Services infringes your copyright, you may send a DMCA notice to:</p>
            
            <div className="">
              <p className=""><strong>The Romanelli Group, LLC — Legal Department</strong></p>
              <p className="">380 Polaris Pkwy, Suite 150</p>
              <p className="">Westerville, OH 43082</p>
              <p className="">Email: <a href="mailto:theromanelligroup@gmail.com" className="text-blue-600 hover:text-blue-800">theromanelligroup@gmail.com</a></p>
              <p>Phone: <a href="tel:740-816-3112" className="text-blue-600 hover:text-blue-800">740-816-3112</a></p>
            </div>
            
            <p className="mb-8">We recommend consulting an attorney before sending a notice or counter-notice.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Export Controls; International Use</h2>
            
            <p className="mb-8">
              You are responsible for complying with U.S. export laws and all local laws when accessing the Services from outside the United States.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">20. Miscellaneous</h2>
            
            <p className="mb-4">
              This Agreement does not create an employment, agency, partnership, or franchise relationship.
            </p>
            
            <p className="mb-4">
              If any part of this Agreement is deemed invalid, the remaining provisions remain in effect.
            </p>
            
            <p>
              This Agreement constitutes the entire understanding between you and TRG regarding your use of the Services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;