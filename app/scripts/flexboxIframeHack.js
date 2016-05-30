export default function fixWidth(el, sb) {
  for (let it = 0; it < el.length; it++) {
    if (el.length > 2) {
      sb[it].style.height = '50%';
    } else {
      sb[it].style.height = '100%';
    }
  }
}
