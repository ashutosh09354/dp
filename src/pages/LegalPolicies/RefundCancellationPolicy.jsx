import LegalPolicyLayout from "./LegalPolicyLayout";

export default function RefundCancellationPolicy() {
  return (
    <LegalPolicyLayout
      title="Refund & Cancellation Policy"
      introduction="This Refund & Cancellation Policy explains the circumstances under which a customer may cancel a DisputePaisa service or request a refund for a payment made through the DisputePaisa website, mobile application, retailer/partner channel or other authorised payment channel."
      lastUpdated="06/10/2026"
      sections={[
        {
          title: "1. Purpose",
          paragraphs: [
            "This Refund & Cancellation Policy explains the circumstances under which a customer may cancel a DisputePaisa service or request a refund for a payment made through the DisputePaisa website, mobile application, retailer/partner channel or other authorised payment channel."
          ],
          items: [
            "Terms & Conditions",
            "Privacy Policy",
            "Service Disclaimer",
            "Payment & Fee Policy",
            "Case Registration & Service Policy"
          ]
        },
        {
          title: "2. Scope",
          paragraphs: [
            "This Policy applies to payments made for DisputePaisa services, which may include:"
          ],
          items: [
            "Consultation",
            "Case registration",
            "Case-related services",
            "Document review",
            "Case processing",
            "Additional service requests",
            "Other paid services offered through DisputePaisa"
          ],
          paragraphs2: [
            "The refund eligibility may vary depending on the particular service purchased and the stage at which cancellation is requested."
          ]
        },
        {
          title: "3. Important Principle",
          paragraphs: [
            "Payment for a DisputePaisa service does not guarantee a particular case outcome.",
            "A customer cannot request a refund solely because:"
          ],
          items: [
            "The bank did not unfreeze the account",
            "A lien was not removed",
            "Money was not recovered",
            "A transaction was not reversed",
            "An authority did not accept the complaint",
            "A case took longer than expected",
            "The final outcome was not favourable"
          ],
          paragraphs2: [
            "The outcome of a financial dispute may depend on banks, financial institutions, authorities, courts, law-enforcement agencies and other external factors."
          ]
        },
        {
          title: "4. Fees and Service Commencement",
          paragraphs: [
            "Before payment, the customer may be shown the applicable:"
          ],
          items: [
            "Service",
            "Fee",
            "Applicable taxes",
            "Payment amount",
            "Service description",
            "Other relevant terms",
            "Initial case assessment",
            "Consultation",
            "Case registration",
            "Document review",
            "Assignment",
            "Preparation",
            "Communication",
            "Case processing",
            "Other service activity"
          ],
          paragraphs2: [
            "Once payment is successfully received, DisputePaisa may begin providing the applicable service."
          ]
        },
        {
          title: "5. Cancellation Before Service Commencement",
          paragraphs: [
            "If a customer requests cancellation before the relevant service has commenced, the request may be eligible for a refund, subject to:"
          ],
          items: [
            "The specific service terms",
            "Applicable payment-processing charges",
            "Applicable taxes",
            "Third-party costs, where applicable",
            "Verification of the payment"
          ],
          paragraphs2: [
            "The final refund amount, if any, will be determined according to the applicable service terms."
          ]
        },
        {
          title: "6. Cancellation After Service Commencement",
          paragraphs: [
            "Once a service has commenced, the payment may become:"
          ],
          items: [
            "Partially refundable",
            "Non-refundable",
            "Consultation",
            "Case assessment",
            "Document review",
            "Case registration",
            "Case preparation",
            "Assignment",
            "Professional/operational work",
            "Communication",
            "Other service activities"
          ],
          paragraphs2: [
            "Where a service is partially completed, any eligible refund may be calculated based on the unperformed portion of the service, where applicable."
          ]
        },
        {
          title: "7. Case Registration Fees",
          paragraphs: [
            "Where a customer has paid a case registration or case-processing fee and the case has already been registered or processing has commenced, the applicable fee may be non-refundable or partially refundable depending on the specific service terms communicated at the time of payment.",
            "The exact treatment should be disclosed before payment."
          ]
        },
        {
          title: "8. Consultation Fees",
          paragraphs: [
            "Where a consultation has already been:"
          ],
          items: [
            "Scheduled and conducted",
            "Substantially provided",
            "Commenced"
          ],
          paragraphs2: [
            "The consultation fee may not be refundable.",
            "If the customer cancels before the consultation begins, eligibility for refund or rescheduling will depend on the applicable consultation terms."
          ]
        },
        {
          title: "9. Document Review / Processing Services",
          paragraphs: [
            "Where payment relates to document review, case assessment, preparation or processing, the service may be considered commenced when the relevant documents or case information have been received and work has started.",
            "Once substantial work has been performed, the applicable amount may be non-refundable."
          ]
        },
        {
          title: "10. Additional Services",
          paragraphs: [
            "If a customer requests an additional service after the original case registration, the customer may be required to make an additional payment.",
            "The applicable refund conditions for the additional service will be communicated before payment where reasonably practicable."
          ]
        },
        {
          title: "11. Payment Successful But Service Not Created",
          paragraphs: [
            "If the customer's payment is successfully deducted but:"
          ],
          items: [
            "The service is not created",
            "The case is not registered due to a technical issue",
            "The payment is not reflected in the DisputePaisa system"
          ],
          paragraphs2: [
            "The customer should contact support with the payment/reference details.",
            "We will verify the transaction and take appropriate action."
          ]
        },
        {
          title: "12. Duplicate Payment",
          paragraphs: [
            "If the same customer accidentally makes the same payment more than once for the same service, the customer should notify DisputePaisa.",
            "After verification, an eligible duplicate payment may be refunded, subject to applicable payment-processing conditions."
          ]
        },
        {
          title: "13. Failed Payment",
          paragraphs: [
            "If a payment fails but the amount has been deducted from the customer's bank account, the customer should provide:"
          ],
          items: [
            "Transaction/reference number",
            "Date",
            "Amount",
            "Payment method",
            "Relevant payment information"
          ],
          paragraphs2: [
            "DisputePaisa will verify the transaction.",
            "Where the amount has not been received by DisputePaisa, the resolution may depend on the payment gateway, bank or payment provider's processing and settlement procedures."
          ]
        },
        {
          title: "14. Refund Due to DisputePaisa",
          paragraphs: [
            "If DisputePaisa determines that a refund is payable due to:"
          ],
          items: [
            "An internal processing error",
            "Duplicate payment",
            "Service not delivered where payment was received",
            "Technical error attributable to DisputePaisa",
            "Another approved circumstance"
          ],
          paragraphs2: [
            "The refund will be processed according to the applicable payment method and refund process."
          ]
        },
        {
          title: "15. Refund Due to Customer Cancellation",
          paragraphs: [
            "A customer-requested cancellation will be evaluated according to:"
          ],
          items: [
            "Service type",
            "Service commencement status",
            "Work already performed",
            "Documents already reviewed",
            "Applicable third-party charges",
            "Specific service terms",
            "Applicable law"
          ],
          paragraphs2: [
            "Not every cancellation will result in a refund."
          ]
        },
        {
          title: "16. No Refund for Unsuccessful Outcome",
          paragraphs: [
            "A refund will generally not be provided solely because the customer did not receive the desired outcome.",
            "For example, a refund is not automatically available merely because:"
          ],
          items: [
            "The account remains frozen",
            "The lien remains",
            "The bank rejects a request",
            "The authority does not take the requested action",
            "Funds are not recovered",
            "The transaction is not reversed",
            "The case takes longer than expected"
          ],
          paragraphs2: [
            "This is because DisputePaisa does not guarantee a particular outcome, as explained in the Service Disclaimer."
          ]
        },
        {
          title: "17. Third-Party Costs",
          paragraphs: [
            "Certain services may involve third-party costs. Examples may include:"
          ],
          items: [
            "Payment gateway charges",
            "Professional charges",
            "Government fees",
            "Document-related charges",
            "Courier charges",
            "Other external service charges"
          ],
          paragraphs2: [
            "Where applicable, third-party costs may be non-refundable.",
            "Any such charges should be disclosed to the customer where reasonably practicable before they are incurred."
          ]
        },
        {
          title: "18. Refund Request Process",
          paragraphs: [
            "To request a refund, contact:"
          ],
          items: [
            "Email: [refund@disputepaisa.com]",
            "Phone: [Phone Number]",
            "Name",
            "Registered mobile number",
            "Email address",
            "Case ID, if applicable",
            "Payment/reference ID",
            "Payment date",
            "Amount paid",
            "Reason for refund request",
            "Supporting information, where required"
          ],
          paragraphs2: [
            "The customer may be asked to provide the details listed above."
          ]
        },
        {
          title: "19. Refund Verification",
          paragraphs: [
            "Before processing a refund, DisputePaisa may verify:"
          ],
          items: [
            "Payment status",
            "Customer identity",
            "Case status",
            "Service commencement",
            "Work completed",
            "Payment records",
            "Refund eligibility",
            "Other relevant information"
          ],
          paragraphs2: [
            "This verification is intended to prevent fraudulent or duplicate refund requests."
          ]
        },
        {
          title: "20. Refund Processing Time",
          paragraphs: [
            "Once a refund is approved, DisputePaisa will initiate the refund through the applicable payment channel or method.",
            "The time taken for the amount to appear in the customer's account may depend on:"
          ],
          items: [
            "Payment gateway",
            "Bank",
            "Card network",
            "UPI provider",
            "Payment service provider",
            "Other financial intermediary"
          ],
          paragraphs2: [
            "Any processing time communicated by DisputePaisa is an estimate unless otherwise expressly stated."
          ]
        },
        {
          title: "21. Refund Method",
          paragraphs: [
            "Where possible, refunds will generally be processed through the original payment method.",
            "DisputePaisa may require additional verification before processing a refund.",
            "We may not process refunds to an unrelated third-party account unless legally or operationally required and appropriately verified."
          ]
        },
        {
          title: "22. Chargebacks and Payment Disputes",
          paragraphs: [
            "Customers are encouraged to contact DisputePaisa first regarding payment-related issues.",
            "If a customer initiates a chargeback or payment dispute through a bank, card issuer or payment provider, DisputePaisa may provide relevant transaction information to the payment provider for resolution.",
            "Fraudulent or abusive chargeback activity may result in account restrictions or other appropriate action, subject to applicable law."
          ]
        },
        {
          title: "23. Fraudulent Refund Claims",
          paragraphs: [
            "DisputePaisa may reject a refund request where there is evidence or reasonable suspicion of:"
          ],
          items: [
            "Fraudulent activity",
            "Manipulated payment information",
            "False information",
            "Unauthorised use of another person's account",
            "Duplicate claims",
            "Misuse of the refund process",
            "Other abusive activity"
          ],
          paragraphs2: [
            "Where appropriate, we may take further action under applicable law."
          ]
        },
        {
          title: "24. Service Termination by DisputePaisa",
          paragraphs: [
            "DisputePaisa may suspend or discontinue a service where:"
          ],
          items: [
            "False information is provided",
            "Forged documents are submitted",
            "Unlawful activity is suspected",
            "The customer violates applicable Terms",
            "Required information is not provided",
            "Continued processing creates legal or security concerns",
            "Another legitimate reason exists",
            "The reason for termination",
            "Work already performed",
            "Applicable service terms",
            "Applicable law"
          ],
          paragraphs2: [
            "Refund eligibility in such circumstances will be determined based on the factors listed above."
          ]
        },
        {
          title: "25. Changes to Service",
          paragraphs: [
            "If DisputePaisa materially changes or discontinues a paid service before providing the service, the company may provide an appropriate remedy, which may include:"
          ],
          items: [
            "Alternative service",
            "Rescheduling",
            "Credit, where offered",
            "Refund, where applicable"
          ]
        },
        {
          title: "26. No Refund of Government / Bank / Authority Outcome",
          paragraphs: [
            "Payments made to DisputePaisa are payments for the services described by DisputePaisa.",
            "They are not payments made to:"
          ],
          items: [
            "A bank",
            "Police",
            "Government authority",
            "Court",
            "Regulator"
          ],
          paragraphs2: [
            "A service payment therefore does not guarantee action by any external institution."
          ]
        },
        {
          title: "27. Taxes",
          paragraphs: [
            "Applicable taxes, including GST where applicable, may be charged in accordance with applicable law.",
            "Refund treatment of taxes will depend on:"
          ],
          items: [
            "Applicable tax rules",
            "Invoice status",
            "Service status",
            "Applicable refund requirements"
          ]
        },
        {
          title: "28. Retailer / Partner Payments",
          paragraphs: [
            "Payments made through authorised retailers or partners may be subject to additional terms applicable to the retailer/partner arrangement.",
            "Retailers and partners must not independently promise customers refunds, outcomes or guarantees that have not been authorised by DisputePaisa."
          ]
        },
        {
          title: "29. Customer Responsibility",
          paragraphs: [
            "Customers are responsible for:"
          ],
          items: [
            "Reviewing the service description before payment",
            "Checking applicable fees",
            "Reviewing cancellation conditions",
            "Providing correct payment information",
            "Retaining payment references",
            "Raising refund requests with accurate information"
          ]
        },
        {
          title: "30. Policy Relationship",
          paragraphs: [
            "This Refund & Cancellation Policy should be read together with:"
          ],
          items: [
            "Privacy Policy",
            "Terms & Conditions",
            "Service Disclaimer",
            "Payment & Fee Policy",
            "Case Registration & Service Policy",
            "Grievance Redressal Policy"
          ],
          paragraphs2: [
            "Where a specific service has separate refund terms communicated before payment, those terms may apply to that service."
          ]
        },
        {
          title: "31. Changes to This Policy",
          paragraphs: [
            "DisputePaisa may update this Refund & Cancellation Policy from time to time due to:"
          ],
          items: [
            "Changes in services",
            "Changes in pricing",
            "Operational changes",
            "Legal or regulatory requirements",
            "Payment-provider requirements",
            "Other legitimate business reasons"
          ],
          paragraphs2: [
            "The updated version will be published on the DisputePaisa website.",
            "Last Updated: 06/10/2026"
          ]
        },
        {
          title: "32. Governing Law",
          paragraphs: [
            "This Policy shall be governed by the laws of India, subject to applicable law.",
            "Jurisdiction: [City, State, India]"
          ],
          paragraphs2: [
            "The final jurisdiction should be confirmed by your legal counsel based on the registered office and legal structure."
          ]
        },
        {
          title: "33. Contact Information",
          paragraphs: [
            "DisputePaisa",
            "A brand of: [Legal Company Name]",
            "Website: https://disputepaisa.com",
            "Refund Email: [refund@disputepaisa.com]",
            "Support Email: [support@disputepaisa.com]",
            "Phone: [Phone Number]",
            "Registered Office: [Full Address]"
          ]
        },
        {
          title: "34. Final Refund Notice",
          paragraphs: [
            "Payment for DisputePaisa services does not guarantee a particular outcome. Refund eligibility depends on the service purchased, whether the service has commenced, work already performed, applicable third-party charges, the specific service terms and applicable law. An unsuccessful case outcome alone does not automatically create a right to a refund."
          ]
        }
      ]}
    />
  );
}
