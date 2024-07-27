import { useState } from 'react';
import './News.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleDelete = (index) => {
    const updatedNewsData = newsData.filter((_, i) => i !== index);
    setNewsData(updatedNewsData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewNews(newsData[index]);
    setShowForm(true);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewNews({ ...newNews, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedData = newsData.map((newsItem, i) => (i === editIndex ? newNews : newsItem));
      setNewsData(updatedData);
      setEditIndex(null);
    } else {
      setNewsData([...newsData, newNews]);
    }
    setNewNews({ name: '', branch: '', classOf: '', newsRelated: '' });
    setShowForm(false);
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
        <button className='add-button' onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add'}
        </button>
      </div>

      {showForm && (
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
    </div>
  );
}

export default News1;
