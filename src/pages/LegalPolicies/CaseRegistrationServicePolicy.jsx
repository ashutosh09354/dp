import LegalPolicyLayout from "./LegalPolicyLayout";

export default function CaseRegistrationServicePolicy() {
  const sections = [
    {
      title: "1. Introduction",
      paragraphs: [
        "This Case Registration & Service Policy explains how customers can register a query or case with Dispute Paisa and how the service process works.",
        "Dispute Paisa provides consultation, document guidance and structured case assistance for banking and financial disputes. Our services may cover bank account freezes, bank liens, debit freezes, cyber-fraud-related banking issues, unauthorised transactions and other financial concerns supported by our platform.",
      ],
    },
    {
      title: "2. Eligibility for Case Registration",
      paragraphs: [
        "Customers must provide accurate information and be legally eligible to use the relevant services.",
        "Where a person submits a case on behalf of another individual, appropriate authorisation may be required. Dispute Paisa may request reasonable information to verify the customer's identity and authority before proceeding.",
      ],
    },
    {
      title: "3. Case Registration Process",
      paragraphs: [
        "Depending on the service and available platform features, the registration process may include:",
      ],
      orderedItems: [
        "Submit a query: The customer or an authorised retailer submits the initial issue.",
        "Provide basic details: The customer provides contact information and a description of the problem.",
        "Verify contact details: Mobile number verification or OTP verification may be used where enabled.",
        "Submit relevant documents: The customer provides documents needed to understand the case.",
        "Initial review: The Dispute Paisa team reviews the information provided.",
        "Fee confirmation: Applicable consultation or service charges are communicated before the customer confirms a paid service.",
        "Case registration: Once the applicable requirements are met, the case is registered and a Query ID or Case ID may be provided.",
        "Case processing: The case proceeds through the applicable review and assistance stages. The exact process may vary according to the type and complexity of the issue.",
      ],
    },
    {
      title: "4. Information and Documents Required",
      paragraphs: [
        "Depending on the case, customers may be asked to provide:",
      ],
      items: [
        "Name and contact details.",
        "Bank name and relevant account-related information.",
        "A description of the freeze, lien, disputed transaction or other issue.",
        "Relevant bank communications or notices.",
        "Complaint acknowledgement or reference number, where available.",
        "Transaction details and supporting records.",
        "Other documents reasonably required to assess the case.",
      ],
    },
    {
      title: "5. Document Verification",
      paragraphs: [
        "Dispute Paisa may review submitted documents for completeness, consistency and relevance to the reported issue.",
        "If information is missing or unclear, the customer may be asked to provide additional documents or clarification.",
        "Document review by Dispute Paisa does not constitute independent certification of a document's authenticity unless such verification is specifically stated as part of an agreed service.",
      ],
    },
    {
      title: "6. Case Acceptance and Review",
      paragraphs: [
        "Submission of a query does not automatically mean that Dispute Paisa has accepted it for further processing.",
        "A case may require additional information, an initial consultation, payment of an agreed fee or confirmation that the requested assistance falls within our service scope.",
        "Dispute Paisa may decline or discontinue a case where:",
      ],
      items: [
        "Required information is not provided.",
        "The information appears materially inaccurate or misleading.",
        "The request falls outside our available services.",
        "The request appears unlawful, fraudulent or unauthorised.",
        "Proceeding would create a legal, security or compliance concern.",
      ],
    },
    {
      title: "7. Case Assignment and Processing",
      paragraphs: [
        "Once accepted, a case may be assigned to an authorised employee, case executive, expert or other appropriate service resource.",
        "Depending on the agreed scope, assistance may include reviewing the reported issue, organising documents, explaining procedural next steps, helping prepare relevant information and providing case progress updates.",
        "Any representation, filing, legal service or communication with a bank or authority will be undertaken only where appropriate, authorised and permitted by applicable law.",
      ],
    },
    {
      title: "8. Case Status and Communication",
      paragraphs: [
        "Customers may receive a Query ID or Case ID to help identify and track their case.",
        "Depending on platform availability, case stages may include Submitted, Registered, Documents Under Review, Additional Information Required, Assigned for Review, Consultation or Cost Estimation, Further Assistance in Progress, Awaiting External Response, and Case Closed.",
        "These are illustrative stages; the actual workflow may differ depending on the case. Customers should use official Dispute Paisa channels for case-related communication and retain their Query ID or Case ID for reference.",
      ],
    },
    {
      title: "9. Customer Responsibilities",
      paragraphs: [
        "Customers are responsible for:",
      ],
      items: [
        "Providing complete and accurate information.",
        "Submitting genuine documents.",
        "Responding to reasonable requests for clarification.",
        "Informing Dispute Paisa of material changes relevant to the case.",
        "Reviewing service scope and charges before confirming paid services.",
        "Keeping their login credentials and personal information secure.",
        "Maintaining copies of relevant records and official communications.",
        "Contacting the relevant bank or authority directly where required.",
      ],
    },
    {
      title: "10. Consultation, Fees and Payments",
      paragraphs: [
        "Certain consultations and case assistance services may be paid services.",
        "Applicable fees, the service scope and payment conditions will be communicated before the customer confirms the service.",
        "Payment for a service does not guarantee a particular case outcome.",
        "Refunds and cancellations will be handled under the applicable Refund & Cancellation Policy and Payment Terms & Conditions.",
      ],
    },
    {
      title: "11. No Guarantee of Outcome or Timeline",
      paragraphs: [
        "Dispute Paisa does not guarantee that a bank account will be unfrozen, a lien will be removed, a transaction will be reversed, funds will be recovered or a complaint will be accepted by an authority.",
        "Case progress and outcomes may depend on the documents available, the nature of the issue, the relevant bank, payment provider, law enforcement agency, court or other competent authority.",
        "Any estimated timeline is indicative unless expressly agreed otherwise in writing and legally permissible.",
      ],
    },
    {
      title: "12. Communication with Banks and Authorities",
      paragraphs: [
        "Customers should provide accurate complaint references and copies of relevant official communications where available.",
        "Dispute Paisa may guide customers regarding available procedural steps within the agreed service scope. Customers may still need to contact the relevant bank, law enforcement agency, regulator or court directly.",
        "Dispute Paisa does not represent itself as a bank, government authority, police department or court.",
      ],
    },
    {
      title: "13. Case Closure",
      paragraphs: [
        "A case may be marked closed when the agreed service has been completed, the customer withdraws the request, required information remains unavailable after reasonable follow-up, or further assistance is no longer possible within the agreed scope.",
        "Case closure by Dispute Paisa means that its service process has ended. It does not necessarily mean that the underlying banking or legal issue has been resolved by the relevant institution or authority.",
        "Where applicable, the customer will be informed of the closure status and any known next steps.",
      ],
    },
    {
      title: "14. Retailer and Partner-Assisted Registration",
      paragraphs: [
        "Authorised retailers or partners may assist customers with query or case registration where this feature is available.",
        "Partners must follow the approved registration process, provide accurate information and explain applicable fees as communicated by Dispute Paisa.",
        "Partners must not guarantee account unfreezing, lien removal, fund recovery or a favourable legal outcome.",
        "Customers should verify that they are dealing with an authorised partner and request a payment acknowledgement where a payment is collected.",
      ],
    },
    {
      title: "15. Privacy and Data Protection",
      paragraphs: [
        "Personal information and case documents will be handled in accordance with the Dispute Paisa Privacy Policy and Consent & Data Processing Notice.",
        "Access to case information should be limited to authorised personnel and service providers who need it for the relevant purpose, subject to applicable law.",
        "Customers should avoid sending sensitive documents through unapproved channels.",
      ],
    },
    {
      title: "16. Fraud Prevention and Misuse",
      paragraphs: [
        "Dispute Paisa may suspend review or request further verification if suspicious activity, unauthorised submissions or potentially fraudulent documents are identified.",
        "Suspected misuse may be handled in accordance with applicable law and relevant platform policies.",
      ],
    },
    {
      title: "17. Grievances and Support",
      paragraphs: [
        "For concerns about registration, case handling, communication or service delivery, customers may contact:",
        "Email: [Insert Official Support Email]",
        "Phone/WhatsApp: [Insert Official Contact Number]",
        "Grievance Officer: [Insert Name and Designation]",
        "Grievance Email: [Insert Grievance Email]",
        "Grievances will be handled under the Dispute Paisa Grievance Redressal Policy.",
      ],
    },
    {
      title: "18. Changes to This Policy",
      paragraphs: [
        "Dispute Paisa may update this policy to reflect changes in services, platform features or applicable legal requirements.",
        "The latest version will be published on the official website.",
      ],
    },
    {
      title: "19. Contact Information",
      paragraphs: [
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
      title="Case Registration & Service Policy"
      introduction="This policy explains how customers can register a banking or financial dispute query with Dispute Paisa and how the service process works."
      sections={sections}
      lastUpdated="January 2026"
    />
  );
}
