/**
 * UX Enhancement Utilities for Emily Bakes Cakes Dashboard
 * Provides reusable functions for improved user experience
 */

// ====================================================================
// TOAST NOTIFICATIONS
// ====================================================================

function showToast(message, type = 'success', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icon = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    }[type] || '✅';

    toast.innerHTML = `
        <span style="font-size: 20px;">${icon}</span>
        <span>${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ====================================================================
// LOADING STATES
// ====================================================================

function showLoading(element) {
    if (typeof element === 'string') {
        element = document.querySelector(element);
    }
    if (element) {
        element.classList.add('loading');
    }
}

function hideLoading(element) {
    if (typeof element === 'string') {
        element = document.querySelector(element);
    }
    if (element) {
        element.classList.remove('loading');
    }
}

// ====================================================================
// EMPTY STATES
// ====================================================================

function showEmptyState(container, options = {}) {
    const {
        icon = '📭',
        title = 'No Data Available',
        description = 'There are no items to display',
        actionText = null,
        actionCallback = null
    } = options;

    if (typeof container === 'string') {
        container = document.querySelector(container);
    }

    if (!container) return;

    const actionButton = actionText && actionCallback
        ? `<button class="action-btn-primary" onclick="${actionCallback}">${actionText}</button>`
        : '';

    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">${icon}</div>
            <div class="empty-state-title">${title}</div>
            <div class="empty-state-description">${description}</div>
            ${actionButton}
        </div>
    `;
}

// ====================================================================
// SKELETON LOADING
// ====================================================================

function createSkeletonTable(rows = 5, columns = 4) {
    let html = '<table class="data-table"><tbody>';
    for (let i = 0; i < rows; i++) {
        html += '<tr>';
        for (let j = 0; j < columns; j++) {
            html += '<td><div class="skeleton skeleton-text"></div></td>';
        }
        html += '</tr>';
    }
    html += '</tbody></table>';
    return html;
}

function createSkeletonCards(count = 4) {
    let html = '<div class="summary-grid">';
    for (let i = 0; i < count; i++) {
        html += '<div class="summary-card"><div class="skeleton skeleton-card"></div></div>';
    }
    html += '</div>';
    return html;
}

// ====================================================================
// MODAL DIALOGS
// ====================================================================

function showModal(options = {}) {
    const {
        title = 'Modal Title',
        content = 'Modal content goes here',
        showClose = true,
        buttons = [],
        onClose = null
    } = options;

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'globalModal';

    const buttonsHtml = buttons.map(btn =>
        `<button class="${btn.className || 'action-btn-primary'}"
                 onclick="${btn.onClick || 'closeModal()'}">${btn.text}</button>`
    ).join('');

    overlay.innerHTML = `
        <div class="modal">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="margin: 0; font-size: 24px; font-weight: 700;">${title}</h2>
                ${showClose ? '<button onclick="closeModal()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: var(--text-secondary);">&times;</button>' : ''}
            </div>
            <div style="margin-bottom: 24px;">${content}</div>
            ${buttonsHtml ? `<div style="display: flex; gap: 12px; justify-content: flex-end;">${buttonsHtml}</div>` : ''}
        </div>
    `;

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
            if (onClose) onClose();
        }
    });

    document.body.appendChild(overlay);
}

function closeModal() {
    const modal = document.getElementById('globalModal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.2s ease-out forwards';
        setTimeout(() => modal.remove(), 200);
    }
}

// ====================================================================
// CONFIRMATION DIALOGS
// ====================================================================

function confirmAction(message, onConfirm, onCancel = null) {
    showModal({
        title: '⚠️ Confirm Action',
        content: `<p style="font-size: 16px; line-height: 1.6;">${message}</p>`,
        buttons: [
            {
                text: 'Cancel',
                className: 'btn-cancel',
                onClick: () => {
                    closeModal();
                    if (onCancel) onCancel();
                }
            },
            {
                text: 'Confirm',
                className: 'btn-submit',
                onClick: () => {
                    closeModal();
                    if (onConfirm) onConfirm();
                }
            }
        ]
    });
}

// ====================================================================
// SEARCH FUNCTIONALITY
// ====================================================================

function initializeSearch(inputId, tableId, columnIndices = []) {
    const searchInput = document.getElementById(inputId);
    const table = document.getElementById(tableId);

    if (!searchInput || !table) return;

    searchInput.addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const rows = table.getElementsByTagName('tr');

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            let shouldShow = false;

            if (columnIndices.length === 0) {
                // Search all columns
                shouldShow = row.textContent.toLowerCase().includes(filter);
            } else {
                // Search specific columns
                const cells = row.getElementsByTagName('td');
                for (let index of columnIndices) {
                    if (cells[index] && cells[index].textContent.toLowerCase().includes(filter)) {
                        shouldShow = true;
                        break;
                    }
                }
            }

            row.style.display = shouldShow ? '' : 'none';
        }
    });
}

// ====================================================================
// PAGINATION
// ====================================================================

function initializePagination(tableId, rowsPerPage = 10) {
    const table = document.getElementById(tableId);
    if (!table) return;

    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.getElementsByTagName('tr'));
    let currentPage = 1;
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    function showPage(page) {
        currentPage = page;
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            row.style.display = (index >= start && index < end) ? '' : 'none';
        });

        updatePaginationControls();
    }

    function updatePaginationControls() {
        let paginationContainer = table.parentElement.querySelector('.pagination');
        if (!paginationContainer) {
            paginationContainer = document.createElement('div');
            paginationContainer.className = 'pagination';
            table.parentElement.appendChild(paginationContainer);
        }

        let html = `
            <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''}
                    onclick="changePage(${currentPage - 1})">← Previous</button>
            <span style="padding: 0 16px; color: var(--text-secondary);">
                Page ${currentPage} of ${totalPages}
            </span>
            <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''}
                    onclick="changePage(${currentPage + 1})">Next →</button>
        `;

        paginationContainer.innerHTML = html;
    }

    window.changePage = showPage;
    showPage(1);
}

