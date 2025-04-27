export function getEmailFromToken(token) {
  if (!token) return null;

  try {
    const payloadBase64 = token.split('.')[1]; // lấy phần payload của JWT
    const decodedPayload = JSON.parse(atob(payloadBase64));
    return decodedPayload.email || null;
  } catch (error) {
    console.error('Invalid token format or decoding error:', error);
    return null;
  }
}
export function getRoleFromToken(token) {
  if (!token) return null;

  try {
    const payloadBase64 = token.split('.')[1]; // lấy phần payload của JWT
    const decodedPayload = JSON.parse(atob(payloadBase64));
    return decodedPayload.roles[0] || null;
  } catch (error) {
    console.error('Invalid token format or decoding error:', error);
    return null;
  }
}
