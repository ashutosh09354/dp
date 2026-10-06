import { Route, Routes } from "react-router-dom";
import LegalServicesThirdPartyRepresentationDisclosure from "./LegalServicesThirdPartyRepresentationDisclosure";
import AccountDeletionDataRightsProcedure from "./AccountDeletionDataRightsProcedure";
import UserAcceptanceConsentPolicy from "./UserAcceptanceConsentPolicy";
import CookiePolicy from "./CookiePolicy";
import DocumentUploadVerificationPolicy from "./DocumentUploadVerificationPolicy";
import ConsentDataProcessingNotice from "./ConsentDataProcessingNotice";
import PaymentTermsConditions from "./PaymentTermsConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import ServiceDisclaimer from "./ServiceDisclaimer";
import GrievanceRedressalPolicy from "./GrievanceRedressalPolicy";
import CaseRegistrationServicePolicy from "./CaseRegistrationServicePolicy";
import CustomerCommunicationPolicy from "./CustomerCommunicationPolicy";
import DataRetentionDeletionPolicy from "./DataRetentionDeletionPolicy";
import InformationSecurityPolicy from "./InformationSecurityPolicy";
import RefundCancellationPolicy from "./RefundCancellationPolicy";
import TermsConditions from "./TermsConditions";
import RetailerPartnerTermsConditions from "./RetailerPartnerTermsConditions";

export default function LegalPoliciesRoutes() {
  return (
    <Routes>
      <Route path="legal-services-third-party-representation-disclosure" element={<LegalServicesThirdPartyRepresentationDisclosure />} />
      <Route path="account-deletion-data-rights-procedure" element={<AccountDeletionDataRightsProcedure />} />
      <Route path="user-acceptance-consent-policy" element={<UserAcceptanceConsentPolicy />} />
      <Route path="cookie-policy" element={<CookiePolicy />} />
      <Route path="document-upload-verification-policy" element={<DocumentUploadVerificationPolicy />} />
      <Route path="consent-data-processing-notice" element={<ConsentDataProcessingNotice />} />
      <Route path="payment-terms-conditions" element={<PaymentTermsConditions />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="service-disclaimer" element={<ServiceDisclaimer />} />
      <Route path="grievance-redressal-policy" element={<GrievanceRedressalPolicy />} />
      <Route path="case-registration-service-policy" element={<CaseRegistrationServicePolicy />} />
      <Route path="customer-communication-policy" element={<CustomerCommunicationPolicy />} />
      <Route path="data-retention-deletion-policy" element={<DataRetentionDeletionPolicy />} />
      <Route path="information-security-policy" element={<InformationSecurityPolicy />} />
      <Route path="refund-cancellation-policy" element={<RefundCancellationPolicy />} />
      <Route path="terms-conditions" element={<TermsConditions />} />
      <Route path="retailer-partner-terms-conditions" element={<RetailerPartnerTermsConditions />} />
    </Routes>
  );
}
