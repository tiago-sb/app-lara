import type { DatetimePickerProps } from "../../types/DatetimePickerProps";
import { hours } from "../../utils/sessionModalUtils";

const font = { fontFamily: "Montserrat, sans-serif" };

export const DatetimePicker = ({ date, hour, minute, onPartChange }: DatetimePickerProps) => (
  <div className="col-12">
    <label className="form-label" style={{ ...font, fontSize: "0.85rem", fontWeight: 500 }}>
      Início
    </label>

    <div className="d-flex gap-2">
      {/* Data */}
      <input 
        type="date" 
        className="form-control"
        value={date} onChange={ (e) => { onPartChange("date", e.target.value) }}
        required 
        style={{ ...font, fontSize: "0.9rem", flex: "1 1 auto" }}
      />

      {/* Hora */}
      <select
        className="form-select"
        value={hour}
        onChange={(e) => onPartChange("hour", e.target.value)}
        required
        style={{ ...font, fontSize: "0.9rem", width: "90px", flex: "0 0 auto" }}
      >
        <option value="" disabled>HH</option>
        {/* "00", "01", "02", ..., "23" */}
        {hours.map((h) => (
          <option key={h} value={h}>{h}</option>
        ))}
      </select>

      {/* Minuto — apenas 00 e 30 */}
      <select
        className="form-select"
        value={minute}
        onChange={(e) => onPartChange("minute", e.target.value)}
        required
        style={{ ...font, fontSize: "0.9rem", width: "80px", flex: "0 0 auto" }}
      >
        <option value="" disabled>MM</option>
        <option value="00">00</option>
        <option value="30">30</option>
      </select>
    </div>
  </div>
);