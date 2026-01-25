import { Search, Calendar, Users, CheckCircle, AlertCircle, ChevronRight, Filter, MapPin } from 'lucide-react';

function ElectionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section with Address Input */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Elections</h1>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl">
            Enter your address to see all upcoming elections in your area
          </p>
          
          {/* Address Search Bar */}
          <div cl