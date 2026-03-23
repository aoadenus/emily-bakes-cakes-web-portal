// ====================================================================
// EMILY BAKES CAKES - MANAGER DASHBOARD
// Complete data model + dynamic logic
// ====================================================================

// DEMO MODE: Use fixed date so data is consistent for portfolio viewing
const DEMO_DATE = '2025-11-23';

// Get today's date at midnight for consistent calculations
function getTodayStart() {
    const today = new Date(DEMO_DATE);
    today.setHours(0, 0, 0, 0);
    return today;
}

function getWeekAgo() {
    const weekAgo = new Date(DEMO_DATE);
    weekAgo.setDate(weekAgo.getDate() - 7);
    weekAgo.setHours(0, 0, 0, 0);
    return weekAgo;
}

// ====================================================================
// SAMPLE DATA
// ====================================================================

const dashboardData = {
    // All orders in the system
    orders: [
        // Today's orders
        {
            orderId: 'ORD-001',
            customerName: 'Sarah Mitchell',
            phone: '(555) 123-4567',
            orderTime: new Date(getTodayStart().getTime() + 8 * 60 * 60 * 1000), // 8 AM today
            pickupDate: getTodayStart(),
            pickupTime: new Date(getTodayStart().getTime() + 16 * 60 * 60 * 1000), // 4 PM today
            cakeType: 'Chocolate Velvet',
            layers: 3,
            total: 65.00,
            status: 'Ready'
        },
        {
            orderId: 'ORD-002',
            customerName: 'John Reyes',
            phone: '(555) 234-5678',
            orderTime: new Date(getTodayStart().getTime() + 9 * 60 * 60 * 1000), // 9 AM today
            pickupDate: getTodayStart(),
            pickupTime: new Date(getTodayStart().getTime() + 17 * 60 * 60 * 1000), // 5 PM today
            cakeType: 'Vanilla Dream',
            layers: 2,
            total: 45.00,
            status: 'Decorating'
        },
        {
            orderId: 'ORD-003',
            customerName: 'Emma Wilson',
            phone: '(555) 345-6789',
            orderTime: new Date(getTodayStart().getTime() + 10 * 60 * 60 * 1000), // 10 AM today
            pickupDate: getTodayStart(),
            pickupTime: new Date(getTodayStart().getTime() + 15 * 60 * 60 * 1000), // 3 PM today
            cakeType: 'Red Velvet',
            layers: 2,
            total: 55.00,
            status: 'In Baking'
        },
        {
            orderId: 'ORD-004',
            customerName: 'Michael Chen',
            phone: '(555) 456-7890',
            orderTime: new Date(getTodayStart().getTime() + 7 * 60 * 60 * 1000), // 7 AM today
            pickupDate: getTodayStart(),
            pickupTime: new Date(getTodayStart().getTime() + 18 * 60 * 60 * 1000), // 6 PM today
            cakeType: 'Strawberry Bliss',
            layers: 3,
            total: 75.00,
            status: 'Ready'
        },
        {
            orderId: 'ORD-005',
            customerName: 'Lisa Thompson',
            phone: '(555) 567-8901',
            orderTime: new Date(getTodayStart().getTime() + 11 * 60 * 60 * 1000), // 11 AM today
            pickupDate: getTodayStart(),
            pickupTime: new Date(getTodayStart().getTime() + 19 * 60 * 60 * 1000), // 7 PM today
            cakeType: 'Lemon Zest',
            layers: 2,
            total: 50.00,
            status: 'To Be Created'
        },
        {
            orderId: 'ORD-006',
            customerName: 'David Martinez',
            phone: '(555) 678-9012',
            orderTime: new Date(getTodayStart().getTime() + 12 * 60 * 60 * 1000), // 12 PM today
            pickupDate: getTodayStart(),
            pickupTime: new Date(getTodayStart().getTime() + 20 * 60 * 60 * 1000), // 8 PM today
            cakeType: 'Carrot Cake',
            layers: 3,
            total: 70.00,
            status: 'Decorating'
        },
        
        // Yesterday's orders
        {
            orderId: 'ORD-007',
            customerName: 'Patricia Davis',
            phone: '(555) 789-0123',
            orderTime: new Date(getTodayStart().getTime() - 24 * 60 * 60 * 1000 + 10 * 60 * 60 * 1000),
            pickupDate: new Date(getTodayStart().getTime() - 24 * 60 * 60 * 1000),
            pickupTime: new Date(getTodayStart().getTime() - 24 * 60 * 60 * 1000 + 16 * 60 * 60 * 1000),
            cakeType: 'Chocolate Velvet',
            layers: 2,
            total: 55.00,
            status: 'Picked Up'
        },
        
        // This week's orders (for revenue calculation)
        {
            orderId: 'ORD-008',
            customerName: 'Robert Johnson',
            phone: '(555) 890-1234',
            orderTime: new Date(getTodayStart().getTime() - 2 * 24 * 60 * 60 * 1000),
            pickupDate: new Date(getTodayStart().getTime() - 2 * 24 * 60 * 60 * 1000),
            pickupTime: new Date(getTodayStart().getTime() - 2 * 24 * 60 * 60 * 1000 + 16 * 60 * 60 * 1000),
            cakeType: 'Vanilla Dream',
            layers: 2,
            total: 45.00,
            status: 'Picked Up'
        },
        {
            orderId: 'ORD-009',
            customerName: 'Jennifer Lee',
            phone: '(555) 901-2345',
            orderTime: new Date(getTodayStart().getTime() - 3 * 24 * 60 * 60 * 1000),
            pickupDate: new Date(getTodayStart().getTime() - 3 * 24 * 60 * 60 * 1000),
            pickupTime: new Date(getTodayStart().getTime() - 3 * 24 * 60 * 60 * 1000 + 16 * 60 * 60 * 1000),
            cakeType: 'Red Velvet',
            layers: 3,
            total: 80.00,
            status: 'Picked Up'
        },
        {
            orderId: 'ORD-010',
            customerName: 'Christopher Brown',
            phone: '(555) 012-3456',
            orderTime: new Date(getTodayStart().getTime() - 5 * 24 * 60 * 60 * 1000),
            pickupDate: new Date(getTodayStart().getTime() - 5 * 24 * 60 * 60 * 1000),
            pickupTime: new Date(getTodayStart().getTime() - 5 * 24 * 60 * 60 * 1000 + 16 * 60 * 60 * 1000),
            cakeType: 'Strawberry Bliss',
            layers: 2,
            total: 60.00,
            status: 'Picked Up'
        },
        {
            orderId: 'ORD-011',
            customerName: 'Amanda Garcia',
            phone: '(555) 123-0987',
            orderTime: new Date(getTodayStart().getTime() - 6 * 24 * 60 * 60 * 1000),
            pickupDate: new Date(getTodayStart().getTime() - 6 * 24 * 60 * 60 * 1000),
            pickupTime: new Date(getTodayStart().getTime() - 6 * 24 * 60 * 60 * 1000 + 16 * 60 * 60 * 1000),
            cakeType: 'Lemon Zest',
            layers: 2,
            total: 48.00,
            status: 'Picked Up'
        },
        {
            orderId: 'ORD-012',
            customerName: 'Kevin Anderson',
            phone: '(555) 234-0987',
            orderTime: new Date(getTodayStart().getTime() - 4 * 24 * 60 * 60 * 1000),
            pickupDate: new Date(getTodayStart().getTime() - 4 * 24 * 60 * 60 * 1000),
            pickupTime: new Date(getTodayStart().getTime() - 4 * 24 * 60 * 60 * 1000 + 16 * 60 * 60 * 1000),
            cakeType: 'Carrot Cake',
            layers: 2,
            total: 52.00,
            status: 'Picked Up'
        }
    ],

    // All customers
    customers: [
        {
            id: 'CUST-001',
            name: 'Sarah Mitchell',
            phone: '(555) 123-4567',
            email: 'sarah.mitchell@email.com',
            orders: ['ORD-001'],
            createdDate: new Date(getTodayStart().getTime() - 30 * 24 * 60 * 60 * 1000)
        },
        {
            id: 'CUST-002',
            name: 'John Reyes',
            phone: '(555) 234-5678',
            email: 'john.reyes@email.com',
            orders: ['ORD-002'],
            createdDate: new Date(getTodayStart().getTime() - 2 * 24 * 60 * 60 * 1000) // New this week
        },
        {
            id: 'CUST-003',
            name: 'Emma Wilson',
            phone: '(555) 345-6789',
            email: 'emma.wilson@email.com',
            orders: ['ORD-003'],
            createdDate: new Date(getTodayStart().getTime() - 3 * 24 * 60 * 60 * 1000) // New this week
        },
        {
            id: 'CUST-004',
            name: 'Michael Chen',
            phone: '(555) 456-7890',
            email: 'michael.chen@email.com',
            orders: ['ORD-004'],
            createdDate: new Date(getTodayStart().getTime() - 15 * 24 * 60 * 60 * 1000)
        },
        {
            id: 'CUST-005',
            name: 'Lisa Thompson',
            phone: '(555) 567-8901',
            email: 'lisa.thompson@email.com',
            orders: ['ORD-005'],
            createdDate: new Date(getTodayStart().getTime() - 5 * 24 * 60 * 60 * 1000) // New this week
        },
        {
            id: 'CUST-006',
            name: 'David Martinez',
            phone: '(555) 678-9012',
            email: 'david.martinez@email.com',
            orders: ['ORD-006'],
            createdDate: new Date(getTodayStart().getTime() - 1 * 24 * 60 * 60 * 1000) // New this week
        },
        {
            id: 'CUST-007',
            name: 'Patricia Davis',
            phone: '(555) 789-0123',
            email: 'patricia.davis@email.com',
            orders: ['ORD-007'],
            createdDate: new Date(getTodayStart().getTime() - 60 * 24 * 60 * 60 * 1000)
        },
        {
            id: 'CUST-008',
            name: 'Robert Johnson',
            phone: '(555) 890-1234',
            email: 'robert.johnson@email.com',
            orders: ['ORD-008'],
            createdDate: new Date(getTodayStart().getTime() - 45 * 24 * 60 * 60 * 1000)
        },
        {
            id: 'CUST-009',
            name: 'Jennifer Lee',
            phone: '(555) 901-2345',
            email: 'jennifer.lee@email.com',
            orders: ['ORD-009'],
            createdDate: new Date(getTodayStart().getTime() - 90 * 24 * 60 * 60 * 1000)
        },
        {
            id: 'CUST-010',
            name: 'Christopher Brown',
            phone: '(555) 012-3456',
            email: 'christopher.brown@email.com',
            orders: ['ORD-010'],
            createdDate: new Date(getTodayStart().getTime() - 120 * 24 * 60 * 60 * 1000)
        },
        {
            id: 'CUST-011',
            name: 'Amanda Garcia',
            phone: '(555) 123-0987',
            email: 'amanda.garcia@email.com',
            orders: ['ORD-011'],
            createdDate: new Date(getTodayStart().getTime() - 75 * 24 * 60 * 60 * 1000)
        },
        {
            id: 'CUST-012',
            name: 'Kevin Anderson',
            phone: '(555) 234-0987',
            email: 'kevin.anderson@email.com',
            orders: ['ORD-012'],
            createdDate: new Date(getTodayStart().getTime() - 150 * 24 * 60 * 60 * 1000)
        }
    ],

    // Tomorrow's schedule
    tomorrowSchedule: [
        {
            time: '10:00 AM',
            customer: 'Angela Price',
            summary: 'Chocolate Cake - 3 layers'
        },
        {
            time: '2:00 PM',
            customer: 'Thomas White',
            summary: 'Vanilla Cake - 2 layers'
        },
        {
            time: '4:30 PM',
            customer: 'Jessica Harris',
            summary: 'Custom Design Cake - 4 layers'
        },
        {
            time: '6:00 PM',
            customer: 'Mark Taylor',
            summary: 'Red Velvet - 2 layers'
        }
    ]
};

