import os from 'os';

/**
 * Automatically detects and returns the host computer's active local IPv4 address
 * (e.g., 192.168.1.X or 10.0.0.X). This is required so other computers on the LAN
 * know where to connect.
 * 
 * @returns The IPv4 string, or localhost fallback if not connected to a network.
 */
export const getLocalIPAddress = (): string => {
  const interfaces = os.networkInterfaces();
  
  for (const interfaceName in interfaces) {
    const ifaceList = interfaces[interfaceName];
    if (!ifaceList) continue;
    
    for (let i = 0; i < ifaceList.length; i++) {
      const alias = ifaceList[i];
      // Skip over internal loopback (127.0.0.1) and non-ipv4 addresses
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  
  return '127.0.0.1'; // Fallback
};
