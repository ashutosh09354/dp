import LegalPolicyLayout from "./LegalPolicyLayout";

export default function PaymentTermsConditions() {
  return (
    <LegalPolicyLayout
      title="Payment Terms & Conditions"
      introduction="These Payment Terms & Conditions explain the payment process for consultation, case registration and other services provided by DisputePaisa. By making a payment, customers agree to the applicable service details, fees and conditions communicated before payment."
      lastUpdated="[Insert Date]"
      sections={[
        {
          title: "1. Service Fees",
          paragraphs: [
            "DisputePaisa may charge fees for consultation, case assessment, document review, case assistance and other services.",
            "The applicable fee will be communicated to the customer before the customer confirms the service and proceeds with payment."
          ],
          items: [
            "Consultation Fee: ₹[Insert Amount]",
            "Case Registration Fee: ₹[Insert Amount]",
            "Document Review Fee: ₹[Insert Amount]",
            "Other Service Charges: As communicated before confirmation.",
            "No fee should be represented as final until it has been approved and communicated to the customer."
          ]
        },
        {
          title: "2. Accepted Payment Methods",
          paragraphs: [
            "Depending on availability, customers may pay through:",
            "Customers should use only the official payment links, QR codes or payment channels provided by DisputePaisa or its authorised partners."
          ],
          items: [
            "UPI",
            "Online payment gateway",
            "Debit or credit cards, where supported",
            "Other payment methods officially enabled by DisputePaisa"
          ]
        },
        {
          title: "3. Payment Confirmation",
          paragraphs: [
            "A payment will be treated as received after confirmation through the relevant payment gateway, bank or authorised payment service provider.",
            "Customers should retain the transaction reference or payment receipt for future communication.",
            "A screenshot alone may not establish that a transaction has been successfully credited."
          ]
        },
        {
          title: "4. Failed, Pending or Duplicate Payments",
          paragraphs: [
            "If an amount is debited but the payment status remains pending or failed, the customer should contact our support team with the transaction reference and payment details.",
            "Duplicate payments will be reviewed against the available transaction records and handled according to the applicable refund process.",
            "Customers should not make repeated payments for the same service without checking the transaction status, wherever possible."
          ]
        },
        {
          title: "5. Retailer and Partner Collections",
          paragraphs: [
            "Where DisputePaisa permits authorised retailers or partners to collect payments:",
            "Customers should request an official receipt or payment acknowledgement for payments made through an authorised partner."
          ],
          items: [
            "The partner must follow the approved payment and collection process.",
            "Applicable service charges must be communicated clearly.",
            "Partners must not collect unauthorised fees or make false promises about outcomes.",
            "Payments and receipts must be recorded accurately.",
            "Partner commissions, settlements and reconciliation will be governed by the applicable partner agreement."
          ]
        },
        {
          title: "6. Taxes and Additional Charges",
          paragraphs: [
            "Applicable taxes and any additional charges will be communicated to the customer before payment, where required.",
            "The final invoice or receipt will reflect the applicable charges in accordance with the relevant billing process and law."
          ]
        },
        {
          title: "7. Refunds and Cancellations",
          paragraphs: [
            "Refund eligibility depends on the nature of the service, the stage at which the service has commenced, the reason for the request and the applicable Refund & Cancellation Policy.",
            "Customers should review that policy before making payment.",
            "A refund is not automatically available merely because a bank, authority or other third party does not provide the expected outcome.",
            "Any approved refund will be processed according to the applicable policy and legal requirements."
          ]
        },
        {
          title: "8. No Guarantee of Financial or Legal Outcome",
          paragraphs: [
            "Payment for a consultation or case assistance service does not guarantee:",
            "DisputePaisa provides consultation, guidance and structured case assistance. Final decisions may depend on the relevant institution, authority, available evidence and applicable law."
          ],
          items: [
            "Unfreezing of a bank account.",
            "Removal of a lien or debit freeze.",
            "Reversal of an unauthorised transaction.",
            "Recovery of lost funds.",
            "Closure or acceptance of a cybercrime complaint.",
            "A favourable decision by a bank, court, law enforcement agency or other authority."
          ]
        },
        {
          title: "9. Unauthorised Payments and Fraud",
          paragraphs: [
            "Customers should not share their OTP, PIN, password or card security code with any person claiming to represent DisputePaisa.",
            "Any suspected unauthorised collection, suspicious payment request or impersonation should be reported promptly through our official support channels."
          ]
        },
        {
          title: "10. Payment Disputes and Support",
          paragraphs: [
            "For payment-related assistance, customers should provide:",
            "We will review the information and coordinate with the relevant payment provider or authorised partner where necessary."
          ],
          items: [
            "Name and registered contact details.",
            "Payment date and amount.",
            "Transaction reference or payment ID.",
            "Query ID or Case ID, if available.",
            "A brief description of the issue."
          ]
        },
        {
          title: "11. Changes to Payment Terms",
          paragraphs: [
            "DisputePaisa may update these terms to reflect changes in services, payment methods, pricing or applicable legal requirements. The updated version will be published on the official website."
          ]
        },
        {
          title: "12. Contact Details",
          paragraphs: [
            "DisputePaisa",
            "Website: https://disputepaisa.com",
            "Legal Entity: [Insert Full Legal Entity Name]",
            "Email: [Insert Official Support Email]",
            "Phone/WhatsApp: [Insert Official Contact Number]",
            "Registered Office: [Insert Full Address]"
          ],
          items: [
            "DisputePaisa — Your Money. Your Rights."
          ]
        }
      ]}
    />
  );
}
