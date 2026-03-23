# Emily Bakes Cakes - Business Web Application

A full-featured custom bakery ordering system with role-based staff dashboards, customer management, and order tracking.

🔗 **[Live Demo](https://aoadenus.github.io/emily-bakes-cakes-web-portal/)**

## 🎂 Project Overview

This is a comprehensive web application for a custom cake bakery business, featuring:

- **Customer-facing website** with menu, about, and contact pages
- **Custom cake order form** with customer lookup/creation, dynamic layer configuration, and real-time pricing
- **Staff portal** with role-based dashboards for different team members
- **Customer management system** with preferred customer tracking and discount functionality
- **Order management** with status tracking and reporting

## 🛠 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid, Flexbox, and CSS Variables
- **Data Storage**: LocalStorage for mock data persistence
- **Charts**: Chart.js for dashboard visualizations
- **Fonts**: Google Fonts (Playfair Display, Poppins, Open Sans)
- **Design**: Responsive design with mobile-first approach

## 📁 Project Structure

```
├── index.html              # Homepage
├── about.html              # About page
├── menu.html               # Menu/products page
├── contact.html            # Contact page
├── order-form.html         # Custom cake order form with customer lookup
├── order-success.html      # Order confirmation page
├── new-customer.html       # Standalone customer creation form
├── customer-success.html   # Customer creation confirmation
├── staff-login.html        # Staff authentication portal
├── staff-dashboard.html    # Main staff dashboard
├── staff-orders.html       # Order management
├── staff-customers.html    # Customer management
├── staff-products.html     # Product management
├── staff-reports.html      # Business reports
├── staff-settings.html     # Staff settings
├── css/                    # Stylesheets
├── js/                     # JavaScript files
├── images/                 # Image assets
├── dashboard/              # Role-specific dashboards
│   ├── manager-dashboard.html
│   ├── sales-dashboard.html
│   ├── baker-dashboard.html
│   ├── decorator-dashboard.html
│   └── accountant-dashboard.html
├── database/               # Database schema
└── docs/                   # Project documentation
```

## ✨ Key Features

### Order Form
- Customer search and lookup functionality
- Create new customers inline via modal
- Dynamic layer configuration (2-8 layers per cake)
- Extensive customization options (flavors, fillings, icing colors, decorations)
- Real-time pricing calculator
- Preferred customer discount (10%) automatically applied

### Staff Dashboards
- **Manager**: Full business overview with KPIs and team management
- **Sales**: Revenue tracking, customer metrics, and sales forecasting
- **Baker**: Production schedules and order queues
- **Decorator**: Decoration requests and timeline management
- **Accountant**: Financial reports and invoice tracking

### Customer Management
- Retail and corporate customer types
- Contact information and address management
- Preferred customer status with automatic discounts
- Order history tracking

## 🚀 Running the Project

1. Clone the repository
2. Open `index.html` in a web browser, or
3. Use a local server:
   ```bash
   npx serve .
   ```
   or
   ```bash
   python -m http.server 8000
   ```

## 📊 Demo Data

The application includes mock data for demonstration purposes, stored in LocalStorage:
- Sample customers (retail and corporate)
- Sample orders with various statuses
- Product catalog

## 🎨 Design Highlights

- Warm, inviting color palette centered on `#C44569` (rose pink)
- Consistent typography hierarchy with elegant serif headers
- Intuitive navigation with emoji icons
- Form validation with clear error messaging
- Responsive layouts for all device sizes

## �‍💻 Authors

**Albina Aldreen** & **Adetutu Adenusi**

Created for **CIS 3343** with Professor **Bret J. Detillier**  
**University of Houston** — 2025

---

*Built with HTML, CSS, and JavaScript*
