import LegalPolicyLayout from "./LegalPolicyLayout";

export default function DataRetentionDeletionPolicy() {
  const sections = [
    {
      title: "1. Purpose",
      paragraphs: [
        "This Data Retention and Deletion Policy explains how Dispute Paisa collects, stores, retains, archives, and deletes information processed through its website, mobile application, admin dashboard, employee dashboard, retailer panel, and other business systems.",
        "The purpose of this policy is to ensure that information is retained only for an appropriate period, protected against unauthorised access, and securely deleted when it is no longer required, subject to applicable legal and contractual obligations.",
      ],
    },
    {
      title: "2. Scope",
      paragraphs: [
        "This policy applies to information relating to customers and registered users, financial dispute cases and case progress, identity and address verification documents, bank-related documents and transaction evidence, retailers, distributors, and business partners, employees, experts, consultants, and contractors, payments, invoices, refunds, and wallet transactions, customer communications, complaints, and support requests, website activity, technical logs, and security records, and backups, archives, and information held by authorised service providers.",
      ],
    },
    {
      title: "3. Categories of Information",
      paragraphs: [
        "Dispute Paisa may retain the following categories of information, depending on the services used:",
      ],
      items: [
        "A. Account Information: Name and contact details; registered mobile number and email address; login and account-management records; user preferences and account status.",
        "B. Case Information: Query ID and Case ID; nature and description of the dispute; case status, assignment, progress, and activity history; communication records and case-related notes.",
        "C. Documents and Evidence: Identity or address documents where required; bank statements and transaction records submitted for a case; complaint acknowledgements, reference numbers, and supporting evidence; additional documents requested during case processing.",
        "D. Financial and Transaction Information: Payment references and transaction status; consultation and service fee records; invoices, refunds, and relevant wallet or partner transaction records; relevant accounting and settlement information.",
        "E. Technical and Security Information: Login history and security logs; system activity and error records; consent records and relevant audit trails; website or application usage data, where collected.",
      ],
    },
    {
      title: "4. Principles of Data Retention",
      paragraphs: [
        "Dispute Paisa will follow these principles:",
      ],
      orderedItems: [
        "Purpose limitation: Information will be retained for specified business, service, security, or legal purposes.",
        "Minimum retention: Information will not be retained longer than reasonably necessary, subject to applicable legal obligations.",
        "Secure storage: Retained information will be protected using appropriate technical and organisational safeguards.",
        "Restricted access: Only authorised personnel may access retained information for legitimate work purposes.",
        "Secure deletion: Information that is no longer required will be securely deleted, destroyed, or anonymised where appropriate.",
        "Legal preservation: Information subject to a lawful investigation, dispute, audit, or preservation requirement may be retained for the period required by law.",
      ],
    },
    {
      title: "5. Proposed Data Retention Schedule",
      paragraphs: [
        "The following schedule is a proposed internal framework. The final retention periods must be approved by the company after reviewing applicable laws, accounting requirements, contractual obligations, and operational needs.",
      ],
      items: [
        "Customer account information: While the account is active and for a justified period after closure.",
        "Case records and case communications: During case processing and for the approved post-closure retention period.",
        "Uploaded identity and banking documents: Only while required for verification, case handling, legal compliance, or a documented dispute.",
        "Payment and invoice records: For the period required by applicable accounting, tax, and other laws.",
        "Consent and service acceptance records: For the period necessary to demonstrate consent, acceptance, or compliance.",
        "Customer support and grievance records: Until resolution and for the approved period needed for audit or dispute handling.",
        "Security and access logs: For an approved period based on security risks and applicable requirements.",
        "Marketing enquiries that do not become customers: Until the enquiry purpose is completed or the data is no longer required, subject to consent and applicable law.",
        "Retailer and partner records: During the relationship and for the justified period after termination.",
        "Backups and archived information: According to the approved backup lifecycle and deletion schedule.",
      ],
    },
    {
      title: "6. Case Records and Closed Cases",
      paragraphs: [
        "Closing a case does not automatically mean that all related information must be deleted immediately.",
        "Dispute Paisa may retain case records for a justified period to maintain an accurate case history, respond to customer queries or complaints, address payment disputes, claims, or contractual issues, meet applicable legal, tax, audit, or regulatory requirements, and maintain records necessary for an ongoing legal proceeding or lawful investigation.",
        "When the retention purpose ends, the company will assess whether the information should be deleted, anonymised, or retained under a documented legal exception.",
      ],
    },
    {
      title: "7. Customer Requests for Deletion",
      paragraphs: [
        "Customers may request deletion of their account or personal information through the official contact channels provided on the Dispute Paisa website.",
        "When receiving a request, Dispute Paisa will:",
      ],
      orderedItems: [
        "Verify the requester's identity using an appropriate method.",
        "Identify the information covered by the request.",
        "Review whether any information must be retained under applicable law, contractual requirements, or a lawful preservation obligation.",
        "Delete or anonymise eligible information where appropriate.",
        "Explain any material limitation or reason why certain information cannot yet be deleted, where required.",
        "Record the request and action taken.",
      ],
    },
    {
      title: "8. Secure Deletion and Destruction",
      paragraphs: [
        "When information reaches the end of its approved retention period, Dispute Paisa will use reasonable and appropriate deletion or destruction methods.",
        "Depending on the storage system, these may include secure deletion of electronic files, removal of records from active databases and document storage, deletion of unnecessary duplicate files and downloads, secure destruction of paper documents, revocation of access and deletion of obsolete accounts or credentials, secure disposal or sanitisation of storage media when required, and appropriate deletion instructions to service providers where contractually and legally applicable.",
        "Where immediate deletion from a backup is not technically feasible, the information will be protected from ordinary use and removed through the established backup-expiry or restoration process, subject to applicable legal requirements.",
      ],
    },
    {
      title: "9. Backup and Archive Management",
      paragraphs: [
        "Backups are maintained to support system recovery and business continuity.",
        "Dispute Paisa will establish an approved backup retention schedule, restrict access to backup files, protect backups against unauthorised access and loss, avoid using backups as an alternative permanent archive for information that should otherwise be deleted, apply deletion controls to restored systems so that previously deleted information is not unnecessarily reintroduced into active use, and document exceptions where legal or technical constraints delay deletion.",
      ],
    },
    {
      title: "10. Third-Party Service Providers",
      paragraphs: [
        "Dispute Paisa may use authorised service providers for hosting, storage, payment processing, communications, identity verification, and other business functions.",
        "Where applicable, the company will establish appropriate contractual safeguards covering information security, permitted processing, retention, deletion, and assistance with customer requests.",
        "Information held by third parties will be managed according to applicable law and relevant contractual arrangements.",
      ],
    },
    {
      title: "11. Employee, Expert, and Partner Responsibilities",
      paragraphs: [
        "Employees, experts, consultants, retailers, and partners who receive access to customer information must use information only for authorised purposes, avoid maintaining unnecessary personal copies of customer documents, not store restricted information on personal devices or unauthorised cloud accounts, return or securely delete company information when access or engagement ends, subject to authorised retention requirements, follow the company's confidentiality, information security, and document-handling policies, and report accidental retention, disclosure, loss, or unauthorised copying of information.",
        "Managers and system administrators must ensure that access is removed when it is no longer required.",
      ],
    },
    {
      title: "12. Legal Holds and Exceptions",
      paragraphs: [
        "Deletion may be delayed or limited where information is required for compliance with applicable laws or valid legal orders, tax, accounting, or audit requirements, pending litigation, a genuine legal claim, or a documented dispute, a lawful investigation or preservation request, security investigations or incident response, or other legally permitted and documented purposes.",
        "Such information must remain appropriately protected, access must be restricted, and the exception should be reviewed periodically. Information should be deleted or anonymised when the relevant retention requirement ends.",
      ],
    },
    {
      title: "13. Data Breaches and Accidental Deletion",
      paragraphs: [
        "Any suspected unauthorised disclosure, loss, alteration, or deletion of information must be reported through the company's approved security incident process.",
        "Dispute Paisa will assess the incident, take reasonable containment and recovery measures, preserve relevant evidence, and make notifications where required by applicable law.",
        "Where information is accidentally deleted, recovery may be attempted using authorised backups, provided the recovery process follows security controls and applicable deletion obligations.",
      ],
    },
    {
      title: "14. Roles and Responsibilities",
      paragraphs: [
        "Management is responsible for approving retention schedules and material exceptions, and ensuring appropriate resources and accountability. Technology and Security Team implements technical deletion, access restrictions, backup expiry, and security controls, and maintains appropriate records of deletion activities where required. Operations and Case Management Team identifies records that are no longer needed for active case handling and follows approved document-retention procedures. Finance and Accounts Team retains financial records for the period required by applicable tax, accounting, and other laws. All personnel should follow this policy and report non-compliance or data-handling concerns.",
      ],
    },
    {
      title: "15. Policy Review",
      paragraphs: [
        "This policy will be reviewed periodically and when there are material changes in the company's services, technology, data-processing activities, retention requirements, or applicable law.",
        "The company should maintain an approved retention schedule identifying the relevant data category, retention trigger, retention period, responsible team, and deletion method.",
      ],
    },
    {
      title: "16. Contact Information",
      paragraphs: [
        "Brand: Dispute Paisa",
        "Website: https://disputepaisa.com",
        "Legal Entity: [Insert Full Legal Entity Name]",
        "Privacy / Data Protection Contact: [Insert Name or Designation]",
        "Email: [Insert Official Email Address]",
        "Registered Office: [Insert Registered Office Address]",
        "Disclaimer: This policy is a general operational draft and should be reviewed by qualified legal and technical professionals before publication or implementation. The company must confirm actual retention periods and deletion capabilities before representing them as established practices.",
      ],
    },
  ];

  return (
    <LegalPolicyLayout
      title="Data Retention and Deletion Policy"
      introduction="This policy explains how Dispute Paisa collects, stores, retains, archives, and deletes information processed through its website, mobile application, admin dashboard, retailer panel, and other business systems."
      sections={sections}
      lastUpdated="January 2026"
    />
  );
}
