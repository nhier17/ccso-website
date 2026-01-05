  declare interface Program {
    id: string;
    icon: React.ElementType;
    title: string;
    desc: string;
    longDesc: string;
    stats: Record<string, string>;
    image: string;
  };
  
  declare interface Metric {
    icon: React.ElementType;
    number: string;
    label: string;
  };

  declare interface PartnershipFormValues {
    orgName: string;
    orgType: string;
    contactName: string;
    jobTitle: string;
    email: string;
    phone: string;
    interest: string;
    partnershipDetails: string;
    additionalInfo?: string;
  }

declare interface StoryImpact {
  beneficiaries?: number;
  duration?: string;
  outputs?: string[];
}

declare interface Story {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  program?: string;
  location: string;
  date: string;
  readTime: string;
  coverImage: string;
  status: 'report' | 'story' | 'news';
  impact?: StoryImpact;
  content?: string;
}
