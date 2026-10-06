import LegalPolicyLayout from "./LegalPolicyLayout";

export default function AccountDeletionDataRightsProcedure() {
  const sections = [
    {
      title: "Document Details",
      paragraphs: [
        "Website: https://disputepaisa.com",
        "Effective Date: [Insert Date]",
        "Last Updated: [Insert Date]",
        "Legal Entity: [Insert Full Legal Entity Name]",
      ],
    },
    {
      title: "1. Purpose",
      paragraphs: [
        "This procedure explains how Dispute Paisa users may request account deletion, access or correction of personal information, withdrawal of consent where applicable, and other data-related actions available under applicable law.",
        "It also explains how Dispute Paisa will review and respond to such requests while protecting customer information and meeting legitimate legal, contractual, accounting, security, and case-management obligations.",
      ],
    },
    {
      title: "2. Scope",
      paragraphs: [
        "This procedure applies, as relevant, to registered customers, individuals who submit enquiries or case requests, retailers and business partners, and other individuals whose personal information is processed by Dispute Paisa.",
        "The available rights and procedures may differ depending on the individual's relationship with Dispute Paisa and applicable law.",
      ],
      items: [
        "Registered customers.",
        "Individuals who submit enquiries or case requests.",
        "Retailers and business partners.",
        "Other individuals whose personal information is processed by Dispute Paisa.",
      ],
    },
    {
      title: "3. Types of Requests",
      paragraphs: [
        "Subject to applicable law, individuals may contact Dispute Paisa to request:",
      ],
      items: [
        "A. Account Deletion: Closure of their Dispute Paisa account and removal of personal information that is no longer required to be retained.",
        "B. Access to Personal Information: Information about the personal data processed by Dispute Paisa and the applicable processing purposes, to the extent required by law.",
        "C. Correction or Updating: Correction of inaccurate or incomplete personal information, subject to appropriate verification.",
        "D. Withdrawal of Consent: Withdrawal of consent where personal data processing is based on consent, subject to applicable law and any consequences for services that depend on that processing.",
        "E. Grievance or Data-Related Complaint: Submission of a complaint regarding personal information, privacy, account deletion, or the handling of a data-related request.",
        "Other requests will be handled in accordance with the rights and procedures applicable under the law in force.",
      ],
    },
    {
      title: "4. How to Submit a Request",
      paragraphs: [
        "Users may submit a request through one of the following official channels:",
        "Email: [Insert Privacy / Data Rights Email]",
        "Website: https://disputepaisa.com",
        "Contact Form: [Insert Contact Form URL, if available]",
        "Postal Address: [Insert Registered Office Address]",
        "The request should include:",
      ],
      items: [
        "The user's name.",
        "Registered mobile number or email address, where applicable.",
        "The type of request.",
        "A short explanation of the requested action.",
        "Relevant account or Case ID, if available.",
      ],
    },
    {
      title: "5. Identity Verification",
      paragraphs: [
        "Dispute Paisa may take reasonable steps to verify the identity and authority of the requester before disclosing, changing, or deleting personal information.",
        "Verification should be proportionate to the sensitivity of the request. The company should avoid collecting additional personal information that is not reasonably necessary for verification.",
        "Where a request is submitted by an authorised representative, Dispute Paisa may request appropriate evidence of that authority.",
      ],
    },
    {
      title: "6. Request Review and Response",
      paragraphs: [
        "After receiving a request, Dispute Paisa will record the request and its date of receipt, verify the requester where reasonably necessary, identify the account and information relevant to the request, determine which action is appropriate under applicable law, check whether any information must be retained for a lawful purpose, complete the eligible action or explain the applicable limitation, and maintain an appropriate record of the request and its handling.",
        "Requests will be handled within the timelines required by applicable law and any applicable published service standards.",
        "If a request is incomplete, cannot be verified, or requires clarification, Dispute Paisa may contact the requester for additional information.",
      ],
      orderedItems: [
        "Record the request and its date of receipt.",
        "Verify the requester where reasonably necessary.",
        "Identify the account and information relevant to the request.",
        "Determine which action is appropriate under applicable law.",
        "Check whether any information must be retained for a lawful purpose.",
        "Complete the eligible action or explain the applicable limitation.",
        "Maintain an appropriate record of the request and its handling.",
      ],
    },
    {
      title: "7. Account Deletion Process",
      paragraphs: [
        "Where account deletion is available, the process may include the following steps:",
      ],
      orderedItems: [
        "The user submits an account deletion request.",
        "Dispute Paisa verifies the user's identity.",
        "The company checks for pending transactions, open cases, unresolved complaints, or other relevant dependencies.",
        "The user is informed of any material service impact or lawful retention requirement.",
        "The account is closed or deactivated as appropriate.",
        "Personal information that is no longer required is deleted or anonymised according to the approved retention schedule.",
        "The user receives confirmation when the request has been processed, where appropriate.",
      ],
    },
    {
      title: "8. Effect of Account Deletion on Open Cases",
      paragraphs: [
        "Account deletion may affect access to case history, case updates, document submission, communications, or other platform features.",
        "Where a case is still open, Dispute Paisa may explain the practical consequences before completing the request, where appropriate and lawful.",
        "An account deletion request will not automatically be treated as a request to withdraw a complaint, cancel a professional engagement, or abandon a legal proceeding. Those actions may require separate instructions or procedures.",
        "Dispute Paisa will not retain information indefinitely merely because an account was previously active.",
      ],
    },
    {
      title: "9. Information That May Need to Be Retained",
      paragraphs: [
        "Some information may need to be retained after account closure or a deletion request where permitted or required by applicable law. Examples may include:",
      ],
      items: [
        "Invoices, payment records, and accounting information.",
        "Records required for tax or audit purposes.",
        "Information relevant to an ongoing legal claim or lawful investigation.",
        "Records necessary to establish, exercise, or defend legal claims.",
        "Appropriate consent, acceptance, security, or transaction records.",
        "Information subject to a valid legal preservation requirement.",
      ],
    },
    {
      title: "10. Withdrawal of Consent",
      paragraphs: [
        "Where consent is the applicable basis for processing personal information, users may withdraw it through an appropriate available channel.",
        "Dispute Paisa will explain, where relevant, how withdrawal affects services that depend on the relevant processing.",
        "Withdrawal of consent does not automatically invalidate processing lawfully completed before withdrawal, nor does it remove an independent legal obligation to retain certain records.",
      ],
    },
    {
      title: "11. Correction and Updating of Information",
      paragraphs: [
        "Users may request correction of inaccurate personal information through the official contact channels.",
        "Dispute Paisa may verify the requested correction before updating its records.",
        "Where appropriate and required, relevant recipients of the information may also be informed of the correction.",
        "Case histories, payment records, and audit records may require controlled amendments rather than complete deletion or overwriting to preserve accuracy and accountability.",
      ],
    },
    {
      title: "12. Backups and Archived Information",
      paragraphs: [
        "Some information may remain temporarily in protected backups or archives after it has been deleted from active systems.",
        "Such information will be handled according to the approved backup lifecycle.",
        "Where immediate deletion is not technically feasible, access will be restricted and the information will be removed through the established expiry or restoration process, subject to applicable legal requirements.",
        "Deleted information should not be unnecessarily reintroduced into active use when a backup is restored.",
      ],
    },
    {
      title: "13. Third-Party Service Providers",
      paragraphs: [
        "Where personal information is processed by authorised service providers, Dispute Paisa will take appropriate steps under applicable agreements and law to handle eligible deletion or correction requests.",
        "The company cannot promise immediate deletion from every independent third-party system unless it has the necessary authority and technical capability.",
        "Any applicable limitation should be assessed and communicated appropriately.",
      ],
    },
    {
      title: "14. Refusal or Limitation of a Request",
      paragraphs: [
        "A request may be limited or refused where permitted by applicable law, including where:",
      ],
      items: [
        "The requester cannot be reasonably verified.",
        "The request concerns information that must lawfully be retained.",
        "Disclosure would improperly expose another person's information.",
        "A valid legal preservation obligation applies.",
        "The request is otherwise outside the rights available under applicable law.",
      ],
    },
    {
      title: "15. Security and Confidentiality",
      paragraphs: [
        "Requests will be handled by authorised personnel using appropriate access controls.",
        "Personal information received during the request process will be used only as reasonably necessary to verify, assess, and fulfil the request and will be retained according to the applicable retention schedule.",
      ],
    },
    {
      title: "16. Grievances and Escalation",
      paragraphs: [
        "If a user is dissatisfied with the handling of a request, the user may contact the designated grievance or privacy contact.",
        "Privacy / Data Rights Contact: [Insert Name or Designation]",
        "Email: [Insert Official Email]",
        "Grievance Contact: [Insert Name or Designation]",
        "Address: [Insert Registered Office Address]",
        "Requests and complaints will be handled in accordance with applicable law and the company's Grievance Redressal Policy.",
      ],
    },
    {
      title: "17. Relationship with Other Policies",
      paragraphs: [
        "This procedure should be read alongside the Privacy Policy, Consent & Data Processing Notice, Data Retention & Deletion Policy, Information Security Policy, Terms & Conditions, and Grievance Redressal Policy.",
      ],
    },
    {
      title: "18. Review and Updates",
      paragraphs: [
        "Dispute Paisa will review this procedure periodically and update it when necessary to reflect changes in its services, systems, or applicable law.",
        "Important: Before publication, the company must configure the actual request channel, assign responsible personnel, establish deletion workflows, and confirm the applicable legal timelines and retention exceptions.",
      ],
    },
  ];

  return (
    <LegalPolicyLayout
      title="Account Deletion & Data Rights Procedure"
      introduction="This procedure explains how Dispute Paisa users may request account deletion, access or correction of personal information, withdrawal of consent where applicable, and other data-related actions available under applicable law."
      sections={sections}
      lastUpdated="January 2026"
    />
  );
}
