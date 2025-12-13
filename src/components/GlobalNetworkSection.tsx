import { useEffect, useState, useRef, useCallback } from "react";
import { MapPin, ZoomIn, ZoomOut, RotateCcw, Save } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import worldMap from "@/assets/world-map.png";
import { locations, connections } from "@/data/globalNetworkData";

// DEV MODE: Set to true to enable draggable markers
const DEV_MODE = false;

// Position adjustment - modify these values to shift all markers
const mappedLocations = locations.map((loc) => {
  const scaleFactor = 1.125;
  const xTransformed = (loc.x - 50) * scaleFactor + 50;

  return {
    ...loc,
    x: xTransformed,
  };
});

const getMappedLocationById = (id: string) =>
  mappedLocations.find((loc) => loc.id === id);

const GlobalNetworkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);
  const [currentScale, setCurrentScale] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // DEV: Adjusted positions state
  const [adjustedPositions, setAdjustedPositions] = useState<
    Record<string, { x: number; y: number }>
  >(() => {
    const initial: Record<string, { x: number; y: number }> = {};
    locations.forEach((loc) => {
      initial[loc.id] = { x: loc.x, y: loc.y };
    });
    return initial;
  });
  const [draggingId, setDraggingId] = useState<string | null>(null);

  // DEV: Handle drag
  const handleMouseDown = (e: React.MouseEvent, locationId: string) => {
    if (!DEV_MODE) return;
    e.preventDefault();
    e.stopPropagation();
    setDraggingId(locationId);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!DEV_MODE || !draggingId || !mapContainerRef.current) return;

      const rect = mapContainerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setAdjustedPositions((prev) => ({
        ...prev,
        [draggingId]: {
          x: Math.max(0, Math.min(100, x)),
          y: Math.max(0, Math.min(100, y)),
        },
      }));
    },
    [draggingId]
  );

  const handleMouseUp = useCallback(() => {
    setDraggingId(null);
  }, []);

  // DEV: Log coordinates to console
  const logCoordinates = () => {
    console.log("\n========== ADJUSTED COORDINATES ==========");
    console.log("Copy this to globalNetworkData.ts:\n");
    const output = locations
      .map((loc) => {
        const pos = adjustedPositions[loc.id] || { x: loc.x, y: loc.y };
        return `  { id: "${loc.id}", name: "${loc.name}", x: ${pos.x.toFixed(
          1
        )}, y: ${pos.y.toFixed(1)} },`;
      })
      .join("\n");
    console.log(output);
    console.log("\n===========================================\n");
  };

  // DEV: Add global mouse listeners for dragging
  useEffect(() => {
    if (!DEV_MODE) return;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-full w-full bg-white overflow-hidden flex flex-col justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Title */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold font-rift text-foreground">
            Global Presence
          </h2>
        </div>

        <p className="mt-6 mt:mb-8 text-sm md:text-base leading-[1.4] text-foreground md:w-[60%] w-[100%] md:p-0 p-[20px] text-center">
          "Undertheline" comes from a simple promise: we stand under every
          artist's line, not above it. We are not a company that pulls rights
          and data upward; instead, we design and operate the structures
          beneath, so that artists and labels can hold sovereignty over their
          own catalogs, communities and economics.
        </p>

        {/* Map Container with Zoom */}
        <div
          className="mt-6 mt:mb-8 relative w-full"
          style={{ aspectRatio: "1738 / 920" }}
        >
          {/* DEV: Floating save button */}
          {DEV_MODE && (
            <button
              onClick={logCoordinates}
              className="absolute top-4 left-4 z-30 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors flex items-center gap-2 font-medium"
            >
              <Save className="w-4 h-4" />
              Log Coordinates
            </button>
          )}

          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={4}
            centerOnInit
            wheel={{ disabled: true }}
            pinch={{ step: 5 }}
            disabled={DEV_MODE && draggingId !== null}
            onTransformed={(_, state) => setCurrentScale(state.scale)}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Zoom Controls */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                  <button
                    onClick={() => zoomIn()}
                    className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-md transition-colors border border-gray-200"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() => zoomOut()}
                    className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-md transition-colors border border-gray-200"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() => resetTransform()}
                    className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-md transition-colors border border-gray-200"
                    aria-label="Reset zoom"
                  >
                    <RotateCcw className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                <TransformComponent
                  wrapperStyle={{ width: "100%", height: "100%" }}
                  contentStyle={{ width: "100%", height: "100%" }}
                >
                  <div ref={mapContainerRef} className="relative w-full h-full">
                    {/* World Map Image */}
                    <img
                      src={worldMap}
                      alt="World Map"
                      className="w-full h-full"
                      draggable={false}
                    />

                    {/* Connection Lines SVG - use adjusted positions in DEV mode */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                      {connections.map((connection, index) => {
                        const from = getMappedLocationById(connection.from);
                        const to = getMappedLocationById(connection.to);
                        if (!from || !to) return null;

                        // 곡선 컨트롤 포인트 계산
                        const midX = (from.x + to.x) / 2;
                        const midY = (from.y + to.y) / 2 - 5;

                        return (
                          <path
                            key={index}
                            d={`M ${from.x}% ${from.y}% Q ${midX}% ${midY}% ${to.x}% ${to.y}%`}
                            fill="none"
                            stroke="#9CA3AF"
                            strokeWidth="1.5"
                            strokeDasharray="6 4"
                          />
                        );
                      })}
                    </svg>

                    {/* Location Pins */}
                    {mappedLocations.map((location) => {
                      const pos = location;
                      return (
                        <div
                          key={location.id}
                          className="absolute flex flex-col items-center"
                          style={{
                            left: `${pos.x}%`,
                            top: `${pos.y}%`,
                            zIndex:
                              hoveredPin === location.id ||
                              (DEV_MODE && draggingId === location.id)
                                ? 50
                                : 10,
                          }}
                        >
                          <div
                            className={`relative flex flex-col items-center ${
                              DEV_MODE
                                ? "cursor-grab active:cursor-grabbing"
                                : ""
                            }`}
                            style={{
                              transform: `translate(-50%, -100%) scale(${
                                1 / currentScale
                              })`,
                            }}
                            onMouseEnter={() =>
                              !draggingId && setHoveredPin(location.id)
                            }
                            onMouseLeave={() => setHoveredPin(null)}
                            onMouseDown={(e) => handleMouseDown(e, location.id)}
                          >
                            {/* Speech bubble - show name (always in DEV mode when dragging this pin) */}
                            {(hoveredPin === location.id ||
                              (DEV_MODE && draggingId === location.id)) && (
                              <div className="absolute bottom-full mb-0.5 px-1.5 py-0.5 md:px-2 md:py-1 bg-white border border-gray-300 rounded text-[8px] md:text-[10px] text-gray-700 whitespace-nowrap shadow-md pointer-events-none z-50">
                                {location.name}
                                {DEV_MODE && (
                                  <span className="ml-1 text-blue-600">
                                    ({pos.x.toFixed(1)}, {pos.y.toFixed(1)})
                                  </span>
                                )}
                              </div>
                            )}
                            {/* Pin icon */}
                            <MapPin
                              className={`w-4 h-4 md:w-5 md:h-5 drop-shadow-md ${
                                DEV_MODE && draggingId === location.id
                                  ? "text-blue-600 scale-125"
                                  : "text-primary"
                              } transition-transform`}
                              fill="currentColor"
                              stroke="white"
                              strokeWidth={1}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetworkSection;
