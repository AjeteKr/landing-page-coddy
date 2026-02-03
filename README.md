# Coddy NonLogin Frontend

Frontend application for Coddy's public-facing features and authentication.

## Overview

This is a separate React application that handles:
- Public landing page
- Course browsing
- User registration
- User login
- Session management

## Features

✅ Responsive design (Desktop, Tablet, Mobile)
✅ Multi-language support (English, Albanian)
✅ Secure user authentication
✅ Course browsing interface
✅ Session persistence
✅ Modern UI with Tailwind-like CSS
✅ Error handling and validation
✅ Loading states

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create .env file from template
cp .env.example .env

# Update .env with your configuration
```

### Running

```bash
# Development (port 3001 by default)
npm start

# Build for production
npm build

# Run tests
npm test
```

## Environment Variables

```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
REACT_APP_API_URL=http://localhost:5001
REACT_APP_ENV=development
```

## Project Structure

```
frontend/
├── public/              # Static files
│   └── index.html      # Main HTML file
├── src/
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API services
│   ├── locales/        # i18n translation files
│   ├── App.js          # Main App component
│   ├── App.css         # App styles
│   ├── index.js        # Entry point
│   ├── index.css       # Global styles
│   ├── i18n.js         # i18n configuration
│   └── supabaseClient.js # Supabase client
├── package.json        # Dependencies
├── config-overrides.js # Webpack overrides
└── .env.example        # Environment template
```

## Components

### Public Components
- **PublicLanding** - Main landing page with hero and features
- **PublicCourses** - Course listing and browsing
- **Login** - User login form
- **Register** - User registration form
- **Navbar** - Navigation and authentication controls
- **LanguageSwitcher** - Language selection

## Available Routes

| Route | Component | Auth Required |
|-------|-----------|---------------|
| `/` | PublicLanding | No |
| `/courses` | PublicCourses | No |
| `/login` | Login | No |
| `/register` | Register | No |

## Internationalization

Supports English and Albanian with i18next:
- Common translations: `locales/*/common.json`
- Landing page: `locales/*/landing.json`
- Authentication: `locales/*/auth.json`

Add new languages by creating translation files and updating `src/i18n.js`.

## Authentication Flow

1. User registers or logs in
2. Backend returns JWT token
3. Token stored in localStorage
4. Token used for API requests
5. Session restored on page refresh
6. Logout clears token and user data

## Security Best Practices

1. **HTTPS Only** - Always use HTTPS in production
2. **Token Storage** - Tokens stored in localStorage (consider httpOnly cookies)
3. **Input Validation** - All inputs validated on client and server
4. **CORS** - Restricted to allowed origins
5. **Password Requirements** - Enforced on registration
6. **Session Management** - Automatic session restoration

## API Integration

All API calls use the base URL from `REACT_APP_API_URL`. Endpoints:

```
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/verify-token
GET    /api/public/courses
GET    /api/public/courses/:id
GET    /api/landing/info
GET    /api/landing/stats
```

## Styling

Uses CSS with mobile-first responsive design:
- Mobile: 480px and down
- Tablet: 481px - 768px
- Desktop: 769px and up

Color scheme:
- Primary: #667eea
- Secondary: #764ba2
- Success: #28a745
- Error: #dc3545
- Background: #f8f9fa

## Performance

- Code splitting with React Router
- Lazy loading of components
- Image optimization
- CSS minification
- Fast refresh during development

## Testing

```bash
# Run tests
npm test

# Coverage report
npm test -- --coverage
```

## Deployment

### Vercel

```bash
vercel deploy
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### GitHub Pages

```bash
npm run build
# Push build/ to gh-pages branch
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Troubleshooting

### CORS Issues
- Ensure backend is running
- Check `REACT_APP_API_URL` is correct
- Verify backend CORS configuration

### Login Issues
- Check network tab for failed requests
- Verify credentials are correct
- Ensure token is being saved

### Styling Issues
- Clear browser cache
- Check CSS file imports
- Use developer tools to inspect

## Support & Maintenance

- Keep dependencies updated
- Monitor console for errors
- Test on multiple devices
- Review analytics regularly

## License

ISC
