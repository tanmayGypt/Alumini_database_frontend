import { useState, useEffect } from 'react';
import './News.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Requests from '../Request/Requests';

function News1() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [newsData, setNewsData] = useState([
    { name: 'Alice Johnson', branch: 'Computer Science', classOf: '2020', newsRelated: 'Alice awarded Best Innovator 2023' },
    { name: 'Bob Smith', branch: 'Mechanical Engineering', classOf: '2019', newsRelated: 'Bob led a new robotics project' },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newNews, setNewNews] = useState({
    name: '',
    branch: '',
    classOf: '',
    newsRelated: ''
  });
  const [editIndex, setEditIndex] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [confirmEditMessage, setConfirmEditMessage] = useState('');
  const [actionType, setActionType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([
    { id: 1, name: 'Sumit', email: 'sumit@example.com', class: '2023', branch: 'Computer Science', approved: false },
    { id: 2, name: 'Rohan', email: 'rohan@example.com', class: '2024', branch: 'Mechanical Engineering', approved: false }
  ]);
  const [showRequests, setShowRequests] = useState(false);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as needed
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
    setConfirmMessage('Are you sure you want to delete this news?');
  };

  const handleEdit = (index) => {
    setActionType('edit');
    setEditIndex(index);
    setConfirmEditMessage('Are you sure you want to edit this news?');
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewNews({ ...newNews, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (actionType === 'add') {
      setNewsData([...newsData, newNews]);
      toast.success('News item added successfully!');
    } else if (actionType === 'edit') {
      const updatedData = newsData.map((newsItem, i) => (i === editIndex ? newNews : newsItem));
      setNewsData(updatedData);
      toast.success('News item updated successfully!');
    }
    resetForm();
  };

  const handleConfirmAction = () => {
    if (actionType === 'delete') {
      const updatedData = newsData.filter((_, i) => i !== editIndex);
      setNewsData(updatedData);
      toast.success('News item deleted successfully!');
    }
    resetForm();
  };

  const handleConfirmEditAction = () => {
    setNewNews(newsData[editIndex]);
    setShowForm(true);
    setConfirmEditMessage('');
  };

  const resetForm = () => {
    setShowForm(false);
    setConfirmMessage('');
    setConfirmEditMessage('');
    setNewNews({
      name: '',
      branch: '',
      classOf: '',
      newsRelated: '',
    });
    setEditIndex(null);
    setActionType(null);
  };
  const handleApproval = (id) => {
    const updatedRequests = requests.map(request =>
      request.id === id ? { ...request, approved: true } : request
    );
    setRequests(updatedRequests);
    toast.success('Request approved!');
  };

  const handleRejection = (id) => {
    const updatedRequests = requests.map(request =>
      request.id === id ? { ...request, approved: false } : request
    );
    setRequests(updatedRequests);
    toast.success('Request rejected!');
  };

  const filteredData = newsData.filter(newsItem =>
    newsItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    newsItem.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    newsItem.classOf.toLowerCase().includes(searchTerm.toLowerCase()) ||
    newsItem.newsRelated.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <div className='news'>
      <h1>News</h1>
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
          <option value='branch'>Sort by Branch</option>
          <option value='classOf'>Sort by Class Of</option>
          <option value='newsRelated'>Sort by News Related</option>
        </select>
        <button
          className='add-button'
          onClick={() => {
            setNewNews({
              name: '',
              branch: '',
              classOf: '',
              newsRelated: '',
            });
            setShowForm(!showForm);
            setActionType('add');
          }}
        >
          {showForm ? 'Cancel' : 'Add'}
        </button>
        <button className='view-button' onClick={() => setShowRequests(!showRequests)}>
          {showRequests ? 'Hide Requests' : 'View Requests'}
        </button>
      </div>

      {confirmMessage && (
        <div className="confirm-message">
          {confirmMessage}
          <button type='button' onClick={handleConfirmAction}>OK</button>
          <button type='button' onClick={resetForm}>Cancel</button>
        </div>
      )}

      {confirmEditMessage && (
        <div className="confirm-message">
          {confirmEditMessage}
          <button type='button' onClick={handleConfirmEditAction}>OK</button>
          <button type='button' onClick={resetForm}>Cancel</button>
        </div>
      )}

      {showForm && !confirmMessage && !confirmEditMessage && (
        <form onSubmit={handleFormSubmit} className='news-form'>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={newNews.name}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Branch:
            <input
              type='text'
              name='branch'
              value={newNews.branch}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Class Of:
            <input
              type='text'
              name='classOf'
              value={newNews.classOf}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            News Related:
            <input
              type='text'
              name='newsRelated'
              value={newNews.newsRelated}
              onChange={handleFormChange}
              required
            />
          </label>
          <button type='submit'>{editIndex !== null ? 'Update News' : 'Add News'}</button>
        </form>
      )}

      {loading ? (
        <div className="loader"></div>
      ) : (
        <table className='news-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Branch</th>
              <th>Class Of</th>
              <th>News Related</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((newsItem, index) => (
              <tr key={index}>
                <td>{newsItem.name}</td>
                <td>{newsItem.branch}</td>
                <td>{newsItem.classOf}</td>
                <td>{newsItem.newsRelated}</td>
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
{showRequests && (
            <Requests requests={requests} onApprove={handleApproval} onReject={handleRejection} />
          )}
      <ToastContainer />
    </div>
  );
}

export default News1;
