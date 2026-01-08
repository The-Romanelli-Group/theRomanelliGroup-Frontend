import React from 'react';
import { logoUrl } from '../../../assets/allImg';

const AccessibilityPolicy = () => {
  return (
      <div className="min-h-screen w-full  text-left">
        <a className="flex w-full py-5  bg-black items-center justify-start text-gray-900 lg:items-start lg:justify-start px-12 mb-4 md:mb-0">
                    <img className='w-24 h-auto' src={logoUrl} alt='logo' />
                </a>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-white p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Accessibility Statement</h1>
          
          <p className="text-sm text-gray-600 mb-8">LAST UPDATED: December 1, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              The Romanelli Group LLC ("The Romanelli Group," "we," "our," or "us") is committed to ensuring our website and digital experiences are accessible to all users, including individuals with disabilities. We strive to follow the Web Content Accessibility Guidelines (WCAG) established by the World Wide Web Consortium (W3C) to provide an inclusive and user-friendly online environment.
            </p>
            
            <p className="mb-6">
              We recognize that full accessibility may not always be possible for every page or user—especially those utilizing assistive technologies—but we are dedicated to continuous improvement. We regularly review our website, perform accessibility evaluations, and work to address any issues identified during these audits.
            </p>
            
            <p className="mb-8 font-semibold">Our efforts to improve accessibility are ongoing.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Assistance or Want to Provide Feedback?</h2>
            
            <p className="mb-4">
              We value your feedback and welcome opportunities to improve the accessibility of our Site.
            </p>
            
            <p className="mb-4">If you:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Have difficulty accessing content</li>
              <li>Need assistance using certain website features</li>
              <li>Want to report an accessibility issue</li>
              <li>Require content in a specific accessible format</li>
            </ul>
            
            <p className="mb-4 font-semibold">Please contact us at:</p>
            <div className="">
              <p className="">📧 <a href="mailto:theromanelligroup@gmail.com" className="text-blue-600 hover:text-blue-800">theromanelligroup@gmail.com</a></p>
              <p className="">📍 380 Polaris Pkwy, Suite 150, Westerville, OH 43082</p>
              <p>📞 <a href="tel:740-816-3112" className="text-blue-600 hover:text-blue-800">740-816-3112</a></p>
            </div>
            
            <p className="mb-4 font-semibold">When reporting an issue, please include:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>The specific webpage or element involved</li>
              <li>A description of the issue</li>
              <li>Any assistive technology you were using</li>
              <li>The format you require (if requesting an alternative version)</li>
            </ul>
            
            <p className="mb-6">
              If certain content cannot be made fully accessible, we will make every reasonable effort to provide a text-based or alternative version upon request.
            </p>
            
            <p>
              We appreciate your questions, suggestions, and feedback as we work to enhance accessibility across our platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPolicy;