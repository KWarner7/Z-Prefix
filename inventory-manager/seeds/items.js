/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('inventory').del()
  await knex('inventory').insert([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Desktop computer' },
    { id: 3, name: 'Monitor' },
    { id: 4, name: 'Keyboard' },
    { id: 5, name: 'Mouse' },
    { id: 6, name: 'External hard drive' },
    { id: 7, name: 'USB flash drive' },
    { id: 8, name: 'Printer' },
    { id: 9, name: 'Router' },
    { id: 10, name: 'Modem' },
    { id: 11, name: 'Ethernet cable' },
    { id: 12, name: 'Wireless access point' },
    { id: 13, name: 'Laptop bag' },
    { id: 14, name: 'Surge protector' },
    { id: 15, name: 'Server rack' },
    { id: 16, name: 'Server' },
    { id: 17, name: 'Network switch' },
    { id: 18, name: 'Firewall' },
    { id: 19, name: 'UPS (Uninterruptible Power Supply)' },
    { id: 20, name: 'Docking station' },
    { id: 21, name: 'Webcam' },
    { id: 22, name: 'Microphone' },
    { id: 23, name: 'Headset' },
    { id: 24, name: 'SSD (Solid State Drive)' },
    { id: 25, name: 'HDD (Hard Disk Drive)' },
    { id: 26, name: 'RAM (Random Access Memory)' },
    { id: 27, name: 'CPU (Central Processing Unit)' },
    { id: 28, name: 'GPU (Graphics Processing Unit)' },
    { id: 29, name: 'Motherboard' },
    { id: 30, name: 'Power supply unit (PSU)' },
    { id: 31, name: 'Network cable tester' },
    { id: 32, name: 'Cable management kit' },
    { id: 33, name: 'Cooling fan' },
    { id: 34, name: 'Thermal paste' },
    { id: 35, name: 'Computer case' },
    { id: 36, name: 'Network card' },
    { id: 37, name: 'Sound card' },
    { id: 38, name: 'Graphics card' },
    { id: 39, name: 'Wireless keyboard and mouse' },
    { id: 40, name: 'Ethernet switch' },
    { id: 41, name: 'NAS (Network Attached Storage)' },
    { id: 42, name: 'External SSD' },
    { id: 43, name: 'Cloud storage subscription' },
    { id: 44, name: 'VPN service' },
    { id: 45, name: 'Webcam cover' },
    { id: 46, name: 'Cleaning kit for electronics' },
    { id: 47, name: 'Antivirus software' },
    { id: 48, name: 'Operating system (e.g., Windows, macOS, Linux)' },
    { id: 49, name: 'Virtual machine software (e.g., VMware)' },
    { id: 50, name: 'Programming IDE (e.g., Visual Studio, PyCharm)' },
    { id: 51, name: 'Version control software (e.g., Git)' },
    { id: 52, name: 'Office productivity software (e.g., Microsoft Office)' },
    { id: 53, name: 'Web browser (e.g., Google Chrome, Mozilla Firefox)' },
    { id: 54, name: 'Email client (e.g., Microsoft Outlook)' },
    { id: 55, name: 'Cloud computing platform (e.g., AWS, Azure)' },
    { id: 56, name: 'Web hosting service' },
    { id: 57, name: 'Domain name registration' },
    { id: 58, name: 'Mobile device (e.g., smartphone or tablet)' },
    { id: 59, name: 'Mobile operating system (e.g., iOS, Android)' },
    { id: 60, name: 'Mobile app development tools (e.g., Android Studio)' },
    { id: 61, name: 'Wearable technology (e.g., smartwatches)' },
    { id: 62, name: '3D printer' },
    { id: 63, name: 'Barcode scanner' },
    { id: 64, name: 'POS (Point of Sale) system' },
    { id: 65, name: 'RFID reader' },
    { id: 66, name: 'Projector' },
    { id: 67, name: 'Interactive whiteboard' },
    { id: 68, name: 'KVM switch (Keyboard, Video, Mouse)' },
    { id: 69, name: 'Network-attached printer' },
    { id: 70, name: 'Bluetooth adapter' },
    { id: 71, name: 'External CD/DVD drive' },
    { id: 72, name: 'Network-attached storage (NAS)' },
    { id: 73, name: 'IT toolset (screwdrivers, pliers, etc.)' },
    { id: 74, name: 'Rack mount kit' },
    { id: 75, name: 'Fiber optic cable' },
    { id: 76, name: 'Patch panel' },
    { id: 77, name: 'VoIP phone' },
    { id: 78, name: 'VoIP PBX (Private Branch Exchange)' },
    { id: 79, name: 'Network monitoring software' },
    { id: 80, name: 'Server backup solution' },
    { id: 81, name: 'Virtual private server (VPS) hosting' },
    { id: 82, name: 'Video conferencing equipment' },
    { id: 83, name: 'Datacenter rack' },
    { id: 84, name: 'IT certification study materials' },
    { id: 85, name: 'Network diagram software' },
    { id: 86, name: 'Server cabinet' },
    { id: 87, name: 'IT security hardware (firewall appliances)' },
    { id: 88, name: 'Network-attached video surveillance system' },
    { id: 89, name: 'VPN router' },
    { id: 90, name: 'Wireless range extender' },
    { id: 91, name: 'Network-attached UPS' },
    { id: 92, name: 'Network-attached time clock' },
    { id: 93, name: 'IT asset management software' },
    { id: 94, name: 'Network-attached barcode printer' },
    { id: 95, name: 'Wireless presenter remote' },
  ]);
};