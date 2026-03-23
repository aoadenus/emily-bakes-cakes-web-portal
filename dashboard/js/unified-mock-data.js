// Emily Bakes Cakes - Perfect Daily Demo Data
// Nov 23 - Dec 3, 2025
// 270 Orders (27 per day  10 days)

const unifiedMockData = {
    orders: [
    // ========== NOV 23 (SATURDAY) - 15 ORDERS ==========
    // 2 Cancelled
    { id: 1001, customerId: 1, productId: 1, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "10:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 101, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Customer cancelled", cakeSize: "10\"", decorationNotes: null },
    { id: 1002, customerId: 2, productId: 3, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "14:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 102, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Changed plans", cakeSize: "9\"", decorationNotes: null },
    
    // 3 Confirmed
    { id: 1003, customerId: 3, productId: 2, orderDate: "2025-11-23", pickupDate: "2025-11-28", pickupTime: "11:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Confirmed order", cakeSize: "8\"", decorationNotes: null },
    { id: 1004, customerId: 4, productId: 5, orderDate: "2025-11-23", pickupDate: "2025-11-29", pickupTime: "15:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 102, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Birthday cake", cakeSize: "10\"", decorationNotes: null },
    { id: 1005, customerId: 5, productId: 4, orderDate: "2025-11-23", pickupDate: "2025-11-30", pickupTime: "09:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Wedding anniversary", cakeSize: "10\"", decorationNotes: null },
    
    // 4 In Baking
    { id: 1006, customerId: 6, productId: 6, orderDate: "2025-11-23", pickupDate: "2025-11-27", pickupTime: "12:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "In baking", cakeSize: "10\"", decorationNotes: null },
    { id: 1007, customerId: 7, productId: 7, orderDate: "2025-11-23", pickupDate: "2025-11-28", pickupTime: "13:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking in progress", cakeSize: "9\"", decorationNotes: null },
    { id: 1008, customerId: 8, productId: 8, orderDate: "2025-11-23", pickupDate: "2025-11-29", pickupTime: "16:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 202, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Special tiramisu", cakeSize: "10\"", decorationNotes: null },
    { id: 1009, customerId: 9, productId: 1, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "10:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "10\"", decorationNotes: null },
    
    // 3 In Decorating
    { id: 1010, customerId: 10, productId: 2, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "14:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom design" },
    { id: 1011, customerId: 11, productId: 3, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "11:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Decorating", cakeSize: "9\"", decorationNotes: "Flowers" },
    { id: 1012, customerId: 12, productId: 4, orderDate: "2025-11-23", pickupDate: "2025-11-27", pickupTime: "15:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 302, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Final touches", cakeSize: "10\"", decorationNotes: "Gold accents" },
    
    // 3 Ready for Pickup
    { id: 1013, customerId: 13, productId: 5, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "09:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready for pickup", cakeSize: "10\"", decorationNotes: "Complete" },
    { id: 1014, customerId: 14, productId: 6, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "16:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "9\"", decorationNotes: "Standard" },
    { id: 1015, customerId: 15, productId: 7, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "12:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready for pickup", cakeSize: "10\"", decorationNotes: "Done" },
    
    // ========== NOV 24 (SUNDAY) - CLOSED - 0 ORDERS ==========
    
    // ========== NOV 25 (MONDAY) - 15 ORDERS ==========
    // 2 Cancelled
    { id: 1016, customerId: 16, productId: 8, orderDate: "2025-11-25", pickupDate: "2025-11-28", pickupTime: "10:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 102, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Cancelled by customer", cakeSize: "10\"", decorationNotes: null },
    { id: 1017, customerId: 17, productId: 1, orderDate: "2025-11-25", pickupDate: "2025-11-29", pickupTime: "13:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 101, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Order cancelled", cakeSize: "9\"", decorationNotes: null },
    
    // 3 Confirmed
    { id: 1018, customerId: 18, productId: 2, orderDate: "2025-11-25", pickupDate: "2025-11-30", pickupTime: "11:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 102, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Confirmed", cakeSize: "10\"", decorationNotes: null },
    { id: 1019, customerId: 19, productId: 3, orderDate: "2025-11-25", pickupDate: "2025-12-01", pickupTime: "14:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Deposit received", cakeSize: "10\"", decorationNotes: null },
    { id: 1020, customerId: 20, productId: 4, orderDate: "2025-11-25", pickupDate: "2025-12-02", pickupTime: "15:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 102, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Order confirmed", cakeSize: "9\"", decorationNotes: null },
    
    // 4 In Baking
    { id: 1021, customerId: 21, productId: 5, orderDate: "2025-11-25", pickupDate: "2025-11-28", pickupTime: "09:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking", cakeSize: "10\"", decorationNotes: null },
    { id: 1022, customerId: 22, productId: 6, orderDate: "2025-11-25", pickupDate: "2025-11-29", pickupTime: "12:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 202, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "In oven", cakeSize: "10\"", decorationNotes: null },
    { id: 1023, customerId: 23, productId: 7, orderDate: "2025-11-25", pickupDate: "2025-11-30", pickupTime: "16:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },
    { id: 1024, customerId: 24, productId: 8, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "10:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking in progress", cakeSize: "10\"", decorationNotes: null },
    
    // 3 In Decorating
    { id: 1025, customerId: 25, productId: 1, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "14:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Decorating", cakeSize: "10\"", decorationNotes: "Roses" },
    { id: 1026, customerId: 26, productId: 2, orderDate: "2025-11-25", pickupDate: "2025-11-28", pickupTime: "11:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 302, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "9\"", decorationNotes: "Custom" },
    { id: 1027, customerId: 27, productId: 3, orderDate: "2025-11-25", pickupDate: "2025-11-29", pickupTime: "15:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Final decorations", cakeSize: "10\"", decorationNotes: "Piping" },
    
    // 3 Ready for Pickup
    { id: 1028, customerId: 28, productId: 4, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "09:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "10\"", decorationNotes: "Complete" },
    { id: 1029, customerId: 29, productId: 5, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "13:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready for pickup", cakeSize: "9\"", decorationNotes: "Done" },
    { id: 1030, customerId: 30, productId: 6, orderDate: "2025-11-25", pickupDate: "2025-11-28", pickupTime: "16:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "10\"", decorationNotes: "Standard" },
    
    // ========== NOV 26 (TUESDAY) - 15 ORDERS ==========
    // 2 Cancelled
    { id: 1031, customerId: 1, productId: 7, orderDate: "2025-11-26", pickupDate: "2025-11-29", pickupTime: "10:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 101, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Customer request", cakeSize: "10\"", decorationNotes: null },
    { id: 1032, customerId: 2, productId: 8, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "14:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 102, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Cancelled", cakeSize: "9\"", decorationNotes: null },
    
    // 3 Confirmed
    { id: 1033, customerId: 3, productId: 1, orderDate: "2025-11-26", pickupDate: "2025-12-01", pickupTime: "11:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Confirmed", cakeSize: "10\"", decorationNotes: null },
    { id: 1034, customerId: 4, productId: 2, orderDate: "2025-11-26", pickupDate: "2025-12-02", pickupTime: "15:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 102, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Order placed", cakeSize: "10\"", decorationNotes: null },
    { id: 1035, customerId: 5, productId: 3, orderDate: "2025-11-26", pickupDate: "2025-12-03", pickupTime: "09:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Confirmed order", cakeSize: "9\"", decorationNotes: null },
    
    // 4 In Baking
    { id: 1036, customerId: 6, productId: 4, orderDate: "2025-11-26", pickupDate: "2025-11-29", pickupTime: "12:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking", cakeSize: "10\"", decorationNotes: null },
    { id: 1037, customerId: 7, productId: 5, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "13:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 202, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "In oven", cakeSize: "10\"", decorationNotes: null },
    { id: 1038, customerId: 8, productId: 6, orderDate: "2025-11-26", pickupDate: "2025-12-01", pickupTime: "16:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },
    { id: 1039, customerId: 9, productId: 7, orderDate: "2025-11-26", pickupDate: "2025-11-28", pickupTime: "10:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking in progress", cakeSize: "10\"", decorationNotes: null },
    
    // 3 In Decorating
    { id: 1040, customerId: 10, productId: 8, orderDate: "2025-11-26", pickupDate: "2025-11-28", pickupTime: "14:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Decorating", cakeSize: "10\"", decorationNotes: "Elegant" },
    { id: 1041, customerId: 11, productId: 1, orderDate: "2025-11-26", pickupDate: "2025-11-29", pickupTime: "11:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 302, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "9\"", decorationNotes: "Flowers" },
    { id: 1042, customerId: 12, productId: 2, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "15:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Final touches", cakeSize: "10\"", decorationNotes: "Custom design" },
    
    // 3 Ready for Pickup
    { id: 1043, customerId: 13, productId: 3, orderDate: "2025-11-26", pickupDate: "2025-11-28", pickupTime: "09:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "10\"", decorationNotes: "Complete" },
    { id: 1044, customerId: 14, productId: 4, orderDate: "2025-11-26", pickupDate: "2025-11-28", pickupTime: "16:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready for pickup", cakeSize: "9\"", decorationNotes: "Done" },
    { id: 1045, customerId: 15, productId: 5, orderDate: "2025-11-26", pickupDate: "2025-11-29", pickupTime: "12:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "10\"", decorationNotes: "Standard" },
    
    // ========== NOV 27 (WEDNESDAY) - 15 ORDERS ==========
    // 2 Cancelled
    { id: 1046, customerId: 16, productId: 6, orderDate: "2025-11-27", pickupDate: "2025-11-30", pickupTime: "10:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 102, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Cancelled", cakeSize: "10\"", decorationNotes: null },
    { id: 1047, customerId: 17, productId: 7, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "13:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 101, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Customer cancelled", cakeSize: "9\"", decorationNotes: null },
    
    // 3 Confirmed
    { id: 1048, customerId: 18, productId: 8, orderDate: "2025-11-27", pickupDate: "2025-12-02", pickupTime: "11:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 102, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Confirmed", cakeSize: "10\"", decorationNotes: null },
    { id: 1049, customerId: 19, productId: 1, orderDate: "2025-11-27", pickupDate: "2025-12-03", pickupTime: "14:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Order confirmed", cakeSize: "10\"", decorationNotes: null },
    { id: 1050, customerId: 20, productId: 2, orderDate: "2025-11-27", pickupDate: "2025-12-04", pickupTime: "15:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 102, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Deposit received", cakeSize: "9\"", decorationNotes: null },
    
    // 4 In Baking
    { id: 1051, customerId: 21, productId: 3, orderDate: "2025-11-27", pickupDate: "2025-11-30", pickupTime: "09:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking", cakeSize: "10\"", decorationNotes: null },
    { id: 1052, customerId: 22, productId: 4, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "12:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 202, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "In oven", cakeSize: "10\"", decorationNotes: null },
    { id: 1053, customerId: 23, productId: 5, orderDate: "2025-11-27", pickupDate: "2025-12-02", pickupTime: "16:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },
    { id: 1054, customerId: 24, productId: 6, orderDate: "2025-11-27", pickupDate: "2025-11-29", pickupTime: "10:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking in progress", cakeSize: "10\"", decorationNotes: null },
    
    // 3 In Decorating
    { id: 1055, customerId: 25, productId: 7, orderDate: "2025-11-27", pickupDate: "2025-11-29", pickupTime: "14:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Decorating", cakeSize: "10\"", decorationNotes: "Birthday theme" },
    { id: 1056, customerId: 26, productId: 8, orderDate: "2025-11-27", pickupDate: "2025-11-30", pickupTime: "11:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 302, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "9\"", decorationNotes: "Special" },
    { id: 1057, customerId: 27, productId: 1, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "15:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Final decorations", cakeSize: "10\"", decorationNotes: "Roses" },
    
    // 3 Ready for Pickup
    { id: 1058, customerId: 28, productId: 2, orderDate: "2025-11-27", pickupDate: "2025-11-29", pickupTime: "09:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "10\"", decorationNotes: "Complete" },
    { id: 1059, customerId: 29, productId: 3, orderDate: "2025-11-27", pickupDate: "2025-11-29", pickupTime: "13:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready for pickup", cakeSize: "9\"", decorationNotes: "Done" },
    { id: 1060, customerId: 30, productId: 4, orderDate: "2025-11-27", pickupDate: "2025-11-30", pickupTime: "16:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "10\"", decorationNotes: "Standard" },
    
    // ========== NOV 28 (THURSDAY - THANKSGIVING) - 1 ORDER ==========
    { id: 1061, customerId: 1, productId: 5, orderDate: "2025-11-28", pickupDate: "2025-12-01", pickupTime: "14:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Thanksgiving order", cakeSize: "10\"", decorationNotes: null },
    
    // ========== NOV 29 (FRIDAY) - 1 ORDER ==========
    { id: 1062, customerId: 2, productId: 6, orderDate: "2025-11-29", pickupDate: "2025-12-02", pickupTime: "11:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "In baking", cakeSize: "10\"", decorationNotes: null },
    
    // ========== NOV 30 (SATURDAY) - 1 ORDER ==========
    { id: 1063, customerId: 3, productId: 7, orderDate: "2025-11-30", pickupDate: "2025-12-03", pickupTime: "15:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Decorating", cakeSize: "9\"", decorationNotes: "Weekend special" },

    { id: 1348, customerId: 1, productId: 1, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "08:00:00", totalPrice: 75.0, depositAmount: 37.5, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },    
    { id: 1349, customerId: 2, productId: 2, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "08:00:00", totalPrice: 80.0, depositAmount: 40, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },    
    { id: 1350, customerId: 3, productId: 3, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "08:00:00", totalPrice: 85.0, depositAmount: 42.5, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },    
    { id: 1351, customerId: 4, productId: 4, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "08:00:00", totalPrice: 90.0, depositAmount: 45, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },    
    { id: 1352, customerId: 5, productId: 5, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "08:00:00", totalPrice: 95.0, depositAmount: 47.5, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },    
    { id: 1353, customerId: 6, productId: 6, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 100.0, depositAmount: 50, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1354, customerId: 7, productId: 7, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 105.0, depositAmount: 52.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1355, customerId: 8, productId: 8, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 110.0, depositAmount: 55, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1356, customerId: 9, productId: 1, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 75.0, depositAmount: 37.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1357, customerId: 10, productId: 2, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 80.0, depositAmount: 40, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1358, customerId: 11, productId: 3, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 85.0, depositAmount: 42.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1359, customerId: 12, productId: 4, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 90.0, depositAmount: 45, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1360, customerId: 13, productId: 5, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 95.0, depositAmount: 47.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1361, customerId: 14, productId: 6, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 100.0, depositAmount: 50, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1362, customerId: 15, productId: 7, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 105.0, depositAmount: 52.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1363, customerId: 16, productId: 8, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 110.0, depositAmount: 55, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1364, customerId: 17, productId: 1, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 75.0, depositAmount: 37.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1365, customerId: 18, productId: 2, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 80.0, depositAmount: 40, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1366, customerId: 19, productId: 3, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 85.0, depositAmount: 42.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1367, customerId: 20, productId: 4, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 90.0, depositAmount: 45, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1368, customerId: 21, productId: 5, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 95.0, depositAmount: 47.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1369, customerId: 22, productId: 6, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 100.0, depositAmount: 50, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1370, customerId: 23, productId: 7, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 105.0, depositAmount: 52.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1371, customerId: 24, productId: 8, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 110.0, depositAmount: 55, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1372, customerId: 25, productId: 1, orderDate: "2025-11-23", pickupDate: "2025-11-23", pickupTime: "09:00:00", totalPrice: 75.0, depositAmount: 37.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1373, customerId: 26, productId: 2, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "08:00:00", totalPrice: 80.0, depositAmount: 40, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },    
    { id: 1374, customerId: 27, productId: 3, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "08:00:00", totalPrice: 85.0, depositAmount: 42.5, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },    
    { id: 1375, customerId: 28, productId: 4, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "08:00:00", totalPrice: 90.0, depositAmount: 45, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },    
    { id: 1376, customerId: 29, productId: 5, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "08:00:00", totalPrice: 95.0, depositAmount: 47.5, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },    
    { id: 1377, customerId: 30, productId: 6, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "08:00:00", totalPrice: 100.0, depositAmount: 50, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },    
    { id: 1378, customerId: 1, productId: 7, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 105.0, depositAmount: 52.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1379, customerId: 2, productId: 8, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 110.0, depositAmount: 55, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1380, customerId: 3, productId: 1, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 75.0, depositAmount: 37.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1381, customerId: 4, productId: 2, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 80.0, depositAmount: 40, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1382, customerId: 5, productId: 3, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 85.0, depositAmount: 42.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1383, customerId: 6, productId: 4, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 90.0, depositAmount: 45, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1384, customerId: 7, productId: 5, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 95.0, depositAmount: 47.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1385, customerId: 8, productId: 6, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 100.0, depositAmount: 50, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1386, customerId: 9, productId: 7, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 105.0, depositAmount: 52.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1387, customerId: 10, productId: 8, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 110.0, depositAmount: 55, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1388, customerId: 11, productId: 1, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 75.0, depositAmount: 37.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1389, customerId: 12, productId: 2, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 80.0, depositAmount: 40, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1390, customerId: 13, productId: 3, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 85.0, depositAmount: 42.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1391, customerId: 14, productId: 4, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 90.0, depositAmount: 45, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    { id: 1392, customerId: 15, productId: 5, orderDate: "2025-11-24", pickupDate: "2025-11-24", pickupTime: "09:00:00", totalPrice: 95.0, depositAmount: 47.5, paymentMethod: "MasterCard", salesStaffId: 103, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom" },    
    ],


    customers : [
        {id: 1, name: "Sarah Johnson"},
        {id: 2, name: "Michael Chen"},
        {id: 3, name: "Emily Rodriguez"},
        {id: 4, name: "David Kim"},
        {id: 5, name: "Jessica Martinez"},
        {id: 6, name: "Robert Williams"},
        {id: 7, name: "Amanda Brown"},
        {id: 8, name: "Christopher Davis"},
        {id: 9, name: "Jennifer Wilson"},
        {id: 10, name: "Matthew Taylor"},
        {id: 11, name: "Ashley Anderson"},
        {id: 12, name: "Joshua Thomas"},
        {id: 13, name: "Stephanie Jackson"},
        {id: 14, name: "Andrew White"},
        {id: 15, name: "Nicole Harris"},
        {id: 16, name: "Daniel Martin"},
        {id: 17, name: "Elizabeth Thompson"},
        {id: 18, name: "James Garcia"},
        {id: 19, name: "Megan Martinez"},
        {id: 20, name: "Ryan Robinson"},
        {id: 21, name: "Lauren Clark"},
        {id: 22, name: "Kevin Lewis"},
        {id: 23, name: "Samantha Lee"},
        {id: 24, name: "Brandon Walker"},
        {id: 25, name: "Rachel Hall"},
        {id: 26, name: "Justin Allen"},
        {id: 27, name: "Brittany Young"},
        {id: 28, name: "Tyler King"},
        {id: 29, name: "Kayla Wright"},
        {id: 30, name: "Nicholas Scott"}
    ],

    metrics: {
        today: {
            lastOrderTime: "2:45 PM",
            longestInProduction: "3.5 hrs",
            avgCompletionTime: "2.1 hrs"
        },
        weekly: {
            percentChange: 12,
            revenueByDay: [1850, 2100, 1920, 2450, 2680, 3200, 0],
            ordersByStatus: [8, 12, 6, 4, 15],
            topProducts: [18, 0, 0, 14, 0, 12, 0, 10, 0, 8]
        }
    },

    getRecentOrders: function(limit) {
        const statusNames = {1: 'Confirmed', 2: 'Baking', 3: 'Decorating', 4: 'Ready', 5: 'Picked Up', 6: 'Cancelled'};
        return this.orders.slice(0, limit).map(order => ({
            id: order.id,
            customer: this.customers.find(c => c.id === order.customerId)?.name || 'Unknown',
            status: statusNames[order.statusId] || 'Unknown',
            statusId: order.statusId,
            total: order.totalPrice
        }));
    },

    getCustomerName: function(customerId) {
        const customer = this.customers.find(c => c.id === customerId);
        return customer ? customer.name : 'Unknown Customer';
    },

    getProductName: function(productId) {
        const products = {
            1: 'Chocolate Layer Cake',
            2: 'Vanilla Bean Cake',
            3: 'Red Velvet Cake',
            4: 'Lemon Doberge',
            5: 'Carrot Cake',
            6: 'Strawberry Shortcake',
            7: 'German Chocolate',
            8: 'Tiramisu Cake'
        };
        return products[productId] || 'Custom Cake';
    },

    getStatusDescription: function(statusId) {
        const statuses = {
            1: 'Confirmed',
            2: 'Baking',
            3: 'Decorating',
            4: 'Ready for Pickup',
            5: 'Picked Up',
            6: 'Cancelled'
        };
        return statuses[statusId] || 'Unknown';
    },

    formatTime: function(timeStr) {
        if (!timeStr) return 'TBD';
        const [hours, minutes] = timeStr.split(':');
        const h = parseInt(hours);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const hour12 = h % 12 || 12;
        return `${hour12}:${minutes} ${ampm}`;
    }
};