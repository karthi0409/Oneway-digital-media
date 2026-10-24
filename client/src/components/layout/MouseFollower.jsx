import { useEffect, useRef } from 'react';

export default function MouseFollower() {
  const cursorRef = useRef(null);
  const pointRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const point = pointRef.current;
    const canAnimate = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    );

    if (!cursor || !point || !canAnimate.matches) return undefined;

    let frame = 0;
    let dragging = false;
    let hasPointerPosition = false;
    let pointerX = 0;
    let pointerY = 0;
    let ringX = 0;
    let ringY = 0;
    let directionX = 0;
    let directionY = 0;

    const updatePosition = (event) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;

      const deltaX = hasPointerPosition ? event.clientX - pointerX : 0;
      const deltaY = hasPointerPosition ? event.clientY - pointerY : 0;
      const distance = Math.hypot(deltaX, deltaY);
      if (distance > 0.5) {
        directionX = deltaX / distance;
        directionY = deltaY / distance;
      }

      pointerX = event.clientX;
      pointerY = event.clientY;
      hasPointerPosition = true;

      cursor.classList.toggle(
        'mouse-follower-interactive',
        Boolean(event.target.closest('a, button, [role="button"], input, select, textarea'))
      );

      if (!frame) {
        if (!cursor.classList.contains('mouse-follower-visible')) {
          ringX = pointerX - directionX * 28;
          ringY = pointerY - directionY * 28;
          cursor.classList.add('mouse-follower-visible');
          point.classList.add('mouse-follower-visible');
        }
        frame = window.requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      const trailDistance = dragging ? 34 : 28;
      const targetX = pointerX - directionX * trailDistance;
      const targetY = pointerY - directionY * trailDistance;
      const deltaX = targetX - ringX;
      const deltaY = targetY - ringY;

      ringX += deltaX * 0.16;
      ringY += deltaY * 0.16;

      cursor.style.setProperty('--cursor-x', `${ringX}px`);
      cursor.style.setProperty('--cursor-y', `${ringY}px`);
      point.style.setProperty('--pointer-x', `${pointerX}px`);
      point.style.setProperty('--pointer-y', `${pointerY}px`);

      if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
        frame = window.requestAnimationFrame(animate);
      } else {
        frame = 0;
      }
    };

    const startDrag = (event) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      dragging = true;
      cursor.classList.add('mouse-follower-dragging');
      point.classList.add('mouse-follower-pressed');
      if (!frame && hasPointerPosition) frame = window.requestAnimationFrame(animate);
    };

    const stopDrag = () => {
      dragging = false;
      cursor.classList.remove('mouse-follower-dragging');
      point.classList.remove('mouse-follower-pressed');
      if (!frame && hasPointerPosition) frame = window.requestAnimationFrame(animate);
    };

    const hideCursor = () => {
      cursor.classList.remove('mouse-follower-visible');
      cursor.classList.remove('mouse-follower-interactive');
      point.classList.remove('mouse-follower-visible', 'mouse-follower-pressed');
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      hasPointerPosition = false;
    };

    window.addEventListener('pointermove', updatePosition);
    window.addEventListener('pointerdown', startDrag);
    window.addEventListener('pointerup', stopDrag);
    window.addEventListener('pointercancel', stopDrag);
    document.addEventListener('pointerleave', hideCursor);

    return () => {
      window.removeEventListener('pointermove', updatePosition);
      window.removeEventListener('pointerdown', startDrag);
      window.removeEventListener('pointerup', stopDrag);
      window.removeEventListener('pointercancel', stopDrag);
      document.removeEventListener('pointerleave', hideCursor);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <span ref={cursorRef} className="mouse-follower" aria-hidden="true" />
      <span ref={pointRef} className="mouse-follower-point" aria-hidden="true" />
    </>
  );
}
