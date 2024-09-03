"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function IntellectualList() {
  const [intellectuals, setIntellectuals] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchIntellectuals = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No token found. Please log in.');
          return;
        }

        const response = await fetch('http://localhost:5000/intellectuals', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setIntellectuals(data);
        } else {
          // Handle different response statuses
          if (response.status === 401) {
            setError('Unauthorized. Please log in.');
            router.push('/login');
          } else if (response.status === 403) {
            setError('Access denied. Admins only.');
          } else {
            const errorText = await response.text(); // Get detailed error message
            setError(`Failed to fetch intellectuals: ${errorText}`);
          }
        }
      } catch (error) {
        console.error('Error fetching intellectuals:', error); // Log error for debugging
        setError('An error occurred. Please try again later.');
      }
    };

    fetchIntellectuals();
  }, [router]);

  if (error) {
    return <p className="text-red-500">{error}</p>; // Style the error message for better visibility
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">List of Intellectuals</h1>
      <ul>
        {intellectuals.length > 0 ? (
          intellectuals.map((intellectual) => (
            <li key={intellectual._id} className="border-b py-2">
              {intellectual.FirstName} {intellectual.LastName} - {intellectual.Email}
            </li>
          ))
        ) : (
          <p>No intellectuals found.</p>
        )}
      </ul>
    </div>
  );
}