// ====================================================================
// COMPUTED FUNCTIONS
// ====================================================================

// Get all orders for today
function getTodaysOrders() {
    const today = getTodayStart();
    return dashboardData.orders.filter(order => {
        const orderDate = new Date(order.pickupDate);
        orderDate.setHours(0, 0, 0, 0);
        return orderDate.getTime() === today.getTime();
    });
}

// Get pending pickups (Ready status for today)
function getPendingPickups() {
    return getTodaysOrders().filter(order => order.status === 'Ready');
}

// Count pending pickups
function getPendingPickupCount() {
    return getPendingPickups().length;
}

// Count today's orders
function getTodaysOrderCount() {
    return getTodaysOrders().length;
}

// Calculate weekly revenue (last 7 days)
function getWeeklyRevenue() {
    const weekAgo = getWeekAgo();
    const today = new Date(DEMO_DATE);
    today.setHours(23, 59, 59, 999);
    
    return dashboardData.orders
        .filter(order => {
            const orderDate = new Date(order.pickupDate);
            return orderDate >= weekAgo && orderDate <= today && order.status === 'Picked Up';
        })
        .reduce((sum, order) => sum + order.total, 0);
}

// Get new customers this week
function getNewCustomersThisWeek() {
    const weekAgo = getWeekAgo();
    const today = new Date(DEMO_DATE);
    today.setHours(23, 59, 59, 999);
    
    return dashboardData.customers.filter(customer => {
        const createdDate = new Date(customer.createdDate);
        return createdDate >= weekAgo && createdDate <= today;
    });
}

