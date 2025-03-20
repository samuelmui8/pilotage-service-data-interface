export interface PilotageData {
  pilotage_cst_dt_time: string;
  pilotage_arrival_dt_time: string | null;
  pilotage_onboard_dt_time: string | null;
  pilotage_start_dt_time: string | null;
  pilotage_end_dt_time: string | null;
  pilotage_snapshot_dt: string;
  pilotage_nm: string;
  pilotage_imo: string;
  pilotage_loc_from_code: string;
  pilotage_loc_to_code: string;
}
