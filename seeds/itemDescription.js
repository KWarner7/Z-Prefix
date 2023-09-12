/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE item_description CASCADE')
  await knex('item_description').del()
  await knex('item_description').insert([
    { id: 1, name: 'A portable computer with built-in screen and keyboard.' },
    { id: 2, name: 'A stationary computer system with a separate monitor, keyboard, and mouse.' },
    { id: 3, name: 'A display screen for visual output from a computer or other electronic device.' },
    { id: 4, name: 'A hardware input device used to type text and commands into a computer.' },
    { id: 5, name: 'A pointing device that allows users to interact with a computers graphical user interface.' },
    { id: 6, name:  'A portable storage device connected to a computer via USB or other interfaces.' },
    { id: 7, name: 'A small, portable data storage device that connects to a computers USB port.' },
    { id: 8, name: 'A device that produces physical copies of digital documents or images.' },
    { id: 9, name: 'A networking device that directs data packets between computer networks.' },
    { id: 10, name: 'A device that connects a computer to the internet or other data networks.' },
    { id: 11, name: 'A type of cable used to connect computers and network devices in a wired network.' },
    { id: 12, name: 'A device that allows Wi-Fi-enabled devices to connect to a wired network.' },
    { id: 13, name: 'A carrying bag designed to protect and transport a laptop computer.' },
    { id: 14, name: 'A device that protects electronic devices from power surges and voltage spikes.' },
    { id: 15, name: 'A cabinet or enclosure used to house and organize computer servers and equipment.' },
    { id: 16, name: 'A computer or software system that provides services, resources, or data to other computers, known as clients.' },
    { id: 17, name: 'A networking device that connects devices within a local area network (LAN) and forwards data packets between them.' },
    { id: 18, name: 'A security device or software that monitors and controls incoming and outgoing network traffic to protect against unauthorized access and threats.' },
    { id: 19, name: 'A power backup device that provides emergency power to connected equipment in case of electrical power failures.' },
    { id: 20, name: 'A device that allows a laptop to be connected to additional peripherals and external displays.' },
    { id: 21, name: 'A video camera that captures and streams video over the internet for video conferencing and other applications.' },
    { id: 22, name: 'A device that converts sound waves into electrical signals for recording or voice communication.' },
    { id: 23, name: 'A combination of headphones and a microphone worn on the head for audio communication and listening.' },
    { id: 24, name: 'A storage device that uses NAND-based flash memory to store data, providing faster data access compared to traditional HDDs.' },
    { id: 25, name: 'A data storage device that uses spinning disks to store data.' },
    { id: 26, name: 'A type of computer memory that allows data to be read and written quickly, used for running applications and storing data temporarily.' },
    { id: 27, name: 'The primary component of a computer that executes instructions and performs calculations for software programs.' },
    { id: 28, name: 'A specialized processor designed to accelerate graphics rendering and video processing tasks.' },
    { id: 29, name: 'The main circuit board of a computer that houses the CPU, RAM, and other essential components.' },
    { id: 30, name: 'A component that provides electrical power to a computer or other electronic devices.' },
    { id: 31, name: 'A tool used to check the integrity and connectivity of Ethernet and other network cables.' },
    { id: 32, name: 'Tools and accessories used to organize and secure cables in a tidy manner.' },
    { id: 33, name: 'A component or device used to dissipate heat from computer hardware components to prevent overheating.' },
    { id: 34, name: 'A heat-conductive compound used to improve the thermal connection between a CPU or GPU and its heat sink.' },
    { id: 35, name: 'An enclosure that houses and protects the internal components of a computer.' },
    { id: 36, name: 'A hardware component or expansion card that enables a computer to connect to a network.' },
    { id: 37, name: 'An expansion card that provides audio input and output capabilities to a computer.' },
    { id: 38, name: 'An expansion card that handles graphical rendering and video output for a computer.' },
    { id: 39, name: 'Input devices that connect to a computer wirelessly, offering greater mobility and flexibility.' },
    { id: 40, name: 'A networking device that connects multiple devices in a LAN and forwards data based on MAC addresses.' },
    { id: 41, name: 'A specialized file storage device that is connected to a network and provides centralized data storage and access.' },
    { id: 42, name: 'A portable solid-state drive that provides fast and reliable storage for backup or data transfer.' },
    { id: 43, name: 'A service that offers online storage space for storing and accessing files and data over the internet.' },
    { id: 44, name: 'A service that enables secure and private internet browsing and data transfer by encrypting network connections.' },
    { id: 45, name: 'A physical cover or shutter for a webcam to ensure privacy by blocking the camera when not in use.' },
    { id: 46, name: 'Tools and cleaning solutions designed to safely clean and maintain electronic devices and screens.' },
    { id: 47, name: 'Software designed to detect, prevent, and remove malware and viruses from a computer.' },
    { id: 48, name: 'Software that manages hardware resources and provides user interfaces for running applications.' },
    { id: 49, name: 'Software that enables the creation and management of virtualized operating systems and applications on a single physical host.' },
    { id: 50, name: 'Integrated Development Environments used by programmers to write, test, and debug code.' },
    { id: 51, name: 'Software tools that manage changes to source code and help track revisions made by multiple contributors.' },
    { id: 52, name: 'Software suites that include applications for word processing, spreadsheets, presentations, and more.' },
    { id: 53, name: 'Software used to access and browse the World Wide Web and view web pages.' },
    { id: 54, name: 'Software for managing and sending email messages.' },
    { id: 55, name: 'A service that provides scalable and on-demand cloud computing resources and infrastructure.' },
    { id: 56, name: 'A service that provides storage and access to websites and web applications on the internet.' },
    { id: 57, name: 'The process of registering and acquiring internet domain names for websites and online services.' },
    { id: 58, name: 'Portable computing devices designed for communication, productivity, and entertainment.' },
    { id: 59, name: 'The software that runs on mobile devices, managing hardware resources and providing a user interface.' },
    { id: 60, name:  'Software and tools used by developers to create mobile applications for smartphones and tablets.' },
    { id: 61, name: 'Devices that can be worn on the body, often providing features like health monitoring and notifications.' },
    { id: 62, name: 'A device that creates three-dimensional objects by layering material according to a digital design.' },
    { id: 63, name: 'A device that reads and decodes barcode information for inventory tracking and data entry.' },
    { id: 64, name: 'A system used in retail and hospitality for processing sales transactions and managing inventory.' },
    { id: 65, name: 'A device that reads radio frequency identification (RFID) tags for tracking and managing assets and inventory.' },
    { id: 66, name: 'An output device that displays images or video on a screen or surface for presentations and entertainment.' },
    { id: 67, name: 'A large interactive display used in education and business for presentations and collaborative work.' },
    { id: 68, name: 'A hardware device that allows users to control multiple computers with a single keyboard, video monitor, and mouse.' },
    { id: 69, name: 'A printer that is connected to a network and can be accessed by multiple users.' },
    { id: 70, name: 'A device that adds Bluetooth connectivity to a computer or other devices that lack built-in Bluetooth.' },
    { id: 71, name: 'A portable optical drive for reading and writing CDs and DVDs.' },
    { id: 72, name: 'A storage device that connects to a network and provides centralized data storage and access.' },
    { id: 73, name: 'A set of tools used by IT professionals for equipment maintenance and repairs.' },
    { id: 74, name: 'Hardware used to mount servers and other equipment in a server rack.' },
    { id: 75, name: 'A high-speed data transmission cable that uses light signals to transmit data over long distances.' },
    { id: 76, name: 'A device used in networking to connect and manage the incoming and outgoing cables in a structured cabling system.' },
    { id: 77, name: 'A telephone that uses Voice over Internet Protocol (VoIP) technology for making calls over the internet.' },
    { id: 78, name: 'A private telephone system used within an organization that operates over a VoIP network.' },
    { id: 79, name: 'Software that tracks and analyzes network performance and traffic for troubleshooting and optimization.' },
    { id: 80, name: 'Software and tools used to back up and recover data on servers to prevent data loss.' },
    { id: 81, name: 'A hosting service that offers virtualized server resources within a shared physical server.' },
    { id: 82, name: 'Hardware and software used for conducting video meetings and conferences over the internet.' },
    { id: 83, name: 'A specialized rack used to house servers and networking equipment in a datacenter.' },
    { id: 84, name: 'Books, courses, and resources to prepare for IT certification exams.' },
    { id: 85, name: 'Software used to create visual representations of computer networks and topologies.' },
    { id: 86, name: 'An enclosure used to house servers and networking equipment, providing physical security and cooling.' },
    { id: 87, name: 'Hardware devices designed to protect computer networks from unauthorized access and cyber threats.' },
    { id: 88, name: 'A system that uses cameras to monitor and record video footage for security and surveillance purposes.' },
    { id: 89, name: 'A router with built-in VPN capabilities for secure and private internet access.' },
    { id: 90, name: 'A device that extends the coverage area of a Wi-Fi network by amplifying and rebroadcasting the signal.' },
    { id: 91, name: 'An uninterruptible power supply (UPS) that is connected to a network and can be monitored and managed remotely.' },
    { id: 92, name: 'A timekeeping device that is connected to a network for employee attendance tracking.' },
    { id: 93, name: 'Software used to track and manage an organizations hardware and software assets.' },
    { id: 94, name: 'A printer that creates barcode labels for inventory and asset tracking.' },
    { id: 95, name: 'A remote control device used for giving presentations, often with integrated laser pointers.' },

  ]);
};
