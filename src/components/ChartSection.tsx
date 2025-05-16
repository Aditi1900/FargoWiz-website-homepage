
import {  useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion, useInView } from "framer-motion";

const lineData = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 800 },
  { name: "Mar", users: 1200 },
  { name: "Apr", users: 1700 },
  { name: "May", users: 2000 },
];

const barData = [
  { name: "Marketing", spend: 12000 },
  { name: "Development", spend: 18000 },
  { name: "Sales", spend: 8000 },
  { name: "Support", spend: 6000 },
];

const pieData = [
  { name: "Subscriptions", value: 65 },
  { name: "Consulting", value: 20 },
  { name: "Ads", value: 15 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function Charts() {
  const lineRef = useRef(null);
  const barRef = useRef(null);
  const pieRef = useRef(null);

  const isLineInView = useInView(lineRef, { once: true });
  const isBarInView = useInView(barRef, { once: true });
  const isPieInView = useInView(pieRef, { once: true });

  
  return (
    <section id="analytics"
      className="w-full bg-[#050a13] min-h-screen px-8 py-20 bg-cover bg-center"
    >
      <motion.div
          ref={lineRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isLineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
      <h2 
      className="text-white text-2xl font-bold mb-12 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)] text-start pl-10">
        ANALYTICS
      </h2>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-10">
        {/* Line Chart */}
        <motion.div
          ref={lineRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isLineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="border border-white/20 bg-transparent p-6 hover:shadow-lg hover:shadow-white/10 transition-transform duration-300 hover:scale-105"
        >
          <h3 className="text-lg text-white font-semibold mb-4">Monthly Active Users</h3>
          <ResponsiveContainer width="100%" height={250} >
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#4f46e5"
                strokeWidth={3}
                isAnimationActive={isLineInView}
                animationDuration={1000}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          ref={barRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isBarInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-white/20 bg-transparent p-6 hover:shadow-lg hover:shadow-white/10 transition-transform duration-300 hover:scale-105"
        >
          <h3 className="text-lg text-white font-semibold mb-4">Department Spend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar
                dataKey="spend"
                fill="#10b981"
                radius={[8, 8, 0, 0]}
                isAnimationActive={isBarInView}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          ref={pieRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isPieInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border border-white/20 bg-transparent p-6 hover:shadow-lg hover:shadow-white/10 transition-transform duration-300 hover:scale-105"
        >
          <h3 className="text-lg text-white font-semibold mb-4">Revenue Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
                isAnimationActive={isPieInView}
                animationBegin={0}
                animationDuration={1000}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}

