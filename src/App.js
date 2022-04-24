import "./App.css";

import * as React from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { NASA_API } from "./utils/constants";
import TextField from "@mui/material/TextField";
import formatDate from "./utils/formatDate";

function App() {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [imageOTDay, setImageOTDay] = React.useState(null);

  const getAPOD = React.useCallback(async (date) => {
    const queryDate = date ? `&date=${date}` : "";

    const data = await fetch(`${NASA_API}${queryDate}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setImageOTDay(result))
      .catch((err) => console.error(err));

    return data;
  }, []);

  React.useEffect(() => {
    getAPOD();
  }, [getAPOD]);

  React.useEffect(() => {
    if (selectedDate) {
      getAPOD(selectedDate);
    }
  }, [getAPOD, selectedDate]);

  const handleDate = React.useCallback((date) => {
    const newDate = formatDate(date);
    setSelectedDate(newDate);
  }, []);

  console.log({ imageOTDay });

  return (
    <div className="App">
      <header>
        <h1>Nasa Picture of the Day</h1>
      </header>
      <div className="main">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date Picker"
            value={selectedDate}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <div className="image-column">
          <h3>Image title</h3>
          {imageOTDay && (
            <img
              src={imageOTDay.url}
              alt={imageOTDay.title}
              data-testid="picture-of-the-day"
            />
          )}
        </div>

        <div data-testid="description">
          {imageOTDay && <p>{imageOTDay.explanation}</p>}
        </div>
      </div>
      <footer>
        Project created during Wizeline Academy React Testing Bootcamp
      </footer>
    </div>
  );
}

export default App;
