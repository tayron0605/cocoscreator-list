System.register([],(function(a,e){"use strict";return{execute:async function(){a("w",o);var t=new URL("assets/ammo.wasm-2f572f72.wasm",e.meta.url).href;let n,s=!1;"undefined"==typeof WebAssembly?n=await e.import("./ammo-f0bdd709.js"):(n=await e.import("./ammo.wasm-baa9669a.js"),s=!0);var m,i=n.default,r=a("A",{});function o(a){var e={};return void 0!==a&&(r.wasmBinary=a),new Promise((function(a){i.call(e,r).then((function(){a()}))}))}(m=o||(o=a("w",{}))).isWasm=s,m.wasmBinaryURL=t}}}));
