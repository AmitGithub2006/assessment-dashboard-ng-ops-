export const menuItems = [
  { name: 'Dashboard', icon: 'LayoutDashboard', path: '/dashboard' },
  { name: 'Assets', icon: 'Package', path: '/assets' },
  { name: 'Components', icon: 'Component', path: '/components' },
  { name: 'Allocations', icon: 'Share2', path: '/allocations' },
  { name: 'Tickets', icon: 'Ticket', path: '/tickets' },
  { name: 'Consignments', icon: 'Archive', path: '/consignments' },
  { name: 'Reports', icon: 'FileText', path: '/reports' },
  { name: 'Settings', icon: 'Settings', path: '/settings' },
];

export const dashboardCards = [
  { id: 1, count: 792, label: 'Active', icon: 'CheckCircle2', bgColor: 'bg-green-100' },
  { id: 2, count: 278, label: 'In Storage', icon: 'Archive', bgColor: 'bg-blue-100' },
  { id: 3, count: 321, label: 'Needs Repair', icon: 'Settings', bgColor: 'bg-gray-800' },
  { id: 4, count: 22, label: 'In Repair', icon: 'Wrench', bgColor: 'bg-gray-400' },
];

export const locationWiseAssetsData = [
  ['Location', 'Count'],
  ['Campus', 1422],
  ['Remote', 64],
];

export const assetsPerCampusData = [
  ['Campus', 'Active', 'Decommission', 'In Repair', 'In Storage', 'Needs Repair'],
  ['Amaravati', 75, 0, 10, 15, 0],
  ['Dantewada', 65, 20, 5, 60, 0],
  ['Dharamshala', 45, 60, 10, 15, 0],
  ['Himachal Pradesh', 0, 0, 0, 0, 0],
  ['Jabalpur', 90, 0, 10, 45, 0],
  ['Kishangarh', 10, 0, 0, 5, 0],
  ['Pune', 110, 0, 20, 70, 0],
  ['Raipur', 130, 0, 5, 65, 0],
  ['Satlapur', 75, 0, 15, 240, 0],
  ['Udaipur', 175, 0, 0, 25, 0],
];

export const assetsTableData = [
  { id: 1, assetId: 'AST-001', name: 'Dell Laptop', category: 'Computer', status: 'Active', location: 'Campus', assignedTo: 'John Doe', purchaseDate: '2023-01-15' },
  { id: 2, assetId: 'AST-002', name: 'HP Monitor', category: 'Display', status: 'Active', location: 'Campus', assignedTo: 'Jane Smith', purchaseDate: '2023-02-20' },
  { id: 3, assetId: 'AST-003', name: 'Logitech Mouse', category: 'Peripheral', status: 'In Storage', location: 'Remote', assignedTo: 'Unassigned', purchaseDate: '2023-03-10' },
  { id: 4, assetId: 'AST-004', name: 'MacBook Pro', category: 'Computer', status: 'Active', location: 'Campus', assignedTo: 'Robert Brown', purchaseDate: '2023-01-25' },
  { id: 5, assetId: 'AST-005', name: 'Samsung Printer', category: 'Printer', status: 'Needs Repair', location: 'Campus', assignedTo: 'Unassigned', purchaseDate: '2022-11-05' },
  { id: 6, assetId: 'AST-006', name: 'iPad Pro', category: 'Tablet', status: 'Active', location: 'Remote', assignedTo: 'Sarah Wilson', purchaseDate: '2023-04-12' },
  { id: 7, assetId: 'AST-007', name: 'Wireless Keyboard', category: 'Peripheral', status: 'In Repair', location: 'Campus', assignedTo: 'Unassigned', purchaseDate: '2023-02-28' },
  { id: 8, assetId: 'AST-008', name: 'Canon Camera', category: 'Camera', status: 'Active', location: 'Campus', assignedTo: 'Michael Davis', purchaseDate: '2023-05-01' },
  { id: 9, assetId: 'AST-009', name: 'Projector', category: 'Display', status: 'In Storage', location: 'Campus', assignedTo: 'Unassigned', purchaseDate: '2022-12-15' },
  { id: 10, assetId: 'AST-010', name: 'Dell Desktop', category: 'Computer', status: 'Active', location: 'Campus', assignedTo: 'Emily Johnson', purchaseDate: '2023-03-20' },
];

