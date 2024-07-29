import { useState, useEffect } from 'react';
import './AlumniDirectory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AlumniDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('fullName');
  const [alumniData, setAlumniData] = useState([
    {
      fullName: 'piyush Doe',
      classOf: '2070',
      email: 'john.doe@example.com',
      branch: 'Computer Science',
      phoneNumber: '123-456-7890',
      company: 'Tech Corp',
    },
    {
      fullName: 'kiran joshi',
      classOf: '2026',
      email: 'johny.doe@example.com',
      branch: 'Computer Science and core',
      phoneNumber: '123-456-0000',
      company: 'Tech Corparate',
    },
    {
      fullName: 'lane Smith',
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
  const [confirmMessage, setConfirmMessage] = useState('');
  const [confirmEditMessage, setConfirmEditMessage] = useState('');
  const [actionType, setActionType] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 1000); 
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleDelete = (index) => {
    setActionType('delete');
    setEditIndex(index);
    setConfirmMessage('Are you sure you want to delete this alumnus?');
  };

  const handleEdit = (index) => {
    setActionType('edit');
    setEditIndex(index);
    setNewAlumnus({ ...alumniData[index] }); 
    setShowForm(true);
    setConfirmEditMessage('Are you sure you want to edit this alumnus?');
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewAlumnus({ ...newAlumnus, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (actionType === 'add') {
      setAlumniData([...alumniData, newAlumnus]);
      toast.success('New alumnus added successfully!');
    } else if (actionType === 'edit') {
      const updatedData = alumniData.map((alumnus, i) =>
        i === editIndex ? newAlumnus : alumnus
      );
      setAlumniData(updatedData);
      toast.success('Alumnus updated successfully!');
    }
    resetForm();
  };

  const handleConfirmAction = () => {
    if (actionType === 'delete') {
      const updatedData = alumniData.filter((_, i) => i !== editIndex);
      setAlumniData(updatedData);
      toast.success('Alumnus deleted successfully!');
    }
    resetForm();
  };

  const handleConfirmEditAction = () => {
    setShowForm(true);
    setConfirmEditMessage('');
  };

  const resetForm = () => {
    setShowForm(false);
    setConfirmMessage('');
    setConfirmEditMessage('');
    setNewAlumnus({
      fullName: '',
      classOf: '',
      email: '',
      branch: '',
      phoneNumber: '',
      company: '',
    });
    setEditIndex(null);
    setActionType(null);
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
        <button
          className='add-button'
          onClick={() => {
            setNewAlumnus({
              fullName: '',
              classOf: '',
              email: '',
              branch: '',
              phoneNumber: '',
              company: '',
            });
            setShowForm(!showForm);
            setActionType('add');
          }}
        >
          {showForm ? 'Cancel' : 'Add'}
        </button>
      </div>

      {confirmMessage && (
        <div className="confirm-message">
          {confirmMessage}
          <button type='button' onClick={handleConfirmAction}>Yes</button>
          <button type='button' onClick={resetForm}>No</button>
        </div>
      )}

      {confirmEditMessage && (
        <div className="confirm-message">
          {confirmEditMessage}
          <button type='button' onClick={handleConfirmEditAction}>Yes</button>
          <button type='button' onClick={resetForm}>No</button>
        </div>
      )}

      {showForm && !confirmMessage && !confirmEditMessage && (
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
          <button type='submit'>{actionType === 'add' ? 'Add Alumnus' : 'Update Alumnus'}</button>
        </form>
      )}

      {isLoading ? (
        <div className='loader'></div>
      ) : (
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
      )}

      <ToastContainer />
    </div>
  );
}

export default AlumniDirectory;
