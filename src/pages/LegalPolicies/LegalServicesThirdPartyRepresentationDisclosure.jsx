import LegalPolicyLayout from "./LegalPolicyLayout";

export default function LegalServicesThirdPartyRepresentationDisclosure() {
  const sections = [
    {
      title: "1. Purpose",
      paragraphs: [
        "This disclosure explains the nature and limitations of the services offered by Dispute Paisa and clarifies the role of independent advocates, legal professionals, consultants, financial institutions, and other third parties who may be involved in a customer's matter.",
      ],
    },
    {
      title: "2. Nature of Dispute Paisa's Services",
      paragraphs: [
        "Dispute Paisa provides financial dispute-related guidance, case assistance, documentation support, case tracking, and related support services, according to the services actually offered on the platform.",
        "Depending on the nature of a customer's issue, assistance may relate to bank account freezes, debit freezes, and account restrictions, bank liens and holds on funds, cyber-fraud-related banking issues, unauthorised transactions and financial disputes, complaint documentation and case-status assistance, and other financial dispute categories supported by the platform.",
        "The availability of a particular service depends on the nature of the matter, the information provided, and the services Dispute Paisa is authorised and equipped to offer.",
      ],
    },
    {
      title: "3. No Automatic Legal Representation",
      paragraphs: [
        "Unless expressly agreed through a separate, valid engagement with an appropriately qualified and authorised professional, Dispute Paisa does not represent a customer as their advocate before a court, tribunal, police authority, bank, government authority, or other institution.",
        "Registering a case, uploading documents, making a payment, or receiving a Case ID does not automatically establish an advocate-client relationship.",
        "Dispute Paisa's case assistance should not be understood as a guarantee that it can directly instruct a bank, remove a lien, unfreeze an account, reverse a transaction, or influence an authority's decision.",
      ],
    },
    {
      title: "4. Independent Advocates and Third-Party Professionals",
      paragraphs: [
        "Where appropriate and subject to the customer's authorisation, Dispute Paisa may facilitate access to independent advocates, legal professionals, consultants, or other service providers.",
        "Where such arrangements exist, the customer's engagement with the relevant professional will be governed by the applicable engagement terms, the professional will be responsible for services they independently agree to provide, the scope of representation, professional fees, and applicable terms should be communicated before the engagement begins, relevant information will be shared only through an appropriate and lawful process, and the involvement of a third party does not guarantee a favourable outcome.",
        "The identity, qualifications, professional status, and scope of services of any person providing regulated professional services should be verified as appropriate.",
      ],
    },
    {
      title: "5. Third-Party Institutions and Authorities",
      paragraphs: [
        "A customer's matter may involve banks, payment service providers, law-enforcement agencies, cybercrime authorities, courts, regulators, or other institutions.",
        "These institutions operate under their own procedures, legal powers, and requirements. Dispute Paisa does not control their decisions, processing times, or outcomes.",
        "Any complaint, representation, or request submitted to an institution remains subject to that institution's applicable process.",
      ],
    },
    {
      title: "6. Customer Consent and Authorisation",
      paragraphs: [
        "Customers are responsible for providing accurate information and obtaining any authorisation required to share documents or information belonging to another person.",
        "Before sharing customer information with an independent professional or third party, Dispute Paisa will follow applicable privacy requirements, the relevant service terms, and any necessary authorisation or consent process.",
        "Customers should not provide passwords, banking PINs, card CVVs, OTPs, or other authentication secrets for case assistance.",
      ],
    },
    {
      title: "7. Fees and Engagement Terms",
      paragraphs: [
        "Any applicable consultation fee, case-assistance fee, professional fee, or third-party charge should be disclosed before the customer commits to the relevant paid service.",
        "Where an independent professional charges separately, the customer should be informed of the applicable engagement and payment arrangements.",
        "Fees paid to Dispute Paisa do not automatically include independent legal representation unless that inclusion is expressly stated in the applicable service agreement.",
        "Refunds and cancellations are governed by the applicable Refund & Cancellation Policy and the relevant engagement terms, subject to applicable law.",
      ],
    },
    {
      title: "8. No Guarantee of Outcome",
      paragraphs: [
        "Dispute Paisa does not guarantee unfreezing of a bank account, removal of a bank lien or debit restriction, recovery or reversal of funds, acceptance of a complaint or representation, a particular court, police, bank, or regulatory decision, or resolution within a specified period unless an express, valid commitment states otherwise.",
        "Outcomes depend on the facts, supporting evidence, applicable law, third-party institutions, and decisions of the relevant authorities.",
      ],
    },
    {
      title: "9. Customer Responsibilities",
      paragraphs: [
        "Customers should provide complete and truthful information, submit genuine and lawfully obtained documents, review the scope and fees of any professional engagement, respond to reasonable requests for additional information, follow instructions from the relevant bank, authority, or appointed professional, and avoid making false statements or submitting fabricated evidence.",
      ],
    },
    {
      title: "10. Complaints and Queries",
      paragraphs: [
        "Questions about Dispute Paisa's services, third-party involvement, or applicable charges may be submitted through the official contact channels.",
        "Email: [Insert Official Contact Email]",
        "Address: [Insert Registered Office Address]",
        "Grievance Contact: [Insert Name or Designation]",
      ],
    },
    {
      title: "11. Relationship with Other Policies",
      paragraphs: [
        "This disclosure should be read alongside the Terms & Conditions, Privacy Policy, Service Disclaimer, Payment Terms & Conditions, Refund & Cancellation Policy, and Case Registration & Service Policy.",
        "Where a separate professional engagement agreement applies, its terms will govern the scope of that professional's engagement, subject to applicable law.",
      ],
    },
    {
      title: "12. Updates",
      paragraphs: [
        "Dispute Paisa may update this disclosure to reflect changes in its services, third-party arrangements, or applicable legal requirements. The latest version will be published on the website.",
        "Important: This disclosure must accurately reflect the actual services offered by Dispute Paisa and must not be used to imply that the company provides legal representation or regulated services for which it lacks the necessary authority.",
      ],
    },
  ];

  return (
    <LegalPolicyLayout
      title="Legal Services & Third-Party Representation Disclosure"
      introduction="Dispute Paisa provides financial dispute-related guidance, case assistance, documentation support, case tracking, and related support services according to the services actually offered on the platform."
      sections={sections}
      lastUpdated="06/10/2026"
    />
  );
}
