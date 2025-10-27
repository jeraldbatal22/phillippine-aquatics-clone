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
    { name: "About PSDO", href: "#about" },
    { name: "Our Mission", href: "#mission" },
    { name: "Facilities", href: "#facilities" },
    { name: "Staff & Coaches", href: "#staff" },
    { name: "Contact Us", href: "#contact" }
  ],
  rankings: [
    { name: "Basketball Championships", href: "#basketball" },
    { name: "Volleyball League", href: "#volleyball" },
    { name: "Athletics Events", href: "#athletics" },
    { name: "Inter-Municipal Competitions", href: "#competitions" },
    { name: "Regional Games", href: "#regional" }
  ],
  resources: [
    { name: "Facility Rental", href: "#rental" },
    { name: "Training Programs", href: "#training" },
    { name: "Forms & Registrations", href: "#forms" },
    { name: "Rules & Regulations", href: "#rules" },
    { name: "Schedules", href: "#schedules" },
    { name: "Tournament Results", href: "#results" }
  ],
  membership: [
    { name: "Join Training Program", href: "#join" },
    { name: "Athlete Registration", href: "#athlete-reg" },
    { name: "Team Registration", href: "#team-reg" },
    { name: "Facility Booking", href: "#booking" },
    { name: "Membership Benefits", href: "#benefits" },
    { name: "Annual Fees", href: "#fees" }
  ]
};

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How can I book the Provincial Coliseum for events?",
    answer: "Contact the Provincial Sports Development Office at sports@ilocossur.gov.ph or call +63 77 722 2700. Facility rental requires reservation and payment of rental fees."
  },
  {
    question: "What sports programs are available for youth?",
    answer: "We offer comprehensive training programs in basketball, volleyball, athletics, table tennis, and swimming. Registration opens annually. Check our training programs section for schedule and fees."
  },
  {
    question: "Are there age restrictions for joining training programs?",
    answer: "Training programs are available for different age groups: Kids (8-12 years), Juniors (13-17 years), and Seniors (18+ years). Each program is tailored to the specific age group's needs and skill levels."
  },
  {
    question: "How do I register my team for provincial competitions?",
    answer: "Team registration forms are available at the PSDO office or downloadable from our website. Submit completed forms along with required documents (medical clearance, birth certificate, team roster) before the registration deadline."
  },
  {
    question: "What facilities are available at the Provincial Stadium?",
    answer: "The Ilocos Sur Provincial Stadium and Coliseum features indoor basketball/volleyball courts, outdoor athletics track, training rooms, locker facilities, and parking. The venue hosts provincial championships and major sporting events."
  }
];

export const MOBILE_MENU_ITEMS: MenuItem[] = [
  { name: 'Home', href: '#', icon: '🏠' },
  { name: 'About PSDO', href: '#', icon: 'ℹ️', hasDropdown: true, dropdownKey: 'about' },
  { name: 'Competitions', href: '#', icon: '🏆', hasDropdown: true, dropdownKey: 'rankings' },
  { name: 'Events', href: '#', icon: '📅' },
  { name: 'Programs', href: '#', icon: '📚', hasDropdown: true, dropdownKey: 'resources' },
  { name: 'Registration', href: '#', icon: '🎫', hasDropdown: true, dropdownKey: 'membership' }
];

export const CONTACT_INFO = {
  location: "Ilocos Sur Provincial Coliseum, Vigan City",
  email: "sports@ilocossur.gov.ph",
  phone: "+63 77 722 2700"
};

export const PARTNER_ORGANIZATIONS = [
  "Provincial Sports Development Office",
  "Ilocos Sur Provincial Government", 
  "Philippine Sports Commission",
  "National Basketball Association",
  "Palarong Pambansa Organizing Committee"
];
