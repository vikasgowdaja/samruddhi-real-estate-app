import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'house' | 'apartment' | 'condo' | 'townhouse';
  status: 'sale' | 'rent';
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
    lat?: number;
    lng?: number;
  };
  images: string[];
  features: string[];
  ownerId: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  createdAt: string;
  updatedAt: string;
}

interface PropertiesContextType {
  properties: Property[];
  addProperty: (property: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProperty: (id: string, property: Partial<Property>) => void;
  deleteProperty: (id: string) => void;
  getProperty: (id: string) => Property | undefined;
  searchProperties: (query: string, filters?: any) => Property[];
}

const PropertiesContext = createContext<PropertiesContextType | undefined>(undefined);

// Mock properties data
const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    description: 'Beautiful modern apartment in the heart of downtown with stunning city views. Features include hardwood floors, stainless steel appliances, and floor-to-ceiling windows.',
    price: 450000,
    type: 'apartment',
    status: 'sale',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    location: {
      address: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      lat: 37.7749,
      lng: -122.4194
    },
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['City View', 'Hardwood Floors', 'Stainless Appliances', 'Balcony', 'Gym Access', 'Parking'],
    ownerId: '2',
    ownerName: 'John Smith',
    ownerPhone: '+1 (555) 987-6543',
    ownerEmail: 'john@example.com',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Luxury Family Home',
    description: 'Spacious 4-bedroom family home in prestigious neighborhood. Features include a gourmet kitchen, master suite with walk-in closet, and beautifully landscaped backyard.',
    price: 2850,
    type: 'house',
    status: 'rent',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    location: {
      address: '456 Oak Avenue',
      city: 'Palo Alto',
      state: 'CA',
      zip: '94301',
      lat: 37.4419,
      lng: -122.1430
    },
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Gourmet Kitchen', 'Master Suite', 'Backyard', 'Garage', 'Fireplace', 'Walk-in Closets'],
    ownerId: '1',
    ownerName: 'Admin User',
    ownerPhone: '+1 (555) 123-4567',
    ownerEmail: 'admin@estatehub.com',
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z'
  },
  {
    id: '3',
    title: 'Cozy Studio Loft',
    description: 'Charming studio loft perfect for young professionals. Open floor plan with exposed brick walls, high ceilings, and modern amenities.',
    price: 320000,
    type: 'apartment',
    status: 'sale',
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    location: {
      address: '789 Industrial Way',
      city: 'Oakland',
      state: 'CA',
      zip: '94607',
      lat: 37.8044,
      lng: -122.2712
    },
    images: [
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Exposed Brick', 'High Ceilings', 'Open Floor Plan', 'Modern Appliances', 'Near Transit'],
    ownerId: '2',
    ownerName: 'John Smith',
    ownerPhone: '+1 (555) 987-6543',
    ownerEmail: 'john@example.com',
    createdAt: '2024-01-20T09:15:00Z',
    updatedAt: '2024-01-20T09:15:00Z'
  }
];

export function PropertiesProvider({ children }: { children: ReactNode }) {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const storedProperties = localStorage.getItem('estatehub_properties');
    if (storedProperties) {
      setProperties(JSON.parse(storedProperties));
    } else {
      setProperties(mockProperties);
      localStorage.setItem('estatehub_properties', JSON.stringify(mockProperties));
    }
  }, []);

  const saveProperties = (newProperties: Property[]) => {
    setProperties(newProperties);
    localStorage.setItem('estatehub_properties', JSON.stringify(newProperties));
  };

  const addProperty = (propertyData: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProperty: Property = {
      ...propertyData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const newProperties = [...properties, newProperty];
    saveProperties(newProperties);
  };

  const updateProperty = (id: string, propertyData: Partial<Property>) => {
    const newProperties = properties.map(property =>
      property.id === id
        ? { ...property, ...propertyData, updatedAt: new Date().toISOString() }
        : property
    );
    saveProperties(newProperties);
  };

  const deleteProperty = (id: string) => {
    const newProperties = properties.filter(property => property.id !== id);
    saveProperties(newProperties);
  };

  const getProperty = (id: string) => {
    return properties.find(property => property.id === id);
  };

  const searchProperties = (query: string, filters?: any) => {
    let filtered = properties;

    if (query) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(query.toLowerCase()) ||
        property.description.toLowerCase().includes(query.toLowerCase()) ||
        property.location.city.toLowerCase().includes(query.toLowerCase()) ||
        property.location.address.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (filters) {
      if (filters.type) {
        filtered = filtered.filter(property => property.type === filters.type);
      }
      if (filters.status) {
        filtered = filtered.filter(property => property.status === filters.status);
      }
      if (filters.minPrice) {
        filtered = filtered.filter(property => property.price >= filters.minPrice);
      }
      if (filters.maxPrice) {
        filtered = filtered.filter(property => property.price <= filters.maxPrice);
      }
      if (filters.bedrooms) {
        filtered = filtered.filter(property => property.bedrooms >= filters.bedrooms);
      }
    }

    return filtered;
  };

  const value = {
    properties,
    addProperty,
    updateProperty,
    deleteProperty,
    getProperty,
    searchProperties
  };

  return <PropertiesContext.Provider value={value}>{children}</PropertiesContext.Provider>;
}

export function useProperties() {
  const context = useContext(PropertiesContext);
  if (context === undefined) {
    throw new Error('useProperties must be used within a PropertiesProvider');
  }
  return context;
}