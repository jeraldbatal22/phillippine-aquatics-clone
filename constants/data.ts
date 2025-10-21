export interface DropdownItem {
  name: string;
  href: string;
}

export interface DropdownData {
  [key: string]: DropdownItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface MenuItem {
  name: string;
  href: string;
  icon: string;
  hasDropdown?: boolean;
  dropdownKey?: string;
}

export const DROPDOWN_DATA: DropdownData = {
  about: [
    { name: "About PAI", href: "#about" },
    { name: "History", href: "#history" },
    { name: "Mission & Vision", href: "#mission" },
    { name: "Board of Directors", href: "#board" },
    { name: "Staff", href: "#staff" }
  ],
  rankings: [
    { name: "National Rankings", href: "#national" },
    { name: "Regional Rankings", href: "#regional" },
    { name: "Age Group Rankings", href: "#age-group" },
    { name: "Records", href: "#records" },
    { name: "Statistics", href: "#stats" }
  ],
  resources: [
    { name: "Swimming Rules", href: "#swimming-rules" },
    { name: "Water Polo Rules", href: "#water-polo-rules" },
    { name: "Forms & Documents", href: "#forms" },
    { name: "Training Materials", href: "#training" },
    { name: "Coaching Resources", href: "#coaching" },
    { name: "Technical Bulletins", href: "#bulletins" }
  ],
  membership: [
    { name: "Join PAI", href: "#join" },
    { name: "Renew Membership", href: "#renew" },
    { name: "Membership Benefits", href: "#benefits" },
    { name: "Membership Fees", href: "#fees" },
    { name: "Member Directory", href: "#directory" },
    { name: "Member Services", href: "#services" }
  ]
};

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What are the requirements to become a member?",
    answer: "To become a member, you need to be a Filipino citizen, have basic swimming skills, and submit the required documents including medical clearance and application form."
  },
  {
    question: "How much is the membership fee?",
    answer: "The annual membership fee is ₱2,500 for regular members and ₱1,500 for student members with valid ID."
  },
  {
    question: "Where can I download the Forms and Guidelines?",
    answer: "All forms and guidelines are available for download on our official website under the Resources section."
  },
  {
    question: "Where to send the completed forms?",
    answer: "Completed forms should be submitted to our main office at Rizal Memorial Sports Complex, Manila or via email to membership@philippineaquatics.org"
  },
  {
    question: "Important Reminders",
    answer: "Please ensure all documents are complete and properly filled out. Incomplete applications will not be processed."
  }
];

export const MOBILE_MENU_ITEMS: MenuItem[] = [
  { name: 'Home', href: '#', icon: '🏠' },
  { name: 'About PAI', href: '#', icon: 'ℹ️', hasDropdown: true, dropdownKey: 'about' },
  { name: 'Rankings', href: '#', icon: '🏆', hasDropdown: true, dropdownKey: 'rankings' },
  { name: 'Athletes', href: '#', icon: '👥' },
  { name: 'Resources', href: '#', icon: '📚', hasDropdown: true, dropdownKey: 'resources' },
  { name: 'PAI Membership', href: '#', icon: '🎫', hasDropdown: true, dropdownKey: 'membership' }
];

export const CONTACT_INFO = {
  location: "Manila, Philippines",
  email: "philippineaquatics@gmail.com",
  phone: "+63 2 1234 5678"
};

export const PARTNER_ORGANIZATIONS = [
  "Philippine Olympic Committee",
  "World Aquatics", 
  "Philippine Sports Commission",
  "Speedo",
  "Congress of the Philippines"
];
