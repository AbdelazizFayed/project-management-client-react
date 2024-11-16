// Define reusable mapping structure
const StatusStylesMap = {
    TaskStatus: {
      0: { label: "Not Started", style: "bg-red-200 text-red-800" },
      1: { label: "Pending", style: "bg-orange-200 text-orange-800" },
      2: { label: "In Progress", style: "bg-yellow-200 text-yellow-800" },
      3: { label: "Completed", style: "bg-green-200 text-green-800" },
    },
    ProjectStatus: {
      0: { label: "Not Initiated", style: "bg-gray-200 text-gray-800" },
      1: { label: "Planning", style: "bg-blue-200 text-blue-800" },
      2: { label: "Executing", style: "bg-purple-200 text-purple-800" },
      3: { label: "Closed", style: "bg-green-200 text-green-800" },
    },
  };
  
  // Generic function to get the label and style
  export const getStatusStyles = (statusType, statusValue) => {
    const statusMap = StatusStylesMap[statusType];
    if (!statusMap) return { label: "Unknown Status Type", style: "bg-gray-200 text-gray-800" };
  
    return statusMap[statusValue] || { label: "Unknown Status", style: "bg-gray-200 text-gray-800" };
  };
  