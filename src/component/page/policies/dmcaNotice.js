import React from 'react';
import { logoUrl } from '../../../assets/allImg';

const DmcaNotice = () => {
  return (
      <div className="min-h-screen w-full  text-left">
        <a className="flex w-full py-5  bg-black items-center justify-start text-gray-900 lg:items-start lg:justify-start px-12 mb-4 md:mb-0">
                    <img className='w-24 h-auto' src={logoUrl} alt='logo' />
                </a>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-white p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Digital Millennium Copyright Act (DMCA)</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Copyright Policy</h2>
          
          <p className="text-sm text-gray-600 mb-8">LAST UPDATED: December 1, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              The Romanelli Group LLC ("The Romanelli Group," "we," "our," or "us") respects the importance of intellectual property rights. We do not tolerate the misuse or infringement of anyone's copyrights on our website, marketing platforms, or digital systems (collectively, the "Site").
            </p>
            
            <p className="mb-8">
              To protect creators and comply with the Digital Millennium Copyright Act of 1998 (17 U.S.C. § 512) ("DMCA"), we have established the following process for reporting and responding to copyright infringement claims.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Notice of Copyright Infringement</h3>
            
            <p className="mb-4">
              If you believe in good faith that material on our Site infringes a copyright you own or represent, you may submit a DMCA Notice to us.
            </p>
            
            <p className="mb-4 font-semibold">Your Notice must be in writing (email or letter) and include:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Your full name and contact information</strong> (email, phone number, and mailing address).
                <br />
                <em>Please note: We may forward your Notice, including your contact information, to the person who posted the material.</em>
              </li>
              <li>
                <strong>Identification of the copyrighted work</strong> you claim has been infringed.
                <br />
                <em>When available, include registration numbers, dates, or ownership details.</em>
              </li>
              <li>
                <strong>Identification of the material you believe is infringing</strong>, including the URL or specific location on the Site.
                <br />
                <em>Screenshots are helpful but not required.</em>
              </li>
              <li>A statement that you have a good-faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
              <li>A statement, made under penalty of perjury, that the information in the Notice is accurate and that you are the copyright owner or authorized to act on behalf of the copyright owner.</li>
              <li>Your physical or electronic signature.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Counter-Notice</h3>
            
            <p className="mb-4">
              If you believe a copyright complaint was submitted against you in error, you may file a Counter-Notice.
            </p>
            
            <p className="mb-4 font-semibold">Your Counter-Notice must include:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Your full name and contact information</strong> (email, phone number, and mailing address).
                <br />
                <em>We will forward your Counter-Notice to the original complaining party.</em>
              </li>
              <li>Identification of the material removed or to which access was disabled, including the URL where it was located before removal.</li>
              <li>A statement, under penalty of perjury, that you believe the material was removed due to mistake or misidentification.</li>
              <li>A statement that you consent to the jurisdiction of the Federal District Court for the district of your provided address (or, if outside the U.S., the Southern District of Ohio), and that you will accept service of process from the original complaining party.</li>
              <li>Your physical or electronic signature.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Where to Send DMCA Notices & Counter-Notices</h3>
            
            <p className="mb-4 font-semibold">DMCA communications must be sent to:</p>
            
            <div className="">
              <p className=""><strong>The Romanelli Group LLC</strong></p>
              <p className="">Attn: DMCA Agent</p>
              <p className="">380 Polaris Pkwy, Suite 150</p>
              <p className="">Westerville, OH 43082</p>
              <p className="">Email: <a href="mailto:theromanelligroup@gmail.com" className="text-blue-600 hover:text-blue-800">theromanelligroup@gmail.com</a></p>
              <p>Phone: <a href="tel:740-816-3112" className="text-blue-600 hover:text-blue-800">740-816-3112</a></p>
            </div>
            
            <p className="mb-6 text-sm italic">Only DMCA-related requests should be sent to this contact.</p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">4. Procedure Following a Notice or Counter-Notice</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>When we receive a Notice, we will make a good-faith effort to forward it to the party who posted the material.</li>
              <li>We may remove or disable access to the content at our discretion.</li>
              <li>If a Notice is incomplete, we may choose not to act on it.</li>
              <li>When we receive a Counter-Notice, we will forward it to the original complaining party.</li>
              <li>If the complaining party does not notify us within 10 business days that they have filed a court action to restrain the material, we may (but are not obligated to) restore the content within 14 business days, subject to technical limitations.</li>
              <li>In some cases, reposting the material may be the responsibility of the individual after reinstatement approval.</li>
            </ul>
            
            <p className="mb-8">
              The Romanelli Group does not determine the validity of copyright claims. Parties are encouraged to resolve disputes independently.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">5. No Legal Advice</h3>
            
            <p>
              Nothing in this Copyright Policy constitutes legal advice. You may wish to consult an attorney before submitting a Notice or Counter-Notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DmcaNotice;