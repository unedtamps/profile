import{a as o}from"./aos.esm.D-obY-NQ.js";/* empty css                       */o.init({});const e=document.getElementById("gradient-follower");e&&(e.style.background=`
        radial-gradient(
          600px circle at var(--x) var(--y), 
          #1d4ed81A,  
          #1d4ed800 80% 
        )
      `,window.addEventListener("mousemove",t=>{(e.style.opacity===""||e.style.opacity==="0")&&(e.style.opacity="1"),e.style.setProperty("--x",`${t.clientX}px`),e.style.setProperty("--y",`${t.clientY}px`)}));
