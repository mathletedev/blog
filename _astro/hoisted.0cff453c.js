import"./hoisted.b029770e.js";const a="ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890",i=window.innerWidth<768?16:24,c=.75*i,w=50,u=.2,x=.05,M=.9,p=.5,h=document.querySelector("canvas"),o=h.getContext("2d");h.width=window.innerWidth;h.height=window.innerHeight;let m=h.width/1920;window.onresize=()=>{h.width=window.innerWidth,h.height=window.innerHeight,m=h.width/2500};let g=0,s={x:-1e3,y:-1e3,acc:0};document.onmousemove=e=>{s.x=e.clientX,s.y=e.clientY,s.acc+=e.movementX*e.movementX+e.movementY*e.movementY};class A{chars=[];length;speed;x;glitches=[];error;constructor(t){this.length=Math.floor(Math.random()*40)+4,this.speed=Math.floor(Math.random()*2)+1,this.x=t;for(let n=0;n<h.height/i;n++)Math.random()<u&&this.glitches.push(n);this.error=Math.random()<x}update(){if(g%this.speed===0&&(this.chars.push(a[Math.floor(Math.random()*a.length)]),this.chars.length>=this.length&&(this.chars[this.chars.length-this.length]=" ")),this.chars.length-this.length>h.height/i)return!0;o.font=`${i}px Kosugi Maru`;for(let t=0;t<this.chars.length;t++){this.glitches.includes(t)&&this.chars[t]!==" "&&(this.chars[t]=a[Math.floor(Math.random()*a.length)]);let n=this.x+c/2,l=t*i-i/2;this.chars[t]!==" "&&(o.fillStyle="#1e1e2e",o.fillRect(this.x,t*i,c,i)),o.fillStyle=(n-s.x)*(n-s.x)+(l-s.y)*(l-s.y)<s.acc*p?"#fab387":this.error?t===this.chars.length-1?"#f38ba8":"#eba0ac":t===this.chars.length-1?"#6c7086":"#313244",o.fillText(this.chars[t],this.x,t*i)}}}const r=[];let d=Date.now();const f=()=>{if(requestAnimationFrame(f),Date.now()>d+w){s.acc*=M,Math.random()<m&&r.push(new A(Math.floor(Math.random()*h.width/c)*c)),o.clearRect(0,0,h.width,h.height);for(let e=0;e<r.length;e++)r[e].update()&&(r.splice(e,1),e--);g++,d=Date.now()}};setTimeout(()=>{requestAnimationFrame(f)},1500);console.log("test");