// ====================================================================
// FORM VALIDATION
// ====================================================================

function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;

    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--danger)';
            isValid = false;

            field.addEventListener('input', function() {
                this.style.borderColor = '';
            }, { once: true });
        }
    });

    if (!isValid) {
        showToast('Please fill in all required fields', 'error');
    }

    return isValid;
}

// ====================================================================
// DROPDOWN FUNCTIONALITY
// ====================================================================

function initializeDropdowns() {
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content.show').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });

    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const trigger = dropdown.querySelector('[data-dropdown-trigger]');
        const content = dropdown.querySelector('.dropdown-content');

        if (trigger && content) {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                content.classList.toggle('show');
            });
        }
    });
}

// ====================================================================
// ACCORDION FUNCTIONALITY
// ====================================================================

function initializeAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content && content.classList.contains('accordion-content')) {
                content.classList.toggle('show');
            }
        });
    });
}

// ====================================================================
// SMOOTH SCROLL TO ELEMENT
// ====================================================================

function scrollToElement(elementId, offset = 100) {
    const element = document.getElementById(elementId);
    if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
}

// ====================================================================
// COPY TO CLIPBOARD
// ====================================================================

function copyToClipboard(text, showNotification = true) {
    navigator.clipboard.writeText(text).then(() => {
        if (showNotification) {
            showToast('Copied to clipboard!', 'success', 2000);
        }
    }).catch(err => {
        console.error('Failed to copy:', err);
        if (showNotification) {
            showToast('Failed to copy', 'error', 2000);
        }
    });
}

// ====================================================================
// LOCAL STORAGE HELPERS
// ====================================================================

function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
    }
}

function loadFromLocalStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.error('Error loading from localStorage:', e);
        return defaultValue;
    }
}

// ====================================================================
// MOBILE MENU TOGGLE
// ====================================================================

function initializeMobileMenu() {
    const sidebar = document.querySelector('.nav-sidebar');
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'mobile-menu-toggle';
    toggleBtn.innerHTML = '☰';
    toggleBtn.setAttribute('aria-label', 'Toggle Menu');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        toggleBtn.innerHTML = sidebar.classList.contains('open') ? '✕' : '☰';
    });

    document.body.appendChild(toggleBtn);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            sidebar.classList.remove('open');
            toggleBtn.innerHTML = '☰';
        }
    });
}

// ====================================================================
// DEBOUNCE UTILITY
// ====================================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ====================================================================
// FORMAT UTILITIES
// ====================================================================

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatDate(date, options = {}) {
    const defaultOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    return new Date(date).toLocaleDateString('en-US', { ...defaultOptions, ...options });
}

function formatTime(date) {
    return new Date(date).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatDateTime(date) {
    return `${formatDate(date)} at ${formatTime(date)}`;
}

// ====================================================================
// BADGE CREATION
// ====================================================================

function createStatusBadge(status) {
    const statusMap = {
        'pending': 'badge-pending',
        'to be created': 'badge-to-be-created',
        'baking': 'badge-baking',
        'decorating': 'badge-decorating',
        'ready': 'badge-ready',
        'completed': 'badge-completed',
        'picked up': 'badge-picked-up',
        'confirmed': 'badge-confirmed',
        'cancelled': 'badge-cancelled'
    };

    const className = statusMap[status.toLowerCase()] || 'status-badge';
    return `<span class="status-badge ${className}">${status}</span>`;
}

// ====================================================================
// TABLE DATA LABELS FOR MOBILE
// ====================================================================

function addDataLabelsToTable(tableId) {
    const table = document.getElementById(tableId);
    if (!table) return;

    const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent);
    const rows = table.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, index) => {
            if (headers[index]) {
                cell.setAttribute('data-label', headers[index]);
            }
        });
    });
}

// ====================================================================
// PROGRESS BAR
// ====================================================================

function updateProgressBar(elementId, percentage) {
    const progressBar = document.getElementById(elementId);
    if (progressBar) {
        const fill = progressBar.querySelector('.progress-fill');
        if (fill) {
            fill.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
        }
    }
}

// ====================================================================
// AUTO-INITIALIZE ON DOM READY
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu for responsive design
    if (window.innerWidth <= 1024) {
        initializeMobileMenu();
    }

    // Initialize dropdowns
    initializeDropdowns();

    // Initialize accordions
    initializeAccordions();

    // Add data labels to all tables for mobile responsiveness
    document.querySelectorAll('.data-table').forEach((table, index) => {
        if (!table.id) {
            table.id = `table-${index}`;
        }
        addDataLabelsToTable(table.id);
    });
});

// Add CSS animation for slide out
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    @keyframes fadeOut {
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showToast,
        showLoading,
        hideLoading,
        showEmptyState,
        showModal,
        closeModal,
        confirmAction,
        initializeSearch,
        initializePagination,
        validateForm,
        scrollToElement,
        copyToClipboard,
        saveToLocalStorage,
        loadFromLocalStorage,
        formatCurrency,
        formatDate,
        formatTime,
        formatDateTime,
        createStatusBadge,
        updateProgressBar
    };
}
