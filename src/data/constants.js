import {
  Banknote, Building2, CreditCard, FileText, Grid2X2,
  RotateCcw, Search, ShieldAlert, UserRound, WalletCards,
} from "lucide-react";

export const issues = [
  {
    title: "Transaction Issues",
    text: "Raise concerns regarding failed, pending or disputed transactions.",
    icon: CreditCard,
    bgGradient: "linear-gradient(135deg, #459bfc 0%, #0565ee 100%)",
    iconColor: "text-white",
    shadowColor: "rgba(5, 101, 238, 0.32)",
  },
  {
    title: "Account Related",
    text: "Get guidance regarding account restrictions, freezes and blocks.",
    icon: UserRound,
    bgGradient: "linear-gradient(135deg, #e4defe 0%, #bcaffc 100%)",
    iconColor: "text-[#625bf4]",
    shadowColor: "rgba(188, 175, 252, 0.45)",
  },
  {
    title: "Banking Services",
    text: "Assistance with banking services and account-related concerns.",
    icon: Building2,
    bgGradient: "linear-gradient(135deg, #51cfbe 0%, #01aa97 100%)",
    iconColor: "text-white",
    shadowColor: "rgba(1, 170, 151, 0.32)",
  },
  {
    title: "Card Disputes",
    text: "Help with debit/credit card disputes and unauthorized charges.",
    icon: WalletCards,
    bgGradient: "linear-gradient(135deg, #fec367 0%, #fd8e0c 100%)",
    iconColor: "text-white",
    shadowColor: "rgba(253, 142, 12, 0.32)",
  },
  {
    title: "Refund & Reversal",
    text: "Assistance regarding refund delays and transaction reversals.",
    icon: RotateCcw,
    bgGradient: "linear-gradient(135deg, #f873a7 0%, #da357f 100%)",
    iconColor: "text-white",
    shadowColor: "rgba(218, 53, 127, 0.32)",
  },
  {
    title: "Loan & EMI Issues",
    text: "Guidance on loan, EMI and repayment-related banking concerns.",
    icon: Banknote,
    bgGradient: "linear-gradient(135deg, #60acfe 0%, #0d6dee 100%)",
    iconColor: "text-white",
    shadowColor: "rgba(13, 109, 238, 0.32)",
  },
  {
    title: "Fraud & Unauthorized Use",
    text: "Report and get help with fraudulent or unauthorized transactions.",
    icon: ShieldAlert,
    bgGradient: "linear-gradient(135deg, #a99cfb 0%, #7a6af6 100%)",
    iconColor: "text-white",
    shadowColor: "rgba(122, 106, 246, 0.32)",
  },
  {
    title: "Other Banking Concerns",
    text: "Tell us about any other banking-related issue you're facing.",
    icon: Grid2X2,
    bgGradient: "linear-gradient(135deg, #9fd673 0%, #55aa22 100%)",
    iconColor: "text-white",
    shadowColor: "rgba(85, 170, 34, 0.32)",
  },
];

export const assistanceFeatures = [
  ["Raise a Dispute", "Submit your banking concern through our secure form.", FileText],
  ["Document Guidance", "Know what documents to upload for faster resolution.", FileText],
  ["Status Tracking", "Track your query status anytime with your reference ID.", Search],
  ["Multi-Bank Support", "Support for all major banks across India.", Building2],
];

export const faqs = [
  {
    question: "What type of banking problems can I raise?",
    answer: "You can raise issues related to failed UPI/ATM transactions, unauthorized debits, delayed refunds, blocked or frozen accounts, credit/debit card disputes, loan/EMI discrepancies, and improper bank charges."
  },
  {
    question: "How do I submit a query?",
    answer: "Simply scroll to our 'Raise a Query' form, select your bank and issue category, describe what happened, upload relevant supporting documents (receipt, screenshot, or statement), and submit."
  },
  {
    question: "How will I receive my Query ID?",
    answer: "Immediately after submitting the form, your unique Query Reference ID (e.g. DP-2026-XXXXXX) is displayed on screen and sent to your registered email and mobile number."
  },
  {
    question: "How can I track my query?",
    answer: "Use the 'Track Your Query' section on this page by entering your unique reference ID to view real-time updates and current investigation progress."
  },
  {
    question: "How long does it take for someone to contact me?",
    answer: "Our resolution team typically reviews queries within 24 to 48 business hours and reaches out via phone or email with clear next steps."
  },
  {
    question: "Is my information secure?",
    answer: "Yes. We follow strict privacy protocols and bank-grade data security. Your personal details and banking documents are handled with complete confidentiality."
  },
  {
    question: "Is there a consultation fee?",
    answer: "Submitting a preliminary query and tracking your status is completely free. Any customized assistance or escalation services will always be transparently discussed upfront."
  },
  {
    question: "Can you guarantee resolution of my banking issue?",
    answer: "While final resolutions depend on bank policies and regulatory guidelines (RBI/Banking Ombudsman), our experienced specialists guide you through the exact escalation hierarchy to maximize resolution speed and success."
  }
];

export const navLinks = [
  ["Home", "/#home"],
  ["How It Works", "/how-it-works"],
  ["About", "/about"],
  ["Track Query", "/#track"],
  ["Contact", "/#query"],
];

export const banks = ["SBI", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra", "Other"];

export const queryBenefits = [
  "Simple & secure form",
  "Relevant details collected in one place",
  "Support for banking-related concerns",
  "Query reference ID after submission",
  "Transparent follow-up process",
];
