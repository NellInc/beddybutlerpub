// Bake the approved web skeleton to native, bottom-up normalized SpriteKit grids.
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.join(__dirname,'..');
for(const avatar of ['shy','insistent','zombie']){
 const element=()=>({value:'1',checked:false,getContext:()=>({})});
 const sandbox={location:{search:'?avatar='+avatar},URLSearchParams,document:{querySelector:element,getElementById:element},Image:class{},matchMedia:()=>({matches:true}),requestAnimationFrame(){},window:{}};
 vm.createContext(sandbox);
 for(const file of ['characters.js','rig.js'])vm.runInContext(fs.readFileSync(path.join(root,'Website/assets/avatar-rig',file),'utf8'),sandbox);
 const baked=vm.runInContext(`(()=>{const columns=48,rows=Math.ceil(H/20),frames=120,points=[];
 for(let y=0;y<=rows;y++)for(let x=0;x<=columns;x++){const p=[x/columns*W,(1-y/rows)*H];points.push({p,w:weights(p)})}
 const values=[];for(let f=0;f<frames;f++){const ms=pose(f/frames,1);for(const {p,w} of points){let x=0,y=0;for(let j=0;j<w.length;j++){const q=apply(ms[j],p);x+=w[j]*q[0];y+=w[j]*q[1]}values.push(x/W,1-y/H)}}
 return {columns,rows,frames,duration:config?.cycle||8,values}})()`,sandbox);
 const buffer=Buffer.alloc(16+baked.values.length*4);
 [baked.columns,baked.rows,baked.frames,baked.duration].forEach((n,i)=>buffer.writeFloatLE(n,i*4));
 baked.values.forEach((n,i)=>{if(!Number.isFinite(n))throw Error('Nonfinite mesh');buffer.writeFloatLE(n,16+i*4)});
 const dir=path.join(root,'Beddy Butler/Images.xcassets',avatar+'Motion.dataset');fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'motion.bin'),buffer);
 fs.writeFileSync(path.join(dir,'Contents.json'),JSON.stringify({data:[{filename:'motion.bin',idiom:'universal'}],info:{author:'xcode',version:1}},null,2)+'\n');
 console.log(avatar,buffer.length,'bytes');
}
