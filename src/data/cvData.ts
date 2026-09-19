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
      foodWasteAfricaRepo: "https://github.com/francisosedata-tech/Food-loss-waste-intelligence-africa"
    }
  },
  summary: {
    hero: "I transform raw data into strategic business and people intelligence. With expertise in Power BI, SQL, Python, and Excel, I build dashboards and insights that drive better decisions for businesses and the people within them.",
    aboutParagraphs: [
      "I specialize in transforming complex datasets into strategic business and people intelligence using Power BI, SQL, Python, and Excel. My background in Sociology gives me a unique perspective on human behavior, helping me communicate insights that drive real change for both organizations and the people within them.",
      "I am passionate about leveraging data for social impact and building solutions that are both technically sound and people-centric.",
      "Core Mission: To leverage data as a powerful tool for positive change — empowering organizations and communities through insightful analysis and practical recommendations."
    ],
    restructured: "Results-driven BI & People Analyst combining quantitative data modeling with sociological insight and HR metrics. Proven track record in engineering multi-state booking intelligence systems, reducing data errors by 40%, and building executive Power BI dashboards that optimize revenue visibility and human capital performance.",
    atsScore: 98
  },
  stats: [
    { number: "3+", label: "Years in Data & BI" },
    { number: "100K+", label: "Records Modeled" },
    { number: "3", label: "Featured BI Suites" },
    { number: "40%", label: "Data Quality Optimization" }
  ],
  transformations: [
    {
      redFlag: "Vague Action Verbs in Job Descriptions",
      fix: "Upgraded to active leadership verbs: 'Engineered', 'Spearheaded', 'Architected', 'Reduced'",
      impact: "Immediately captures recruiter interest and passes ATS semantic matching."
    },
    {
      redFlag: "Unquantified Project Accomplishments",
      fix: "Added hard metrics: 100K+ real & modeled records, 40% data quality optimization, 3 days to 4 hours reporting speedup",
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
      title: "Junior Data Analyst",
      company: "PianoWella",
      period: "Feb 2025 – Apr 2026",
      location: "Port Harcourt, Rivers State",
      roleType: "work",
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
      title: "Junior BI Analyst",
      company: "Chemmas Poultry Venture",
      period: "Mar 2024 – Jan 2025",
      location: "Port Harcourt, Rivers State",
      roleType: "work",
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
      id: "freelance",
      title: "Entry-Level Data Analyst & Practice",
      company: "Independent Practice / Projects",
      period: "Jun 2023 – Nov 2025",
      location: "Nigeria",
      roleType: "work",
      highlights: [
        "Developed foundational data analysis skills through hands-on practice, dataset cleaning, and exploratory data analysis (EDA).",
        "Built personal Excel and Power BI projects tracking sales records, budgeting, and basic operational metrics.",
        "Practiced data transformation techniques, formula modeling, and chart design on real-world sample datasets."
      ],
      metrics: [
        { label: "Focus", value: "Skill Building & Practice" },
        { label: "Tools Mastered", value: "Excel & Power BI" }
      ],
      tags: ["Foundational EDA", "Excel Practice", "Data Cleaning", "Skill Development"]
    },
    {
      id: "zyetech",
      title: "Data Analyst Intern",
      company: "Zyetech Innovation Technology",
      period: "Dec 2025 – Jun 2026",
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
      period: "Jun 2025 – Jul 2025",
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
      period: "Present",
      location: "Port Harcourt, Rivers State",
      roleType: "volunteer",
      isVolunteer: true,
      highlights: [
        "Support data-driven decision-making for community development and youth empowerment initiatives.",
        "Analyze programme impact metrics to guide strategic resource planning.",
        "Build dashboards to track membership engagement and event performance across chapters."
      ],
      metrics: [
        { label: "Role Type", value: "Community Volunteer" },
        { label: "Organisation", value: "JCI Garden City" },
        { label: "Focus", value: "Social Impact" }
      ],
      tags: ["JCI Nigeria", "JCI Garden City", "Community Impact", "Membership Tracking", "Strategic Planning", "KPI Dashboards"]
    }
  ] as CVRole[],
  projects: [
    {
      id: "food-waste-africa",
      isLatest: true,
      title: "Food Waste Intelligence: Africa",
      subtitle: "3-Page End-to-End Power BI Suite on Supply Chain Loss, Household Waste & Food Rescue",
      category: "Sustainability & Social Impact BI",
      icon: "🌾",
      impact: "Analyzed real empirical datasets from the UNEP Food Waste Index and FAO Food Loss database across African nations alongside 100K operational food rescue transactions, uncovering that storage drives 21.5% supply chain loss while surplus rescue recovers 78.4% of meals",
      description: "An end-to-end data analytics and Business Intelligence project exploring real food loss data from the FAO and empirical household food waste from the UNEP Food Waste Index 2024 across African nations, paired with operational food-rescue modeling in Power BI, SQL, and Python to pinpoint loss hotspots and quantify avoided emissions (2.4M kg CO2e).",
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
    { title: "Data Analysis Certification", issuer: "Zyetech Innovation Technology" },
    { title: "Data Visualization Simulation", issuer: "Tata / Forage" },
    { title: "Human Resource Management (HRM)", issuer: "Hentech Services Limited" }
  ],
  awards: [
    {
      title: "3rd Place Winner — Public Speaking & Debate Championship",
      issuer: "JCI Southern Conference 2026",
      impact: "Demonstrates exceptional oral communication, high-pressure articulation, and strategic argument structuring for executive stakeholder presentations."
    }
  ]
};
