import { PilotageData } from "../types";
import { formatDateTime, formatTime } from "../utils";

interface SubtableProps {
  from: string;
  to: string;
  data: PilotageData[];
}

const Subtable: React.FC<SubtableProps> = ({ from, to, data }) => {
  const firstRow = data[0];

  return (
    <div className="mb-12">
      <h3 className="text-lg font-semibold mb-4">
        From: {from} → To: {to}
      </h3>
      <h4 className="text-xl font-semibold mb-4">
        Service Request Time: {formatDateTime(firstRow.pilotage_cst_dt_time)}
      </h4>
      <table className="w-full border-collapse border border-gray-300 shadow-sm">
        <thead>
          <tr className="bg-sky-400 text-white">
            <th className="p-3 border border-gray-400 text-center w-1/4">
              Arrival Time (Pilot Board Location)
            </th>
            <th className="p-3 border border-gray-400 text-center w-1/4">
              Pilot Board Time
            </th>
            <th className="p-3 border border-gray-400 text-center w-1/4">
              Start Time
            </th>
            <th className="p-3 border border-gray-400 text-center w-1/4">
              End Time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="p-3 border border-gray-400 text-center w-1/4">
              {formatTime(firstRow.pilotage_arrival_dt_time)}
            </td>
            <td className="p-3 border border-gray-400 text-center w-1/4">
              {formatTime(firstRow.pilotage_onboard_dt_time)}
            </td>
            <td className="p-3 border border-gray-400 text-center w-1/4">
              {formatTime(firstRow.pilotage_start_dt_time)}
            </td>
            <td className="p-3 border border-gray-400 text-center w-1/4">
              {formatTime(firstRow.pilotage_end_dt_time)}
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm text-gray-600 mt-2">
        Last Updated: {formatDateTime(firstRow.pilotage_snapshot_dt)}
      </p>
    </div>
  );
};

export default Subtable;
