import LegalPolicyLayout from "./LegalPolicyLayout";

export default function CookiePolicy() {
  const sections = [
    {
      title: "1. Introduction",
      paragraphs: [
        "This Cookie Policy explains how Dispute Paisa uses cookies and similar technologies on its website and, where applicable, its digital services.",
        "Cookies are small text files stored on a user's device by a website. They may help websites function correctly, remember preferences, improve security, understand website usage, and support relevant services.",
      ],
    },
    {
      title: "2. What Are Cookies?",
      paragraphs: [
        "Cookies are small files that a website may store in a browser. Similar technologies may include session storage, pixels, tags, and other tools used for functionality, analytics, or security.",
        "Cookies may be temporary or persistent, depending on their purpose and configuration.",
      ],
    },
    {
      title: "3. Types of Cookies We May Use",
      paragraphs: [
        "A. Essential Cookies: These cookies may be required for core website functions, such as maintaining a session, protecting forms, supporting secure login, and preventing fraudulent activity.",
        "B. Functional Cookies: These cookies may remember user preferences, language settings, or other choices to improve the user experience.",
        "C. Analytics Cookies: Where enabled, these cookies may help us understand website traffic, visitor interactions, page performance, and areas that require improvement.",
        "D. Marketing Cookies: If advertising or marketing technologies are implemented, they may be used to measure advertising performance or support relevant advertising, subject to applicable consent requirements.",
        "Note: Dispute Paisa will use only the categories and technologies actually implemented on its website. Non-essential cookies will be managed according to applicable legal requirements and the consent settings provided to users.",
      ],
    },
    {
      title: "4. Why We Use Cookies",
      paragraphs: [
        "Cookies and similar technologies may be used to:",
      ],
      items: [
        "Keep the website functioning correctly.",
        "Support account security and session management.",
        "Remember user preferences.",
        "Understand website performance and usage.",
        "Detect suspicious activity and improve security.",
        "Measure the performance of approved marketing campaigns, where applicable.",
      ],
    },
    {
      title: "5. Third-Party Cookies",
      paragraphs: [
        "Some website features may be provided by third-party services, such as analytics providers, embedded content providers, payment service providers, or advertising platforms.",
        "These services may use their own cookies or similar technologies, subject to their configurations and applicable policies.",
        "Where required, Dispute Paisa will provide appropriate disclosures and obtain consent before enabling non-essential third-party tracking.",
      ],
    },
    {
      title: "6. Cookie Consent and Preferences",
      paragraphs: [
        "Where applicable, users will be given an opportunity to review and manage cookie preferences.",
        "Users may be able to accept all cookies, reject non-essential cookies, or select individual categories. Essential cookies may remain active where necessary for the requested website functionality or security.",
        "Where consent is required, non-essential cookies should not be activated before the required consent is obtained.",
        "Users should be able to change or withdraw their cookie preferences through the available website settings, where applicable.",
      ],
    },
    {
      title: "7. Managing Cookies Through Your Browser",
      paragraphs: [
        "Users can manage or delete cookies through their browser settings. Browser controls may allow users to block all cookies, block selected cookies, or delete existing cookies.",
        "Disabling essential cookies may affect login, session management, forms, or other website features.",
      ],
    },
    {
      title: "8. Personal Information and Privacy",
      paragraphs: [
        "Information collected through cookies may sometimes be associated with other information, depending on the technology and configuration used.",
        "Any personal data collected through cookies will be handled in accordance with the Dispute Paisa Privacy Policy and applicable law.",
        "Users should refer to our Privacy Policy for additional information about personal data, its use, sharing, retention, and applicable rights.",
      ],
    },
    {
      title: "9. Data Security and Retention",
      paragraphs: [
        "Cookie-related information will be retained according to the purpose of the technology, its configuration, and applicable retention requirements.",
        "Dispute Paisa will take appropriate measures to protect information handled through its systems.",
      ],
    },
    {
      title: "10. Updates to This Policy",
      paragraphs: [
        "We may update this Cookie Policy when our website features, technologies, business practices, or applicable legal requirements change.",
        "The latest version will be published on our website with its updated date.",
      ],
    },
    {
      title: "11. Contact Us",
      paragraphs: [
        "Brand: Dispute Paisa",
        "Website: https://disputepaisa.com",
        "Legal Entity: [Insert Full Legal Entity Name]",
        "Email: [Insert Official Contact Email]",
        "Address: [Insert Registered Office Address]",
        "By continuing to use our website, users should be provided with clear information about cookies and any consent choices required by applicable law. Continued browsing alone will not be treated as consent where an affirmative choice is legally required.",
      ],
    },
  ];

  return (
    <LegalPolicyLayout
      title="Cookie Policy"
      introduction="This Cookie Policy explains how Dispute Paisa uses cookies and similar technologies on its website and digital services."
      sections={sections}
      lastUpdated="January 2026"
    />
  );
}
