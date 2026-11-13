import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found | Bitwyse')
  return (
    <div className="utility-page-wrap">
      <div className="utility-page-content">
        <h2>Page not found</h2>
        <p>The page you are looking for doesn't exist.</p>
        <Link to="/" className="w-button">Back to home</Link>
      </div>
    </div>
  )
}
