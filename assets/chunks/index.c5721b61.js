const l=n=>{if(!/^\#?[0-9A-Fa-f]{6}$/.test(n))throw new Error(`Fighting Design - useColor: ${n} is not a valid hex color number`);const o=()=>{const r=n.replace("#","").match(/../g);for(let t=0;t<r.length;t++)r[t]=parseInt(r[t],16).toString();return r},g=(...r)=>{const t=[...r];for(let e=0;e<t.length;e++)t[e].length===1&&(t[e]="0"+t[e]);return"#"+t.join("")};return{getDark:(r=0)=>{const t=o();for(let e=0;e<t.length;e++)t[e]=Math.floor(Number(t[e])*(1-r)).toString(16);return g(...t)},getLight:(r=0)=>{const t=o();for(let e=0;e<t.length;e++)t[e]=Math.floor((255-Number(t[e]))*r+Number(t[e])).toString(16);return g(...t)}}};export{l as c};
