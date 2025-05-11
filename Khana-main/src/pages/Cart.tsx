import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, ShoppingCart } from 'lucide-react';

const Cart: React.FC = () => {
  // This would typically come from an API or state management
  const cartItems: any[] = [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <Utensils className="w-8 h-8 text-green-600" />
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                Uni Cafes
              </h1>
            </Link>
            <Link
              to="/"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-900">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-700 mb-2">Your Cart is Empty!</h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any items to your cart yet. Browse our menu to find your favorite dishes!
              </p>
              <Link
                to="/#menu"
                className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300"
              >
                Browse Menu
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart items would be mapped here */}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2025 Uni Cafes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cart; 