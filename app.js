
import { onlyjs } from "./onlyjs/only.js";
import { create } from "./onlyjs/create.js";
import { render } from "./onlyjs/render.js";
import { select } from "./onlyjs/select.js";
import { resetStyles } from "./onlyjs/resetStyles.js";

onlyjs(main);
function main() {
  resetStyles();
  matrixBg();
  h1();
 }

function h1() {
  const header_att= {
    type: 'h1',
  };

  const header_style ={
    textAlign: 'center',
    border: '1px solid black',
    padding: '11px 0px',
  };

  const header = create(header_att, header_style);
  render(this, 'inside', header);
}


