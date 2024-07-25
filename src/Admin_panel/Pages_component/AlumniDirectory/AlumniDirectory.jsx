import { useState } from 'react';
import './AlumniDirectory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function AlumniDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('fullName');
  const [alumniData, setAlumniData] = useState([
    {
      fullName: 'John Doe',
      classOf: '2020',
      email: 'john.doe@example.com',
      branch: 'Computer Science',
      phoneNumber: '123-456-7890',
      company: 'Tech Corp',
    },
    {
      fullName: 'Jane Smith',
      classOf: '2019',
      email: 'jane.smith@example.com',
      branch: 'Electrical Engineering',
      phoneNumber: '987-654-3210',
      company: 'Innovate Ltd',
    },
    
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newAlumnus, setNewAlumnus] = useState({
    fullName: '',
    classOf: '',
    email: '',
    branch: '',
    phoneNumber: '',
    company: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleDelete = (index) => {
    const newAlumniData = alumniData.filter((_, i) => i !== index);
    setAlumniData(newAlumniData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewAlumnus(alumniData[index]);
    setShowForm(true);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewAlumnus({ ...newAlumnus, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      
      const updatedData = alumniData.map((alumnus, i) => (i === editIndex ? newAlumnus : alumnus));
      setAlumniData(updatedData);
      setEditIndex(null);
    } else {
      
      setAlumniData([...alumniData, newAlumnus]);
    }
    setNewAlumnus({ fullName: '', classOf: '', email: '', branch: '', phoneNumber: '', company: '' });
    setShowForm(false);
  };

  const filteredData = alumniData.filter(alumnus =>
    alumnus.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumnus.classOf.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumnus.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumnus.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumnus.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumnus.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <div className='alumni-directory'>
      <h1>Alumni Directory</h1>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='search-input'
        />
        <select onChange={handleSortChange} value={sortBy} className='sort-select'>
          <option value='fullName'>Sort by Full Name</option>
          <option value='classOf'>Sort by Class Of</option>
          <option value='email'>Sort by Email</option>
          <option value='branch'>Sort by Branch</option>
          <option value='phoneNumber'>Sort by Phone Number</option>
          <option value='company'>Sort by Company</option>
        </select>
        <button className='add-button' onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleFormSubmit} className='alumni-form'>
          <label>
            Full Name:
            <input
              type='text'
              name='fullName'
              value={newAlumnus.fullName}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Class Of:
            <input
              type='text'
              name='classOf'
              value={newAlumnus.classOf}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={newAlumnus.email}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Branch:
            <input
              type='text'
              name='branch'
              value={newAlumnus.branch}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type='text'
              name='phoneNumber'
              value={newAlumnus.phoneNumber}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Company:
            <input
              type='text'
              name='company'
              value={newAlumnus.company}
              onChange={handleFormChange}
              required
            />
          </label>
          <button type='submit'>{editIndex !== null ? 'Update Alumnus' : 'Add Alumnus'}</button>
        </form>
      )}

      <table className='alumni-table'>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Class Of</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Phone Number</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((alumnus, index) => (
            <tr key={index}>
              <td>{alumnus.fullName}</td>
              <td>{alumnus.classOf}</td>
              <td>{alumnus.email}</td>
              <td>{alumnus.branch}</td>
              <td>{alumnus.phoneNumber}</td>
              <td>{alumnus.company}</td>
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

export default AlumniDirectory;
