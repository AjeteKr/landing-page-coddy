// API service for authentication
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

export const authService = {
  // Login user
  async login(email, password) {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return response.json();
  },

  // Register new user
  async register(name, email, password) {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return response.json();
  },

  // Verify token
  async verifyToken(token) {
    const response = await fetch(`${API_URL}/api/auth/verify-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return response.json();
  }
};

// API service for courses
export const courseService = {
  // Get all public courses
  async getAllCourses() {
    const response = await fetch(`${API_URL}/api/public/courses`);

    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }

    return response.json();
  },

  // Get course by ID
  async getCourseById(id) {
    const response = await fetch(`${API_URL}/api/public/courses/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch course');
    }

    return response.json();
  },

  // Get courses by category
  async getCoursesByCategory(category) {
    const response = await fetch(`${API_URL}/api/public/courses/category/${category}`);

    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }

    return response.json();
  }
};

// API service for landing page
export const landingService = {
  // Get landing page info
  async getInfo() {
    const response = await fetch(`${API_URL}/api/landing/info`);

    if (!response.ok) {
      throw new Error('Failed to fetch landing info');
    }

    return response.json();
  },

  // Get testimonials
  async getTestimonials() {
    const response = await fetch(`${API_URL}/api/landing/testimonials`);

    if (!response.ok) {
      throw new Error('Failed to fetch testimonials');
    }

    return response.json();
  },

  // Get statistics
  async getStats() {
    const response = await fetch(`${API_URL}/api/landing/stats`);

    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }

    return response.json();
  }
};

export default {
  auth: authService,
  courses: courseService,
  landing: landingService
};
