import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
    <div className="text-8xl font-black text-white/5">404</div>
    <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
    <p className="text-white/40 max-w-sm">
      The page you're looking for doesn't exist. Let's get you back home.
    </p>
    <Link to="/" className="btn-primary px-6 py-3">
      ← Back Home
    </Link>
  </div>
);

export default NotFound;
