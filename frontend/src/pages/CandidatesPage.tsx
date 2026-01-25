import { Search, Users, Filter, ChevronRight, MapPin, X } from 'lucide-react';
import { useState } from 'react';

function CandidatesPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
       