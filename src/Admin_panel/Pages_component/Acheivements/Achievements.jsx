import { useState } from 'react';
import './Achievements.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function Achievements() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name'); 
  const [sortDirection, setSortDirection] = useState('asc'); 
  const [achievementsData, setAchievementsData] = useState([
    { name: 'John Doe', class: '2020', branch: 'Computer Science', position: 'Team Leader', achievements: 'Developed an AI project' },
    { name: 'Jane Smith', class: '2019', branch: 'Electrical Engineering', position: 'Researcher', achievements: 'Published 3 papers' },
  
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newAchievement, setNewAchievement] = useState({
    name: '',
    class: '',
    branch: '',
    position: '',
    achievements: '',
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
    const newAchievementsData = achievementsData.filter((_, i) => i !== index);
    setAchievementsData(newAchievementsData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewAchievement(achievementsData[index]);
    setShowForm(true);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewAchievement({ ...newAchievement, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
   
      const updatedData = achievementsData.map((entry, i) => (i === editIndex ? newAchievement : entry));
      setAchievementsData(updatedData);
      setEditIndex(null);
    } else {
     
      setAchievementsData([...achievementsData, newAchievement]);
    }
    setNewAchievement({ name: '', class: '', branch: '', position: '', achievements: '' });
    setShowForm(false);
  };

  const filteredData = achievementsData.filter(entry =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.achievements.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className='achievements'>
      <h1>Achievements</h1>
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
          <option value='class'>Sort by Class</option>
          <option value='branch'>Sort by Branch</option>
          <option value='position'>Sort by Position</option>
          <option value='achievements'>Sort by Achievements</option>
        </select>
        <button className='add-button' onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleFormSubmit} className='achievements-form'>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={newAchievement.name}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Class:
            <input
              type='text'
              name='class'
              value={newAchievement.class}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Branch:
            <input
              type='text'
              name='branch'
              value={newAchievement.branch}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Position:
            <input
              type='text'
              name='position'
              value={newAchievement.position}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Achievements:
            <textarea
              name='achievements'
              value={newAchievement.achievements}
              onChange={handleFormChange}
              required
            />
          </label>
          <button type='submit'>{editIndex !== null ? 'Update Achievement' : 'Add Achievement'}</button>
        </form>
      )}

      <table className='achievements-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Branch</th>
            <th>Position</th>
            <th>Achievements</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {sortedData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.class}</td>
              <td>{entry.branch}</td>
              <td>{entry.position}</td>
              <td>{entry.achievements}</td>
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

export default Achievements;