// Get new customers count
function getNewCustomersCount() {
    return getNewCustomersThisWeek().length;
}

// Get status counts
function getStatusCounts() {
    const today = getTodaysOrders();
    return {
        toBaking: today.filter(o => o.status === 'To Be Created').length,
        baking: today.filter(o => o.status === 'In Baking').length,
        decorating: today.filter(o => o.status === 'Decorating').length,
        ready: today.filter(o => o.status === 'Ready').length,
        pickedUp: today.filter(o => o.status === 'Picked Up').length
    };
}

// Get top products this week
function getTopProductsThisWeek() {
    const weekAgo = getWeekAgo();
    const today = new Date(DEMO_DATE);
    today.setHours(23, 59, 59, 999);
    
    const weekOrders = dashboardData.orders.filter(order => {
        const orderDate = new Date(order.pickupDate);
        return orderDate >= weekAgo && orderDate <= today;
    });
    
    const productCounts = {};
    weekOrders.forEach(order => {
        productCounts[order.cakeType] = (productCounts[order.cakeType] || 0) + 1;
    });
    
    return Object.entries(productCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
}

// Get today's order status breakdown
function getTodaysStatusBreakdown() {
    const today = getTodaysOrders();
    const statuses = ['To Be Created', 'In Baking', 'Decorating', 'Ready', 'Picked Up'];
    
    return statuses.map(status => ({
        status,
        count: today.filter(o => o.status === status).length
    }));
}

// Get quarterly revenue (Q1, Q2, Q3, Q4)
function getQuarterlyRevenue() {
    const orders = dashboardData.orders;
    const quarters = {
        'Q1': { start: 0, end: 3 },
        'Q2': { start: 3, end: 6 },
        'Q3': { start: 6, end: 9 },
        'Q4': { start: 9, end: 12 }
    };
    
    const result = {};
    Object.entries(quarters).forEach(([quarter, { start, end }]) => {
        result[quarter] = orders
            .filter(order => {
                const month = new Date(order.pickupDate).getMonth();
                return month >= start && month < end && order.status === 'Picked Up';
            })
            .reduce((sum, order) => sum + order.total, 0);
    });
    
    return result;
}

// Format currency
function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

// Format time (for display)
function formatTime(date) {
    const d = new Date(date);
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

// Format date (for display)
function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Format date and time
function formatDateTime(date) {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' at ' + formatTime(d);
}

// Get today's date formatted
function getTodayFormatted() {
    const today = getTodayStart();
    return today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

// ====================================================================
// DOM MANIPULATION FUNCTIONS
// ====================================================================

// Update dashboard summary cards
function updateSummaryCards() {
    // Pending Pickups
    const pendingEl = document.getElementById('pending-pickup-count');
    if (pendingEl) pendingEl.textContent = getPendingPickupCount();
    
    // Today's Orders
    const todayEl = document.getElementById('todays-orders-count');
    if (todayEl) todayEl.textContent = getTodaysOrderCount();
    
    // Weekly Revenue
    const revenueEl = document.getElementById('weekly-revenue');
    if (revenueEl) revenueEl.textContent = formatCurrency(getWeeklyRevenue());
    
    // New Customers
    const newCustomersEl = document.getElementById('new-customers-count');
    if (newCustomersEl) newCustomersEl.textContent = getNewCustomersCount();
}

// Update status boxes
function updateStatusBoxes() {
    const counts = getStatusCounts();
    
    const bakingEl = document.getElementById('status-baking');
    if (bakingEl) bakingEl.textContent = counts.baking + counts.toBaking;
    
    const decoratingEl = document.getElementById('status-decorating');
    if (decoratingEl) decoratingEl.textContent = counts.decorating;
    
    const readyEl = document.getElementById('status-ready');
    if (readyEl) readyEl.textContent = counts.ready;
}

// Update header pickup count
function updateHeaderPickupCount() {
    const headerEl = document.getElementById('header-pickup-count');
    if (headerEl) {
        const count = getPendingPickupCount();
        headerEl.textContent = count + ' pickup' + (count !== 1 ? 's' : '') + ' today';
    }
}

// Populate today's pickups table
function populateTodaysPickupsTable() {
    const tbody = document.querySelector('#todays-pickups-table tbody');
    if (!tbody) return;
    
    const pickups = getTodaysOrders().sort((a, b) => {
        const timeA = new Date(a.pickupTime);
        const timeB = new Date(b.pickupTime);
        return timeA - timeB;
    }).slice(0, 6); // Limit to 6 rows for compact view
    
    tbody.innerHTML = pickups.map(order => `
        <tr>
            <td>${formatTime(order.pickupTime)}</td>
            <td>${order.orderId}</td>
            <td>${order.customerName}</td>
            <td>${order.cakeType}</td>
            <td><span class="status-badge status-${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span></td>
            <td>${formatCurrency(order.total)}</td>
            <td><a href="pending_pickups.html" class="action-link">View</a></td>
        </tr>
    `).join('');
}

// Populate tomorrow's schedule
function populateTomorrowsSchedule() {
    const container = document.getElementById('tomorrows-schedule');
    if (!container) return;
    
    const scheduleHTML = dashboardData.tomorrowSchedule.map(item => `
        <div class="schedule-item">
            <div class="schedule-time">${item.time}</div>
            <div class="schedule-info">
                <div class="schedule-customer">${item.customer}</div>
                <div class="schedule-summary">${item.summary}</div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = scheduleHTML;
}

// Populate pending pickups page
function populatePendingPickupsTable(searchTerm = '', filterStatus = 'All') {
    const tbody = document.querySelector('#pending-pickups-table tbody');
    if (!tbody) return;
    
    let data = getTodaysOrders();
    
    // Filter by status
    if (filterStatus !== 'All') {
        data = data.filter(order => 
            (filterStatus === 'Ready' && order.status === 'Ready') ||
            (filterStatus === 'Not Ready' && order.status !== 'Ready')
        );
    }
    
    // Filter by search term
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        data = data.filter(order => 
            order.orderId.toLowerCase().includes(term) ||
            order.customerName.toLowerCase().includes(term) ||
            order.phone.includes(searchTerm)
        );
    }
    
    // Sort by pickup time
    data.sort((a, b) => new Date(a.pickupTime) - new Date(b.pickupTime));
    
    tbody.innerHTML = data.map(order => `
        <tr>
            <td>${order.orderId}</td>
            <td>${order.customerName}</td>
            <td>${order.phone}</td>
            <td>${formatTime(order.pickupTime)}</td>
            <td><span class="status-badge status-${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span></td>
            <td>${formatCurrency(order.total)}</td>
            <td>
                <button class="action-btn" onclick="viewOrderDetails('${order.orderId}')">View</button>
            </td>
        </tr>
    `).join('');
    
    // Update result count if element exists
    const countEl = document.getElementById('results-count');
    if (countEl) countEl.textContent = data.length;
}

// Populate today's orders page
function populateTodaysOrdersTable(searchTerm = '', filterStatus = 'All') {
    const tbody = document.querySelector('#todays-orders-table tbody');
    if (!tbody) return;
    
    let data = getTodaysOrders();
    
    // Filter by status
    if (filterStatus !== 'All') {
        data = data.filter(order => order.status === filterStatus);
    }
    
    // Filter by search term
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        data = data.filter(order => 
            order.orderId.toLowerCase().includes(term) ||
            order.customerName.toLowerCase().includes(term) ||
            order.cakeType.toLowerCase().includes(term)
        );
    }
    
    // Sort by order time
    data.sort((a, b) => new Date(a.orderTime) - new Date(b.orderTime));
    
    tbody.innerHTML = data.map(order => `
        <tr>
            <td>${order.orderId}</td>
            <td>${order.customerName}</td>
            <td>${formatTime(order.orderTime)}</td>
            <td>${formatDate(order.pickupDate)}</td>
            <td><span class="status-badge status-${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span></td>
            <td>${order.layers}</td>
            <td>${formatCurrency(order.total)}</td>
            <td>
                <button class="action-btn" onclick="viewOrderDetails('${order.orderId}')">View</button>
            </td>
        </tr>
    `).join('');
    
    // Update result count if element exists
    const countEl = document.getElementById('results-count');
    if (countEl) countEl.textContent = data.length;
}

// View order details (placeholder for now)
function viewOrderDetails(orderId) {
    alert('View details for order: ' + orderId);
}

// ====================================================================
// CHART FUNCTIONS (using Chart.js)
// ====================================================================

// Initialize today's order status pie chart
function initTodaysStatusChart() {
    const canvas = document.getElementById('todaysStatusChart');
    if (!canvas) return;
    
    const breakdown = getTodaysStatusBreakdown();
    const colors = ['#F59E0B', '#A855F7', '#C44569', '#10B981', '#6B7280'];
    
    if (window.todaysStatusChart instanceof Chart) {
        window.todaysStatusChart.destroy();
    }
    
    window.todaysStatusChart = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: breakdown.map(b => b.status),
            datasets: [{
                data: breakdown.map(b => b.count),
                backgroundColor: colors,
                borderColor: '#FAF5F0',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { size: 11 },
                        padding: 10
                    }
                }
            }
        }
    });
}

// Initialize top products horizontal bar chart
function initTopProductsChart() {
    const canvas = document.getElementById('topProductsChart');
    if (!canvas) return;
    
    const topProducts = getTopProductsThisWeek();
    
    if (window.topProductsChart instanceof Chart) {
        window.topProductsChart.destroy();
    }
    
    window.topProductsChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: topProducts.map(p => p.name),
            datasets: [{
                label: 'Orders',
                data: topProducts.map(p => p.count),
                backgroundColor: '#C44569',
                borderRadius: 4,
                borderSkipped: false
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });
}

// Initialize quarterly revenue chart
function initQuarterlyRevenueChart() {
    const canvas = document.getElementById('quarterlyRevenueChart');
    if (!canvas) return;
    
    const quarterly = getQuarterlyRevenue();
    
    if (window.quarterlyRevenueChart instanceof Chart) {
        window.quarterlyRevenueChart.destroy();
    }
    
    window.quarterlyRevenueChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: Object.keys(quarterly),
            datasets: [{
                label: 'Revenue',
                data: Object.values(quarterly),
                backgroundColor: '#10B981',
                borderRadius: 4,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toFixed(0);
                        }
                    }
                }
            }
        }
    });
}

// Initialize all charts
function initializeCharts() {
    // Load Chart.js if not already loaded
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded');
        return;
    }
    
    initTodaysStatusChart();
    initTopProductsChart();
    initQuarterlyRevenueChart();
}

// ====================================================================
// PAGE INITIALIZATION
// ====================================================================

// Initialize dashboard on page load
function initializeDashboard() {
    updateSummaryCards();
    updateStatusBoxes();
    updateHeaderPickupCount();
    populateTodaysPickupsTable();
    populateTomorrowsSchedule();
    initializeCharts();
}

// Initialize pending pickups page
function initializePendingPickups() {
    const dateEl = document.getElementById('page-date');
    if (dateEl) dateEl.textContent = getTodayFormatted();
    
    populatePendingPickupsTable();
    
    // Setup search and filter
    const searchInput = document.getElementById('search-input');
    const filterDropdown = document.getElementById('filter-dropdown');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const filterVal = filterDropdown ? filterDropdown.value : 'All';
            populatePendingPickupsTable(e.target.value, filterVal);
        });
    }
    
    if (filterDropdown) {
        filterDropdown.addEventListener('change', (e) => {
            const searchVal = searchInput ? searchInput.value : '';
            populatePendingPickupsTable(searchVal, e.target.value);
        });
    }
}

// Initialize today's orders page
function initializeTodaysOrders() {
    const dateEl = document.getElementById('page-date');
    if (dateEl) dateEl.textContent = getTodayFormatted();
    
    populateTodaysOrdersTable();
    
    // Setup search and filter
    const searchInput = document.getElementById('search-input');
    const filterDropdown = document.getElementById('filter-dropdown');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const filterVal = filterDropdown ? filterDropdown.value : 'All';
            populateTodaysOrdersTable(e.target.value, filterVal);
        });
    }
    
    if (filterDropdown) {
        filterDropdown.addEventListener('change', (e) => {
            const searchVal = searchInput ? searchInput.value : '';
            populateTodaysOrdersTable(searchVal, e.target.value);
        });
    }
}

// Handle logout
function handleLogout() {
    localStorage.removeItem('staffUser');
    localStorage.removeItem('staffRole');
    localStorage.removeItem('staffName');
    // Redirect back to main website staff login
    window.location.href = '/staff-login.html';
}

// Handle back to site
function backToSite() {
    // Redirect back to main website home
    window.location.href = '/index.html';
}

// Initialize nav active state based on current page
function initializeNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Update header with logged-in user info
function updateHeaderWithUserInfo() {
    const userNameEl = document.querySelector('.manager-name');
    const roleEl = document.querySelector('.role-badge');
    const staffUser = localStorage.getItem('staffUser');
    const staffRole = localStorage.getItem('staffRole');
    const staffName = localStorage.getItem('staffName');
    
    if (userNameEl) {
        // Use stored name, or extract from email, or use default
        if (staffName) {
            userNameEl.textContent = staffName;
        } else if (staffUser) {
            // Extract name from email (e.g., manager@emilybakes.com -> Manager)
            const name = staffUser.split('@')[0].charAt(0).toUpperCase() + staffUser.split('@')[0].slice(1);
            userNameEl.textContent = name;
        }
    }
    
    if (roleEl && staffRole) {
        // Capitalize the role
        roleEl.textContent = staffRole.charAt(0).toUpperCase() + staffRole.slice(1);
    }
}

// Check if user is authenticated
function checkAuthentication() {
    const staffUser = localStorage.getItem('staffUser');
    if (!staffUser) {
        // Not logged in - redirect to login page
        window.location.href = '/staff-login.html';
        return false;
    }
    return true;
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check authentication first - redirect if not logged in
    if (!checkAuthentication()) {
        return;
    }
    
    // Update header with logged-in user info
    updateHeaderWithUserInfo();
    
    // Initialize navigation
    initializeNav();
    
    // Determine which page we're on and initialize accordingly
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        initializeDashboard();
    } else if (currentPage === 'pending_pickups.html') {
        initializePendingPickups();
    } else if (currentPage === 'todays_orders.html') {
        initializeTodaysOrders();
    }
});

// ====================================================================
// ADDITIONAL HELPER FUNCTIONS FOR ALL DASHBOARDS
// ====================================================================

// Get new customers (alias for compatibility)
function getNewCustomers() {
    return getNewCustomersThisWeek().length;
}

// Get top products for charts (alias)
function getTopProducts() {
    const products = getTopProductsThisWeek();
    return products.length > 0 ? products : [
        { name: 'Chocolate Velvet', count: 3 },
        { name: 'Vanilla Dream', count: 2 },
        { name: 'Red Velvet', count: 2 }
    ];
}

// Get today's date string (YYYY-MM-DD format)
function getTodayDate() {
    const today = getTodayStart();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Utility: Open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Utility: Close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal') && event.target.classList.contains('active')) {
        closeModal(event.target.id);
    }
});

// Populate recent orders table (compact format)
function populateRecentOrdersTable() {
    const tbody = document.getElementById('recent-orders-table');
    if (!tbody) return;

    const recentOrders = dashboardData.orders.slice(0, 5);

    if (recentOrders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 16px;">No orders found</td></tr>';
        return;
    }

    tbody.innerHTML = recentOrders.map(order => `
        <tr>
            <td>${order.orderId}</td>
            <td>${order.customerName}</td>
            <td><span class="status-badge badge-${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span></td>
            <td>$${order.total.toFixed(2)}</td>
        </tr>
    `).join('');
}

// Populate today's pickups table (compact format)
function populateTodaysPickupsCompact() {
    const tbody = document.getElementById('todays-pickups-table');
    if (!tbody) return;

    const todayPickups = getTodaysPickups();

    if (todayPickups.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 16px;">No pickups scheduled</td></tr>';
        return;
    }

    tbody.innerHTML = todayPickups.map(order => `
        <tr>
            <td>${order.pickupTime || 'TBD'}</td>
            <td>${order.customerName}</td>
            <td>${order.cakeType}</td>
            <td><span class="status-badge badge-${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span></td>
        </tr>
    `).join('');
}

// Populate tomorrow's schedule (compact format)
function populateTomorrowsScheduleCompact() {
    const container = document.getElementById('tomorrows-schedule');
    if (!container) return;

    const tomorrowOrders = getTomorrowsOrders();

    if (tomorrowOrders.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 16px; color: #6B7280;">No orders scheduled for tomorrow</p>';
        return;
    }

    container.innerHTML = `
        <table style="width: 100%;">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Customer</th>
                    <th>Cake</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${tomorrowOrders.map(order => `
                    <tr>
                        <td>${order.pickupTime || 'TBD'}</td>
                        <td>${order.customerName}</td>
                        <td>${order.cakeType}</td>
                        <td><span class="status-badge badge-${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Get tomorrow's orders
function getTomorrowsOrders() {
    const tomorrow = new Date(DEMO_DATE);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const dayAfterTomorrow = new Date(tomorrow);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);

    return dashboardData.orders.filter(order => {
        const pickupDate = new Date(order.pickupDate);
        return pickupDate >= tomorrow && pickupDate < dayAfterTomorrow;
    });
}

// ====================================================================
// NAVIGATION HELPER
// ====================================================================

// Navigate to the correct dashboard based on user role
function goToDashboard() {
    const role = localStorage.getItem('staffRole') || 'manager';
    const dashboardMap = {
        'manager': 'manager-dashboard.html',
        'sales': 'sales-dashboard.html',
        'baker': 'baker-dashboard.html',
        'decorator': 'decorator-dashboard.html',
        'accountant': 'manager-dashboard.html'
    };
    window.location.href = dashboardMap[role] || 'manager-dashboard.html';
}
