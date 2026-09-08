export interface PolicySection {
  title: string;
  content: string[];
}

export interface LegalDocument {
  id: 'privacy' | 'popi' | 'paia' | 'cookies';
  title: string;
  subtitle: string;
  lastUpdated: string;
  badge: string;
  sections: PolicySection[];
}

/**
 * Interseal operates on voice and WhatsApp only - it does not run a business
 * email account. Every statutory contact point below therefore routes to the
 * telephone / WhatsApp number, which is the channel the business actually
 * monitors. Do not reintroduce an email address here unless the client has
 * confirmed a real, monitored mailbox.
 */
export const SITE_URL = 'https://obsidianstudiodesigns.github.io/Interseal-waterproofing-Services/';
const CONTACT_LINE = 'telephone or WhatsApp on 064 038 9839';

export const LEGAL_POLICIES: Record<'privacy' | 'popi' | 'paia' | 'cookies', LegalDocument> = {
  privacy: {
    id: 'privacy',
    title: 'Privacy Statement',
    subtitle: 'How Interseal Waterproofing Services collects, uses, and safeguards your personal information.',
    lastUpdated: 'September 2026',
    badge: 'Commitment to Privacy',
    sections: [
      {
        title: '1. Introduction and Scope',
        content: [
          'Interseal Waterproofing Services ("Interseal", "we", "us", or "our") is dedicated to respecting and safeguarding the personal privacy of our website visitors, clients, prospective customers, and business associates.',
          `This Privacy Statement outlines the types of personal data we gather through our website (${SITE_URL}), our online quote request tool, telephone communications, WhatsApp messaging, and in-person property site inspections throughout Gauteng and surrounding regions.`,
          'This statement is issued in terms of the Protection of Personal Information Act 4 of 2013 ("POPIA") and should be read together with our POPI Act Policy, our PAIA Manual, and our Cookie Policy.',
          'Browsing this website does not by itself constitute consent to the processing of your personal information. We rely on your consent, or on the necessity of concluding or performing a contract with you, only at the point where you actively choose to send us your details.'
        ]
      },
      {
        title: '2. Information We Collect',
        content: [
          'We only collect personal information that is reasonably necessary to provide you with our professional roofing, waterproofing, guttering, painting, plastering, and site services. This information may include:',
          '• Contact Details: Your full name, telephone or mobile number, and WhatsApp contact information. We do not operate a business email account and therefore do not request or collect email addresses.',
          '• Property & Site Information: Physical street address, suburb, complex or estate name, building type (residential, commercial, or industrial), and roof specifications.',
          '• Project & Quotation Specifics: Descriptions of water ingress or damage, roofing dimensions, urgent leak indications, service preferences, and notes you provide.',
          '• Photographs You Choose To Send: Any photographs or video footage of your roof or damaged area that you voluntarily send to us via WhatsApp for quotation diagnostics. We never capture images from your device automatically.',
          '• Site Inspection Records: Measurements, condition notes, and photographs taken by our technicians during an on-site assessment you have booked.',
          'We do not knowingly collect special personal information (as defined in section 26 of POPIA) such as health, biometric, religious, or political data, and we do not require it in order to quote on or perform our services.'
        ]
      },
      {
        title: '3. How Information Reaches Us (Website Forms)',
        content: [
          'It is important that you understand how our website actually works, so that you know exactly where your information goes:',
          '• Our online quote calculator runs entirely inside your own web browser. The details you type are NOT transmitted to, or stored on, any Interseal server or database while you are completing the form.',
          '• Your information only reaches us at the moment you choose to press "Send via WhatsApp", which opens WhatsApp on your own device with a pre-filled message that you must send yourself, or when you call us directly.',
          '• Until you take that step, you remain in full control of your information and may simply close the window without anything being sent.',
          '• Once you send us a WhatsApp message, that message is delivered and stored in accordance with WhatsApp\'s own end-to-end encrypted service and its independent privacy policy, over which we have no control.'
        ]
      },
      {
        title: '4. How We Use Your Information',
        content: [
          'We process your personal information strictly for legitimate operational and business purposes, including:',
          '• Preparing, calculating, and delivering accurate, no-obligation quotations for waterproofing, roof repairs, and related services.',
          '• Scheduling on-site inspections, measurements, and consultations with our qualified roofing specialists.',
          '• Executing contracted services, managing job site logistics, and maintaining safety compliance.',
          '• Issuing formal invoices, guarantees, and written warranties for completed torch-on, gutter, or roof restoration projects.',
          '• Responding promptly to your customer service questions, urgent storm emergency queries, and warranty inquiries via call or WhatsApp.',
          '• Meeting South African legal, tax, and statutory record-keeping obligations.',
          'We do not use your personal information to make any decision about you based solely on automated processing, and we do not profile you for advertising purposes.'
        ]
      },
      {
        title: '5. Information Sharing and Disclosure',
        content: [
          'Interseal Waterproofing Services will NEVER sell, lease, rent, or trade your personal information to third-party marketing companies.',
          'We may disclose your information only under the following limited circumstances:',
          '• Authorized Service Providers: Reputable subcontractors or logistics partners (such as specialized scaffolding contractors or rubble disposal transport) working under our direct supervision strictly to complete your project. These operators are bound to confidentiality and to process your data only on our instruction, as required by section 20 and section 21 of POPIA.',
          '• Legal Requirements: Where required by applicable South African laws, court orders, or governmental regulatory authorities.',
          '• Safety and Asset Protection: When necessary to prevent fraud, enforce our service terms, or protect the physical safety of our workers, clients, or the public.'
        ]
      },
      {
        title: '6. Cross-Border Processing and Hosting',
        content: [
          'This website is published through GitHub Pages, a static website hosting service whose servers are located outside the Republic of South Africa. As a result, standard technical request data (such as your IP address, browser type, and the time of your visit) is processed by that hosting provider abroad.',
          'In terms of section 72 of POPIA, we confirm that this transfer is limited to technical hosting data, that the recipient is subject to binding contractual and legal safeguards providing an adequate level of protection, and that the transfer is necessary for the performance of the service you requested by visiting the site.',
          'Your quotation details, name, and phone number are not uploaded to that host. As explained in section 3, they travel directly from your device to us via WhatsApp or telephone.'
        ]
      },
      {
        title: '7. Data Security Measures',
        content: [
          'We implement reasonable technical and organizational security controls, as required by section 19 of POPIA, to protect your personal information from loss, damage, unauthorized access, alteration, or unlawful destruction.',
          'All traffic to and from this website is encrypted using Hypertext Transfer Protocol Secure (HTTPS / TLS). WhatsApp correspondence is end-to-end encrypted by that platform.',
          'Physical job records, quotations, and photographs are stored securely and are accessible only to the owner and to authorized personnel who need them to perform their duties. We regularly review our safeguards in line with generally accepted information security practice.',
          'In the event of a security compromise affecting your personal information, we will notify you and the Information Regulator as soon as reasonably possible, as required by section 22 of POPIA.'
        ]
      },
      {
        title: '8. Retention of Personal Information',
        content: [
          'We retain personal records only for as long as necessary to fulfill the purposes for which they were gathered, or to comply with statutory legal and accounting retention mandates under South African legislation (such as keeping tax invoices for a minimum of 5 years under the Tax Administration Act).',
          'Client service records and project warranty documentation are retained throughout the active warranty duration (for example, up to 10 years for torch-on systems) so that we can honour our guarantees effectively.',
          'Once a record is no longer required for a lawful purpose, it is destroyed, deleted, or de-identified in a manner that prevents its reconstruction.'
        ]
      },
      {
        title: '9. Children and Minors',
        content: [
          'Our services are directed at property owners, managing agents, and businesses. We do not knowingly market to, or intentionally collect personal information from, any person under the age of 18 without the consent of a competent person, as required by section 34 and section 35 of POPIA.',
          'If you believe a minor has supplied us with personal information, please contact us so that the record can be removed.'
        ]
      },
      {
        title: '10. Links to Third-Party Services',
        content: [
          'This website provides direct links to external services, most notably WhatsApp (wa.me) and your device\'s telephone dialer. Selecting these links takes you off our website.',
          'Those platforms operate under their own independent privacy policies and terms of service. We are not responsible for how they collect or process information once you leave our site, and we encourage you to review their policies.'
        ]
      },
      {
        title: '11. Your Rights and How to Contact Us',
        content: [
          'As a data subject you have the right to request access to, correction of, objection to, or deletion of the personal data we hold about you. You also have the right not to receive unsolicited direct marketing.',
          `Because Interseal operates on voice and WhatsApp rather than email, all privacy requests must be directed to our Information Officer by ${CONTACT_LINE}. We will acknowledge your request and respond within a reasonable period, and within any timeframe prescribed by POPIA or PAIA.`,
          'We may ask you to verify your identity before we act on a request, in order to protect your information from being disclosed to the wrong person.',
          'If you are not satisfied with the way we have handled your personal information, you may lodge a complaint with the Information Regulator (South Africa) at JD House, 27 Stiemens Street, Braamfontein, Johannesburg, or by emailing POPIAComplaints@inforegulator.org.za. Full details appear in our POPI Act Policy.'
        ]
      },
      {
        title: '12. Changes to this Privacy Statement',
        content: [
          'We may update this Privacy Statement from time to time to reflect changes in our operations, technology, or legal obligations. The revision date shown at the top of this document indicates when it was last amended.',
          'The current version is always available through the footer of this website. We encourage you to review it periodically.'
        ]
      }
    ]
  },
  popi: {
    id: 'popi',
    title: 'POPI Act Compliance Policy',
    subtitle: 'Protection of Personal Information Act (Act No. 4 of 2013) Policy Notice for Interseal Waterproofing Services.',
    lastUpdated: 'September 2026',
    badge: 'POPIA Compliant',
    sections: [
      {
        title: '1. Commitment to the POPI Act',
        content: [
          'The Protection of Personal Information Act, 2013 (POPIA / POPI Act) regulates the lawful collection, handling, storage, and processing of personal data belonging to natural and juristic persons in South Africa.',
          'Interseal Waterproofing Services ("Interseal") operates as a "Responsible Party" under POPIA. We are fully committed to complying with all provisions of the Act and protecting the constitutional right to privacy of all our clients, contractors, and website visitors.'
        ]
      },
      {
        title: '2. The 8 Conditions for Lawful Processing',
        content: [
          'In terms of Chapter 3 of POPIA, Interseal complies with the eight statutory conditions for the lawful processing of personal information:',
          '1. Accountability: Interseal ensures that all conditions of POPIA and required safeguards are observed at all times.',
          '2. Processing Limitation: Personal data is processed lawfully, transparently, and in a reasonable manner that does not infringe on privacy. Data is collected with the data subject\'s consent or to fulfill a requested service or contract.',
          '3. Purpose Specification: Personal information is collected for explicit, defined, and lawful purposes relating to quotation, inspection, waterproofing, and roofing operations.',
          '4. Further Processing Limitation: Any secondary processing is fully compatible with the primary purpose for which the information was initially gathered.',
          '5. Information Quality: We take reasonable steps to ensure that personal records are accurate, complete, not misleading, and updated where necessary.',
          '6. Openness: Interseal maintains transparent documentation of all data processing operations and notifies data subjects of why and how their data is captured.',
          '7. Security Safeguards: Interseal secures the integrity and confidentiality of personal information in its possession through technical, physical, and organizational measures preventing unauthorized access, destruction, or exposure.',
          '8. Data Subject Participation: Data subjects maintain statutory rights to confirm what data is held, request copies, and demand correction or deletion of outdated or inaccurate data.'
        ]
      },
      {
        title: '3. Designated Information Officer',
        content: [
          'In terms of section 1 read with sections 55 and 56 of POPIA, the head of a private body is the Information Officer of that body. The owner of Interseal Waterproofing Services accordingly acts as the designated Information Officer, and is responsible for encouraging compliance with POPIA, dealing with requests made under PAIA, and working with the Information Regulator.',
          'The Information Officer is registered with the Information Regulator in the prescribed manner.',
          '• Responsible Body: Interseal Waterproofing Services',
          '• Designated Role: Information Officer (the Owner / Head of the business)',
          '• Contact Telephone: 064 038 9839',
          '• WhatsApp (written requests): 064 038 9839',
          '• Geographic Jurisdiction: Gauteng, South Africa (Pretoria, Johannesburg, Centurion & Surrounds)',
          'Interseal does not operate a business email account. Requests requiring a written record should be sent by WhatsApp to the number above, or posted to the business address, which is available on request from the Information Officer.'
        ]
      },
      {
        title: '4. Rights of Data Subjects under Section 5',
        content: [
          'As a data subject in South Africa, you are entitled to the following statutory rights under POPIA:',
          '• Right of Access: You may request confirmation of whether Interseal holds personal information about you and request a copy of that record.',
          '• Right to Request Correction or Deletion (Section 24): You may request that inaccurate, irrelevant, excessive, outdated, or unlawfully obtained personal information be corrected, destroyed, or deleted.',
          '• Right to Object (Section 11(3)): You have the right to object to the processing of your personal information on reasonable grounds at any time, in the prescribed manner.',
          '• Right to Object to Direct Marketing (Section 69): You may refuse or opt out of any unsolicited electronic direct marketing messages.',
          '• Right Not to Be Subject to Automated Decision-Making (Section 71): You may not be subjected to a decision with legal consequences based solely on automated processing. Interseal does not carry out any such automated decision-making.',
          '• Right to Complain: You have the right to submit a complaint to the Information Regulator if you believe your personal information has been compromised or misused.',
          'There is no charge for exercising these rights, although a prescribed fee may apply to a formal PAIA request for copies of records, as set out in our PAIA Manual.'
        ]
      },
      {
        title: '5. Direct Marketing & Electronic Communications',
        content: [
          'Interseal adheres strictly to section 69 of POPIA regarding direct marketing communications. We do not engage in automated unsolicited mass robocalling or bulk messaging, and we do not purchase or rent third-party marketing lists.',
          'We communicate directly with individuals who have requested quotes, called our helpline, initiated contact via WhatsApp, or contracted our services. You may ask us to stop contacting you at any time and we will action that request immediately.'
        ]
      },
      {
        title: '6. Security Compromise Notification',
        content: [
          'Where there are reasonable grounds to believe that personal information under our control has been accessed or acquired by an unauthorised person, Interseal will notify the Information Regulator and the affected data subjects as soon as reasonably possible after discovering the compromise, in terms of section 22 of POPIA.',
          'The notification will describe the possible consequences of the compromise, the measures we intend to take, and what the data subject can do to mitigate any adverse effects.'
        ]
      },
      {
        title: '7. The Information Regulator (South Africa)',
        content: [
          'If you are dissatisfied with how Interseal handles your personal data, you have the right to lodge a complaint with the South African Information Regulator:',
          '• Physical Address: JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001',
          '• Postal Address: P.O. Box 31533, Braamfontein, Johannesburg, 2017',
          '• General Enquiries: enquiries@inforegulator.org.za',
          '• POPIA Complaints: POPIAComplaints@inforegulator.org.za',
          '• PAIA Complaints: PAIAComplaints@inforegulator.org.za',
          '• Website: https://inforegulator.org.za'
        ]
      }
    ]
  },
  paia: {
    id: 'paia',
    title: 'PAIA Manual & Policy',
    subtitle: 'Promotion of Access to Information Act (Act No. 2 of 2000) Section 51 Manual for Interseal Waterproofing Services.',
    lastUpdated: 'September 2026',
    badge: 'Section 51 Manual',
    sections: [
      {
        title: '1. Introduction to PAIA',
        content: [
          'The Promotion of Access to Information Act, No. 2 of 2000 ("PAIA") gives effect to the constitutional right of access to any information held by the State, as well as information held by any private body that is required for the exercise or protection of any rights.',
          'This Section 51 Manual has been prepared in accordance with section 51 of PAIA (as amended by POPIA) for Interseal Waterproofing Services, operating as a private business entity in South Africa.',
          'This manual is available free of charge on this website and, on request, in printed form from the Information Officer.'
        ]
      },
      {
        title: '2. Contact Details of the Private Body',
        content: [
          '• Entity Name: Interseal Waterproofing Services',
          '• Head of the Private Body / Information Officer: The Owner, Interseal Waterproofing Services',
          '• Operating Region: Gauteng Province (Pretoria, Centurion, Midrand, Johannesburg, Randburg, Sandton, East Rand)',
          '• Telephone: 064 038 9839',
          '• WhatsApp (written requests): 064 038 9839',
          '• Email Address: Not applicable. Interseal does not operate a business email account; requests must be made by telephone, WhatsApp, or post.',
          '• Physical and Postal Address: Available on request from the Information Officer on 064 038 9839.',
          `• Web Address: ${SITE_URL}`
        ]
      },
      {
        title: '3. Guide on How to Use PAIA (Section 10 Guide)',
        content: [
          'The Information Regulator has compiled a comprehensive, official Guide on how to use PAIA. This Guide is available in all official South African languages.',
          'Members of the public can inspect or obtain copies of this Guide directly from the Information Regulator\'s website (https://inforegulator.org.za) or by visiting their offices at JD House, 27 Stiemens Street, Braamfontein, Johannesburg. Enquiries may be directed to the Regulator at enquiries@inforegulator.org.za.'
        ]
      },
      {
        title: '4. Records Automatically Available (Section 52)',
        content: [
          'The following categories of records are automatically available without having to submit a formal PAIA request:',
          '• Public information published on our official website, including service descriptions, workmanship galleries, customer testimonials, and FAQs.',
          '• Marketing flyers, service pamphlets, and general promotional brochures.',
          '• Standard company contact details, public service terms, this PAIA Manual, our Privacy Statement, our POPI Act Policy, and our Cookie Policy.'
        ]
      },
      {
        title: '5. Records Held in Accordance with Other Legislation',
        content: [
          'Where applicable, Interseal keeps records in compliance with other South African statutes, including but not limited to:',
          '• Basic Conditions of Employment Act 75 of 1997',
          '• Compensation for Occupational Injuries and Diseases Act 130 of 1993',
          '• Consumer Protection Act 68 of 2008',
          '• Electronic Communications and Transactions Act 25 of 2002',
          '• Income Tax Act 58 of 1962',
          '• Occupational Health and Safety Act 85 of 1993',
          '• Protection of Personal Information Act 4 of 2013',
          '• Tax Administration Act 28 of 2011',
          '• Value-Added Tax Act 89 of 1991'
        ]
      },
      {
        title: '6. Categories of Records Held by Interseal',
        content: [
          'Interseal maintains records relating to the following operational subjects:',
          '• Client Records: Quotations, site inspection notes, written contracts, project work orders, customer correspondence, and guarantee / warranty documents.',
          '• Financial & Accounting: Invoices, receipts, expense records, supplier payment records, and banking transaction summaries.',
          '• Operational & Safety: Material safety data sheets (MSDS) for torch-on bitumen membranes, primers, liquid rubber, paint technical sheets, tool maintenance logs, and health & safety compliance checklists.',
          '• Personnel Records: Employment contracts, payroll records, and statutory returns for staff, where applicable.'
        ]
      },
      {
        title: '7. Procedure for Requesting Access to Records',
        content: [
          'To request access to records held by Interseal that are not automatically available:',
          '1. Form Submission: Complete the prescribed Form 2 (Request for Access to Record of Private Body), set out in the PAIA Regulations and available from the Information Regulator\'s portal at https://inforegulator.org.za.',
          '2. Delivery: Submit the completed form to the Information Officer by WhatsApp or by post. Contact 064 038 9839 to confirm the current delivery address before sending.',
          '3. Identification: Provide sufficient detail to enable the Information Officer to identify the requested record and verify your identity, and specify the form of access required.',
          '4. Exercise of Rights: Clearly state the right you wish to exercise or protect, and explain why the requested record is required for that purpose.',
          '5. Fees: Pay the prescribed request fee and, where applicable, the access fee determined by the Minister in terms of section 54 of PAIA. The Information Officer will notify you of the amount payable before processing the request.',
          '6. Timeframe: Interseal will evaluate the request and notify the requester of the decision within 30 calendar days of receipt, subject to any extension permitted under section 57 of PAIA.',
          '7. Remedies: If a request is refused, the requester may apply to a court for appropriate relief in terms of section 78 of PAIA, or lodge a complaint with the Information Regulator.'
        ]
      },
      {
        title: '8. Grounds for Refusal of Access',
        content: [
          'Under Chapter 4 of PAIA, a private body may or must refuse a request for access if it relates to:',
          '• Mandatory protection of privacy of a third party who is a natural person (including a deceased individual).',
          '• Mandatory protection of commercial information or trade secrets of a third party.',
          '• Protection of confidential information under an agreement with a third party.',
          '• Mandatory protection of the safety of individuals and protection of property.',
          '• Records privileged from production in legal proceedings.',
          '• Commercial activities of the private body, including trade secrets, financial or contractual information that could prejudice Interseal in commercial competition.',
          'Where a record contains information that may be refused together with information that may be released, access will be granted to the severable part of the record, as provided for in section 28 of PAIA.'
        ]
      }
    ]
  },
  cookies: {
    id: 'cookies',
    title: 'Cookie Policy',
    subtitle: 'Details regarding cookies, local storage technologies, and how you can manage your preferences on our website.',
    lastUpdated: 'September 2026',
    badge: 'Cookie Transparency',
    sections: [
      {
        title: '1. What Are Cookies and Local Storage?',
        content: [
          'Cookies are small text files placed onto your computer, tablet, or mobile device when you visit a website. Local storage (such as browser localStorage) works similarly by allowing web applications to store small pieces of preference data locally on your device.',
          'These technologies help websites remember your device, preferences, and form selections, ensuring a seamless and efficient browsing experience.'
        ]
      },
      {
        title: '2. What This Website Actually Stores',
        content: [
          'We want to be precise about this, because many cookie notices overstate what a site does. At present:',
          '• This website does not set any advertising cookies, and does not share data with advertising networks.',
          '• This website does not currently run Google Analytics or any other third-party analytics or tracking service.',
          '• The only item stored on your device is a single browser localStorage entry named "interseal_cookie_consent", which records the cookie choices you made in our consent banner so that you are not asked again on every visit.',
          '• That entry stays on your own device. It is not transmitted to us, and it contains no name, phone number, or identifying information.'
        ]
      },
      {
        title: '3. Categories Covered by Our Consent Banner',
        content: [
          '1. Strictly Necessary / Essential Storage: Always active. This enables basic site security, responsive interface rendering, and the recording of your cookie consent choice itself. It cannot be switched off without breaking the site.',
          '2. Preference / Functional Storage: Remembers interface choices such as dismissed notices during your browsing session.',
          '3. Performance & Analytics: Offered in the banner so that your choice is recorded in advance. No analytics tooling is loaded on the site today. If we introduce analytics in future, it will only be activated for visitors who have opted in through this setting.',
          '4. Third-Party Integration Links: When you click direct links to external services such as WhatsApp (wa.me) or telephone links, those external platforms apply their own independent cookie and privacy policies.'
        ]
      },
      {
        title: '4. Cookie Management and Disabling',
        content: [
          'You have complete control over whether to allow cookies and local storage on your device:',
          '• Cookie Banner Settings: You can use our on-site Cookie Consent Banner or the "Cookie Preferences" link in the footer to review or change your choices at any time.',
          '• Browser Settings: Most modern browsers (Chrome, Safari, Edge, Firefox) permit you to block, delete, or be alerted about cookies and site data in their settings menus.',
          'Please note that clearing your browser storage will also erase your saved consent choice, so the banner will appear again on your next visit.'
        ]
      },
      {
        title: '5. Updates to this Policy',
        content: [
          'We may periodically update this Cookie Policy to reflect changes in legal requirements (including POPIA and Information Regulator guidance) or technological upgrades. The revision date at the top of this document shows when it was last amended, and the latest version is always accessible through our website footer.'
        ]
      }
    ]
  }
};
