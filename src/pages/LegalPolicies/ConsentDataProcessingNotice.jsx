import LegalPolicyLayout from "./LegalPolicyLayout";

export default function ConsentDataProcessingNotice() {
  const sections = [
    {
      title: "1. Introduction",
      paragraphs: [
        "Dispute Paisa respects the privacy of individuals and is committed to handling personal information responsibly.",
        "This Consent & Data Processing Notice explains what personal information we may collect, why we process it, how it may be used or shared, and how individuals can exercise their applicable rights.",
        "By using our website, mobile application or services, you acknowledge that your personal information may be processed as described in this Notice and our Privacy Policy, subject to applicable law and any consent required for the relevant processing activity.",
      ],
    },
    {
      title: "2. Information We May Collect",
      paragraphs: [
        "Depending on the service requested, we may collect the following information:",
      ],
      items: [
        "Basic details: Name, mobile number, email address and city or state.",
        "Identity information: PAN or other identity information where necessary for a specified service and permitted by law.",
        "Banking information: Bank name, account-related details, transaction references and information about a freeze, lien or disputed transaction, where required for case assistance.",
        "Case information: Description of the issue, complaint reference numbers, case history and communications.",
        "Documents: Relevant bank communications, transaction records, complaint acknowledgements and other supporting documents voluntarily submitted or otherwise lawfully obtained.",
        "Payment information: Transaction ID, payment status, amount and refund-related details. Payment credentials may be handled by the relevant payment service provider.",
        "Technical information: Device, browser, log and usage information, where collected through our website or application.",
      ],
    },
    {
      title: "3. Purpose of Data Processing",
      paragraphs: [
        "We may process personal information for the following purposes:",
      ],
      orderedItems: [
        "Creating and managing customer accounts.",
        "Verifying identity or contact details where required.",
        "Registering and assessing a query or case.",
        "Reviewing documents and understanding the reported issue.",
        "Providing consultation, guidance and case assistance.",
        "Communicating case updates and requesting additional information.",
        "Processing payments, refunds and transaction reconciliations.",
        "Maintaining records, preventing fraud and protecting platform security.",
        "Responding to grievances and customer support requests.",
        "Meeting applicable legal, regulatory and record-keeping obligations.",
      ],
    },
    {
      title: "4. Consent for Collection and Processing",
      paragraphs: [
        "Where consent is required by applicable law, Dispute Paisa will request consent through an appropriate method before processing the relevant personal information.",
        "Consent may be collected through a website checkbox, mobile application screen, electronic form or another legally appropriate method.",
        "The consent request should clearly identify the information being collected, the purpose of processing, the method for withdrawing consent where applicable, and how the individual can contact Dispute Paisa.",
        "Suggested consent checkbox for customer registration: \"I have read the Privacy Policy and Consent & Data Processing Notice of Dispute Paisa. I understand how my personal information may be processed for account management, query registration, case assessment, communication and the services I request. I provide my consent to the extent required by applicable law.\"",
        "The checkbox should not be pre-selected. Customers should be able to access the linked policies before making their selection.",
      ],
    },
    {
      title: "5. Consent for Sensitive Case Documents",
      paragraphs: [
        "Bank statements, identity documents, transaction records and complaint documents may contain confidential or sensitive personal information.",
        "Before requesting these documents, Dispute Paisa should explain why each document is needed and how it will be used.",
        "Suggested document-upload consent: \"I confirm that the documents I submit are relevant to my query or case. I authorise Dispute Paisa to process these documents for the purpose explained to me, subject to the Privacy Policy and applicable law.\"",
        "Customers should not upload passwords, banking PINs, OTPs, card security codes or other authentication secrets.",
      ],
    },
    {
      title: "6. Sharing of Personal Information",
      paragraphs: [
        "Where necessary for the requested service and permitted by law, information may be shared with:",
      ],
      items: [
        "Authorised Dispute Paisa employees and case-handling personnel.",
        "Authorised retailers, partners or service providers involved in the requested process.",
        "Technology, hosting, communication and customer-support providers.",
        "Payment gateways and payment service providers for transaction processing.",
        "Banks, legal professionals or other relevant parties where necessary for the requested service and legally permitted.",
        "Government authorities, law enforcement agencies or courts where required or authorised by law.",
      ],
    },
    {
      title: "7. Data Security and Confidentiality",
      paragraphs: [
        "Dispute Paisa will implement reasonable technical and organisational safeguards appropriate to the nature of the information and the risks involved.",
        "These safeguards may include access controls, authorised-user restrictions, secure transmission, audit logs, staff confidentiality obligations and secure document storage.",
        "No digital system can be guaranteed to be completely secure. If a personal data breach occurs, we will take appropriate steps in accordance with applicable legal requirements.",
      ],
    },
    {
      title: "8. Data Retention and Deletion",
      paragraphs: [
        "Personal information will be retained only for as long as reasonably necessary for the stated purpose, unless a longer retention period is required or permitted by applicable law.",
        "Retention may depend on the status of a case, payment records, legal obligations, dispute resolution requirements and legitimate security needs.",
        "Where information is no longer required, it will be deleted or anonymised in accordance with our Data Retention & Deletion Policy and applicable law.",
      ],
    },
    {
      title: "9. Withdrawal of Consent",
      paragraphs: [
        "Where processing is based on consent, an individual may withdraw consent through the method provided by Dispute Paisa or by contacting the designated support channel.",
        "Withdrawal of consent will not affect the lawfulness of processing carried out before withdrawal.",
        "After receiving a valid withdrawal request, Dispute Paisa will stop the relevant consent-based processing and take appropriate action regarding the information, subject to any applicable legal requirements or other lawful grounds for continued retention or processing.",
        "Withdrawal may affect our ability to provide certain services that require the relevant information.",
      ],
    },
    {
      title: "10. Individual Rights and Requests",
      paragraphs: [
        "Subject to applicable law, individuals may request access to information about their personal data, correction or updating of inaccurate information, deletion where applicable, withdrawal of consent, or other available rights.",
        "Requests may be submitted through:",
        "Email: [Insert Privacy Support Email]",
        "Phone/WhatsApp: [Insert Official Contact Number]",
        "Postal Address: [Insert Registered Office Address]",
        "We may request reasonable information to verify the identity of the person making the request before acting on it.",
        "Requests will be handled within the timeframes prescribed by applicable law.",
      ],
    },
    {
      title: "11. Children’s Information",
      paragraphs: [
        "Dispute Paisa's services are intended for individuals who are legally eligible to use the relevant service.",
        "Where personal information relating to a child is involved, we will follow applicable legal requirements concerning age, parental or guardian consent and the processing of children's personal data.",
      ],
    },
    {
      title: "12. Marketing Communications",
      paragraphs: [
        "Service-related messages may be sent to provide case updates, request documents, communicate payment status or respond to customer queries.",
        "Promotional communications will be handled in accordance with applicable law and any consent or preference requirements. Customers may use the available unsubscribe or opt-out method for promotional messages.",
        "Consent to receive marketing communications should be separate from consent necessary to provide the requested service.",
      ],
    },
    {
      title: "13. Third-Party Websites and Services",
      paragraphs: [
        "Our website or application may contain links to third-party websites or services. Their privacy and data-processing practices are governed by their own policies.",
        "Customers should review the relevant third-party terms before sharing information with them.",
      ],
    },
    {
      title: "14. Updates to This Notice",
      paragraphs: [
        "Dispute Paisa may update this Notice to reflect changes in its services, technology, processing activities or legal obligations.",
        "The latest version will be published on https://disputepaisa.com with its effective or updated date. Where legally required, we will seek fresh consent or provide additional notice before implementing material changes.",
      ],
    },
    {
      title: "15. Contact Information",
      paragraphs: [
        "For questions, consent withdrawal requests or personal data-related concerns, please contact:",
        "Website: https://disputepaisa.com",
        "Legal Entity: TELERING PROCESS PRIVATE LIMITED",
        "Brand: DisputePaisa",
        "Email: support@disputepaisa.com",
        "Phone/WhatsApp: NA",
        "Registered Office: 2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA, NEW DELHI - 110043",
       
      ],
    },
  ];

  return (
    <LegalPolicyLayout
      title="Consent & Data Processing Notice"
      introduction="Dispute Paisa respects the privacy of individuals and is committed to handling personal information responsibly. This notice explains what personal information we may collect, why we process it, how it may be used or shared, and how individuals can exercise their applicable rights."
      sections={sections}
      lastUpdated="06/10/2026"
    />
  );
}
