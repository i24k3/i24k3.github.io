
import { onlyjs, create, render, resetStyles, select, clear} from "./onlyjs/minifiedOnly.js";
export function header() {
  const h_a = {type: 'div', className: 'header'};
  const h_s = {
    backgroundColor: 'lightblue',
    height: '55px',
  };
  const hdr = create(h_a, h_s);
  render(this, 'inside', hdr);
  
}
