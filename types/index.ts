export type Program = {
    id: string;
    icon: React.ElementType;
    title: string;
    desc: string;
    longDesc: string;
    stats: Record<string, string>;
    image: string;
  };
  
  export type Metric = {
    icon: React.ElementType;
    number: string;
    label: string;
  };

  export type PartnershipFormValues = {
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

  export interface StoryFrontmatter {
  title: string
  slug: string
  excerpt: string

  category: 
    | "Emergency"
    | "Education"
    | "Health"
    | "Peace"
    | "Agriculture"
    | "Evangelism"

  program: string
  location: string

  date: string
  readTime?: string
  coverImage: string

  impact?: {
    beneficiaries?: number
    duration?: string
    outputs?: string[]
  }

  status?: "update" | "report" | "story"
}
