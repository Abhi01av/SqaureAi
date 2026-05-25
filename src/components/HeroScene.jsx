import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* ── Simplex 3D noise (GPU) for truly organic morphing ── */
const NOISE = `
vec3 mod289v3(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289v4(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute4(vec4 x){return mod289v4(((x*34.)+1.)*x);}
vec4 taylorInvSqrt4(vec4 r){return 1.79284291-0.85373472*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-.5;
  i=mod289v3(i);
  vec4 p=permute4(permute4(permute4(
    i.z+vec4(0.,i1.z,i2.z,1.))
   +i.y+vec4(0.,i1.y,i2.y,1.))
   +i.x+vec4(0.,i1.x,i2.x,1.));
  vec4 jj=p-49.*floor(p*(1./7.)*(1./7.));
  vec4 x_=floor(jj*(1./7.));
  vec4 y_=floor(jj-7.*x_);
  vec4 xx=x_*(1./7.)+.071428571-.5;
  vec4 yy=y_*(1./7.)+.071428571-.5;
  vec4 hh=1.-abs(xx)-abs(yy);
  vec4 b0=vec4(xx.xy,yy.xy);
  vec4 b1=vec4(xx.zw,yy.zw);
  vec4 s0=floor(b0)*2.+1.;
  vec4 s1=floor(b1)*2.+1.;
  vec4 sh=-step(hh,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,hh.x);
  vec3 p1=vec3(a0.zw,hh.y);
  vec3 p2=vec3(a1.xy,hh.z);
  vec3 p3=vec3(a1.zw,hh.w);
  vec4 norm=taylorInvSqrt4(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
  m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
`;

const vertexShader = NOISE + `
uniform float uTime;
varying vec3 vNormal;
varying vec3 vWorldPos;
varying float vNoise;

void main(){
  /* very low-amplitude noise — stays nearly spherical, just breathes */
  float n =  snoise(position * 0.50 + uTime * 0.14) * 0.10
           + snoise(position * 1.10 + uTime * 0.10) * 0.04
           + snoise(position * 2.20 + uTime * 0.07) * 0.015;

  vec3 displaced = position + normal * n;
  vNoise    = n;
  vNormal   = normalize(normalMatrix * normal);
  vWorldPos = (modelMatrix * vec4(displaced, 1.0)).xyz;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPos, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
varying vec3 vNormal;
varying vec3 vWorldPos;
varying float vNoise;

void main(){
  vec3 norm    = normalize(vNormal);
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  float NdotV  = max(dot(norm, viewDir), 0.0);

  /* ── Base: deep blue-slate ── */
  vec3 col = vec3(0.08, 0.09, 0.18);

  /* ── Iridescent layer — shifts with angle + noise + time ── */
  float iri = NdotV + vNoise * 0.6 + uTime * 0.08;
  vec3 iriCol = vec3(
    0.5 + 0.5 * sin(iri * 5.0),
    0.5 + 0.5 * sin(iri * 5.0 + 2.094),
    0.5 + 0.5 * sin(iri * 5.0 + 4.189)
  );
  col = mix(col, col + iriCol * 0.22, 1.0 - NdotV);

  /* ── Orbiting warm key light ── */
  float ks = sin(uTime * 0.36);
  float kc = cos(uTime * 0.36);
  vec3 kPos  = vec3(2.6 * kc, -1.0 + sin(uTime * 0.28) * 0.7, 2.2 * ks + 0.8);
  vec3 kDir  = normalize(kPos - vWorldPos);
  float kd   = max(dot(norm, kDir), 0.0);
  float ks2  = pow(max(dot(reflect(-kDir, norm), viewDir), 0.0), 80.0);
  col += kd  * vec3(0.95, 0.34, 0.04) * 0.90;
  col += ks2 * vec3(1.00, 0.75, 0.30) * 0.75;

  /* ── Cool indigo fill (top-left) ── */
  vec3 fillDir = normalize(vec3(-1.6, 2.2, 1.0));
  float fd = max(dot(norm, fillDir), 0.0);
  col += fd * vec3(0.18, 0.28, 0.95) * 0.20;

  /* ── Soft white rim from above ── */
  vec3 topDir = normalize(vec3(0.3, 2.8, 1.4));
  float td  = max(dot(norm, topDir), 0.0);
  float ts  = pow(max(dot(reflect(-topDir, norm), viewDir), 0.0), 140.0);
  col += td * vec3(0.88, 0.92, 1.0) * 0.10;
  col += ts * vec3(1.0)             * 0.95;

  /* ── Fresnel orange rim (edge glow) ── */
  float fresnel = pow(1.0 - NdotV, 3.0);
  col += fresnel * vec3(0.96, 0.36, 0.05) * 0.90;

  /* ── Noise-based inner colour variation ── */
  col += max(vNoise, 0.0) * vec3(0.18, 0.25, 0.60) * 0.28;

  gl_FragColor = vec4(col, 1.0);
}
`;

const HeroScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    /* ── Scene / Camera ── */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 3.6);

    /* ── Master group (for mouse parallax) ── */
    const group = new THREE.Group();
    scene.add(group);

    /* ── Blob ── */
    const blobGeo = new THREE.IcosahedronGeometry(1.2, 8);
    const blobMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader,
      fragmentShader,
    });
    const blob = new THREE.Mesh(blobGeo, blobMat);
    group.add(blob);

    /* ── Soft glow halo (additive, behind blob) ── */
    const haloGeo = new THREE.SphereGeometry(1.55, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xea580c,
      transparent: true,
      opacity: 0.055,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    group.add(new THREE.Mesh(haloGeo, haloMat));

    /* ── Orbit rings ── */
    const ringDefs = [
      { r: 1.72, tube: 0.0025, rx: 0.42, ry: 0.15,  col: 0xf59e0b, op: 0.35 },
      { r: 1.95, tube: 0.0018, rx: 1.18, ry: 0.55,  col: 0x818cf8, op: 0.22 },
      { r: 2.15, tube: 0.0014, rx: 0.78, ry: -0.32, col: 0xfbbf24, op: 0.14 },
    ];
    const rings = ringDefs.map(({ r, tube, rx, ry, col, op }) => {
      const geo = new THREE.TorusGeometry(r, tube, 2, 160);
      const mat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: op });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = rx;
      mesh.rotation.y = ry;
      group.add(mesh);
      return mesh;
    });

    /* ── Accent orbs orbiting on ring paths ── */
    const orbData = [
      { ring: 0, angle: 0,      speed: 0.28, col: 0xfbbf24, size: 0.048 },
      { ring: 0, angle: Math.PI, speed: 0.28, col: 0xfbbf24, size: 0.032 },
      { ring: 1, angle: 1.2,    speed: 0.18, col: 0xa5b4fc, size: 0.038 },
      { ring: 2, angle: 2.6,    speed: 0.14, col: 0xfde68a, size: 0.028 },
    ];
    const orbs = orbData.map(({ col, size }) => {
      const geo = new THREE.SphereGeometry(size, 10, 10);
      const mat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.88 });
      const mesh = new THREE.Mesh(geo, mat);
      group.add(mesh);
      return mesh;
    });

    /* ── Particles — two layers ── */
    const buildParticles = (count, rMin, rMax, color, size, opacity) => {
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi   = Math.acos(2 * Math.random() - 1);
        const r     = rMin + Math.random() * (rMax - rMin);
        pos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
        pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i*3+2] = r * Math.cos(phi);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color, size, transparent: true, opacity, sizeAttenuation: true,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const pts = new THREE.Points(geo, mat);
      group.add(pts);
      return pts;
    };
    const innerPts = buildParticles(180, 1.55, 2.10, 0xfbbf24, 0.020, 0.65);
    const outerPts = buildParticles(120, 2.20, 3.20, 0xc7d2fe, 0.014, 0.30);

    /* ── Mouse parallax ── */
    let tMouseX = 0, tMouseY = 0;
    const onMouse = (e) => {
      tMouseX = (e.clientX / window.innerWidth  - 0.5) * 0.55;
      tMouseY = (e.clientY / window.innerHeight - 0.5) * 0.40;
    };
    window.addEventListener('mousemove', onMouse);

    /* ── Animation ── */
    const clock = new THREE.Clock();
    let rafId;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      blobMat.uniforms.uTime.value = t;

      /* base rotation — very slow, almost still */
      blob.rotation.y = t * 0.06;
      blob.rotation.x = t * 0.03;

      /* rings drift independently */
      rings[0].rotation.z =  t * 0.14;
      rings[1].rotation.z = -t * 0.09;
      rings[2].rotation.z =  t * 0.06;

      /* orbs follow ring paths */
      orbData.forEach(({ ring, angle, speed }, i) => {
        const r   = ringDefs[ring].r;
        const a   = angle + t * speed;
        const rx  = ringDefs[ring].rx;
        const ry  = ringDefs[ring].ry;
        /* rotate point around ring's local axes */
        const raw = new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0);
        raw.applyEuler(new THREE.Euler(rx + t * 0.02, ry + t * 0.015, 0));
        orbs[i].position.copy(raw);
      });

      /* particles drift */
      innerPts.rotation.y =  t * 0.050;
      innerPts.rotation.x = -t * 0.028;
      outerPts.rotation.y = -t * 0.030;
      outerPts.rotation.x =  t * 0.018;

      /* smooth mouse parallax on whole group */
      group.rotation.y += ( tMouseX - group.rotation.y) * 0.04;
      group.rotation.x += (-tMouseY - group.rotation.x) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    /* ── Resize ── */
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100%' }} aria-hidden="true" />
  );
};

export default HeroScene;
