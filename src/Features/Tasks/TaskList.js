import React from "react";
import { getStatusStyles } from "../../Services/StatusStylesMap";

const TaskList = ({ tasks }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Tasks</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
          Add Task
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-gray-600">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-sm font-semibold text-gray-900">
                Title
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-900">
                Assigned To
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-900">
                Priority
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{task.title}</td>
                <td className="px-6 py-4 text-sm">{task.assignedToName}</td>
                <td className="px-6 py-4 text-sm">
                  {(() => {
                    const { label, style } = getStatusStyles(
                      "TaskStatus",
                      task.status
                    );
                    return (
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${style}`}
                      >
                        {label}
                      </span>
                    );
                  })()}
                </td>
                <td className="px-6 py-4 text-sm">{task.priority}</td>
                <td className="px-6 py-4 text-sm space-x-2">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
