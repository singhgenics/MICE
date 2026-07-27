"use client";

import { useRef, useState, type PointerEvent } from "react";

/**
 * Horizontal scroller with real pointer-drag on desktop (mouse), native
 * touch scroll on mobile, and an edge fade signaling more content off-screen.
 * A small drag threshold prevents accidental link navigation on click.
 */
export function DragScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScrollLeft: 0, moved: false });
  const [dragging, setDragging] = useState(false);

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScrollLeft: trackRef.current.scrollLeft,
      moved: false,
    };
    setDragging(true);
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!drag.current.active || !trackRef.current) return;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    trackRef.current.scrollLeft = drag.current.startScrollLeft - delta;
  }

  function endDrag() {
    drag.current.active = false;
    setDragging(false);
  }

  function onClickCapture(e: React.MouseEvent<HTMLDivElement>) {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  }

  return (
    <div className={`relative ${className}`}>
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className={`overflow-x-auto ${dragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent"
      />
    </div>
  );
}
