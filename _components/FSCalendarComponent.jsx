import './FSCalendar.css';

const FSCalendarComponent = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = ['Morning', 'Afternoon', 'Evening'];

  const moduleNames = [
    'Module 1', 'Module 2', 'Module 3',
    'Module 4', 'Module 5', 'Module 6',
    'Module 7', 'Module 8', 'Module 9',
    'Module 10', 'Module 11', 'Module 12',
    'Module 13', 'Module 14', 'Module 15',
    'Module 16', 'Module 17', 'Module 18',
    'Module 19', 'Module 20', 'Module 21',
  ];

  const moduleNamesAndDescriptions = {
    'Module 1': 'Description 1', 'Module 2': 'Description 2', 'Module 3': 'Description 3',
    'Module 4': 'Description 4', 'Module 5': 'Description 5', 'Module 6': 'Description 6',
    'Module 7': 'Description 7', 'Module 8': 'Description 8', 'Module 9': 'Description 9',
    'Module 10': 'Description 10', 'Module 11': 'Description 11', 'Module 12': 'Description 12',
    'Module 13': 'Description 13', 'Module 14': 'Description 14', 'Module 15': 'Description 15',
    'Module 16': 'Description 16', 'Module 17': 'Description 17', 'Module 18': 'Description 18',
    'Module 19': 'Description 19', 'Module 20': 'Description 20', 'Module 21': 'Description 21',
  }

  const [selectedModule, setSelectedModule] = React.useState(null);
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = (moduleName) => {
    console.log("modal open")
    setSelectedModule(moduleName);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedModule(null);
    setModalOpen(false);
  };

  const renderCard = (day, timeSlot) => {
    const index = days.indexOf(day) * timeSlots.length + timeSlots.indexOf(timeSlot);
    const moduleName = moduleNames[index];

    return (
      <div
        key={index}
        className="card"
      >
        <button
          onClick={() => openModal(moduleName)}
        >
          {moduleName}
        </button>
      </div>
    );
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedModule}</h2>
            <p>{moduleNamesAndDescriptions[selectedModule]}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
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

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedModule}</h2>
            <p>{moduleNamesAndDescriptions[selectedModule]}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FSCalendarComponent;
