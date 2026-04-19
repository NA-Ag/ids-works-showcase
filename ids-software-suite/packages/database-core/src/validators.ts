// Offline Validations for Mexican bureaucratic documents

/**
 * Validates a CURP structurally (18 characters)
 * Does not strictly validate the check digit, but ensures the format is 100% correct
 * to prevent simple typos ("doble captura" errors).
 */
export const isValidCURP = (curp: string): boolean => {
  const curpRegex = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/;
  return curpRegex.test(curp.toUpperCase());
};

/**
 * Validates an RFC for individuals (13 chars) or companies (12 chars).
 */
export const isValidRFC = (rfc: string): boolean => {
  const rfcRegex = /^([A-ZÑ&]{3,4})\d{6}([A-Z0-9]{3})$/;
  return rfcRegex.test(rfc.toUpperCase());
};

/**
 * Normalizes a string to uppercase and removes trailing/leading spaces.
 * Useful before saving CURP or RFC to the database.
 */
export const normalizeDocument = (doc: string): string => {
  return doc.trim().toUpperCase();
};
