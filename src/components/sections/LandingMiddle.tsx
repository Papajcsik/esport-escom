import React, { useEffect, useRef } from 'react';

import characterImg  from '../../../kepek/Contractor-holo.png';
import phoneImg      from '../../../kepek/mobile-holo.png';
import pedestalImg   from '../../../kepek/new-mutato-holo-renderer.png';

import holoGlowImg   from '../../../kepek/new-mutato-readerhologram.png';
import frameLeftImg  from '../../../kepek/new-mutato-readerbal_bal.png';
import frameRightImg from '../../../kepek/new-mutato-reader.png';

import '../../LandingMiddle.css';

function HoloParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type P = { x:number; y:number; vx:number; vy:number; r:number; a:number; color:string };
    const colors = ['#ff7700','#ffb700','#ff4400','#ffffff'];
    const particles: P[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.7 + 0.2),
      r: Math.random() * 2.5 + 0.5,
      a: Math.random() * 0.7 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.a;
        ctx.fill();
        p.x += p.vx; p.y += p.vy; p.a -= 0.003;
        if (p.a <= 0 || p.y < 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height;
          p.a = Math.random() * 0.7 + 0.2;
          p.vy = -(Math.random() * 0.7 + 0.2);
          p.vx = (Math.random() - 0.5) * 0.4;
        }
      }
      ctx.globalAlpha = 1;
      id = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="holo-particles-canvas" />;
}

export default function LandingMiddle() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const dx = (e.clientX - left - width  / 2) / width;
      const dy = (e.clientY - top  - height / 2) / height;

      const set = (sel: string, mx: number, my: number) => {
        const node = el.querySelector<HTMLElement>(sel);
        if (node) node.style.transform = `translate(${dx * mx}px, ${dy * my}px)`;
      };
      set('.character-img',           -18, -12);
      set('.phone-img',                14, -10);
      set('.pedestal-img',             -8,   6);
      set('.hologram-panel-elso',      -6,  -4);
      set('.hologram-panel-masodik',    6,  -4);
    };

    const onLeave = () => {
      el.querySelectorAll<HTMLElement>(
        '.character-img,.phone-img,.pedestal-img,.hologram-panel-elso,.hologram-panel-masodik'
      ).forEach(n => (n.style.transform = 'translate(0,0)'));
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, []);

  return (
    <div className="landing-container" ref={containerRef}>
      <HoloParticles />

      {/* ══ BAL OSZLOP ══ */}
      <div className="column left-column">

        {/* Felső panel – bal keret, hologram jobbra nyílik */}
        <div className="hologram-panel-elso">
          {/* Réteg 0: sárga hologram fénymező */}
          <img src={holoGlowImg} alt="" className="panel-holo-bg" />

          {/* Réteg 1: szöveg */}
          <div className="panel-content panel-content--left">
            <h2>ESCOM</h2>
            <p>is a logic and code-breaking mobile game,<br />with community-based role-playing elements.</p>
            <p className="highlight-text">
              EXPECT<br />
              FAST CHALLENGES,<br />
              NO TIME REQUIREMENT<br />
              AND NO IN-GAME ADS!
            </p>
          </div>

          {/* Réteg 2: keret (átlátszó PNG, ráterül) */}
          <img src={frameLeftImg} alt="" className="panel-frame" />
        </div>

        {/* Karakter + talpazat */}
        <div className="character-section">
          <img src={characterImg} alt="Sci-fi Character" className="character-img" />
          <img src={pedestalImg}  alt="Pedestal"         className="pedestal-img"  />
        </div>

      </div>

      {/* ══ JOBB OSZLOP ══ */}
      <div className="column right-column">

        {/* Telefon */}
        <div className="phone-section">
          <img src={phoneImg} alt="Mobile Game Preview" className="phone-img" />
        </div>

        {/* Alsó panel – jobb keret, hologram balra nyílik */}
        <div className="hologram-panel-masodik">
          {/* Réteg 0: sárga hologram fénymező */}
          <img src={holoGlowImg} alt="" className="panel-holo-bg" />

          {/* Réteg 1: szöveg */}
          <div className="panel-content panel-content--right">
            <h2>YOU PLAY AS A<br />CONTRACTOR</h2>
            <p className="contractor-description">
              22nd century businessman contracted by the ESCOM Initiative.<br />
              Your task is to manufacture components<br />
              for ESCOM's assembly facilities. Alongside<br />
              countless other contractors, you work<br />
              toward one shared goal:<br />
              <strong>protecting our Homeworld.</strong>
            </p>
          </div>

          {/* Réteg 2: keret */}
          <img src={frameRightImg} alt="" className="panel-frame" />
        </div>

      </div>
    </div>
  );
}
