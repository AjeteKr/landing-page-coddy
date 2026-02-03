import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import './PublicCourses.css';

function PublicCourses() {
  const navigate = useNavigate();
  const [selectedAgeFilter, setSelectedAgeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const ageRanges = ['all', '5-8', '9-11', '12-14', '15-18'];

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchesAge = selectedAgeFilter === 'all' || course.ageRange.includes(selectedAgeFilter.split('-')[0]);
      const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesAge && matchesSearch;
    });
  }, [selectedAgeFilter, searchQuery]);

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="public-courses-page">
      {/* Navigation */}
      <nav className="courses-nav">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => navigate('/')}>
            <span className="logo-icon">🚀</span>
            <span className="logo-text">CODDY School Kosovo</span>
          </div>
          <div className="nav-buttons">
            <button className="nav-btn back-btn" onClick={() => navigate('/')}>
              ← Back Home
            </button>
            <button className="nav-btn signin-btn" onClick={() => navigate('/login')}>
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="courses-header">
        <div className="container">
          <h1>Our Courses</h1>
          <p className="header-subtitle">
            Choose the perfect course for your age and interests. From beginners to advanced learners!
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="container">
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="age-filters">
            <p className="filter-label">Filter by Age:</p>
            <div className="filter-buttons">
              {ageRanges.map(age => (
                <button
                  key={age}
                  className={`filter-btn ${selectedAgeFilter === age ? 'active' : ''}`}
                  onClick={() => setSelectedAgeFilter(age)}
                >
                  {age === 'all' ? 'All Ages' : `${age} years`}
                </button>
              ))}
            </div>
          </div>

          <p className="results-count">
            Showing {filteredCourses.length} of {coursesData.length} courses
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-grid-section">
        <div className="container">
          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map(course => (
                <div key={course.id} className="course-card">
                  <div className="course-header">
                    <div className="course-emoji">{course.image}</div>
                    <span className="age-badge">Ages {course.ageRange}</span>
                  </div>

                  <div className="course-body">
                    <h3 className="course-title">{course.name}</h3>
                    <p className="course-description">{course.shortDescription}</p>

                    <div className="course-meta">
                      <div className="meta-item">
                        <span className="meta-icon">⏱️</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">💶</span>
                        <span>€{course.price}/month</span>
                      </div>
                    </div>

                    <ul className="course-highlights">
                      {course.whatYouLearn.slice(0, 2).map((item, idx) => (
                        <li key={idx}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="course-btn"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-courses">
              <p className="no-courses-emoji">🔍</p>
              <h3>No courses found</h3>
              <p>Try adjusting your filters or search query</p>
              <button
                className="reset-btn"
                onClick={() => {
                  setSelectedAgeFilter('all');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="courses-cta">
        <div className="container">
          <h2>Not sure which course is right for you?</h2>
          <p>Contact us or browse more information about each course to find the perfect fit!</p>
          <button className="cta-btn" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="courses-footer">
        <div className="footer-content">
          <p>&copy; 2026 CODDY School Kosovo. All rights reserved.</p>
          <p>Leading programming school for children ages 5-18</p>
        </div>
      </footer>
    </div>
  );
}

export default PublicCourses;
