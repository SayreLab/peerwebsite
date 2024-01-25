import './FSCalendar.css';

const FSCalendarComponent = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = ['Morning', 'Afternoon', 'Evening'];

  const cardTitles = [
    'Module 1', 'Module 2', 'Module 3',
    'Module 4', 'Module 5', 'Module 6',
    'Module 7', 'Module 8', 'Module 9',
    'Module 10', 'Module 11', 'Module 12',
    'Module 13', 'Module 14', 'Module 15',
    'Module 16', 'Module 17', 'Module 18',
    'Module 19', 'Module 20', 'Module 21',
  ];

  const renderCard = (day, timeSlot) => {
    const index = days.indexOf(day) * timeSlots.length + timeSlots.indexOf(timeSlot);
    return <div key={index} className="card">{cardTitles[index]}</div>;
  };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {days.map(day => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((slot, timeSlotIndex) => (
          <tr key={slot}>
            <td>{slot}</td>
            {days.map(day => (
              <td key={`${slot}-${day}`}>
                {renderCard(day, slot)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FSCalendarComponent;
