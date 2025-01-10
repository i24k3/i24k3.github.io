
import { onlyjs } from "./onlyjs/only.js";
import { create } from "./onlyjs/create.js";
import { render } from "./onlyjs/render.js";
import { select } from "./onlyjs/select.js";
import { resetStyles } from "./onlyjs/resetStyles.js";

onlyjs(main);
function main() {
  resetStyles();
  h1();
 }

function h1() {
  const header_att= {
    type: 'h1',
  };
   const h2_attr = {
    type: 'h2',
  };

  const header_style ={
    textAlign: 'center',
    border: '1px solid black',
  };

  const header = create(header_att, header_style);
  const h2 = create(h2_attr);
  render(this, 'inside', header);
  render(this, 'inside', h2);
}

