async function fetchAndFilterData(schoolTitle) {
    try {
      //   Loader for the calendar, it's the spinning circle before the calendar loads
      const loader = document.getElementById("loader-wrapper");
      //   Sets the loader's display to block while the calendar is loading
      loader.style.display = "block"; // Show loader

      const scheduleTable = document.getElementById("schedule");

      //    Fetches the data from the Google App Script link
      //    (You can find the link by creating a new deploy or going to Manage Deploys on the App Script Project)
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwfSFOd_ILMXGTRbMJEWOhchEq9QtTWkF3VHu4brUqqmKXHRcD5vz30jeqmtdbx9CKs/exec"
      );
      const data = await response.json();

      //    Hides the loader once the calendar is loaded
      loader.style.display = "none";

      //    If the school title is not null we filter the data to only get the passed school's data
      if (schoolTitle) {
        const filteredData = data.filter(
          (school) => school.title === schoolTitle
        );
        displayData(filteredData);
      } else {
        console.error("No school title");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  //    Formats the data from the FS into an HTML table
  //    Takes in the FS data as JSON
  function displayData(data) {
    const scheduleTable = document.getElementById("schedule");
    scheduleTable.innerHTML = "";
  
    // Iterate through the school's days
    // This builds each row of the table
    data.forEach((school) => {
      school.days.forEach((day) => {
        let formattedDate;
        if (day.date === "TBD") {
          formattedDate = "TBD";
        } else {
          const date = new Date(day.date);
          formattedDate = `${getDayName(date)}: ${date.toLocaleDateString()}`;
        }
  
        console.log(formattedDate);
        const morningEvents = eventsToHTML(day.morning, "Morning");
        const afternoonEvents = eventsToHTML(day.afternoon, "Afternoon");
        // tr is the HTML tag for Table Row
        const tr = document.createElement("tr");
        // writes the data into the row
        // td is the HTML tag for each data cell
        tr.innerHTML = `<td>${formattedDate}</td><td>${morningEvents}</td><td>${afternoonEvents}</td>`;
        // adds the row into the schedule table
        scheduleTable.appendChild(tr);
      });
    });
  }

  //    Puts events into HTML format
  function eventsToHTML(events, period) {
    if (!events || events.length === 0) return "";

    //  Filter out empty/null event titles, iterate through them and format them
    const formattedEvents = events
      .filter((event) => event && event.title) // Add a check for null or undefined
      .map((event) => `<li>${event.title}: ${event.duration}</li>`);

    if (formattedEvents.length === 0) return "";

    // Generate HTML formatted bullet list with a class for styling
    const list = `<ul class="event-list">${formattedEvents.join("")}</ul>`;

    return list;
  }

  //Given a date, returns what day of the week it is
  function getDayName(date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  }

  //    Gets the params of a url search, params are whatever comes after a "?" in a url
  //    Ex: https://www.amazon.com/s?k=bic+pens --> An amazon link in which the search params are k=bic+pens
  //    --> I'm searching for Bic Pens on Amazon
  const urlParams = new URLSearchParams(window.location.search);
  //    Gets value of the param with school=<value>
  //    <value> should be the name of the school EXACTLY AS DICTATED IN THE GOOGLE SPREADSHEET SHEET NAMES
  //    If the school name doesn't exactly match one of the school's sheet name in the spreadsheet, it'll throw an error
  const schoolTitle = urlParams.get("school");
  //    Calls the main filterer passing the school name
  fetchAndFilterData(schoolTitle);