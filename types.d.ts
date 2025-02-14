export interface serviceData {
    heroTitle: string;
    service: string;
    subheader: string;
    serviceImg: string;
    overviewSubContent: string;
    overview: string;
    approach: ApproachElement[];
    whyChooseUs: WhyChooseUs[]
    recentWorks: string[];
  }
  
  export interface ApproachElement {
    title?: string; // For sections that only have a title
    elementTitle?: string; // For detailed approach items
    elementContent?: string; // Content for the detailed approach items
  }

  export interface WhyChooseUs{
    title?: string,
    elementTitle?: string,
    elementContent?: string
  }

  export interface serviceProps {
    data: serviceData[];
    heroImg: string;
  }