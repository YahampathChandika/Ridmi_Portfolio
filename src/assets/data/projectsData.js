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

import lux1 from "../images/Lux/1.png";
import lux2 from "../images/Lux/2.png";
import lux3 from "../images/Lux/3.png";
import lux4 from "../images/Lux/4.png";
import lux5 from "../images/Lux/5.png";
import lux6 from "../images/Lux/6.png";
import lux7 from "../images/Lux/7.png";
import lux8 from "../images/Lux/8.png";
import lux9 from "../images/Lux/9.png";
import lux10 from "../images/Lux/10.png";
import lux11 from "../images/Lux/11.png";
import lux12 from "../images/Lux/12.png";
import lux13 from "../images/Lux/13.png";

import chat1 from "../images/Chatbot/1.jpg";
import chat2 from "../images/Chatbot/2.jpg";
import chat3 from "../images/Chatbot/3.jpg";
import chat4 from "../images/Chatbot/4.jpg";
import chat5 from "../images/Chatbot/5.jpg";
import chat6 from "../images/Chatbot/6.jpg";
import chat7 from "../images/Chatbot/7.jpg";
import chat8 from "../images/Chatbot/8.jpg";
import chat9 from "../images/Chatbot/9.jpg";
import chat10 from "../images/Chatbot/10.jpg";
import chat11 from "../images/Chatbot/11.jpg";
import chat12 from "../images/Chatbot/12.jpg";

