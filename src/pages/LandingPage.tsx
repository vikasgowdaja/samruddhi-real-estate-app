import { ArrowRight, Home, Search, Shield, Star, TrendingUp, Users } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function LandingPage() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/properties" replace />;
  }

  const features = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find your perfect property with our advanced search filters and AI-powered recommendations.'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'All transactions are protected with bank-level security and verified property information.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Get guidance from our team of real estate professionals throughout your journey.'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Access real-time market data and trends to make informed investment decisions.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Home Buyer',
      content: 'Samruddhi Group of Company made finding our dream home effortless. The platform is intuitive and the support team was amazing.',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Property Investor',
      content: 'The market insights and analytics helped me make smart investment decisions. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'First-time Seller',
      content: 'Selling my property was stress-free thanks to Samruddhi Group of Company\'s comprehensive platform and expert guidance.',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className=" flex items-center justify-center">
              <img src="src\assests\logo.png" alt=""  width="200px" height="200px" />
            </div>
            {/* <span className="text-xl font-bold text-white">Samruddhi Group of Company</span> */}
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-white hover:text-emerald-200 transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Modern homes"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Find Your Perfect
              <span className="text-emerald-400"> Home</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover exceptional properties with our premium real estate platform. 
              Whether you're buying, selling, or renting, we connect you with the best opportunities in the market.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/signup"
                className="bg-emerald-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 rounded-lg transition-all hover:shadow-lg"
              >
                Get Started <ArrowRight className="w-5 h-5 inline ml-2" />
              </Link>
              <Link
                to="/login"
                className="text-lg font-semibold leading-6 text-white hover:text-emerald-200 transition-colors"
              >
                Already have an account? <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Samruddhi Group of Company?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to navigate the real estate market with confidence and ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10K+</div>
              <div className="text-lg text-gray-600">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">5K+</div>
              <div className="text-lg text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-lg text-gray-600">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their perfect homes through Samruddhi Group of Company.
          </p>
          <Link
            to="/signup"
            className="bg-white text-emerald-600 px-8 py-3 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Samruddhi Group of Company</span>
            </div>
            <p className="text-gray-400">© 2024 Samruddhi Group of Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}