import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Counter Strike 2", "1920x1080": 746, "2560x1440": 593, "3840x2160": 274 },
  { name: "PUBG", "1920x1080": 500, "2560x1440": 259, "3840x2160": 174 },
  { name: "GTA 5", "1920x1080": 308, "2560x1440": 227, "3840x2160": 124 },
  { name: "Fortnite", "1920x1080": 340, "2560x1440": 277, "3840x2160": 183 },
  { name: "Apex Legends", "1920x1080": 325, "2560x1440": 278, "3840x2160": 174 },
  { name: "CoD: Warzone", "1920x1080": 402, "2560x1440": 284, "3840x2160": 165 },
  { name: "Red Dead Redemption 2", "1920x1080": 194, "2560x1440": 128, "3840x2160": 74 },
  { name: "Cyberpunk 2077", "1920x1080": 690, "2560x1440": 500, "3840x2160": 400 },
  { name: "Battlefield 2042", "1920x1080": 700, "2560x1440": 182, "3840x2160": 108 },
  { name: "Far Cry 6", "1920x1080": 171, "2560x1440": 121, "3840x2160": 100 },
  { name: "Forza Horizon 5", "1920x1080": 400, "2560x1440": 174, "3840x2160": 124 },
  { name: "God of War", "1920x1080": 189, "2560x1440": 154, "3840x2160": 101 },
  { name: "Dying Light 2", "1920x1080": 600, "2560x1440": 144, "3840x2160": 90 },
  { name: "Atomic Heart", "1920x1080": 210, "2560x1440": 150, "3840x2160": 91 },
  { name: "Overwatch 2", "1920x1080": 320, "2560x1440": 214, "3840x2160": 176 },
  { name: "The Callisto Protocol", "1920x1080": 176, "2560x1440": 500, "3840x2160": 90 },
  { name: "Baldur's Gate III", "1920x1080": 780, "2560x1440": 184, "3840x2160": 87 },
  { name: "CoD: Modern Warfare 3", "1920x1080": 221, "2560x1440": 181, "3840x2160": 105 },
];

const COLORS = {
  "1920x1080": "#4A86E7",
  "2560x1440": "#AF4AC9",
  "3840x2160": "#F6B26B",
};

// Hook to detect window width
const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

// Custom Legend
const CustomLegend = () => (
  <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: 10 }}>
    {Object.keys(COLORS).map((key) => (
      <div key={key} style={{ display: "flex", alignItems: "center", marginRight: 20 }}>
        <div style={{ width: 12, height: 12, backgroundColor: COLORS[key], marginRight: 5, borderRadius: 2 }} />
        <span style={{ color: "white", fontSize: 14 }}>
          {key} ({key === "1920x1080" ? "FullHD" : key === "2560x1440" ? "QuadHD" : "4K"})
        </span>
      </div>
    ))}
  </div>
);

const GamingPerformanceChart = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div className="Gaming-performance-container" style={{ padding: "10px", maxWidth: "100%" }}>
      <div className="container">
        <div className="chart-container">
          <h2 className="gaming-performance-title mb-5" style={{ fontSize: isMobile ? "18px" : "24px", textAlign: "center" }}>
            Gaming Performance
          </h2>
          <CustomLegend />
          <div className="chart-wrapper" style={{ width: "100%", height: isMobile ? "700px" : "1000px", alignItems:'center' }}>
            <ResponsiveContainer width="80%" height="100%" >
              <BarChart
                layout="vertical"
                data={data}
                margin={{ top: 20, bottom: 15, left: isMobile ? 50 : 100 }}
                barSize={isMobile ? 6 : 10}
                barGap={isMobile ? 20 : 150}
                barCategoryGap={isMobile ? 20 : 150}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis type="number" stroke="white" fontSize={isMobile ? 10 : 14} />
                <YAxis type="category" dataKey="name" stroke="white" tick={{ fontSize: isMobile ? 10 : 14 }} />
                
                <Bar dataKey="1920x1080" fill="#4285F4">
                  <LabelList dataKey="1920x1080" position="right" fill="white" fontSize={isMobile ? 10 : 12} />
                </Bar>
                <Bar dataKey="2560x1440" fill="#AA66CC">
                  <LabelList dataKey="2560x1440" position="right" fill="white" fontSize={isMobile ? 10 : 12} />
                </Bar>
                <Bar dataKey="3840x2160" fill="#FFA726">
                  <LabelList dataKey="3840x2160" position="right" fill="white" fontSize={isMobile ? 10 : 12} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingPerformanceChart;