export const ticketsTableData = [
  { id: 1, ticketId: 'TKT-SARJ-251119-R-001', type: 'Repair', sla: '02h', slaStatus: 'critical', status: 'IN PROGRESS' },
  { id: 2, ticketId: 'TKT-PUNE-251119-C-002', type: 'Change', sla: '11h', slaStatus: 'normal', status: 'ESCALATED' },
  { id: 3, ticketId: 'TKT-HIMA-241119-D-001', type: 'Dispute', sla: '19h', slaStatus: 'normal', status: 'OPEN' },
  { id: 4, ticketId: 'TKT-JASH-231119-N-004', type: 'New', sla: '28h', slaStatus: 'normal', status: 'PENDING APPROVAL' },
  { id: 5, ticketId: 'TKT-DANT-221119-R-005', type: 'Repair', sla: '05h', slaStatus: 'warning', status: 'IN PROGRESS' },
  { id: 6, ticketId: 'TKT-UDAI-201119-C-006', type: 'Change', sla: '15h', slaStatus: 'normal', status: 'OPEN' },
  { id: 7, ticketId: 'TKT-RAIP-191119-D-007', type: 'Dispute', sla: '32h', slaStatus: 'normal', status: 'PENDING APPROVAL' },
  { id: 8, ticketId: 'TKT-AMAR-181119-N-008', type: 'New', sla: '01h', slaStatus: 'critical', status: 'ESCALATED' },
  { id: 9, ticketId: 'TKT-JABA-171119-R-009', type: 'Repair', sla: '08h', slaStatus: 'warning', status: 'IN PROGRESS' },
  { id: 10, ticketId: 'TKT-DHAR-161119-C-010', type: 'Change', sla: '24h', slaStatus: 'normal', status: 'OPEN' },
];

export const assetsPageData = [
  { id: 1, assetTag: 'NG-SARJ-L-0315', type: 'Laptop', campus: 'Sarjapura', status: 'Repair', location: 'Vendor: TechCare', actions: 'View' },
  { id: 2, assetTag: 'NG-PUNE-L-0210', type: 'Laptop', campus: 'Pune', status: 'Allocated', location: 'Student: Meena', actions: 'View' },
  { id: 3, assetTag: 'NG-HIMA-L-0144', type: 'Laptop', campus: 'Himachal', status: 'In Stock', location: 'Store Room', actions: 'Assign' },
  { id: 4, assetTag: 'NG-DANT-L-0029', type: 'Laptop', campus: 'Dantewada', status: 'Scrap', location: 'Scrap Room', actions: 'Details' },
  { id: 5, assetTag: 'NG-JABA-L-0421', type: 'Laptop', campus: 'Jabalpur', status: 'Allocated', location: 'Student: Rahul', actions: 'View' },
  { id: 6, assetTag: 'NG-UDAI-L-0156', type: 'Laptop', campus: 'Udaipur', status: 'In Stock', location: 'Store Room', actions: 'Assign' },
  { id: 7, assetTag: 'NG-RAIP-L-0087', type: 'Laptop', campus: 'Raipur', status: 'Repair', location: 'Vendor: FixIT', actions: 'View' },
  { id: 8, assetTag: 'NG-AMAR-L-0298', type: 'Laptop', campus: 'Amaravati', status: 'Allocated', location: 'Student: Priya', actions: 'View' },
  { id: 9, assetTag: 'NG-DHAR-L-0112', type: 'Laptop', campus: 'Dharamshala', status: 'In Stock', location: 'Store Room', actions: 'Assign' },
  { id: 10, assetTag: 'NG-KISH-L-0045', type: 'Laptop', campus: 'Kishangarh', status: 'Scrap', location: 'Scrap Room', actions: 'Details' },
];
