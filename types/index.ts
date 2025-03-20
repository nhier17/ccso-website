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