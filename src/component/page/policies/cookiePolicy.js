import React from 'react';
import { logoUrl } from '../../../assets/allImg';

const CookiePolicy = () => {
  return (
          <div className="min-h-screen w-full  text-left">
        <a className="flex w-full py-5  bg-black items-center justify-start text-gray-900 lg:items-start lg:justify-start px-12 mb-4 md:mb-0">
                    <img className='w-24 h-auto' src={logoUrl} alt='logo' />
                </a>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-white  p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy of The Romanelli Group (TRG)</h1>
          
          <p className="text-sm text-gray-600 mb-8">Last Updated: December 1, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            
            <p className="mb-6">
              Cookies are small text files stored on your device by websites you visit. They help websites function properly, operate more efficiently, and provide valuable information to site owners. Most websites today use cookies as a standard practice. If you prefer not to use cookies, you may manage or delete them anytime through your browser settings (including clearing your browser history/cache when you leave our site).
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            
            <p className="mb-6">
              The Romanelli Group ("TRG," "we," "us," or "our") uses cookies on our website to distinguish you from other visitors, optimize your browsing experience, and improve site performance.
            </p>
            
            <p className="mb-4">We use the following categories of cookies:</p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Types</h3>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2">Essential cookies required for the website to function properly — enabling core features like page navigation and secure access. You may block these cookies in your browser, but some site functionality may be affected.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Preferences</td>
                    <td className="border border-gray-300 px-4 py-2">These cookies remember your preferences (e.g., preferred language, region, or recent search settings) to enhance your experience.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Statistics</td>
                    <td className="border border-gray-300 px-4 py-2">Analytics cookies that help us understand how visitors use our website by collecting anonymized data. These help us improve navigation, content, and user experience.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Marketing</td>
                    <td className="border border-gray-300 px-4 py-2">Used to track users across websites to deliver more relevant advertising and measure ad performance.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Performance/Security</td>
                    <td className="border border-gray-300 px-4 py-2">Improve website performance, reliability, and security.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Unclassified</td>
                    <td className="border border-gray-300 px-4 py-2">Cookies currently being categorized with assistance from their providers.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Other Cookie Types</h3>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Persistent Cookies:</strong> Stored on your device for a set period and activated each time you return to the website.</li>
              <li><strong>Session Cookies:</strong> Temporary cookies deleted when you close your browser.</li>
              <li><strong>First-Party Cookies:</strong> Set by TRG to enhance website functionality and performance.</li>
              <li><strong>Third-Party Cookies:</strong> Set by third-party partners such as Google, Cloudflare, and others to provide additional functionality (analytics, mapping, security, video embeds, etc.).</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">First-Party Cookies</h3>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">CookieConsent</td>
                    <td className="border border-gray-300 px-4 py-2">Preferences</td>
                    <td className="border border-gray-300 px-4 py-2">Stores the user's cookie consent state for the domain.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">JSESSIONID</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2">Platform session cookie used to maintain an anonymous session.</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">property_search_city</td>
                    <td className="border border-gray-300 px-4 py-2">Preferences</td>
                    <td className="border border-gray-300 px-4 py-2">Remembers the last searched city in the Property Search tool.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">property_search_state</td>
                    <td className="border border-gray-300 px-4 py-2">Preferences</td>
                    <td className="border border-gray-300 px-4 py-2">Remembers the last searched state.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">property_search_zip</td>
                    <td className="border border-gray-300 px-4 py-2">Preferences</td>
                    <td className="border border-gray-300 px-4 py-2">Remembers the last searched ZIP code.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Third-Party Cookies</h3>
            
            <p className="mb-6">
              Some TRG webpages integrate third-party tools such as maps, analytics, security layers, or advertising technologies. These third parties may place cookies in your browser.
            </p>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Cloudflare</h4>
            <p className="mb-4">Used for performance optimization and security. Cloudflare Cookie Policy & Privacy Policy (available on Cloudflare's website).</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">__cfduid</td>
                    <td className="border border-gray-300 px-4 py-2">Performance/Security</td>
                    <td className="border border-gray-300 px-4 py-2">Identifies trusted traffic and improves load times; does not store personal identifiers.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-3">DoubleClick (Google)</h4>
            <p className="mb-4">Used for advertising and ad performance measurement.</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">__gads</td>
                    <td className="border border-gray-300 px-4 py-2">Marketing</td>
                    <td className="border border-gray-300 px-4 py-2">Supports DoubleClick advertising services.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">IDE</td>
                    <td className="border border-gray-300 px-4 py-2">Marketing</td>
                    <td className="border border-gray-300 px-4 py-2">Used for ad retargeting, optimization, and reporting.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Google Analytics</h4>
            <p className="mb-4">Helps us understand website usage and improve user experience. Google Privacy & Cookie Policies and opt-out options are available on Google's website.</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">__utma</td>
                    <td className="border border-gray-300 px-4 py-2">Statistics</td>
                    <td className="border border-gray-300 px-4 py-2">Tracks visit frequency and time of first/last visit.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">__utmb</td>
                    <td className="border border-gray-300 px-4 py-2">Statistics</td>
                    <td className="border border-gray-300 px-4 py-2">Timestamp when the user accessed the site.</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">__utmc</td>
                    <td className="border border-gray-300 px-4 py-2">Statistics</td>
                    <td className="border border-gray-300 px-4 py-2">Timestamp when the user left the site.</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">__utmt</td>
                    <td className="border border-gray-300 px-4 py-2">Statistics</td>
                    <td className="border border-gray-300 px-4 py-2">Throttles request rates.</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">__utmt_gwo</td>
                    <td className="border border-gray-300 px-4 py-2">Statistics</td>
                    <td className="border border-gray-300 px-4 py-2">Limits data collection for high-traffic sites.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">__utmz</td>
                    <td className="border border-gray-300 px-4 py-2">Statistics</td>
                    <td className="border border-gray-300 px-4 py-2">Captures traffic source (search engine, link, keyword, etc.).</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 px-4 py-2">Statistics</td>
                    <td className="border border-gray-300 px-4 py-2">Generates a unique ID for analytics tracking.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">_gid</td>
                    <td className="border border-gray-300 px-4 py-2">Statistics</td>
                    <td className="border border-gray-300 px-4 py-2">Generates a unique ID for daily analytics tracking.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Google Maps</h4>
            <p className="mb-4">Used on pages where embedded Google Maps appear.</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">APISID</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2">Various Google Maps usage metrics.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">HSID</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">NID</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">SAPISID</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">SID</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">SIDCC</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">SSID</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-3">National HouseCheck Corporation (Including HouseFax)</h4>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">ARRAffinity</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2">Used for load balancing on Azure-hosted sites.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Incapsula</h4>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">incap_ses_xxx_xxxxxx</td>
                    <td className="border border-gray-300 px-4 py-2">Performance/Security</td>
                    <td className="border border-gray-300 px-4 py-2">Preserves session states for security and performance.</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">visid_incap_xxxxxx</td>
                    <td className="border border-gray-300 px-4 py-2">Performance/Security</td>
                    <td className="border border-gray-300 px-4 py-2">Security and performance optimization.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Listhub</h4>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">lhac</td>
                    <td className="border border-gray-300 px-4 py-2">Unclassified</td>
                    <td className="border border-gray-300 px-4 py-2">Unclassified cookie.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-3">MortgageLoan</h4>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">gwcc</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2">Supports MortgageLoan.com widget integration.</td>
                    <td className="border border-gray-300 px-4 py-2">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing and Blocking Cookies</h2>
            
            <p className="mb-4">
              You may manage, block, or delete cookies through your browser settings. If you disable all cookies, some website features may not function properly.
            </p>
            
            <p className="mb-8">
              More information about cookies can be found at: <a href="http://www.allaboutcookies.org" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Cookie Policy</h2>
            
            <p>
              TRG may update this Cookie Policy periodically. It is your responsibility to review this policy for the latest version.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;