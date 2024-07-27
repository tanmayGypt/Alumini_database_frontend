import { useState } from 'react';
import './Networking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function Networking() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortDirection, setSortDirection] = useState('asc');
  const [networkingData, setNetworkingData] = useState([
    { name: 'Event A', position: 'Speaker', eventName: 'Tech Meetup', location: 'New York', date: '2024-09-10' },
    { name: 'Event B', position: 'Panelist', eventName: 'Innovation Summit', location: 'San Francisco', date: '2024-10-05' },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: '',
    position: '',
    eventName: '',
    location: '',
    date: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    const newSortBy = event.target.value;
    if (sortBy === newSortBy) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortDirection('asc');
    }
  };

  const handleDelete = (index) => {
    const newNetworkingData = networkingData.filter((_, i) => i !== index);
    setNetworkingData(newNetworkingData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewEvent(networkingData[index]);
    setShowForm(true);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedData = networkingData.map((event, i) => (i === editIndex ? newEvent : event));
      setNetworkingData(updatedData);
      setEditIndex(null);
    } else {
      setNetworkingData([...networkingData, newEvent]);
    }
    setNewEvent({ name: '', position: '', eventName: '', location: '', date: '' });
    setShowForm(false);
  };

  const filteredData = networkingData.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className='networking'>
      <h1>Networking</h1>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='search-input'
        />
        <select onChange={handleSortChange} value={sortBy} className='sort-select'>
          <option value='name'>Sort by Name</option>
          <option value='position'>Sort by Position</option>
          <option value='eventName'>Sort by Event Name</option>
          <option value='location'>Sort by Location</option>
          <option value='date'>Sort by Date</option>
        </select>
        <button className='add-button' onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleFormSubmit} className='networking-form'>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={newEvent.name}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Position:
            <input
              type='text'
              name='position'
              value={newEvent.position}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Event Name:
            <input
              type='text'
              name='eventName'
              value={newEvent.eventName}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Location:
            <input
              type='text'
              name='location'
              value={newEvent.location}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Date:
            <input
              type='date'
              name='date'
              value={newEvent.date}
              onChange={handleFormChange}
              required
            />
          </label>
          <button type='submit'>{editIndex !== null ? 'Update Event' : 'Add Event'}</button>
        </form>
      )}

      <table className='networking-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Event Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.position}</td>
              <td>{event.eventName}</td>
              <td>{event.location}</td>
              <td>{event.date}</td>
              <td>
                <button
                  className='action-button'
                  onClick={() => handleEdit(index)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className='action-button'
                  onClick={() => handleDelete(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Networking;
