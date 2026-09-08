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
          'This Privacy Statement outlines the types of personal data we gather through our website (https://obsidianstudiodesigns.github.io/Interseal-waterproofing-services/), our online quote request forms, telephone communications, WhatsApp messaging, and in-person property site inspections throughout Gauteng and surrounding regions.',
          'By accessing our website or submitting information to us, you acknowledge and agree to the data collection and usage practices described in this statement.'
        ]
      },
      {
        title: '2. Information We Collect',
        content: [
          'We only collect personal information that is reasonably necessary to provide you with our professional roofing, waterproofing, guttering, painting, plastering, and site services. This information may include:',
          '• Contact Details: Your full name, telephone and mobile numbers, WhatsApp contact information, and email address.',
          '• Property & Site Information: Physical street address, suburb, complex or estate name, building type (residential, commercial, or industrial), and roof specifications.',
          '• Project & Quotation Specifics: Descriptions of water ingress or damage, roofing dimensions, urgent leak indications, service preferences, notes, and photographs or video footage of roof structures provided by you for quotation diagnostics.',
          '• Digital & Technical Data: Browser type, operating system, anonymous interaction timestamps, and device identifiers collected automatically when browsing our web pages.'
        ]
      },
      {
        title: '3. How We Use Your Information',
        content: [
          'We process your personal information strictly for legitimate operational and business purposes, including:',
          '• Preparing, calculating, and delivering accurate, no-obligation quotations for waterproofing, roof repairs, and related services.',
          '• Scheduling on-site inspections, measurements, and consultations with our qualified roofing specialists.',
          '• Executing contracted services, managing job site logistics, and maintaining safety compliance.',
          '• Issuing formal invoices, guarantees, and written warranties for completed torch-on, gutter, or roof restoration projects.',
          '• Responding promptly to your customer service questions, urgent storm emergency queries, and warranty inquiries via call or WhatsApp.',
          '• Meeting South African legal, tax, and statutory record-keeping obligations.'
        ]
      },
      {
        title: '4. Information Sharing and Disclosure',
        content: [
          'Interseal Waterproofing Services will NEVER sell, lease, rent, or trade your personal information to third-party marketing companies.',
          'We may disclose your information only under the following limited circumstances:',
          '• Authorized Service Providers: Reputable subcontractors or logistics partners (such as specialized scaffolding contractors or rubble disposal transport) working under our direct supervision strictly to complete your project.',
          '• Legal Requirements: Where required by applicable South African laws, court orders, or governmental regulatory authorities.',
          '• Safety and Asset Protection: When necessary to prevent fraud, enforce our service terms, or protect the physical safety of our workers, clients, or the public.'
        ]
      },
      {
        title: '5. Data Security Measures',
        content: [
          'We implement robust technical and organizational security controls to protect your personal information from loss, misuse, unauthorized access, alteration, or unlawful destruction.',
          'All web transmissions are encrypted using standard Hypertext Transfer Protocol Secure (HTTPS / SSL). Physical records and digital communications are stored on password-protected, encrypted systems accessible only to authorized personnel who require access to perform their duties.'
        ]
      },
      {
        title: '6. Retention of Personal Information',
        content: [
          'We retain personal records only for as long as necessary to fulfill the purposes for which they were gathered, or to comply with statutory legal and accounting retention mandates under South African legislation (such as keeping tax invoices for a minimum of 5 years under the Tax Administration Act).',
          'Client service records and project warranty documentation are retained throughout the active warranty duration (e.g., up to 10 years for torch-on systems) to honor guarantees effectively.'
        ]
      },
      {
        title: '7. Your Rights and Contact Details',
        content: [
          'You have the right to request access to, correction of, or deletion of your personal data in our custody. For inquiries or updates regarding your data, please contact our team directly at 064 038 9839 or email obsidianstudiodesigns@gmail.com.'
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
          '2. Processing Limitation: Personal data is processed lawfully, transparently, and in a reasonable manner that does not infringe on privacy. Data is collected with the data subject\'s consent or to fulfill a requested service/contract.',
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
          'In compliance with Sections 55 and 56 of POPIA, Interseal has designated an Information Officer responsible for overseeing POPIA and PAIA compliance:',
          '• Responsible Body: Interseal Waterproofing Services',
          '• Designated Role: Information Officer',
          '• Contact Phone: 064 038 9839',
          '• Contact Email: obsidianstudiodesigns@gmail.com',
          '• Geographic Jurisdiction: Gauteng, South Africa (Pretoria, Johannesburg, Centurion & Surrounds)'
        ]
      },
      {
        title: '4. Rights of Data Subjects under Section 5',
        content: [
          'As a data subject in South Africa, you are entitled to the following statutory rights under POPIA:',
          '• Right of Access: You may request confirmation of whether Interseal holds personal information about you and request a copy of that record.',
          '• Right to Request Correction or Deletion (Section 24): You may request that inaccurate, irrelevant, excessive, outdated, or unlawfully obtained personal info be corrected, destroyed, or deleted.',
          '• Right to Object (Section 11(3)): You have the right to object to the processing of your personal information on reasonable grounds at any time, in the prescribed manner.',
          '• Right to Object to Direct Marketing (Section 69): You may refuse or opt out of any unsolicited electronic direct marketing messages.',
          '• Right to Complain: You have the right to submit a complaint to the Information Regulator if you believe your personal information has been compromised or misused.'
        ]
      },
      {
        title: '5. Direct Marketing & Electronic Communications',
        content: [
          'Interseal adheres strictly to Section 69 of POPIA regarding direct marketing communications. We do not engage in automated unsolicited mass robocalling or spam emailing. We communicate directly with individuals who have requested quotes, called our helpline, initiated contact via WhatsApp, or contracted our services.'
        ]
      },
      {
        title: '6. The Information Regulator (South Africa)',
        content: [
          'If you are dissatisfied with how Interseal handles your personal data, you have the right to lodge a complaint with the South African Information Regulator:',
          '• Physical Address: JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001',
          '• Postal Address: P.O. Box 31533, Braamfontein, Johannesburg, 2017',
          '• General Enquiries: enquiries@inforegulator.org.za',
          '• POPIA Complaints: POPIAComplaints@inforegulator.org.za',
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
          'This Section 51 Manual has been prepared in accordance with Section 51 of PAIA (as amended by POPIA) for Interseal Waterproofing Services, operating as a private business entity in South Africa.'
        ]
      },
      {
        title: '2. Contact Details of the Private Body',
        content: [
          '• Entity Name: Interseal Waterproofing Services',
          '• Operating Region: Gauteng Province (Pretoria, Centurion, Midrand, Johannesburg, Randburg, Sandton, East Rand)',
          '• Telephone: 064 038 9839',
          '• Email Address: obsidianstudiodesigns@gmail.com',
          '• Web Address: https://obsidianstudiodesigns.github.io/Interseal-waterproofing-services/'
        ]
      },
      {
        title: '3. Guide on How to Use PAIA (Section 10 Guide)',
        content: [
          'The Information Regulator has compiled a comprehensive, official Guide on how to use PAIA. This Guide is available in all official South African languages.',
          'Members of the public can inspect or obtain copies of this Guide directly from the Information Regulator\'s website (https://inforegulator.org.za) or by visiting their offices at JD House, 27 Stiemens Street, Braamfontein, Johannesburg.'
        ]
      },
      {
        title: '4. Records Automatically Available (Section 52)',
        content: [
          'The following categories of records are automatically available without having to submit a formal PAIA request:',
          '• Public information published on our official website, including service descriptions, workmanship galleries, customer testimonials, and FAQs.',
          '• Marketing flyers, service pamphlets, and general promotional brochures.',
          '• Standard company contact details, public service terms, and this PAIA Manual.'
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
          '• Value-Added Tax Act 89 of 1991'
        ]
      },
      {
        title: '6. Categories of Records Held by Interseal',
        content: [
          'Interseal maintains records relating to the following operational subjects:',
          '• Client Records: Quotations, site inspection notes, written contracts, project work orders, customer correspondence, and guarantee / warranty documents.',
          '• Financial & Accounting: Invoices, receipts, expense records, supplier payment records, and banking transaction summaries.',
          '• Operational & Safety: Material safety data sheets (MSDS) for torch-on bitumen membranes, primers, liquid rubber, paint technical sheets, tool maintenance logs, and health & safety compliance checklists.'
        ]
      },
      {
        title: '7. Procedure for Requesting Access to Records',
        content: [
          'To request access to records held by Interseal that are not automatically available:',
          '1. Form Submission: Complete the prescribed Form 2 (Request for Access to Record of Private Body) available from the Information Regulator\'s portal.',
          '2. Identification: Provide sufficient detail to enable the Information Officer to identify the requested record and verify your identity.',
          '3. Exercise of Rights: Clearly state the right you wish to exercise or protect, and explain why the requested record is required for that purpose.',
          '4. Fees: Pay the prescribed statutory request fee as determined by the Minister and Information Regulator.',
          '5. Timeframe: Interseal will evaluate the request and notify the requester within 30 calendar days of receipt, subject to statutory extensions permitted under Section 57 of PAIA.'
        ]
      },
      {
        title: '8. Grounds for Refusal of Access',
        content: [
          'Under Chapter 4 of PAIA, a private body may or must refuse a request for access if it relates to:',
          '• Mandatory protection of privacy of a third party who is a natural person (including a deceased individual).',
          '• Mandatory protection of commercial information or trade secrets of a third party.',
          '• Protection of confidential information under an agreement with a third party.',
          '• Mandatory protection of the safety of individuals and protection of property.'
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
          'Cookies are small text files placed onto your computer, tablet, or mobile device when you visit a website. Local storage (such as browser localStorage) works similarly by allowing web applications to store small bits of preference data locally on your device.',
          'These technologies help websites remember your device, preferences, and form selections, ensuring a seamless and efficient browsing experience.'
        ]
      },
      {
        title: '2. How Interseal Uses Cookies and Storage',
        content: [
          'We use cookies and local storage for specific, limited, and user-friendly purposes:',
          '• Strictly Necessary / Essential Storage: Required to enable core site functionality, maintain navigation state, secure our quote forms, and remember your cookie preferences.',
          '• Functional Storage: Allows our free quote calculator to remember your selected services and job draft details so you do not lose your progress if you navigate or refresh the page.',
          '• Performance & Analytical Insights: Helps us understand aggregated visitor patterns (such as which services are most viewed) to optimize loading speeds, ensure mobile responsiveness, and enhance customer accessibility.'
        ]
      },
      {
        title: '3. Categories of Cookies We Use',
        content: [
          '1. Essential Cookies: Always active. They ensure basic website security, responsive UI rendering, and the recording of your cookie consent choice.',
          '2. Preference / Functional Storage: Remembers your property type choices, suburb input drafts, or dismissed notices during your browsing session.',
          '3. Third-Party Integration Links: When you click direct links to external services such as WhatsApp (wa.me) or telephone links, those external platforms have their own independent cookie and privacy policies.'
        ]
      },
      {
        title: '4. Cookie Management and Disabling',
        content: [
          'You have complete control over whether to allow cookies on your device:',
          '• Cookie Banner Settings: You can use our on-site Cookie Consent Banner or the "Cookie Preferences" link in the footer to customize your choices at any time.',
          '• Browser Settings: Most modern browsers (Chrome, Safari, Edge, Firefox) permit you to block, delete, or alert you to cookies in their settings menus.',
          'Please note that disabling strictly necessary storage may affect some interactive features of our quote request system.'
        ]
      },
      {
        title: '5. Updates to this Policy',
        content: [
          'We may periodically update this Cookie Policy to reflect changes in legal requirements (including POPIA guidelines) or technological upgrades. The latest version will always be accessible through our website footer.'
        ]
      }
    ]
  }
};
