export function spinner(isOn = false, action) {
  switch (action.type) {
    case "SPINNER_ON":
      return true;
    case "SPINNER_OFF":
      return false;
    default:
      return isOn;
  }
}
export default spinner;
