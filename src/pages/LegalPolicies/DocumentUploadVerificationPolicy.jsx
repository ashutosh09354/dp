import LegalPolicyLayout from "./LegalPolicyLayout";

export default function DocumentUploadVerificationPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      paragraphs: [
        "Dispute Paisa understands that documents may be required to assess banking and financial disputes. This policy explains how customers can submit documents, how submitted documents may be reviewed, and how document information is handled during the service process.",
        "Our objective is to handle documents responsibly, maintain confidentiality and request only information reasonably necessary for the service requested.",
      ],
    },
    {
      title: "2. Scope of This Policy",
      paragraphs: [
        "This policy applies to documents submitted through the Dispute Paisa website, mobile application, authorised case registration channels or other approved methods.",
        "It covers documents submitted for issues such as bank account freeze or debit freeze, bank lien or amount held in an account, cyber-fraud-related banking issues, unauthorised transactions, and other financial disputes supported by Dispute Paisa. The documents required will depend on the nature of the case.",
      ],
    },
    {
      title: "3. Types of Documents That May Be Requested",
      paragraphs: [
        "Depending on the case, customers may be asked to submit:",
      ],
      items: [
        "Identity or contact verification documents, where necessary.",
        "Relevant bank communications, notices or letters.",
        "Bank statements or relevant transaction records.",
        "Cybercrime complaint acknowledgements or reference numbers.",
        "Complaint details submitted to a bank or other authority.",
        "Relevant payment receipts or transaction references.",
        "Supporting documents needed to understand the reported issue.",
        "Additional information reasonably required for case assessment.",
      ],
    },
    {
      title: "4. Customer Consent and Authorisation",
      paragraphs: [
        "Before collecting documents that contain personal information, Dispute Paisa will provide appropriate information about the purpose of collection and obtain consent where required by applicable law.",
        "Customers should upload documents only for their own case or where they have appropriate authority to submit them on behalf of another person.",
        "Suggested consent statement: \"I confirm that I am authorised to submit these documents for the stated query or case. I understand that Dispute Paisa may review and process the submitted documents for case assessment and the services requested, subject to its Privacy Policy and applicable law.\"",
        "Consent should not be pre-selected where an affirmative consent action is required.",
      ],
    },
    {
      title: "5. Document Upload Process",
      paragraphs: [
        "Customers should follow the instructions provided on the relevant case screen or by an authorised Dispute Paisa representative.",
        "Depending on the platform, the upload process may include:",
      ],
      orderedItems: [
        "Selecting the relevant Query ID or Case ID.",
        "Choosing the requested document category.",
        "Uploading a clear copy in an accepted file format.",
        "Checking that the uploaded file belongs to the correct case.",
        "Confirming submission, where required.",
        "Checking for an upload acknowledgement or status update.",
      ],
    },
    {
      title: "6. Document Quality and Accuracy",
      paragraphs: [
        "Customers are responsible for ensuring that uploaded documents are readable, complete and accurate.",
        "Documents should not be altered, forged, manipulated or knowingly submitted in a misleading form.",
        "Where necessary information is unclear, missing or unreadable, Dispute Paisa may request a clearer copy or additional supporting information.",
      ],
    },
    {
      title: "7. Document Verification and Review",
      paragraphs: [
        "Dispute Paisa may review submitted documents to assess their relevance, completeness, consistency and suitability for the requested service.",
        "Depending on the case, the review may include checking whether required documents have been submitted, comparing relevant details across submitted records, identifying missing information or apparent inconsistencies, requesting clarification or supporting evidence, and organising documents for the agreed case assistance process.",
        "A document review does not automatically constitute independent authentication, forensic verification or certification of the document's genuineness.",
        "Where formal verification is required, it may need to be carried out by the relevant issuing institution or authorised professional.",
      ],
    },
    {
      title: "8. Additional Documents and Clarifications",
      paragraphs: [
        "If further information is required, Dispute Paisa may notify the customer through an available communication channel.",
        "The customer should provide the requested information within the communicated timeframe, where possible.",
        "Delays in submitting additional documents may affect the progress of the case. If the required information is not received, Dispute Paisa may pause its review or close the service request in accordance with the Case Registration & Service Policy.",
      ],
    },
    {
      title: "9. Rejected or Incomplete Documents",
      paragraphs: [
        "A document may be marked incomplete or unsuitable for review if the file is unreadable or damaged, required pages or relevant information are missing, the document does not relate to the reported issue, the information is inconsistent and requires clarification, the file is in an unsupported format, or there are reasonable grounds to suspect manipulation or misuse.",
        "Where reasonably possible, the customer will be informed of the issue and given an opportunity to submit a corrected document.",
        "A document being marked incomplete does not, by itself, establish that the customer's underlying claim is false.",
      ],
    },
    {
      title: "10. Prohibited Documents and Information",
      paragraphs: [
        "Customers must not upload or share OTPs, banking PINs or passwords, card CVV or other authentication secrets, documents belonging to another person without appropriate authority, forged, altered or misleading documents, information obtained unlawfully, or unnecessary personal information unrelated to the case.",
        "Customers should avoid uploading complete identity or banking records when only a relevant extract is needed and an appropriate alternative is available.",
      ],
    },
    {
      title: "11. Document Security and Access",
      paragraphs: [
        "Dispute Paisa will take reasonable technical and organisational measures to protect uploaded documents against unauthorised access, disclosure, alteration or loss.",
        "Access should be restricted to authorised employees, case handlers and service providers who require the information for the relevant purpose.",
        "Security measures may include access controls, authentication, secure transmission, activity logs and appropriate confidentiality obligations.",
        "No online system can be guaranteed to be completely secure.",
      ],
    },
    {
      title: "12. Sharing Documents with Third Parties",
      paragraphs: [
        "Documents may be shared where necessary for the requested service and permitted by applicable law, including with authorised Dispute Paisa case-handling personnel, relevant technology or document-storage service providers, authorised partners involved in the service, legal professionals or other service providers, where appropriate, and banks, law enforcement agencies, courts or other competent authorities where authorised, required by law or appropriately instructed by the customer.",
        "Dispute Paisa will not represent that documents have been officially submitted to a bank or authority unless the submission has actually occurred.",
      ],
    },
    {
      title: "13. Document Storage and Retention",
      paragraphs: [
        "Uploaded documents will be retained for as long as reasonably necessary to provide the requested service, maintain relevant case records, resolve disputes or comply with applicable legal requirements.",
        "The applicable retention period may depend on the nature and status of the case, payment records, legal obligations and other relevant requirements.",
        "When documents are no longer required, they will be deleted or anonymised in accordance with the Data Retention & Deletion Policy and applicable law, subject to any lawful retention requirement.",
      ],
    },
    {
      title: "14. Requests for Correction or Deletion",
      paragraphs: [
        "Customers may contact Dispute Paisa to request correction or deletion of personal information contained in uploaded documents, subject to applicable law and legitimate retention requirements.",
        "We may request reasonable information to verify the identity and authority of the person making the request.",
        "Where a document must be retained for a legal obligation or another lawful purpose, we will handle the request in accordance with applicable requirements.",
      ],
    },
    {
      title: "15. Third-Party and Retailer-Assisted Uploads",
      paragraphs: [
        "Where authorised retailers or partners assist customers with document submission, they must follow the approved process and maintain confidentiality.",
        "Partners must not retain, copy, disclose or reuse customer documents for unrelated purposes unless authorised and permitted by law.",
        "Customers should verify that the person assisting them is authorised to act on behalf of Dispute Paisa.",
      ],
    },
    {
      title: "16. Document Review Does Not Guarantee Case Resolution",
      paragraphs: [
        "Submitting documents does not guarantee that a case will be accepted, that a bank account will be unfrozen, that a lien will be removed or that funds will be recovered.",
        "Decisions may depend on the evidence available and the relevant bank, payment provider, law enforcement agency, court or other competent authority.",
        "Dispute Paisa provides consultation, document guidance and structured case assistance within the agreed service scope.",
      ],
    },
    {
      title: "17. Reporting a Document Security Concern",
      paragraphs: [
        "If a customer believes their documents have been shared incorrectly, accessed without authorisation or otherwise mishandled, they should contact Dispute Paisa promptly.",
        "Email: [Insert Privacy/Support Email]",
        "Phone/WhatsApp: [Insert Official Contact Number]",
        "Grievance Officer: [Insert Name and Designation]",
        "We will review the concern and take appropriate action in accordance with our internal procedures and applicable law.",
      ],
    },
    {
      title: "18. Related Policies",
      paragraphs: [
        "This policy should be read alongside the Privacy Policy, Consent & Data Processing Notice, Case Registration & Service Policy, Grievance Redressal Policy, and Data Retention & Deletion Policy.",
      ],
    },
    {
      title: "19. Changes to This Policy",
      paragraphs: [
        "Dispute Paisa may update this policy to reflect changes in its services, document-handling processes or legal requirements. The latest version will be published on the official website.",
      ],
    },
    {
      title: "20. Contact Information",
      paragraphs: [
        "Dispute Paisa",
        "Website: https://disputepaisa.com",
        "Legal Entity: [Insert Full Legal Entity Name]",
        "Registered Office: [Insert Full Address]",
        "Email: [Insert Official Support Email]",
        "Phone/WhatsApp: [Insert Official Contact Number]",
        "Dispute Paisa — Your Money. Your Rights.",
      ],
    },
  ];

  return (
    <LegalPolicyLayout
      title="Document Upload & Verification Policy"
      introduction="This policy explains how customers can submit documents, how submitted documents may be reviewed, and how document information is handled during the service process."
      sections={sections}
      lastUpdated="January 2026"
    />
  );
}