const Projects = [
  {
    id: 1,
    name: "Intelligent Chatbot to Optimize University Communication Channels",
    description:
      "A cutting-edge chatbot developed to enhance communication within university settings, integrating advanced text mining to handle and streamline routine inquiries efficiently. This system is designed to improve interaction between students and university administrative staff, reducing the workload on staff while providing accurate and timely information to users.",
    techStack: ["Python", "Rasa", "Anaconda", "MariaDB"],
    keyFeatures: [
      {
        topic: "Natural Language Understanding (NLU) Model:",
        description:
          "Utilizes high-quality data to train the chatbot, ensuring accurate recognition and classification of user queries.",
      },
      {
        topic: "Text Mining Integration:",
        description:
          "Enhances the chatbot's ability to analyze large volumes of text, offering detailed responses to complex inquiries.",
      },
      {
        topic: "Automated Query Handling:",
        description:
          "Streamlines university communication by providing automated, real-time responses to common student inquiries.",
      },
      {
        topic: "Operational Efficiency:",
        description:
          "Significantly reduces administrative workload and improves the overall user experience for both students and staff.",
      },
      {
        topic: "Scalable Design:",
        description:
          "Adaptable to future enhancements like multilingual capabilities and advanced AI techniques such as sentiment analysis.",
      },
    ],
    images: [chat1, chat2, chat3, chat4, chat5, chat6, chat7, chat8, chat9, chat10, chat11, chat12],
    githubFrontend: "https://github.com/your-frontend-repo",
    githubBackend: "https://github.com/your-backend-repo",
  },
  {
    id: 2,
    name: "Debtor Management System",
    description:
      "A robust system designed for tracking and managing debtors, providing comprehensive insights into payment promises, invoices, customers, and debtor summaries across all divisions in the company.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    keyFeatures: [
      {
        topic: "Comprehensive Dashboard:",
        description:
          "Displays total debtors, today’s promise-to-pay value, number of invoices, customers, marketing executives, and debtor summaries for each division.",
      },
      {
        topic: "Division-Based Details:",
        description:
          "Enables viewing detailed debtor information specific to individual divisions, ensuring targeted management.",
      },
      {
        topic: "Real-Time Data Tracking:",
        description:
          "Updates and visualizes key metrics dynamically for effective decision-making.",
      },
      {
        topic: "Data Visualization:",
        description:
          "Provides a clear summary of debtor trends across divisions through tables.",
      },
    ],
    images: [dms1, dms2, dms3, dms4, dms5, dms6, dms7, dms8, dms9, dms10],
    githubFrontend: "https://github.com/your-frontend-repo",
    githubBackend: "https://github.com/your-backend-repo",
  },
  {
    id: 3,
    name: "Incentive Management System",
    description:
      "A comprehensive incentive management system designed for the finance department to calculate and display incentives for salespersons based on their performance metrics, streamlining financial workflows and providing actionable insights.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    keyFeatures: [
      {
        topic: "Dynamic Dashboard:",
        description:
          "Displays total invoice value, salesperson count, total collection, and approved incentives.",
      },
      {
        topic: "Automated Calculations:",
        description:
          "Fetches and processes unique invoice and collection values to compute incentives accurately.",
      },
      {
        topic: "Role-Based Access:",
        description:
          "Enables secure data handling and user-specific views for finance team members.",
      },
      {
        topic: "Interactive UI:",
        description:
          "User-friendly interfaces for data input and visualization using PHP forms and JavaScript functions.",
      },
      {
        topic: "Data Management:",
        description:
          "Seamless handling of invoice records with error prevention mechanisms to avoid duplicates.",
      },
      {
        topic: "Customizable Reports:",
        description:
          "Provides incentive summaries for easy analysis and decision-making.",
      },
    ],
    images: [inc1, inc2, inc3, inc4, inc5, inc6],
    githubFrontend: "https://github.com/your-frontend-repo",
    githubBackend: "https://github.com/your-backend-repo",
  },
  {
    id: 4,
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
      {
        topic: "Inventory Tracking:",
        description:
          "Displays and monitors stock levels in real-time, ensuring accurate and efficient inventory management.",
      },
      {
        topic: "Customer Management:",
        description:
          "Provides tools to manage customer profiles and purchase histories effectively.",
      },
      {
        topic: "Category & Brand Management:",
        description:
          "Organizes products into categories and brands for easier navigation and management.",
      },
      {
        topic: "Supplier Management:",
        description:
          "Tracks supplier details and streamlines restocking workflows.",
      },
      {
        topic: "Product Management:",
        description:
          "Simplifies product addition, editing, and removal to maintain an up-to-date inventory.",
      },
      {
        topic: "Purchase Management:",
        description:
          "Facilitates tracking of purchases and supplier transactions.",
      },
      {
        topic: "Order Management:",
        description:
          "Manages customer orders with an intuitive and user-friendly interface.",
      },
    ],
    images: [inv1, inv2, inv3, inv4, inv5],
    githubFrontend: "https://github.com/your-frontend-repo",
    githubBackend: "https://github.com/your-backend-repo",
  },
  {
    id: 5,
    name: "Mobile Management System",
    description:
      "An efficient system for tracking and managing company-issued SIMs and packages, streamlining operations for the finance and HR departments by monitoring usage and user registration.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    keyFeatures: [
      {
        topic: "Excess Usage Tracking:",
        description:
          "Identifies users exceeding their allocated SIM package limits, providing actionable insights for the finance department.",
      },
      {
        topic: "User Management:",
        description:
          "Allows the HR department to register, create, and manage user profiles tied to company-issued SIMs.",
      },
      {
        topic: "Centralized Dashboard:",
        description:
          "Consolidates key metrics such as exceeded users, usage trends, and user details for streamlined monitoring.",
      },
      {
        topic: "Interactive UI:",
        description:
          "User-friendly interfaces for data input and visualization using PHP forms and JavaScript functions.",
      },
      {
        topic: "Role-Based Access:",
        description:
          "Ensures secure access for finance and HR teams, with functionality tailored to their specific needs.",
      },
      {
        topic: "Usage Monitoring:",
        description:
          "Tracks SIM package utilization in real time, providing a clear overview for proactive management.",
      },
    ],
    images: [mms1, mms2, mms3, mms4, mms5],
    githubFrontend: "https://github.com/your-frontend-repo",
    githubBackend: "https://github.com/your-backend-repo",
  },
  {
    id: 6,
    name: "Supercar Store Platform",
    description:
      '"Luxury Rides", A comprehensive web-based platform for a supercar store, including a client-facing website for browsing available cars and a management system for store operations.',
    techStack: ["React", "Node.js", "Express.js", "Sequelize", "MySQL", "AWS"],
    keyFeatures: [
      {
        topic: "Client Website:",
        description:
          "Allows clients to view available supercars and specifications.",
      },
      {
        topic: "Inquiry System:",
        description: "Provides email-based inquiry functionality for clients.",
      },
      {
        topic: "Store Management:",
        description:
          "Includes a system for CRUD operations on car listings and other store functionalities.",
      },
      {
        topic: "Real-Time Updates:",
        description:
          "Synchronizes data between the client website and the management system in real time.",
      },
      {
        topic: "Inquiry Response:",
        description:
          "Offers tools for store owners to respond to client inquiries efficiently.",
      },
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
