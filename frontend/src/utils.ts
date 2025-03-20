import { PilotageData } from "./types";

export const formatDateTime = (timestamp: string | null) => {
  if (!timestamp) return "-";
  return new Date(timestamp).toLocaleString("en-SG", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Singapore",
  });
};

export const formatTime = (timestamp: string | null) => {
  if (!timestamp) return "-";
  return new Date(timestamp).toLocaleTimeString("en-SG", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Singapore",
  });
};

export const validateIMO = (imo: string) => {
  const validFormat = /^\d{7}$/.test(imo);
  if (!validFormat) return false;
  let checkSum = 0;
  for (let i = 0; i < 6; i++) {
    const digit = Number(imo[i]);
    checkSum += digit * (7 - i);
  }
  checkSum = checkSum % 10;
  return checkSum === Number(imo[6]);
};

export const groupDataByFromAndTo = (data: PilotageData[]) => {
  const groupedData = new Map<string, PilotageData[]>();

  data.forEach((item) => {
    const key = `${item.pilotage_loc_from_code}-${item.pilotage_loc_to_code}`;
    if (!groupedData.has(key)) {
      groupedData.set(key, []);
    }
    groupedData.get(key)?.push(item);
  });

  return groupedData;
};
