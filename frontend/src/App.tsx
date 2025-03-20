import React, { useState } from "react";
import axios from "axios";
import { Card, Input, Button } from "@mui/material";
import { PilotageData } from "./types";
import { groupDataByFromAndTo, validateIMO } from "./utils";
import Subtable from "./components/Subtable";

const App: React.FC = () => {
  const [imo, setImo] = useState("");
  const [data, setData] = useState<PilotageData[]>([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    if (!validateIMO(imo)) {
      setError("Invalid IMO. Please enter a valid 7-digit IMO.");
      setData([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://uat.engineering.sgtradex.net/api/v1/pilotage/${imo}`
      );
      setData(response.data);
      setError("");
      setImo("");
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setData([]);
    }
  };

  // Group the data by From and To
  const groupedData = groupDataByFromAndTo(data);

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-4xl">
        <Card className="p-6 mb-6 shadow-lg bg-white">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4 text-center">
              Vessel Pilotage Information
            </h1>
            <div className="flex items-center w-full max-w-md">
              <Input
                placeholder="Enter Vessel IMO"
                value={imo}
                onChange={(e) => setImo(e.target.value)}
                className="mr-4 flex-grow"
              />
              <Button onClick={fetchData} variant="contained" color="primary">
                Search
              </Button>
            </div>
            {error && (
              <p className="text-red-500 mt-4 text-center font-medium">
                {error}
              </p>
            )}
          </div>
        </Card>

        {data.length > 0 && (
          <Card className="p-6 shadow-lg bg-white">
            <div className="text-center mb-6">
              <h2 className="text-lg font-bold mb-2">Vessel Information</h2>
              <div className="flex justify-center space-x-8">
                <p className="text-lg">
                  <span className="font-bold">Pilotage Name:</span>{" "}
                  {data[0].pilotage_nm}
                </p>
                <p className="text-lg">
                  <span className="font-bold">IMO:</span>{" "}
                  {data[0].pilotage_imo}
                </p>
              </div>
            </div>

            {/* Render subtables */}
            {Array.from(groupedData.entries()).map(([key, groupData]) => {
              const [from, to] = key.split("-");
              return (
                <Subtable key={key} from={from} to={to} data={groupData} />
              );
            })}
          </Card>
        )}
      </div>
    </div>
  );
};
export default App;
