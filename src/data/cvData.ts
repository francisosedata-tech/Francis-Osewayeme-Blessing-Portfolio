export interface CVRole {
  id: string;
  title: string;
  originalTitle?: string;
  company: string;
  period: string;
  location: string;
  isVolunteer?: boolean;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
}

export interface CVProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon?: string;
  impact: string;
  description: string;
  tools: string[];
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor?: string;
      backgroundColor?: string | string[];
    }[];
  };
  chartType: 'bar' | 'line' | 'doughnut' | 'radar';
  metricsSummary: { label: string; value: string }[];
  keyInsights: string[];
  githubUrl?: string;
}

export const RESTRUCTURED_CV_DATA = {
  header: {
    name: "Francis Blessing Osewayeme",
    targetTitle: "Business Intelligence Analyst | People Analyst | Insights Strategist",
    badge: "BI Intelligence · People Analytics",
    location: "Port Harcourt, Nigeria (Open to Global Remote & Relocation)",
    profileImage: "https://raw.githubusercontent.com/francisosedata-tech/Francis-Blessing-Osewayeme-Portfolio/main/profile.jpg",
    contact: {
      email: "francisose.data@gmail.com",
      phone: "08162572994",
      phoneFormatted: "+234 816 257 2994",
      linkedIn: "https://www.linkedin.com/in/ose-francis",
      twitter: "https://x.com/DataAnalystOse",
      github: "https://github.com/francisosedata-tech",
      harmonyGroveRepo: "https://github.com/francisosedata-tech/Harmony-Grove-Music-Entertainment---Business-Intelligence-case-study"
    }
  },
  summary: {
    hero: "I transform raw data into strategic business and people intelligence. With expertise in Power BI, SQL, Python, and Excel, I build dashboards and insights that drive better decisions for businesses and the people within them.",
    aboutParagraphs: [
      "I specialize in transforming complex datasets into strategic business and people intelligence using Power BI, SQL, Python, and Excel. My background in Sociology gives me a unique perspective on human behavior, helping me communicate insights that drive real change for both organizations and the people within them.",
      "I am passionate about leveraging data for social impact and building solutions that are both technically sound and people-centric.",
      "Core Mission: To make business and people intelligence accessible, understandable, and actionable for everyone."
    ],
    restructured: "Results-driven BI & People Analyst combining quantitative data modeling with sociological insight and HR metrics. Proven track record in engineering multi-state booking intelligence systems, reducing data errors by 40%, and building executive Power BI dashboards that optimize revenue visibility and human capital performance.",
    atsScore: 98
  },
  stats: [
    { number: "3+", label: "Years in Data & BI" },
    { number: "15K+", label: "Records Analyzed" },
    { number: "40%", label: "Data Inconsistency Reduction" },
    { number: "6", label: "Cities Analyzed" }
  ],
  transformations: [
    {
      redFlag: "Vague Action Verbs in Job Descriptions",
      fix: "Upgraded to active leadership verbs: 'Engineered', 'Spearheaded', 'Architected', 'Reduced'",
      impact: "Immediately captures recruiter interest and passes ATS semantic matching."
    },
    {
      redFlag: "Unquantified Project Accomplishments",
      fix: "Added hard metrics: ₦80.37M revenue analyzed, 15K+ records, 40% error reduction, 3 days to 4 hours reporting speedup",
      impact: "Demonstrates tangible return on investment (ROI) to prospective employers."
    },
    {
      redFlag: "Disconnected Sociology Degree & Tech Skills",
      fix: "Framed Sociology as People Analytics & Behavioral Insight superpower paired with SQL & Power BI",
      impact: "Creates a unique, high-demand competitive niche: BI Intelligence + People Strategy."
    },
    {
      redFlag: "Hidden Volunteer & Consulting Initiatives",
      fix: "Explicitly highlighted JCI Garden City data leadership and SME consulting projects",
      impact: "Showcases proactive stakeholder leadership and social impact dedication."
    }
  ],
  roles: [
    {
      id: "pianowella",
      title: "Data Analyst",
      company: "PianoWella",
      period: "Feb 2025 – Apr 2026",
      location: "Port Harcourt, Rivers State",
      highlights: [
        "Engineered Excel booking BI system across 4 states, tracking 2,000+ annual bookings.",
        "Reduced data inconsistencies by 40% through structured cleaning protocols and data validation rules.",
        "Built automated pivot reporting, cutting reporting time from 3 days to 4 hours."
      ],
      metrics: [
        { label: "Annual Bookings", value: "2,000+" },
        { label: "Error Reduction", value: "-40%" },
        { label: "Reporting Time", value: "3d -> 4h" }
      ],
      tags: ["Advanced Excel", "Power Query", "Data Validation", "Pivot Reporting"]
    },
    {
      id: "chemmas",
      title: "Data Analyst (Contract)",
      company: "Chemmas Poultry Venture",
      period: "Mar 2024 – Jan 2025",
      location: "Port Harcourt, Rivers State",
      highlights: [
        "Tracked 15,000+ bird records across multiple production batches.",
        "Reduced feed waste by 25% through consumption pattern analysis and predictive scheduling.",
        "Improved survival rates by 12% through data-driven environmental and dietary interventions."
      ],
      metrics: [
        { label: "Records Tracked", value: "15,000+" },
        { label: "Feed Waste Cut", value: "-25%" },
        { label: "Survival Lift", value: "+12%" }
      ],
      tags: ["Data Modeling", "Predictive Scheduling", "Operations Analytics", "Excel"]
    },
    {
      id: "decodelab",
      title: "Data Analyst (Project-Based)",
      company: "Decodelab",
      period: "Jun 2025 – Jul 2025",
      location: "Remote",
      highlights: [
        "Architected end-to-end Power BI dashboards for client data projects.",
        "Increased insight clarity by 60% through interactive visual layouts and drill-through hierarchies.",
        "Executed complete data analysis lifecycle: extraction → cleaning → modeling → visualization."
      ],
      metrics: [
        { label: "Insight Clarity", value: "+60%" },
        { label: "Client Projects", value: "3 Major" }
      ],
      tags: ["Power BI", "DAX", "Data Modeling", "Client Delivery"]
    },
    {
      id: "zyetech",
      title: "Data Analyst",
      company: "Zyetech Innovation Technology",
      period: "Dec 2025 – Jun 2026",
      location: "Port Harcourt, Rivers State",
      highlights: [
        "Spearheaded data collection and cleaning for 5 innovation initiatives.",
        "Uncovered 8 actionable insights guiding product feature prioritization.",
        "Designed reporting frameworks used by engineering and product management teams."
      ],
      metrics: [
        { label: "Innovation Projects", value: "5" },
        { label: "Actionable Insights", value: "8" }
      ],
      tags: ["SQL", "Power BI", "Data Collection", "Product Analytics"]
    },
    {
      id: "freelance",
      title: "Freelance Data Analyst",
      company: "Self-Employed",
      period: "Jun 2023 – Nov 2025",
      location: "Nigeria",
      highlights: [
        "Provided data analysis and BI consulting to 6 local SMEs.",
        "Built custom Excel dashboards for inventory, cash flow, and sales tracking.",
        "Conducted training sessions on data interpretation for non-technical leadership teams."
      ],
      metrics: [
        { label: "SMEs Consulted", value: "6 Businesses" },
        { label: "Custom Dashboards", value: "10+" }
      ],
      tags: ["BI Consulting", "Excel Dashboards", "Inventory Analytics", "Stakeholder Training"]
    },
    {
      id: "jci",
      title: "Volunteer Data Analyst",
      company: "JCI Garden City",
      period: "Present",
      location: "Port Harcourt, Rivers State",
      isVolunteer: true,
      highlights: [
        "Support data-driven decision-making for community development and youth empowerment initiatives.",
        "Analyze programme impact metrics to guide strategic resource planning.",
        "Build dashboards to track membership engagement and event performance across chapters."
      ],
      metrics: [
        { label: "Role Type", value: "Community Volunteer" },
        { label: "Focus", value: "Social Impact" }
      ],
      tags: ["Community Impact", "Membership Tracking", "Strategic Planning", "KPI Dashboards"]
    }
  ] as CVRole[],
  projects: [
    {
      id: "harmony-grove",
      title: "Harmony Grove – BI Case Study",
      subtitle: "3-Page Executive Power BI Suite & People Analytics on Tutor Retention",
      category: "Music & Entertainment BI / People Analytics",
      icon: "🎵",
      impact: "Analyzed ₦80.37M revenue across 88 tutors & 420+ clients in 6 cities, uncovering that tutors with 3.0–3.49 ratings leave at a 5x rate",
      description: "Built an exhaustive 3-page BI dashboard analyzing ₦80.37M in revenue, 88 tutors, and 420+ clients across 6 Nigerian cities — with deep exploratory data analysis on tutor retention, corporate utilization, and customer acquisition channels.",
      tools: ["Power BI", "SQL", "DAX", "Power Query", "BI Intelligence", "People Analytics"],
      chartType: "bar",
      chartData: {
        labels: ["Port Harcourt", "Lagos", "Abuja", "Benin City", "Enugu", "Calabar"],
        datasets: [
          {
            label: "Revenue Generated (₦ Millions)",
            data: [28.4, 22.1, 14.8, 6.9, 5.1, 3.07],
            backgroundColor: "#2a7de1"
          },
          {
            label: "Active Tutors",
            data: [32, 24, 16, 7, 5, 4],
            backgroundColor: "#1a3a5c"
          }
        ]
      },
      metricsSummary: [
        { label: "Total Revenue", value: "₦80.37M" },
        { label: "Active Tutors", value: "88" },
        { label: "Client Base", value: "420+" },
        { label: "Cities Covered", value: "6 Cities" }
      ],
      keyInsights: [
        "Tutors rated in the 3.0–3.49 band left at 5x the baseline turnover rate, identifying urgent tutor onboarding and support needs.",
        "Corporate contract utilization hovered at 48%, unlocking high-margin expansion opportunities.",
        "Word of Mouth referral marketing outperformed paid advertising acquisition by 76% in lifetime customer value."
      ],
      githubUrl: "https://github.com/francisosedata-tech/Harmony-Grove-Music-Entertainment---Business-Intelligence-case-study"
    },
    {
      id: "ecommerce",
      title: "E-commerce Orders' Analysis",
      subtitle: "End-to-End SQL Data Pipeline & Interactive Power BI Command Center",
      category: "E-Commerce & Retail Intelligence",
      icon: "🛒",
      impact: "Cleaned raw transactions with SQL and delivered interactive KPIs for revenue velocity and customer segments",
      description: "End-to-end BI analysis of e-commerce orders dataset. Cleaned data using SQL, built an interactive Power BI dashboard with KPIs: revenue trends, top products, and customer segments.",
      tools: ["SQL", "Power BI", "Excel", "BI Intelligence", "Data Modeling"],
      chartType: "line",
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "Monthly Sales ($K)",
            data: [42, 58, 65, 82, 74, 91, 108, 125],
            borderColor: "#2a7de1",
            backgroundColor: "rgba(42, 125, 225, 0.15)"
          }
        ]
      },
      metricsSummary: [
        { label: "Orders Analyzed", value: "15,400+" },
        { label: "Revenue Mapped", value: "$680K" },
        { label: "Data Quality", value: "100% Validated" }
      ],
      keyInsights: [
        "Uncovered peak buying windows between 7 PM - 10 PM resulting in targeted promotional scheduling.",
        "SQL data cleaning eliminated multi-currency order discrepancies completely."
      ],
      githubUrl: "https://github.com/francisosedata-tech/E-commerce-Orders-Analysis"
    },
    {
      id: "realestate",
      title: "Real Estate Growth Analysis",
      subtitle: "Power BI Executive Dashboard on Sales Performance, Revenue & Churn",
      category: "PropTech & Investment Analytics",
      icon: "🏠",
      impact: "Delivered actionable BI recommendations to improve property retention and quarterly revenue stability",
      description: "Analyzed real estate sales performance, revenue trends, and customer churn. Delivered actionable BI recommendations to improve retention and revenue stability.",
      tools: ["Power BI", "Excel", "BI Intelligence", "DAX Expressions"],
      chartType: "doughnut",
      chartData: {
        labels: ["Residential Units", "Commercial Spaces", "Suburban Plots", "Industrial"],
        datasets: [
          {
            label: "Revenue Contribution (%)",
            data: [45, 25, 20, 10],
            backgroundColor: ["#2a7de1", "#1a3a5c", "#3b8cf0", "#60a5fa"]
          }
        ]
      },
      metricsSummary: [
        { label: "Properties Tracked", value: "850+" },
        { label: "Churn Reduced", value: "-14%" },
        { label: "DAX Measures", value: "35+" }
      ],
      keyInsights: [
        "Discovered that 2-bedroom suburban units experienced 24% higher rental yield stability.",
        "Implemented DAX time-intelligence functions for Year-over-Year (YoY) revenue comparison."
      ],
      githubUrl: "https://github.com/francisosedata-tech/Real-Estate-Growth-Analysis"
    }
  ] as CVProject[],
  skillGroups: [
    {
      title: "Business Intelligence & Data Analysis",
      skills: [
        "Power BI",
        "Excel",
        "SQL",
        "Python",
        "DAX",
        "Power Query",
        "Data Visualization",
        "KPI Development"
      ]
    },
    {
      title: "People Analytics & Strategic Skills",
      skills: [
        "People Analytics",
        "HR Metrics",
        "Stakeholder Management",
        "Strategic Planning",
        "Data Storytelling",
        "Problem-Solving",
        "Communication",
        "Team Leadership",
        "Growth Mindset"
      ]
    }
  ],
  education: [
    {
      degree: "B.Sc. Sociology",
      institution: "Ambrose Alli University, Ekpoma",
      year: "May 2023",
      relevance: "Provides deep framework for understanding human behavior, survey design, empirical research, and quantitative social statistics."
    }
  ],
  certifications: [
    { title: "Data Analysis Certification", issuer: "Zyetech Innovation Technology", year: "2026" },
    { title: "Data Visualization Simulation", issuer: "Tata / Forage", year: "2025" },
    { title: "Human Resource Management (HRM)", issuer: "Hentech Services Limited", year: "2024" }
  ],
  awards: [
    {
      title: "3rd Place Winner — Public Speaking & Debate Championship",
      issuer: "JCI Southern Conference 2026",
      impact: "Demonstrates exceptional oral communication, high-pressure articulation, and strategic argument structuring for executive stakeholder presentations."
    }
  ]
};
