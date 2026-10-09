import LegalPolicyLayout from "./LegalPolicyLayout";

export default function InformationSecurityPolicy() {
  const sections = [
    {
      title: "1. Purpose",
      paragraphs: [
        "The purpose of this Information Security Policy is to protect the confidentiality, integrity, and availability of information handled by Dispute Paisa. This policy establishes security requirements for protecting customer information, case documents, business records, employee information, systems, applications, and other confidential data.",
      ],
    },
    {
      title: "2. Scope",
      paragraphs: [
        "This policy applies to the Dispute Paisa website and mobile applications, admin dashboard, employee dashboard, and retailer or partner panel, backend systems, APIs, databases, servers, and cloud infrastructure, employees, experts, consultants, contractors, retailers, and authorised third parties, and customer information, case records, uploaded documents, payment records, and business information.",
        "All individuals with authorised access to Dispute Paisa systems must follow this policy.",
      ],
    },
    {
      title: "3. Information Security Principles",
      paragraphs: [
        "Confidentiality: Information must only be accessed by authorised persons.",
        "Integrity: Information must be protected against unauthorised modification, deletion, or misuse.",
        "Availability: Systems and information should remain accessible to authorised users when required.",
        "Accountability: Access and important system activities should be recorded and reviewed where appropriate.",
      ],
    },
    {
      title: "4. Data Classification",
      paragraphs: [
        "Information should be classified according to its sensitivity.",
      ],
      items: [
        "Public Information: Approved website content, public announcements, and marketing materials.",
        "Internal Information: Internal procedures, operational reports, employee instructions, and non-public business information.",
        "Confidential Information: Customer details, case records, commercial agreements, employee records, and internal financial information.",
        "Restricted Information: Identity documents, bank statements, financial dispute evidence, authentication credentials, access keys, and other highly sensitive information.",
      ],
    },
    {
      title: "5. Access Control",
      paragraphs: [
        "Access to systems and information must be provided only to authorised users, based on job responsibilities and the principle of least privilege. Admin, employee, expert, and retailer accounts must have appropriate role-based permissions. Shared user accounts should not be used unless specifically approved and adequately controlled. Access must be reviewed periodically and updated when responsibilities change. Access must be revoked promptly when an employee, expert, retailer, or other authorised person leaves or no longer requires access. Privileged administrator access must be restricted to approved personnel.",
      ],
    },
    {
      title: "6. Password and Authentication Security",
      paragraphs: [
        "Users must create strong, unique passwords. Passwords must not be shared with colleagues, customers, retailers, or unauthorised persons. Multi-factor authentication should be enabled for administrator accounts, business email, hosting, source-code repositories, and other critical services wherever available. Temporary passwords must be changed or securely replaced after initial access. Passwords and authentication secrets must not be stored in plain text. OTPs, login credentials, API keys, private keys, and access tokens must not be disclosed to unauthorised persons. Suspected account compromise must be reported immediately.",
      ],
    },
    {
      title: "7. Customer Data and Document Security",
      paragraphs: [
        "Dispute Paisa may process information submitted for financial dispute consultation and case assistance. Such information may include identity documents, bank-related documents, transaction evidence, complaint references, and communications.",
        "The company will apply appropriate safeguards, including collecting only information reasonably required for the relevant service, restricting document access to authorised personnel handling the case, using secure upload and transmission methods, protecting stored documents through appropriate technical and organisational controls, avoiding unnecessary downloads, printing, copying, or forwarding of customer documents, preventing customer information from being shared through personal email accounts or unauthorised messaging channels, using redaction or masking where appropriate, and securely disposing of information when retention is no longer required, subject to applicable legal obligations.",
        "Customers and staff must never share passwords, PINs, CVVs, full authentication credentials, or OTPs for the purpose of case handling.",
      ],
    },
    {
      title: "8. System and Network Security",
      paragraphs: [
        "Dispute Paisa will implement appropriate technical safeguards based on system risk and operational requirements. These may include secure configuration of servers, applications, and databases, timely installation of security updates and patches, firewall and network access controls, protection against malware and unauthorised access, HTTPS/TLS for data transmission wherever applicable, encryption of sensitive stored data where appropriate, secure management of API keys, credentials, and other secrets, regular review of system permissions and exposed services, secure backup and recovery arrangements, and separation of development, testing, and production environments where feasible.",
        "Security controls must be proportionate to the sensitivity of the information and the risks associated with the system.",
      ],
    },
    {
      title: "9. Software Development and Change Management",
      paragraphs: [
        "Developers and technical personnel must follow secure development practices. Code changes must be reviewed and tested before production deployment, where practicable. Production credentials and customer data must not be unnecessarily exposed in development or testing environments. Secrets must not be committed to public repositories. Dependencies and third-party components should be reviewed and updated appropriately. Production changes must be authorised and documented. Security weaknesses identified during testing must be assessed and addressed according to their severity. Access to source-code repositories and deployment systems must be restricted to authorised personnel.",
      ],
    },
    {
      title: "10. Logging and Monitoring",
      paragraphs: [
        "Where technically appropriate, Dispute Paisa will maintain logs of important security and operational events, including login attempts and account access, administrative actions and permission changes, case-record access or modifications, document uploads and downloads, payment-related events and relevant system errors, and security alerts and configuration changes.",
        "Logs must be protected against unauthorised access or alteration. Sensitive information, passwords, OTPs, and authentication secrets must not be unnecessarily recorded in logs. Log retention will follow approved retention requirements and applicable law.",
      ],
    },
    {
      title: "11. Third-Party and Vendor Security",
      paragraphs: [
        "Third-party service providers may include hosting providers, payment gateways, messaging services, identity-verification providers, software vendors, and other technology partners.",
        "Before sharing information with a third party, Dispute Paisa should assess the business need, security risks, contractual safeguards, and applicable legal requirements.",
        "Third parties must receive only the access and information reasonably required for their authorised services. Relevant confidentiality, security, and data-protection obligations should be included in agreements where appropriate.",
      ],
    },
    {
      title: "12. Employee and Partner Responsibilities",
      paragraphs: [
        "All employees, experts, consultants, retailers, and authorised partners must use company systems only for authorised purposes, keep credentials and customer information confidential, avoid using unauthorised applications or devices to process restricted information, lock devices when unattended and secure devices used for work, report suspected phishing, fraud, data exposure, lost devices, or unauthorised access immediately, follow applicable confidentiality agreements, customer communication rules, and data-protection procedures, and complete required security awareness training.",
        "No person may access, copy, sell, disclose, or misuse customer information for personal benefit or an unauthorised purpose.",
      ],
    },
    {
      title: "13. Incident Reporting and Response",
      paragraphs: [
        "A security incident may include unauthorised access, data leakage, a lost device containing customer information, compromised credentials, malware, ransomware, suspicious system activity, or accidental disclosure of documents.",
        "Any suspected incident must be reported immediately to:",
        "Security Contact: [Insert Name/Team]",
        "Email: [Insert Official Security Email]",
        "Phone: [Insert Official Contact Number]",
        "The responsible team should, as appropriate, record the incident and assess its severity, contain the incident and limit further exposure, preserve relevant logs and evidence, investigate the cause and affected systems or individuals, reset credentials, isolate systems, or take other corrective actions where necessary, notify affected persons, service providers, or authorities when required by applicable law, and document corrective measures and steps to prevent recurrence.",
        "Incident reporting and response must follow applicable legal timelines and regulatory requirements.",
      ],
    },
    {
      title: "14. Backup and Business Continuity",
      paragraphs: [
        "Dispute Paisa should maintain appropriate backup and recovery arrangements for critical business information and systems.",
        "Backups must be protected from unauthorised access and, where appropriate, encrypted. Recovery procedures should be tested periodically. Access to backups must be restricted, and retention should follow the approved retention schedule.",
      ],
    },
    {
      title: "15. Physical and Device Security",
      paragraphs: [
        "Personnel must protect laptops, desktops, mobile devices, storage media, printed documents, and other equipment containing company or customer information.",
        "Devices must use appropriate authentication and security updates. Lost or stolen devices must be reported promptly. Restricted information must not be left unattended in public areas or disposed of through ordinary waste without appropriate secure disposal.",
      ],
    },
    {
      title: "16. Data Retention and Secure Deletion",
      paragraphs: [
        "Information must be retained only for the period necessary for the relevant business purpose, contractual requirement, dispute handling, or applicable legal obligation.",
        "When information is no longer required, it must be securely deleted, destroyed, anonymised, or otherwise disposed of using an appropriate method, subject to applicable retention requirements, litigation holds, and other lawful obligations.",
        "Detailed retention periods should be established separately in the Data Retention and Deletion Policy.",
      ],
    },
    {
      title: "17. Security Violations",
      paragraphs: [
        "Violations of this policy may result in access restrictions, investigation, disciplinary action, termination of employment or engagement, contractual remedies, or legal action, as appropriate and permitted by applicable law.",
        "Any response will depend on the nature, seriousness, and circumstances of the violation.",
      ],
    },
    {
      title: "18. Policy Review",
      paragraphs: [
        "This policy should be reviewed periodically and whenever there are significant changes to Dispute Paisa's systems, services, data-processing activities, security risks, or applicable legal requirements.",
        "The company may update this policy when necessary. The current approved version should be maintained in the appropriate internal records.",
      ],
    },
    {
      title: "19. Contact Information",
      paragraphs: [
        "Brand: Dispute Paisa",
        "Website: https://disputepaisa.com",
        "Legal Entity: [Insert Full Legal Entity Name]",
        "Security Contact: [Insert Name/Team]",
        "Email: [Insert Official Email]",
        "Address: [Insert Registered Office Address]",
      ],
    },
  ];

  return (
    <LegalPolicyLayout
      title="Information Security Policy"
      introduction="Dispute Paisa takes reasonable steps to protect information submitted through its website and query facilitation service."
      sections={sections}
      lastUpdated="06/10/2026"
    />
  );
}
