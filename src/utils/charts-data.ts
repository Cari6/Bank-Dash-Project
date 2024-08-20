export const barChartDashboardData = [
  ["", "Diposit", "Withdraw"],
  ["Sat", 490, 225],
  ["Sun", 325, 110],
  ["Mon", 325, 290],
  ["Tue", 490, 390],
  ["Wed", 150, 220],
  ["Thu", 405, 250],
  ["Fri", 400, 310],
];

export const barChartDashboardOptions = {
  colors: ["#1814F3", "#16DBCC"],
};

export const pieChartDashboardData = [
  ["", ""],
  ["Entertainment", 30],
  ["Bill Expense", 15],
  ["Others", 35],
  ["Investment", 20],
];

export const pieChartDashboardOptions = (isSmallScreen: boolean) => ({
  pieStartAngle: 305,
  pieSliceText: isSmallScreen ? "none" : "label",
  slices: {
    0: { offset: 0.05, color: "#343C6A" },
    1: { offset: 0.05, color: "#FC7900" },
    2: { offset: 0.05, color: "#1814F3" },
    3: { offset: 0.05, color: "#FA00FF" },
  },
  legend: {
    position: isSmallScreen ? "labeled" : "none",
    alignment: "center",
    textStyle: {
      fontName: "Inter",
      color: "#718EBF",
      fontSize: 16,
    },
  },
  chartArea: {
    top: 20,
    bottom: 20,
  },
});

export const lineChartDashboardData = [
  ["Month", "Expenses"],
  ["Jul", 100],
  ["Aug", 600],
  ["Sep", 500],
  ["Oct", 700],
  ["Nov", 200],
  ["Dec", 600],
  ["Jan", 200],
];

export const lineChartDashboardOptions = {
  curveType: "function",
  legend: { position: "none" },
  series: [{ color: "#1814F3" }],
  hAxis: {
    textStyle: {
      color: "#718EBF",
      fontSize: 14,
    },
  },
  vAxis: {
    textStyle: {
      color: "#718EBF",
      fontSize: 14,
    },
  },
  chartArea: {
    right: 20,
    left: 50,
  },
};

export const columnChartTransactionsData = [
  ["mounth", "amount", { role: "style" }, { role: "annotation" }],
  ["Aug", 10000, "color:#EDF0F7", ""],
  ["Sep", 12600, "color:#EDF0F7", ""],
  ["Oct", 11000, "color:#EDF0F7", ""],
  ["Nov", 5000, "color:#EDF0F7", ""],
  ["Dec", 12500, "color:#16DBCC", "$12500"],
  ["Jan", 9000, "color:#EDF0F7", ""],
];

export const columnChartTransanctionsOptions = {
  legend: { position: "none" },
  annotations: {
    alwaysOutside: true,
    textStyle: {
      fontSize: 16,
      color: "#555",
    },
    stem: { color: "none", length: 10 },
  },
  vAxis: {
    gridlines: { color: "transparent" },
    minorGridlines: { color: "transparent" },
    textPosition: "none",
    baselineColor: "transparent",
  },
  chartArea: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
};
