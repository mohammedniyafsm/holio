"use client";

import React from "react";
import { DottedMap, Marker } from "@/components/ui/dotted-map";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const bangaloreMarker: Marker[] = [
  {
    lat: 12.9716,
    lng: 77.5946,
    size: 0.8,
    pulse: true,
  },
];

export function MapModal({ isOpen, onClose }: MapModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "680px",
          background: "#0d0d0d",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.9)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#ffffff",
                margin: 0,
              }}
            >
              Location &mdash; Bengaluru, India
            </h3>
            <p
              style={{
                fontSize: "12px",
                color: "#888888",
                margin: "4px 0 0 0",
              }}
            >
              12.9716° N, 77.5946° E
            </p>
          </div>
          <button
            onClick={onClose}
            className="cursor-target"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            ✕
          </button>
        </div>

        {/* Map Container */}
        <div
          style={{
            position: "relative",
            height: "360px",
            width: "100%",
            overflow: "hidden",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            background: "#050505",
          }}
        >
          <DottedMap
            markers={bangaloreMarker}
            pulse
            dotColor="#333333"
            markerColor="#c8f05a"
            dotRadius={0.25}
          />
        </div>
      </div>
    </div>
  );
}
