import dms1 from "../images/Debtors MS/2.png";
import dms2 from "../images/Debtors MS/5.png";
import dms3 from "../images/Debtors MS/6.png";
import dms4 from "../images/Debtors MS/7.png";
import dms5 from "../images/Debtors MS/8.png";
import dms6 from "../images/Debtors MS/10.png";
import dms7 from "../images/Debtors MS/12.png";
import dms8 from "../images/Debtors MS/15.png";
import dms9 from "../images/Debtors MS/20.png";
import dms10 from "../images/Debtors MS/22.png";

import inc1 from "../images/Incentive MS/4.png";
import inc2 from "../images/Incentive MS/9.png";
import inc3 from "../images/Incentive MS/11.png";
import inc4 from "../images/Incentive MS/14.png";
import inc5 from "../images/Incentive MS/15.png";
import inc6 from "../images/Incentive MS/16.png";

import inv1 from "../images/Inventory MS/1.png";
import inv2 from "../images/Inventory MS/2.png";
import inv3 from "../images/Inventory MS/3.png";
import inv4 from "../images/Inventory MS/4.png";
import inv5 from "../images/Inventory MS/5.png";

import mms1 from "../images/Mobile MS/1.png";
import mms2 from "../images/Mobile MS/2.png";
import mms3 from "../images/Mobile MS/3.png";
import mms4 from "../images/Mobile MS/4.png";
import mms5 from "../images/Mobile MS/5.png";

import lux1 from "../images/lux/1.png";
import lux2 from "../images/lux/2.png";
import lux3 from "../images/lux/3.png";
import lux4 from "../images/lux/4.png";
import lux5 from "../images/lux/5.png";
import lux6 from "../images/lux/6.png";
import lux7 from "../images/lux/7.png";
import lux8 from "../images/lux/8.png";
import lux9 from "../images/lux/9.png";
import lux10 from "../images/lux/10.png";
import lux11 from "../images/lux/11.png";
import lux12 from "../images/lux/12.png";
import lux13 from "../images/lux/13.png";

const Projects = [
  {
    id: 1,
    name: "Debtor Management System",
    description:
      "A robust system designed for tracking and managing debtors, providing comprehensive insights into payment promises, invoices, customers, and debtor summaries across all divisions in the company.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    keyFeatures: [
      "Comprehensive Dashboard: Displays total debtors, today’s promise-to-pay value, number of invoices, customers, marketing executives, and debtor summaries for each division.",
      "Division-Based Details: Enables viewing detailed debtor information specific to individual divisions, ensuring targeted management.",
      "Real-Time Data Tracking: Updates and visualizes key metrics dynamically for effective decision-making.",
      "Data Visualization: Provides a clear summary of debtor trends across divisions through tables.",
      "Real-Time Data Tracking: Updates and visualizes key metrics dynamically for effective decision-making.",
    ],
    images: [dms1, dms2, dms3, dms4, dms5, dms6, dms7, dms8, dms9, dms10],
    githubFrontend: "https://github.com/your-frontend-repo",
    githubBackend: "https://github.com/your-backend-repo",
  },

  {
    id: 2,
    name: "Incentive Management System",
    description:
      "A comprehensive incentive management system designed for the finance department to calculate and display incentives for salespersons based on their performance metrics, streamlining financial workflows and providing actionable insights.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    keyFeatures: [
      "Dynamic Dashboard: Displays total invoice value, salesperson count, total collection, and approved incentives.",
      "Automated Calculations: Fetches and processes unique invoice and collection values to compute incentives accurately.",
      "Role-Based Access: Enables secure data handling and user-specific views for finance team members.",
      "Interactive UI: User-friendly interfaces for data input and visualization using PHP forms and JavaScript functions.",
      "Data Management: Seamless handling of invoice records with error prevention mechanisms to avoid duplicates.",
      "Customizable Reports: Provides incentive summaries for easy analysis and decision-making.",
    ],
    images: [inc1, inc2, inc3, inc4, inc5, inc6],
    githubFrontend: "https://github.com/your-frontend-repo",
    githubBackend: "https://github.com/your-backend-repo",
  },

  {
    id: 3,
    name: "Supermarket Inventory Management System",
    description:
      "A web-based application designed to streamline inventory management processes for supermarkets, offering a comprehensive solution for tracking stock, managing customers, suppliers, and orders, and simplifying day-to-day operations.",
    techStack: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "jQuery",
    ],
    keyFeatures: [
      "Inventory Tracking: Displays and monitors stock levels in real-time, ensuring accurate and efficient inventory management.",
      "Customer Management: Provides tools to manage customer profiles and purchase histories effectively.",
      "Category & Brand Management: Organizes products into categories and brands for easier navigation and management.",
      "Supplier Management: Tracks supplier details and streamlines restocking workflows.",
      "Product Management: Simplifies product addition, editing, and removal to maintain an up-to-date inventory.",
      "Purchase Management: Facilitates tracking of purchases and supplier transactions.",
      "Order Management: Manages customer orders with an intuitive and user-friendly interface.",
    ],
    images: [inv1, inv2, inv3, inv4, inv5],
    githubFrontend: "https://github.com/your-frontend-repo",
    githubBackend: "https://github.com/your-backend-repo",
  },

  {
    id: 4,
    name: "Mobile Management System",
    description:
      "An efficient system for tracking and managing company-issued SIMs and packages, streamlining operations for the finance and HR departments by monitoring usage and user registration.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    keyFeatures: [
      "Excess Usage Tracking: Identifies users exceeding their allocated SIM package limits, providing actionable insights for the finance department.",
      "User Management: Allows the HR department to register, create, and manage user profiles tied to company-issued SIMs.",
      "Centralized Dashboard: Consolidates key metrics such as exceeded users, usage trends, and user details for streamlined monitoring.",
      "Interactive UI: User-friendly interfaces for data input and visualization using PHP forms and JavaScript functions.",
      "Role-Based Access: Ensures secure access for finance and HR teams, with functionality tailored to their specific needs.",
      "Usage Monitoring: Tracks SIM package utilization in real time, providing a clear overview for proactive management.",
    ],
    images: [mms1, mms2, mms3, mms4, mms5],
    githubFrontend: "https://github.com/your-frontend-repo",
    githubBackend: "https://github.com/your-backend-repo",
  },

  {
    id: 5,
    name: "Supercar Store Platform",
    description:
      '"Luxury Rides", A comprehensive web-based platform for a supercar store, including a client-facing website for browsing available cars and a management system for store operations.',
    techStack: ["React", "Node.js", "Express.js", "Sequelize", "MySQL", "AWS"],
    keyFeatures: [
      "Client website to view available supercars and specifications",
      "Email-based inquiry system for clients",
      "Store management system for CRUD operations on car listings",
      "Real-time updates between client website and management system",
      "Inquiry response functionality for store owners",
    ],
    images: [
      lux13,
      lux12,
      lux11,
      lux10,
      lux9,
      lux8,
      lux7,
      lux6,
      lux5,
      lux4,
      lux3,
      lux2,
      lux1,
    ],
    githubFrontend: "https://github.com/your-frontend-repo",
    githubBackend: "https://github.com/your-backend-repo",
  },
];

export default Projects;
