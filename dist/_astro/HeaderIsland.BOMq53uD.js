import{j as c}from"./jsx-runtime.BJTeMHoC.js";import{r as n}from"./index.CbttJwvd.js";import{h as U}from"./about.6538de7e.CN_R60N-.js";import{L as k}from"./Logo.CWBKUq6e.js";import{S as G}from"./StarField.Cu0z_QKo.js";const F=n.createContext(void 0),D=({children:i})=>{const[a,u]=n.useState("pink"),l=f=>{u(f),sessionStorage.setItem("colorTheme",f)};return c.jsx(F.Provider,{value:{theme:a,setTheme:l},children:i})},W=()=>{const i=n.useContext(F);if(!i)throw new Error("useTheme must be used within a ThemeProvider");return i},Y=({children:i,height:a="100%",width:u="100%",fallbackImage:l="https://example.com/fallback-bg.jpg",fallbackColor:f="#151515",color:C="pink"})=>{const[E,m]=n.useState(!1),d=n.useRef(null),v=n.useRef(null),x=n.useRef(null),h=n.useRef(null),_=n.useRef(null),S=n.useRef(null),y=n.useRef(null),w=n.useRef(null),b=n.useRef(null),p=n.useRef(null),A=n.useRef({x:.5,y:.5}),I={pink:"normalize(vec3(0.992, 0.227, 0.733))",sky:"normalize(vec3(0.302, 0.898, 0.976));",yellow:"normalize(vec3(0.980, 0.882, 0.314))"},B=`
    precision mediump float;
    varying vec2 vUv;
    attribute vec2 a_position;
    void main() {
        vUv = .5 * (a_position + 1.);
        gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `,H=`
    precision mediump float;
    varying vec2 vUv;
    uniform float u_time;
    uniform float u_ratio;
    uniform vec2 u_pointer_position;
    uniform float u_scroll_progress;
    vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
    }
    float neuro_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.);
        vec2 res = vec2(0.);
        float scale = 8.;
        for (int j = 0; j < 15; j++) {
            uv = rotate(uv, 1.);
            sine_acc = rotate(sine_acc, 1.);
            vec2 layer = uv * scale + float(j) + sine_acc - t;
            sine_acc += sin(layer) + 2.4 * p;
            res += (.5 + .5 * cos(layer)) / scale;
            scale *= (1.2);
        }
        return res.x + res.y;
    }
    void main() {
        vec2 uv = .5 * vUv;
        uv.x *= u_ratio;
        vec2 pointer = vUv - u_pointer_position;
        pointer.x *= u_ratio;
        float p = clamp(length(pointer), 0., 1.);
        p = .5 * pow(1. - p, 2.);
        float t = .001 * u_time;
        vec3 color = vec3(0.);
        float noise = neuro_shape(uv, t, p);
        noise = 1.2 * pow(noise, 3.); // Decreased multiplier for less color intensity
        noise += pow(noise, 8.); // Slightly reduced the exponent to soften effect
        noise = max(.0, noise - .4); // Increased threshold to reduce color area
        noise *= (1. - length(vUv - .5));
        color = ${I[C]}; // #FD3ABB
        color = color * noise;
        gl_FragColor = vec4(color, noise);
    }
  `,L=(t,e,r)=>{const o=t.createShader(e);return t.shaderSource(o,r),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(console.error("An error occurred compiling the shaders: "+t.getShaderInfoLog(o)),t.deleteShader(o),null)},N=()=>{const t=d.current,e=t.getContext("webgl")||t.getContext("experimental-webgl");if(!e)return console.error("WebGL not supported"),m(!0),!1;h.current=e;const r=L(e,e.VERTEX_SHADER,B);if(!r)return m(!0),!1;const o=L(e,e.FRAGMENT_SHADER,H);if(!o)return m(!0),!1;const s=e.createProgram();if(e.attachShader(s,r),e.attachShader(s,o),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS))return console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(s)),m(!0),!1;_.current=s;const R=new Float32Array([-1,-1,1,-1,-1,1,1,1]),j=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,j),e.bufferData(e.ARRAY_BUFFER,R,e.STATIC_DRAW),S.current=e.getAttribLocation(s,"a_position"),y.current=e.getUniformLocation(s,"u_time"),w.current=e.getUniformLocation(s,"u_ratio"),b.current=e.getUniformLocation(s,"u_pointer_position"),p.current=e.getUniformLocation(s,"u_scroll_progress"),e.useProgram(s),e.uniform1f(w.current,t.width/t.height),e.uniform2f(b.current,.5,.5),e.uniform1f(p.current,0),e.enableVertexAttribArray(S.current),e.bindBuffer(e.ARRAY_BUFFER,j),e.vertexAttribPointer(S.current,2,e.FLOAT,!1,0,0)},T=t=>{x.current||(x.current=t);const e=t-x.current,r=h.current,o=d.current,s=o.clientWidth,R=o.clientHeight;(o.width!==s||o.height!==R)&&(o.width=s,o.height=R,r.viewport(0,0,r.canvas.width,r.canvas.height),r.uniform1f(w.current,o.width/o.height)),r.useProgram(_.current),r.uniform1f(y.current,e),r.uniform2f(b.current,A.current.x,A.current.y),r.drawArrays(r.TRIANGLE_STRIP,0,4),v.current=requestAnimationFrame(T)},g=t=>{if(!d.current)return;const r=d.current.getBoundingClientRect(),o=(t.clientX-r.left)/r.width,s=(t.clientY-r.top)/r.height;A.current={x:o,y:s}},P=()=>{if(!p.current||!h.current)return;const t=window.pageYOffset||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-document.documentElement.clientHeight,r=t/e;h.current.useProgram(_.current),h.current.uniform1f(p.current,r)};n.useEffect(()=>{try{N()!==!1&&(v.current=requestAnimationFrame(T),window.addEventListener("mousemove",g),window.addEventListener("touchmove",e=>g(e.touches[0])),window.addEventListener("scroll",P))}catch(t){console.error("Error initializing WebGL:",t),m(!0)}return()=>{v.current&&cancelAnimationFrame(v.current),window.removeEventListener("mousemove",g),window.removeEventListener("touchmove",t=>g(t.touches[0])),window.removeEventListener("scroll",P)}},[]);const z=()=>{const t=f;return`linear-gradient(135deg, ${t}22 0%, ${t}55 50%, ${t}22 100%)`};return c.jsxs("div",{className:"neuro-background-container",style:{position:"relative",height:a,...E&&{backgroundImage:l?`url(${l})`:z(),backgroundSize:"cover",backgroundPosition:"center"}},children:[!E&&c.jsx("canvas",{ref:d,style:{width:u,height:a,position:"absolute",top:0,left:0,zIndex:0}}),c.jsx("div",{className:"neuro-content",style:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative",zIndex:1,height:a,width:u},children:i})]})},$="/images/background-pink.png",M=()=>{const{theme:i}=W(),[a,u]=n.useState(!1),[l,f]=n.useState(i);return n.useEffect(()=>{f(i)},[i]),a?c.jsx("div",{className:U,children:c.jsx(G,{position:"relative",iconColor:"#fd3abb",children:c.jsx(k,{center:!0,absolute:!0,handleClick:()=>u(!a)})})}):c.jsx("div",{className:U,children:c.jsx(Y,{height:"100%",fallbackImage:$,fallbackColor:"#FD3ABB",color:l,children:c.jsx(k,{center:!0,handleClick:()=>u(!a)})})})},J=()=>c.jsx(D,{children:c.jsx(M,{})});export{J as HeaderIsland};
