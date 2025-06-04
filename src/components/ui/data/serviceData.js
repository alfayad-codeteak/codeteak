import React, { useState } from 'react';
import { Shield,  Cloud, Code, Smartphone, Database, Wifi, Monitor, Settings, Zap, Globe,} from 'lucide-react';

// IT Services Data
const itServicesData = [
  {
    id: 1,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
    icon: Shield,
    category: "Security",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Long-term",
    price: "Starting from $299/month",
    benefits: [
      "24/7 threat monitoring and detection",
      "Advanced firewall and intrusion prevention",
      "Employee security training programs",
      "Compliance with industry standards",
      "Incident response and recovery planning"
    ],
    features: [
      "Multi-layered security architecture",
      "Real-time threat intelligence",
      "Vulnerability assessments",
      "Security policy development",
      "Regular security audits"
    ],
    deliverables: [
      "Security assessment report",
      "Custom security policies",
      "Employee training materials",
      "24/7 monitoring dashboard",
      "Incident response plan"
    ]
  },
  {
    id: 2,
    title: "Cloud Migration Services",
    description: "Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.",
    icon: Cloud,
    category: "Cloud",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Medium-term",
    price: "Starting from $499/month",
    benefits: [
      "Reduced infrastructure costs by up to 40%",
      "Improved scalability and flexibility",
      "Enhanced data backup and recovery",
      "Global accessibility and collaboration",
      "Automatic software updates and maintenance"
    ],
    features: [
      "Multi-cloud platform support",
      "Zero-downtime migration strategy",
      "Data encryption in transit and at rest",
      "Cost optimization analysis",
      "Performance monitoring tools"
    ],
    deliverables: [
      "Migration roadmap and timeline",
      "Cloud architecture design",
      "Data migration reports",
      "Performance benchmarks",
      "Training documentation"
    ]
  },
  {
    id: 3,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements and goals.",
    icon: Code,
    category: "Development",
    type: "Custom",
    complexity: "Advanced",
    duration: "Long-term",
    price: "Starting from $5,000/project",
    benefits: [
      "Fully customized to your business needs",
      "Scalable architecture for future growth",
      "Integration with existing systems",
      "Ongoing support and maintenance",
      "Competitive advantage through innovation"
    ],
    features: [
      "Full-stack development capabilities",
      "Agile development methodology",
      "Quality assurance and testing",
      "API development and integration",
      "Cross-platform compatibility"
    ],
    deliverables: [
      "Project requirements document",
      "Technical specifications",
      "Source code and documentation",
      "User training and manuals",
      "Ongoing support package"
    ]
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
    icon: Smartphone,
    category: "Mobile",
    type: "Custom",
    complexity: "Intermediate",
    duration: "Medium-term",
    price: "Starting from $8,000/project",
    benefits: [
      "Native performance on all platforms",
      "Intuitive and engaging user interface",
      "App store optimization included",
      "Push notification capabilities",
      "Offline functionality support"
    ],
    features: [
      "iOS and Android development",
      "React Native and Flutter expertise",
      "Backend API development",
      "Third-party integrations",
      "App analytics and monitoring"
    ],
    deliverables: [
      "App design mockups and prototypes",
      "Source code for both platforms",
      "App store submission assistance",
      "User guide and documentation",
      "Post-launch support package"
    ]
  },
  {
    id: 5,
    title: "Database Management",
    description: "Professional database design, optimization, and management services for optimal performance.",
    icon: Database,
    category: "Database",
    type: "Standard",
    complexity: "Intermediate",
    duration: "Long-term",
    price: "Starting from $399/month",
    benefits: [
      "Improved query performance by up to 60%",
      "Automated backup and recovery systems",
      "Data integrity and consistency assurance",
      "Scalable database architecture",
      "24/7 monitoring and maintenance"
    ],
    features: [
      "Database design and optimization",
      "Performance tuning and indexing",
      "Data migration services",
      "Backup and disaster recovery",
      "Security and access control"
    ],
    deliverables: [
      "Database architecture documentation",
      "Performance optimization reports",
      "Backup and recovery procedures",
      "Security audit reports",
      "Monitoring dashboard setup"
    ]
  },
  {
    id: 6,
    title: "Network Infrastructure",
    description: "Complete network setup, configuration, and management for reliable and secure connectivity.",
    icon: Wifi,
    category: "Infrastructure",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Long-term",
    price: "Starting from $599/month",
    benefits: [
      "High-speed and reliable connectivity",
      "Secure network architecture",
      "Redundancy and failover protection",
      "Remote access capabilities",
      "Network monitoring and analytics"
    ],
    features: [
      "Network design and implementation",
      "Firewall and security configuration",
      "Wireless network setup",
      "VPN and remote access solutions",
      "Network performance optimization"
    ],
    deliverables: [
      "Network topology diagram",
      "Configuration documentation",
      "Security policy implementation",
      "Performance monitoring setup",
      "User access management"
    ]
  },
  {
    id: 7,
    title: "IT Support & Helpdesk",
    description: "Comprehensive IT support services with dedicated helpdesk for all your technical needs.",
    icon: Settings,
    category: "Support",
    type: "Standard",
    complexity: "Basic",
    duration: "Long-term",
    price: "Starting from $199/month",
    benefits: [
      "24/7 technical support availability",
      "Quick response times under 2 hours",
      "Remote and on-site support options",
      "Proactive system monitoring",
      "Cost-effective IT maintenance"
    ],
    features: [
      "Multi-channel support (phone, email, chat)",
      "Ticket management system",
      "Remote desktop assistance",
      "Hardware and software troubleshooting",
      "Preventive maintenance schedules"
    ],
    deliverables: [
      "Support portal access",
      "Service level agreement (SLA)",
      "Monthly performance reports",
      "Knowledge base documentation",
      "Emergency contact procedures"
    ]
  },
  {
    id: 8,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    icon: Globe,
    category: "Web",
    type: "Custom",
    complexity: "Intermediate",
    duration: "Short-term",
    price: "Starting from $2,500/project",
    benefits: [
      "Mobile-responsive design",
      "Search engine optimization ready",
      "Fast loading times and performance",
      "Content management system integration",
      "E-commerce capabilities available"
    ],
    features: [
      "Custom web design and development",
      "CMS integration (WordPress, Drupal)",
      "E-commerce platform development",
      "API integration and development",
      "Performance optimization"
    ],
    deliverables: [
      "Website design mockups",
      "Fully functional website",
      "Content management training",
      "SEO optimization report",
      "Maintenance and hosting options"
    ]
  },
  {
    id: 9,
    title: "Data Analytics & BI",
    description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
    icon: Monitor,
    category: "Analytics",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Medium-term",
    price: "Starting from $799/month",
    benefits: [
      "Data-driven decision making capabilities",
      "Real-time business intelligence dashboards",
      "Predictive analytics and forecasting",
      "Automated reporting systems",
      "Integration with existing data sources"
    ],
    features: [
      "Custom dashboard development",
      "Data warehouse design",
      "ETL process automation",
      "Machine learning integration",
      "Multi-source data integration"
    ],
    deliverables: [
      "BI dashboard and reports",
      "Data architecture documentation",
      "Analytics training materials",
      "Performance KPI definitions",
      "Ongoing analytics support"
    ]
  },
  {
    id: 10,
    title: "DevOps & Automation",
    description: "Streamline your development and operations with automated CI/CD pipelines and infrastructure as code.",
    icon: Zap,
    category: "DevOps",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Medium-term",
    price: "Starting from $699/month",
    benefits: [
      "Faster deployment cycles",
      "Reduced manual errors and downtime",
      "Improved collaboration between teams",
      "Scalable infrastructure management",
      "Cost optimization through automation"
    ],
    features: [
      "CI/CD pipeline setup",
      "Container orchestration",
      "Infrastructure as Code (IaC)",
      "Monitoring and alerting systems",
      "Automated testing frameworks"
    ],
    deliverables: [
      "Automated deployment pipelines",
      "Infrastructure monitoring setup",
      "DevOps best practices guide",
      "Team training and documentation",
      "Performance optimization reports"
    ]
  }
];


export default itServicesData;