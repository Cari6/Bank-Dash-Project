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
    left: 0,
    top: 20,
    right: 0,
    bottom: 20,
    width: "100%",
    height: "100%",
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
