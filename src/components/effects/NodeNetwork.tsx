"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface NodeNetworkProps {
  nodeCount?: number;
  connectionDistance?: number;
  className?: string;
  speed?: number;
}

export function NodeNetwork({
  nodeCount = 30,
  connectionDistance = 150,
  className = "",
  speed = 0.3,
}: NodeNetworkProps) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // 初期化
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsMobile(window.innerWidth < 768);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // ノード生成
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const count = isMobile ? Math.floor(nodeCount / 2) : nodeCount;
    const initialNodes: Node[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
    }));
    setNodes(initialNodes);
  }, [dimensions, nodeCount, speed, isMobile]);

  // アニメーションループ
  useEffect(() => {
    if (nodes.length === 0) return;

    let animationId: number;
    const animate = () => {
      setNodes((prev) =>
        prev.map((node) => {
          let newX = node.x + node.vx;
          let newY = node.y + node.vy;
          let newVx = node.vx;
          let newVy = node.vy;

          // 境界で反射
          if (newX <= 0 || newX >= dimensions.width) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(dimensions.width, newX));
          }
          if (newY <= 0 || newY >= dimensions.height) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(dimensions.height, newY));
          }

          return {
            ...node,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [nodes.length, dimensions]);

  // 接続ライン計算
  const connections = useMemo(() => {
    const lines: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          lines.push({
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: nodes[j].x,
            y2: nodes[j].y,
            opacity: (1 - distance / connectionDistance) * 0.5,
          });
        }
      }
    }

    return lines;
  }, [nodes, connectionDistance]);

  if (dimensions.width === 0) return null;

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    >
      {/* 接続ライン */}
      {connections.map((line, i) => (
        <motion.line
          key={`line-${i}`}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="currentColor"
          strokeWidth={1}
          opacity={line.opacity}
          className="text-muted-foreground"
        />
      ))}

      {/* ノード */}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r={2}
          className="fill-muted-foreground"
          opacity={0.6}
        />
      ))}
    </svg>
  );
}
