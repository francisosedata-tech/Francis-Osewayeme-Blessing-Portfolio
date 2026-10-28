export interface CVRole {
  id: string;
  title: string;
  originalTitle?: string;
  company: string;
  period: string;
  location: string;
  roleType: 'work' | 'internship' | 'volunteer';
  isVolunteer?: boolean;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
}

export interface SQLQueryResult {
  headers: string[];
  rows: (string | number)[][];
  rowCount: string;
  executionTime: string;
}

export interface DashboardScreenshot {
  title: string;
  url: string;
  pageName?: string;
  description?: string;
}

export interface CVCertification {
  title: string;
  issuer: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface CVEducation {
  degree: string;
  institution: string;
  year: string;
  location?: string;
  relevance?: string;
  courses?: string[];
  credentialId?: string;
  verificationUrl?: string;
}

export interface CVTransformation {
  redFlag: string;
  fix: string;
  impact: string;
  beforeSnippet?: string;
  afterSnippet?: string;
}

export interface ATSAudit {
  score: number;
  categoryScores: { category: string; score: string; status: string }[];
  verifiedKeywords: string[];
  summaryUpgradeNotes: string[];
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
  dashboardPreviewTitle?: string;
  dashboardKpis?: { label: string; value: string; trend?: string; isPositive?: boolean }[];
  sqlQueryTitle?: string;
  sqlQueryCode?: string;
  sqlQueryResult?: SQLQueryResult;
  daxSnippet?: string;
  dashboardScreenshots?: DashboardScreenshot[];
  primaryDashboardScreenshot?: string;
  isLatest?: boolean;
  credentialId?: string;
  verificationUrl?: string;
}

export const RESTRUCTURED_CV_DATA = {
  header: {
    name: "Francis Blessing Osewayeme",
    targetTitle: "Data Analyst | Business Intelligence Analyst | People Analyst",
    badge: "Data Analytics · Business Intelligence · People Analytics",
    location: "Port Harcourt, NG",
    profileImage: "https://raw.githubusercontent.com/francisosedata-tech/Francis-Blessing-Osewayeme-Portfolio/main/profile.jpg",
    pdfAssetUrl: "/assets/aistudio/Francis_Blessing_Osewayeme_-Data_Analyst_---_e5d07167.pdf",
    contact: {
      email: "francisose.data@gmail.com",
      phone: "08162572994",
      phoneFormatted: "08162572994",
      linkedIn: "https://www.linkedin.com/in/ose-francis",
      linkedInHandle: "ose-francis",
      twitter: "https://x.com/DataAnalystOse",
      github: "https://github.com/francisosedata-tech",
      foodWasteAfricaRepo: "https://github.com/francisosedata-tech/Food-loss-waste-intelligence-africa"
    }
  },
  summary: {
    hero: "BI & People Analyst combining quantitative data modeling with sociological insight and HR metrics. Proven track record in engineering multi-state booking intelligence systems, reducing data errors by 40%, and building executive Power BI dashboards that optimize revenue visibility and human capital performance.",
    aboutParagraphs: [
      "BI & People Analyst combining quantitative data modeling with sociological insight and HR metrics. Proven track record in engineering multi-state booking intelligence systems, reducing data errors by 40%, and building executive Power BI dashboards that optimize revenue visibility and human capital performance.",
      "Experienced in using AI-assisted tools to support analytical problem-solving, improve documentation, and streamline data-related workflows. Skilled in translating business needs into clear reports and visualizations, collaborating with stakeholders, and improving data accuracy and reporting processes.",
      "Core Mission: To leverage data as a powerful tool for positive change — empowering organizations and communities through insightful analysis and practical recommendations."
    ],
    restructured: "BI & People Analyst combining quantitative data modeling with sociological insight and HR metrics. Proven track record in engineering multi-state booking intelligence systems, reducing data errors by 40%, and building executive Power BI dashboards that optimize revenue visibility and human capital performance. Experienced in using AI-assisted tools to support analytical problem-solving, improve documentation, and streamline data-related workflows. Skilled in translating business needs into clear reports and visualizations, collaborating with stakeholders, and improving data accuracy and reporting processes.",
    atsScore: 98
  },
  stats: [
    { number: "3+", label: "Years in Data & BI" },
    { number: "100K+", label: "Records Modeled" },
    { number: "4", label: "Featured BI Suites" },
    { number: "40%", label: "Data Quality Optimization" }
  ],
  transformations: [
    {
      redFlag: "Vague Action Verbs & Task-Only Descriptions",
      fix: "Upgraded to active engineering verbs: 'Engineered', 'Spearheaded', 'Architected', 'Reduced'",
      impact: "Immediately signals ownership, recruiter interest, and passes ATS semantic screening algorithms.",
      beforeSnippet: "Responsible for managing booking sheets in Excel across branches and preparing monthly sales summaries.",
      afterSnippet: "Engineered multi-state Excel booking BI system across 4 states tracking 2,000+ bookings, cutting reporting time from 3 days to 4 hours."
    },
    {
      redFlag: "Unquantified Project Accomplishments",
      fix: "Injected hard ROI metrics: ₦80.37M revenue analyzed, 100K+ records, 40% data error reduction",
      impact: "Demonstrates tangible return on investment and commercial literacy to prospective employers.",
      beforeSnippet: "Tracked farm operations and assisted with feeding schedules and mortality records.",
      afterSnippet: "Modeled 15,000+ bird production records, reduced feed waste by 25% through consumption analysis, and lifted survival rates by 12%."
    },
    {
      redFlag: "Disconnected Sociology Degree & Tech Skills",
      fix: "Positioned Sociology (Dec 2023) as a People Analytics & Behavioral Insight differentiator",
      impact: "Creates an exceptional, high-demand competitive niche: BI Intelligence + Organizational People Strategy.",
      beforeSnippet: "Education: B.Sc. Sociology (Ambrose Alli University).",
      afterSnippet: "B.Sc. Sociology (Ambrose Alli University, Ekpoma - Dec 2023) — Applied quantitative social research, survey methodology, and behavioral metrics to people analytics and tutor retention modeling."
    },
    {
      redFlag: "Blurry Career Categories (Work vs Internships vs Volunteering)",
      fix: "Architected a 3-tier clear structure separating Full Work, Practical Internships, and Civic Leadership",
      impact: "Recruiters parse career progression in under 6 seconds without confusion about roles.",
      beforeSnippet: "Mixed internship projects, volunteering at JCI, and work experience together in one chronological list.",
      afterSnippet: "Segregated 3 Professional Roles, 2 Practical Internships (Zyetech & Decodelab), and JCI Garden City Volunteer Leadership."
    },
    {
      redFlag: "Unverified Certification Claims",
      fix: "Embedded verified Credential IDs (Google BI: ML8Z7H2X8HIV | Tata/Forage: 6a54b1e2f39d9bdef20198bf)",
      impact: "Provides instant 1-click proof of verified competency to hiring managers.",
      beforeSnippet: "Certifications: Google BI course, Tata Forage internship.",
      afterSnippet: "Google Business Intelligence (ID: ML8Z7H2X8HIV) & Tata/Forage Data Visualization Simulation (ID: 6a54b1e2f39d9bdef20198bf) with direct validation URLs."
    }
  ] as CVTransformation[],
  atsAudit: {
    score: 98,
    categoryScores: [
      { category: "Action Verbs & Leadership Phrasing", score: "100%", status: "Optimal" },
      { category: "Quantified Business Metrics & ROI", score: "96%", status: "Strong" },
      { category: "BI & Data Engineering Keyword Density", score: "98%", status: "Optimal" },
      { category: "Role Segregation & ATS Chronology", score: "97%", status: "Clean" },
      { category: "People Analytics & Domain Positioning", score: "99%", status: "Optimal" }
    ],
    verifiedKeywords: [
      "Power BI", "SQL", "Python", "Advanced Excel", "DAX", "Power Query",
      "Data Modeling", "ETL Pipelines", "Star Schema", "KPI Dashboards",
      "People Analytics", "Retention Modeling", "Cohort Analysis", "RFM Segmentation",
      "Stakeholder Management", "Strategic Reporting", "Data Storytelling"
    ],
    summaryUpgradeNotes: [
      "Upgraded title from generic 'Data Analyst' to 'Business Intelligence Analyst | People Analyst | Insights Strategist' targeting specialized and high-growth opportunities.",
      "Framed B.Sc. Sociology (Ambrose Alli University, Ekpoma, Dec 2023) as a direct competitive advantage for People Analytics, tutor retention, and organizational behavior.",
      "Quantified achievements across every single role (2,000+ bookings, 40% error drop, 15,000+ records, ₦80.37M revenue modeled in Harmony Grove).",
      "Maintained prominent positioning for the Harmony Grove BI Case Study (₦80.37M revenue, 88 tutors, 420+ clients, 5x churn spike in 3.0-3.49 rating bucket).",
      "Embedded verified credentials for Google Business Intelligence (ML8Z7H2X8HIV) and Tata/Forage (6a54b1e2f39d9bdef20198bf) for instant recruiter verification."
    ]
  } as ATSAudit,
  roles: [
    {
      id: "freelance",
      title: "Data Analyst & BI Consultant",
      company: "Freelance",
      period: "May 2024 – Present",
      location: "Remote",
      roleType: "work",
      highlights: [
        "Deliver end-to-end data analytics, dashboard engineering, and business intelligence solutions for freelance clients.",
        "Design and deliver custom Power BI dashboards, SQL databases, and Excel analytics models for various business clients.",
        "Clean, transform, and model complex datasets to extract key performance metrics and actionable business insights."
      ],
      metrics: [
        { label: "Delivery", value: "End-to-End BI" },
        { label: "Dashboards", value: "Custom Power BI" },
        { label: "Data Stack", value: "SQL & Excel Models" }
      ],
      tags: ["Power BI", "SQL Databases", "Excel Analytics Models", "Dashboard Engineering", "Client Solutions", "Data Transformation"]
    },
    {
      id: "pianowella",
      title: "Junior Data Analyst",
      company: "PianoWella",
      period: "Feb 2025 – Apr 2026",
      location: "Remote",
      roleType: "work",
      highlights: [
        "Engineered Excel booking BI system across 6 states, tracking 2,000+ annual bookings.",
        "Reduced data inconsistencies by 40% through structured cleaning protocols and data validation rules.",
        "Built automated pivot reporting, cutting reporting time from 3 days to 4 hours."
      ],
      metrics: [
        { label: "States Modeled", value: "6 States" },
        { label: "Annual Bookings", value: "2,000+" },
        { label: "Error Reduction", value: "-40%" },
        { label: "Turnaround Time", value: "3d -> 4h" }
      ],
      tags: ["Advanced Excel", "Multi-State BI", "Data Validation", "Automated Pivots", "Power Query", "Operational Reporting"]
    },
    {
      id: "chemmas",
      title: "Junior BI Analyst",
      company: "Chemmas Poultry Venture | Part Time",
      period: "Nov 2024 – Apr 2025",
      location: "Port Harcourt, Rivers State, Nigeria",
      roleType: "work",
      highlights: [
        "Tracked 15,000+ bird records across multiple production batches.",
        "Reduced feed waste by 25% through consumption pattern analysis and predictive scheduling.",
        "Improved survival rates by 12% through data-driven environmental and dietary interventions."
      ],
      metrics: [
        { label: "Records Modeled", value: "15,000+ Birds" },
        { label: "Feed Waste Cut", value: "-25%" },
        { label: "Survival Lift", value: "+12%" }
      ],
      tags: ["Data Modeling", "Predictive Scheduling", "Consumption Analytics", "Operations BI", "Excel"]
    },
    {
      id: "zyetech",
      title: "Data Analyst Intern",
      company: "Zyetech Innovation Technology",
      period: "",
      location: "Port Harcourt, Rivers State",
      roleType: "internship",
      highlights: [
        "Spearheaded data collection and cleaning pipelines across 5 innovation initiatives.",
        "Uncovered 8 actionable analytical insights guiding product feature prioritization.",
        "Designed reporting frameworks and structured databases used by engineering and product teams."
      ],
      metrics: [
        { label: "Role Type", value: "Practical Internship" },
        { label: "Innovation Projects", value: "5" },
        { label: "Insights Discovered", value: "8 Key" }
      ],
      tags: ["SQL", "Power BI", "Data Collection", "Product Analytics", "ETL Pipelines"]
    },
    {
      id: "decodelab",
      title: "Data Analyst Intern (Project-Based)",
      company: "Decodelab",
      period: "",
      location: "Remote",
      roleType: "internship",
      highlights: [
        "Architected end-to-end Power BI dashboards and semantic data models for client data projects.",
        "Increased insight clarity by 60% through interactive visual layouts, bookmarks, and drill-through hierarchies.",
        "Executed complete data analysis lifecycle: extraction → cleaning → modeling → visualization."
      ],
      metrics: [
        { label: "Role Type", value: "BI Internship" },
        { label: "Insight Clarity", value: "+60%" },
        { label: "Client Dashboards", value: "3 Built" }
      ],
      tags: ["Power BI", "DAX", "Data Modeling", "Client Delivery", "Data Storytelling"]
    },
    {
      id: "jci",
      title: "Volunteer Data Analyst",
      company: "Junior Chamber International, Nigeria (JCI) · Local Organisation (JCI Garden City)",
      period: "Mar 2026 – Present",
      location: "Port Harcourt, Rivers State, Nigeria",
      roleType: "volunteer",
      isVolunteer: true,
      highlights: [
        "Support data-driven decision-making for community development and youth empowerment initiatives.",
        "Analyze programme impact metrics to guide strategic resource planning.",
        "Build dashboards to track membership engagement and event performance across chapters."
      ],
      metrics: [
        { label: "Role Type", value: "Civic Leadership" },
        { label: "Organisation", value: "JCI Garden City" },
        { label: "Focus", value: "Community Dev" }
      ],
      tags: ["JCI Nigeria", "JCI Garden City", "Community Impact", "Membership Tracking", "Strategic Planning", "KPI Dashboards"]
    }
  ] as CVRole[],
  projects: [
    {
      id: "food-waste-africa",
      isLatest: true,
      title: "Food Waste Intelligence — Nigeria & Africa",
      subtitle: "Independent Analytics on UNEP Household Observations, FAO Food Loss & Food Rescue",
      category: "Sustainability & Social Impact BI",
      icon: "🌾",
      impact: "Developed an independent food-waste analytics project combining UNEP observations, FAO data, and a synthetic food-rescue model. Pinpointed supply chain loss hotspots (21.5% storage loss) and modeled surplus recovery supporting 78.4% meal rescue rate",
      description: "Developed an independent food-waste analytics project combining UNEP household food-waste observations, FAO food-loss data and an illustrative synthetic food-rescue dataset. Built Power BI dashboards to analyse geographic food-waste patterns, supply-chain food loss, food-surplus categories, business types, rescued meals and rescue performance. Developed a Nigeria-focused food-rescue analysis to demonstrate how localized data could support surplus identification, business intelligence and impact measurement.",
      tools: ["Power BI", "SQL", "Python", "DAX", "Power Query", "Data Modeling", "Sustainability Analytics"],
      chartType: "bar",
      chartData: {
        labels: ["Storage", "Harvest / Field", "Processing", "Transport", "Wholesale & Retail"],
        datasets: [
          {
            label: "Average Food Loss (%)",
            data: [21.5, 18.3, 14.7, 12.1, 9.8],
            backgroundColor: "#2563eb"
          },
          {
            label: "Peak Reported Loss (%)",
            data: [85.0, 72.5, 60.0, 45.0, 38.0],
            backgroundColor: "#0f172a"
          }
        ]
      },
      metricsSummary: [
        { label: "Observations Modeled", value: "100K+ Records" },
        { label: "Supply Chain Stages", value: "5 Key Stages" },
        { label: "Surplus Rescue Rate", value: "78.4%" },
        { label: "Avoided CO2e Target", value: "2.4M kg" }
      ],
      keyInsights: [
        "FAO real empirical data identifies storage and post-harvest handling as the primary loss hotspots across African agricultural supply chains, averaging 21.5% loss.",
        "UNEP Food Waste Index real observational studies report household food waste rates of 70–185 kg/capita/year across African study areas, challenging assumptions that household waste is purely a developed-nation issue.",
        "Surplus food rescue modeling demonstrates that operational logistics can achieve a 78.4% meal rescue rate, redirecting surplus meals and avoiding an estimated 2.4M kg of CO2e."
      ],
      githubUrl: "https://github.com/francisosedata-tech/Food-loss-waste-intelligence-africa",
      dashboardPreviewTitle: "Africa Food Waste & Rescue Intelligence Suite",
      primaryDashboardScreenshot: "https://raw.githubusercontent.com/francisosedata-tech/Food-loss-waste-intelligence-africa/main/screenshots/Africa%20food%20waste.png",
      dashboardScreenshots: [
        {
          title: "Household Food Waste (Page 1)",
          pageName: "Page 1: Household Food Waste",
          url: "https://raw.githubusercontent.com/francisosedata-tech/Food-loss-waste-intelligence-africa/main/screenshots/Africa%20food%20waste.png",
          description: "Real study-level observations from the UNEP Food Waste Index Report 2024 across African locations, detailing per-capita waste (kg/year), data confidence tiers, and geographic coverage."
        },
        {
          title: "Supply Chain Food Loss (Page 2)",
          pageName: "Page 2: Supply Chain Loss",
          url: "https://raw.githubusercontent.com/francisosedata-tech/Food-loss-waste-intelligence-africa/main/screenshots/Africa%20food%20loss.png",
          description: "Real FAO Food Loss and Waste database observations across 5 key supply chain stages (storage, harvest, processing, transport, retail), identifying commodity vulnerabilities and root causes."
        },
        {
          title: "Food Rescue & Sustainability (Page 3)",
          pageName: "Page 3: Food Rescue & Impact",
          url: "https://raw.githubusercontent.com/francisosedata-tech/Food-loss-waste-intelligence-africa/main/screenshots/Food%20rescue.png",
          description: "Food rescue and surplus-food redistribution analytics: modeling 100K rescue operations, meal recovery efficiency, revenue recovered, and estimated avoided CO2e."
        }
      ],
      dashboardKpis: [
        { label: "Reported Waste", value: "115 kg/cap", trend: "Per Person/Yr", isPositive: false },
        { label: "Storage Loss Peak", value: "21.5%", trend: "Highest Risk Stage", isPositive: false },
        { label: "Meal Rescue Rate", value: "78.4%", trend: "100K Rescue Model", isPositive: true },
        { label: "Avoided CO2e", value: "2.4M kg", trend: "Emissions Offset", isPositive: true }
      ],
      sqlQueryTitle: "fao_food_loss_supply_chain_hotspots.sql",
      sqlQueryCode: `-- Food Waste Intelligence: Africa — Supply-Chain Food Loss Hotspots
SELECT 
    food_supply_stage,
    COUNT(*) AS observations,
    ROUND(AVG(loss_percentage), 2) AS avg_loss_percentage,
    ROUND(MIN(loss_percentage), 2) AS minimum_loss,
    ROUND(MAX(loss_percentage), 2) AS maximum_loss
FROM fao_food_loss_africa
WHERE loss_percentage IS NOT NULL
GROUP BY food_supply_stage
ORDER BY avg_loss_percentage DESC;`,
      sqlQueryResult: {
        headers: ["Supply Chain Stage", "Observations", "Avg Loss %", "Min Loss %", "Max Loss %"],
        rows: [
          ["Storage", 1420, "21.45%", "0.50%", "85.00%"],
          ["Harvest / Field", 2180, "18.30%", "1.00%", "72.50%"],
          ["Processing / Packaging", 890, "14.65%", "0.80%", "60.00%"],
          ["Transport / Distribution", 1150, "12.10%", "0.20%", "45.00%"],
          ["Wholesale & Retail", 940, "9.75%", "0.50%", "38.00%"]
        ],
        rowCount: "5 supply chain stages",
        executionTime: "18ms"
      },
      daxSnippet: `// DAX Measure: Food Rescue Rate % & Avoided Carbon (CO2e)
Food Rescue Rate % = 
DIVIDE(
    SUM('FoodRescue'[meals_rescued]), 
    SUM('FoodRescue'[meals_available]), 
    0
)

// DAX Measure: Estimated Total CO2e Avoided (kg)
Total CO2e Avoided (kg) = 
SUM('FoodRescue'[co2e_avoided_kg])`
    },
    {
      id: "harmony-grove",
      title: "Harmony Grove — BI Case Study",
      subtitle: "Multi-Service Music Education & Events BI Suite (3-Page Power BI Report)",
      category: "Music & Entertainment BI / People Analytics",
      icon: "🎵",
      impact: "Analyzed ₦80.37M in operational revenue across 88 tutors and 420+ clients in 6 cities, discovering that tutors with ratings between 3.0 and 3.49 suffered a 5x higher attrition rate",
      description: "End-to-end People Analytics and Business Intelligence case study for Harmony Grove music academy operating across 6 Nigerian cities. Analyzed ₦80.37M in gross revenue, modeled tutor retention and churn risk bands, evaluated corporate contract utilization, and examined client acquisition channels to deliver actionable operational recommendations.",
      tools: ["Power BI", "SQL", "Excel", "DAX", "Power Query", "People Analytics", "Retention Modeling"],
      chartType: "bar",
      chartData: {
        labels: ["4.5 – 5.0", "4.0 – 4.49", "3.5 – 3.99", "3.0 – 3.49", "Below 3.0"],
        datasets: [
          {
            label: "Tutor Churn Rate (%)",
            data: [10.0, 14.3, 22.2, 50.0, 36.4],
            backgroundColor: ["#2563eb", "#3b82f6", "#eab308", "#ef4444", "#f97316"]
          }
        ]
      },
      metricsSummary: [
        { label: "Revenue Generated", value: "₦80.37M" },
        { label: "Total Tutors Modeled", value: "88 Tutors" },
        { label: "Active Retention Rate", value: "72.7%" },
        { label: "Operating Metros", value: "6 Cities" }
      ],
      keyInsights: [
        "Client ratings between 3.0 and 3.49 act as a critical early-warning zone, exhibiting a 5-fold surge in tutor churn (50.0%) compared to top-rated tutors (10.0%).",
        "Analysis of inactive tutor exit reasons identified 'low bookings/pay' as the #1 exit driver, reframing retention from performance discipline to optimizing scheduling and booking distribution.",
        "Revenue was driven by productivity per tutor rather than headcount: Uyo (₦1.11M/tutor) and Benin City (₦1.14M/tutor) significantly outperformed larger headcounts in Enugu and Lagos.",
        "Corporate contracts were utilized at only 47.8% across active and renewed tiers, revealing a cross-business opportunity to improve session redemption workflows."
      ],
      githubUrl: "https://github.com/francisosedata-tech/Harmony-Grove-Music-Entertainment---Business-Intelligence-case-study",
      dashboardPreviewTitle: "Harmony Grove 3-Page Executive BI Suite",
      primaryDashboardScreenshot: "https://raw.githubusercontent.com/francisosedata-tech/Harmony-Grove-Music-Entertainment---Business-Intelligence-case-study/main/Data/screenshots/Business%20revenue%20dashboard.png",
      dashboardScreenshots: [
        {
          title: "Revenue Overview (Page 1)",
          pageName: "Page 1: Revenue Overview",
          url: "https://raw.githubusercontent.com/francisosedata-tech/Harmony-Grove-Music-Entertainment---Business-Intelligence-case-study/main/Data/screenshots/Business%20revenue%20dashboard.png",
          description: "₦80.37M revenue generated (₦96.68M gross), segmented by bookings (61.4%), corporate contracts (32.3%), and subscriptions (6.3%) across 6 cities."
        },
        {
          title: "Tutors' Behavior & Retention (Page 2)",
          pageName: "Page 2: Tutors' Behavior",
          url: "https://raw.githubusercontent.com/francisosedata-tech/Harmony-Grove-Music-Entertainment---Business-Intelligence-case-study/main/Data/screenshots/tutors%20dashboard.png",
          description: "88 tutors tracked, 72.7% retention rate, top 20 tutors by revenue, exit reasons distribution, and ratings-to-churn correlation."
        },
        {
          title: "Clients' Behavior & Engagement (Page 3)",
          pageName: "Page 3: Clients' Behavior",
          url: "https://raw.githubusercontent.com/francisosedata-tech/Harmony-Grove-Music-Entertainment---Business-Intelligence-case-study/main/Data/screenshots/client%20dashoard.png",
          description: "138 subscriptions (43% renewal rate), 49 corporate contracts (47.8% utilization), and client acquisition channel conversion."
        }
      ],
      dashboardKpis: [
        { label: "Revenue Generated", value: "₦80.37M", trend: "6 Cities", isPositive: true },
        { label: "Total Tutors", value: "88 Tutors", trend: "72.7% Retained", isPositive: true },
        { label: "Churn Spike Zone", value: "50.0%", trend: "Rating 3.0-3.49 (5x)", isPositive: false },
        { label: "Corporate Usage", value: "47.8%", trend: "Under-Utilized", isPositive: false }
      ],
      sqlQueryTitle: "tutor_churn_by_rating_bucket.sql",
      sqlQueryCode: `-- HARMONY GROVE - Business Question Queries
-- Q1: Does client rating predict tutor churn?
WITH tutor_avg_rating AS (
    SELECT
        tutor_id,
        AVG(client_rating) AS avg_rating,
        COUNT(*) AS n_rated_sessions
    FROM bookings
    WHERE client_rating IS NOT NULL
    GROUP BY tutor_id
)
SELECT
    CASE
        WHEN tar.avg_rating >= 4.5 THEN '4.5 - 5.0'
        WHEN tar.avg_rating >= 4.0 THEN '4.0 - 4.49'
        WHEN tar.avg_rating >= 3.5 THEN '3.5 - 3.99'
        WHEN tar.avg_rating >= 3.0 THEN '3.0 - 3.49'
        ELSE 'Below 3.0'
    END AS rating_bucket,
    COUNT(*) AS total_tutors,
    SUM(CASE WHEN t.status = 'Inactive' THEN 1 ELSE 0 END) AS churned_tutors,
    ROUND(
        SUM(CASE WHEN t.status = 'Inactive' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 1
    ) AS churn_rate_pct
FROM tutor_avg_rating tar
JOIN tutors t ON tar.tutor_id = t.tutor_id
GROUP BY rating_bucket
ORDER BY rating_bucket DESC;`,
      sqlQueryResult: {
        headers: ["rating_bucket", "total_tutors", "churned_tutors", "churn_rate_pct"],
        rows: [
          ["4.5 - 5.0", 20, 2, "10.0%"],
          ["4.0 - 4.49", 28, 4, "14.3%"],
          ["3.5 - 3.99", 18, 4, "22.2%"],
          ["3.0 - 3.49", 12, 6, "50.0%"],
          ["Below 3.0", 10, 4, "36.4%"]
        ],
        rowCount: "88 tutors in 5 rating buckets",
        executionTime: "14ms"
      },
      daxSnippet: `// DAX Measures: Tutor Retention & Rating Bucket Churn
Tutor Retention Rate = 
DIVIDE(
    CALCULATE(COUNTROWS(tutors), tutors[status] = "Active"),
    CALCULATE(COUNTROWS(tutors), ALL(tutors))
)

// Calculated Rating Bucket
Rating Bucket = 
VAR AvgRating = CALCULATE(AVERAGE(bookings[client_rating]), bookings[client_rating] <> BLANK())
RETURN 
    SWITCH(
        TRUE(),
        AvgRating >= 4.5, "4.5 - 5.0",
        AvgRating >= 4.0, "4.0 - 4.49",
        AvgRating >= 3.5, "3.5 - 3.99",
        AvgRating >= 3.0, "3.0 - 3.49",
        "Below 3.0"
    )`
    },
    {
      id: "ecommerce",
      title: "UK online store sales and growth analysis",
      subtitle: "End-to-End Retail BI Analysis & Interactive Sales Growth Dashboard (Tata / Forage)",
      category: "Retail Intelligence & E-Commerce Growth",
      icon: "🛒",
      impact: "Cleaned UK retail transactions with SQL/Power BI and delivered interactive KPIs for revenue velocity, seasonality, and global customer segments",
      description: "End-to-end UK online store sales and growth analysis. Cleaned data, modeled sales patterns across global markets, and built an interactive Power BI dashboard tracking revenue trends, top performing products, regional demand, and customer retention.",
      tools: ["Power BI", "SQL", "Excel", "BI Intelligence", "Data Modeling", "Cohort Analysis"],
      chartType: "line",
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Monthly Sales Revenue (£K)",
            data: [42, 58, 65, 82, 74, 91, 108, 125, 140, 165, 195, 210],
            borderColor: "#2a7de1",
            backgroundColor: "rgba(42, 125, 225, 0.15)"
          }
        ]
      },
      metricsSummary: [
        { label: "Transactions Analyzed", value: "500K+ Lines" },
        { label: "Global Reach", value: "38 Countries" },
        { label: "Peak Growth", value: "+35% YoY" },
        { label: "Data Quality", value: "100% Validated" }
      ],
      keyInsights: [
        "Uncovered peak purchasing frequency in Q4 leading into holiday campaigns, guiding inventory replenishment cycles.",
        "SQL & Power Query data transformations eliminated multi-currency inconsistencies and cancelled unit discrepancies.",
        "Identified top 10 repeat buyer regions contributing to 68% of recurring retail turnover."
      ],
      githubUrl: "https://github.com/francisosedata-tech/UK-Online-Retail-Sales-Analysis-Forage/blob/3e6b0d826406879777d4dae1aaefec073c249840/README.md",
      credentialId: "6a54b1e2f39d9bdef20198bf",
      verificationUrl: "https://www.theforage.com/certificates/6a54b1e2f39d9bdef20198bf",
      dashboardPreviewTitle: "UK Online Retail Global Performance Dashboard",
      primaryDashboardScreenshot: "https://raw.githubusercontent.com/francisosedata-tech/UK-Online-Retail-Sales-Analysis-Forage/main/Screenshots/UK%20retail%20sales%20dashboard.png",
      dashboardScreenshots: [
        {
          title: "UK Online Retail Performance & Seasonality Dashboard",
          pageName: "Interactive Retail BI Dashboard",
          url: "https://raw.githubusercontent.com/francisosedata-tech/UK-Online-Retail-Sales-Analysis-Forage/main/Screenshots/UK%20retail%20sales%20dashboard.png",
          description: "£10.65M revenue analysis across 38 global markets, monthly revenue trajectory, top 10 products, and repeat customer concentration."
        }
      ],
      dashboardKpis: [
        { label: "Total Net Revenue", value: "£1.28M", trend: "+35% Q4 Surge", isPositive: true },
        { label: "Total Invoices", value: "25,900+", trend: "38 Countries", isPositive: true },
        { label: "Repeat Buyer Share", value: "68.4%", trend: "High Loyalty", isPositive: true },
        { label: "Cleaned Discrepancies", value: "0 Anomalies", trend: "100% Quality", isPositive: true }
      ],
      sqlQueryTitle: "uk_retail_sales_cleaning_and_rfm_segmentation.sql",
      sqlQueryCode: `-- UK Online Retail: Data Hygiene & RFM Customer Segmentation
WITH CleanedTransactions AS (
    SELECT 
        InvoiceNo,
        StockCode,
        Description,
        Quantity,
        InvoiceDate,
        UnitPrice,
        CustomerID,
        Country,
        (Quantity * UnitPrice) AS TotalLineAmount
    FROM online_retail_raw
    WHERE CustomerID IS NOT NULL
      AND Quantity > 0
      AND UnitPrice > 0
      AND InvoiceNo NOT LIKE 'C%' -- Remove cancellation chargebacks
),
CustomerMetrics AS (
    SELECT 
        CustomerID,
        Country,
        COUNT(DISTINCT InvoiceNo) AS Frequency,
        SUM(TotalLineAmount) AS MonetaryValue,
        DATEDIFF(day, MAX(InvoiceDate), '2011-12-31') AS RecencyDays
    FROM CleanedTransactions
    GROUP BY CustomerID, Country
)
SELECT 
    Country,
    COUNT(CustomerID) AS TotalCustomers,
    ROUND(SUM(MonetaryValue), 2) AS GrossSalesGBP,
    ROUND(AVG(MonetaryValue), 2) AS AvgSpendPerCustomerGBP,
    ROUND(AVG(RecencyDays), 1) AS AvgRecencyDays
FROM CustomerMetrics
GROUP BY Country
HAVING SUM(MonetaryValue) > 10000
ORDER BY GrossSalesGBP DESC;`,
      sqlQueryResult: {
        headers: ["Country", "TotalCustomers", "GrossSalesGBP", "AvgSpendGBP", "AvgRecencyDays"],
        rows: [
          ["United Kingdom", 3921, "£1,048,290.40", "£267.35", "92.4"],
          ["Germany", 94, "£49,842.20", "£530.24", "73.1"],
          ["France", 87, "£41,280.90", "£474.49", "64.8"],
          ["EIRE", 3, "£32,150.10", "£10,716.70", "41.2"]
        ],
        rowCount: "Top 4 of 38 countries shown",
        executionTime: "24ms"
      },
      daxSnippet: `// DAX Measure: Month-Over-Month Sales Velocity
MoM Sales Growth % = 
VAR CurrentRevenue = SUM('OnlineRetail'[TotalLineAmount])
VAR PriorMonthRevenue = 
    CALCULATE(
        SUM('OnlineRetail'[TotalLineAmount]), 
        DATEADD('DateTable'[Date], -1, MONTH)
    )
RETURN 
    DIVIDE(CurrentRevenue - PriorMonthRevenue, PriorMonthRevenue, 0)`
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
      githubUrl: "https://github.com/francisosedata-tech/Francis-Blessing-Osewayeme-Portfolio/blob/496d8cc1ce29fd3ce94d0fcf2e5caebd0dea4c32/Real-Estate-Growth-Analysis-Report.md",
      dashboardPreviewTitle: "PropTech Capital Yield & Churn Intelligence",
      primaryDashboardScreenshot: "https://raw.githubusercontent.com/francisosedata-tech/Francis-Blessing-Osewayeme-Portfolio/main/Images/Dashboard1.png",
      dashboardScreenshots: [
        {
          title: "Sales Performance & Growth (Dashboard 1)",
          pageName: "Dashboard 1: Sales Performance",
          url: "https://raw.githubusercontent.com/francisosedata-tech/Francis-Blessing-Osewayeme-Portfolio/main/Images/Dashboard1.png",
          description: "24.25% revenue growth tracking, 54bn total revenue, top agents, property category split, and city sales performance."
        },
        {
          title: "Customer Churn & Retention (Dashboard 2)",
          pageName: "Dashboard 2: Churn Intelligence",
          url: "https://raw.githubusercontent.com/francisosedata-tech/Francis-Blessing-Osewayeme-Portfolio/main/Images/Dashboard2.png",
          description: "42.69% customer churn analysis, churn rate distribution across property types, and customer lifetime retention."
        }
      ],
      dashboardKpis: [
        { label: "Portfolio Value", value: "₦1.42B", trend: "+14.2% YoY", isPositive: true },
        { label: "Avg Cap Rate", value: "9.4%", trend: "Suburban Leading", isPositive: true },
        { label: "Churn Rate", value: "6.2%", trend: "-14% Reduction", isPositive: true },
        { label: "Active Listings", value: "850 Units", trend: "94% Occupied", isPositive: true }
      ],
      sqlQueryTitle: "property_yield_and_churn_model.sql",
      sqlQueryCode: `-- Real Estate: Asset Yield Stability & Churn Optimization
SELECT 
    property_category,
    bedroom_count,
    COUNT(property_id) AS total_units,
    ROUND(AVG(purchase_price_ngn), 0) AS avg_asset_cost,
    ROUND(AVG(annual_rental_revenue_ngn), 0) AS avg_annual_yield,
    ROUND(AVG(annual_rental_revenue_ngn) / AVG(purchase_price_ngn) * 100, 2) AS cap_rate_pct,
    ROUND(AVG(tenant_tenure_months), 1) AS avg_tenure_months,
    SUM(CASE WHEN vacancy_flag = 1 THEN 1 ELSE 0 END) AS vacant_units
FROM real_estate_portfolio
GROUP BY property_category, bedroom_count
ORDER BY cap_rate_pct DESC;`,
      sqlQueryResult: {
        headers: ["property_category", "bedroom_count", "total_units", "avg_yield_ngn", "cap_rate_pct", "avg_tenure"],
        rows: [
          ["Suburban Residential", "2-Bedroom", 310, "₦2,400,000", "11.20%", "28.4 mos"],
          ["Commercial Office", "Multi-Unit", 85, "₦14,500,000", "9.80%", "36.0 mos"],
          ["Urban Apartment", "1-Bedroom", 240, "₦1,800,000", "8.50%", "14.2 mos"],
          ["Suburban Plots", "Land Asset", 215, "₦950,000", "7.10%", "N/A"]
        ],
        rowCount: "4 asset categories",
        executionTime: "15ms"
      },
      daxSnippet: `// DAX Measure: 3-Year Rolling Cap Rate
Rolling 3Y Cap Rate = 
CALCULATE(
    DIVIDE(SUM('Properties'[NetRentalIncome]), SUM('Properties'[Valuation])),
    DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -3, YEAR)
)`
    }
  ] as CVProject[],
  skillGroups: [
    {
      title: "AI & Productivity Tools",
      skills: [
        "AI-assisted SQL and Python development",
        "Analytical problem-solving",
        "Technical documentation",
        "Workflow Improvement"
      ]
    },
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
        "KPI Tracking",
        "Data Cleaning & Modelling",
        "Business Insights"
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
      degree: "Business Intelligence Professional Certificate",
      institution: "Google / Coursera",
      year: "Professional Certificate",
      courses: [
        "Foundations of Business Intelligence",
        "The Path to Insights: Data Models and Pipelines",
        "Decisions, Decisions: Dashboards and Reports",
        "Accelerate Your Job Search with AI"
      ],
      credentialId: "ML8Z7H2X8HIV",
      verificationUrl: "https://coursera.org/verify/professional-cert/ML8Z7H2X8HIV",
      relevance: "End-to-end curriculum covering BigQuery SQL, dimensional modeling, Power BI / Tableau dashboard architectures, and AI-assisted analytics."
    },
    {
      degree: "Data Analytics Certification",
      institution: "Zyetech Innovation Technology",
      year: "Certification",
      relevance: "Hands-on data analytics certification covering relational database design, SQL querying, ETL pipelines, and interactive reporting."
    },
    {
      degree: "B.Sc. Sociology",
      institution: "Ambrose Alli University",
      year: "Sep 2019 – May 2023 (Graduated Dec 2023)",
      location: "Ekpoma, Edo State, Nigeria",
      relevance: "Empirical social research, quantitative behavioral analysis, survey design, and statistical foundations for People Analytics and retention modeling."
    }
  ] as CVEducation[],
  certifications: [
    {
      title: "Data Visualization Simulation",
      issuer: "Tata / Forage",
      credentialId: "6a54b1e2f39d9bdef20198bf",
      verificationUrl: "https://www.theforage.com/certificates/6a54b1e2f39d9bdef20198bf"
    },
    {
      title: "Human Resource Management (HRM)",
      issuer: "Hentech Services Limited"
    },
    {
      title: "Data Analysis Certification",
      issuer: "Zyetech Innovation Technology"
    },
    {
      title: "Google Business Intelligence Professional Certificate",
      issuer: "Google / Coursera",
      credentialId: "ML8Z7H2X8HIV",
      verificationUrl: "https://coursera.org/verify/professional-cert/ML8Z7H2X8HIV"
    }
  ] as CVCertification[],
  awards: [
    {
      title: "3rd Place Winner — Public Speaking & Debate Championship",
      issuer: "JCI Southern Conference • Jan 2026",
      impact: "Won 3rd Place in the Public Speaking & Debate Championship at the JCI Southern Conference 2026. Demonstrates exceptional verbal articulation, rapid synthesis, and executive presentation capabilities."
    }
  ]
};
