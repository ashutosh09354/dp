import LegalPolicyLayout from "./LegalPolicyLayout";

export default function GrievanceRedressalPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      paragraphs: [
        "Dispute Paisa is committed to providing transparent, responsible and professional customer support. This Grievance Redressal Policy explains how customers can raise complaints about our services, payments, case handling, communication or other service-related concerns.",
        "Our objective is to acknowledge grievances, review them fairly and provide an appropriate response within a reasonable timeframe.",
      ],
    },
    {
      title: "2. Scope of This Policy",
      paragraphs: [
        "Customers may raise grievances relating to consultation and case assistance services, case registration, documentation and verification, delays in case updates or communication, payment failures, duplicate payments or payment-related concerns, consultation fees, service charges and refund requests, conduct of employees, experts or authorised retailers and partners, privacy, confidentiality or handling of personal information, incorrect information or service-related concerns, and any other issue related to Dispute Paisa's services.",
      ],
    },
    {
      title: "3. How to Raise a Grievance",
      paragraphs: [
        "Customers can submit a grievance through the following official channels:",
        "Email: [Insert Official Support Email]",
        "Phone/WhatsApp: [Insert Official Contact Number]",
        "Website: [Insert Contact Us or Grievance Form URL]",
        "Postal Address: [Insert Registered Office Address]",
        "To help us review the complaint, customers should provide their name, registered mobile number or email address, Query ID or Case ID (if available), a description of the issue and relevant supporting information.",
        "Customers should not share passwords, OTPs, PINs or unnecessary sensitive banking information while submitting a grievance.",
      ],
    },
    {
      title: "4. Grievance Acknowledgement",
      paragraphs: [
        "We will make reasonable efforts to acknowledge receipt of a grievance within 2 working days, subject to receipt through an official channel and availability of the information required to identify the complaint.",
        "Where additional information is required, our team may contact the customer for clarification.",
      ],
    },
    {
      title: "5. Grievance Review and Resolution",
      paragraphs: [
        "After receiving a grievance, Dispute Paisa may record the complaint in its grievance register or tracking system, verify the customer's identity and relevant case or payment details, review the complaint and available records, coordinate with the relevant internal team or authorised partner, where necessary, and communicate the findings, next steps or resolution to the customer.",
        "We aim to provide a response or resolution within 15 working days of receiving a complete grievance, wherever reasonably possible.",
        "If the matter requires additional investigation or depends on a third party, we will endeavour to inform the customer of the delay and the expected next steps.",
        "These timelines are proposed service standards and do not override any shorter or mandatory timeline prescribed by applicable law.",
      ],
      orderedItems: [
        "Record the complaint in the grievance register or tracking system.",
        "Verify the customer's identity and relevant case or payment details.",
        "Review the complaint and available records.",
        "Coordinate with the relevant internal team or authorised partner, where necessary.",
        "Communicate the findings, next steps or resolution to the customer.",
      ],
    },
    {
      title: "6. Escalation to the Grievance Officer",
      paragraphs: [
        "If the customer is not satisfied with the response or the grievance remains unresolved, the customer may escalate the matter to the designated Grievance Officer.",
        "Grievance Officer Details:",
        "Name: [Insert Name]",
        "Designation: Grievance Officer",
        "Email: [Insert Grievance Email]",
        "Phone: [Insert Contact Number]",
        "Address: [Insert Registered Office Address]",
        "The Grievance Officer will review the complaint, assess the action already taken and communicate an appropriate response.",
      ],
    },
    {
      title: "7. Payment and Refund Grievances",
      paragraphs: [
        "For payment-related complaints, customers should provide the transaction date, amount, payment reference or transaction ID, and Query ID or Case ID where applicable.",
        "Dispute Paisa will review the available transaction records and coordinate with the relevant payment service provider or authorised partner when required.",
        "Refund eligibility will be assessed according to the applicable Refund & Cancellation Policy and the terms communicated before purchase. A grievance does not automatically guarantee a refund.",
      ],
    },
    {
      title: "8. Case-Related Grievances",
      paragraphs: [
        "Customers may raise concerns about case registration, document review, case progress, communication or service handling.",
        "Dispute Paisa will review the matter and explain the available next steps, subject to the agreed service scope and applicable law.",
        "Dispute Paisa provides consultation, guidance and structured case assistance. Decisions concerning bank account freezes, liens, cybercrime complaints, transaction reversals or fund recovery may rest with banks, law enforcement agencies, courts or other competent authorities.",
        "Filing a grievance with Dispute Paisa does not replace any complaint, appeal or remedy available to a customer through the relevant bank, regulator, law enforcement agency or court.",
      ],
    },
    {
      title: "9. Privacy and Confidentiality",
      paragraphs: [
        "Grievances will be handled with reasonable care and confidentiality. Information may be accessed or shared with authorised personnel and relevant service providers only as necessary to review and address the complaint, subject to applicable law and our Privacy Policy.",
        "Customers should submit only the information reasonably required to investigate their grievance.",
      ],
    },
    {
      title: "10. Unacceptable or Fraudulent Complaints",
      paragraphs: [
        "Dispute Paisa may request additional information to verify a grievance. Where a complaint contains abusive, threatening, fraudulent or demonstrably false information, we may take appropriate action in accordance with applicable law.",
        "However, a complaint will not be rejected merely because the customer disagrees with our decision or raises a genuine concern.",
      ],
    },
    {
      title: "11. No Guarantee of Outcome",
      paragraphs: [
        "Dispute Paisa will make reasonable efforts to investigate and respond to grievances fairly. However, we cannot guarantee a particular outcome, account unfreeze, lien removal, recovery of funds or decision by a bank, payment provider, law enforcement agency, court or other authority.",
      ],
    },
    {
      title: "12. External Remedies",
      paragraphs: [
        "Customers may approach the relevant bank, payment service provider, regulator, consumer forum, law enforcement agency or other competent authority where appropriate and legally available.",
        "Nothing in this policy is intended to restrict any rights or remedies available to customers under applicable law.",
      ],
    },
    {
      title: "13. Policy Updates",
      paragraphs: [
        "Dispute Paisa may update this policy from time to time to reflect changes in its services, internal processes or applicable legal requirements. The updated version will be published on the official website with the revised date.",
      ],
    },
    {
      title: "14. Contact Us",
      paragraphs: [
        "For grievance-related assistance, please contact:",
        "Dispute Paisa",
        "Website: https://disputepaisa.com",
        "Email: [Insert Official Support Email]",
        "Phone/WhatsApp: [Insert Official Contact Number]",
        "Registered Office: [Insert Full Address]",
        "Dispute Paisa — Your Money. Your Rights.",
      ],
    },
  ];

  return (
    <LegalPolicyLayout
      title="Grievance Redressal Policy"
      introduction="This policy explains how customers can raise complaints about Dispute Paisa's services, payments, case handling, communication or other service-related concerns."
      sections={sections}
      lastUpdated="January 2026"
    />
  );
}
