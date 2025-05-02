import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/PersonDetail.css";
import { Person } from "../lib/types";
import { fetchPersonDetails } from "../services/api";


function PersonDetail() {
    const { id } = useParams<{ id: string }>();
    const [person, setPerson] = useState<Person | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const load = async () => {
          try {
            const data = await fetchPersonDetails(id!);
            setPerson(data);
          } catch (error) {
            console.error(error);
          }
        };
      
        load();
      }, [id]);

      if (!person) return <div className="loading">Loading...</div>;

      return (
        <div className="person-detail-container">
          <button className="back-button" onClick={() => navigate(-1)}>
            ← Back
          </button>
    
          <div className="person-header">
            {person.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
                alt={person.name}
                className="person-img"
              />
            )}
            <div className="person-info">
              <h1>{person.name}</h1>
              <p><strong>Department:</strong> {person.known_for_department}</p>
              <p><strong>Birthday:</strong> {person.birthday}</p>
              <p><strong>Birthplace:</strong> {person.place_of_birth}</p>
            </div>
          </div>
    
          <div className="biography">
            <h2>Biography</h2>
            <p>{person.biography || "No biography available."}</p>
          </div>
        </div>
      );
}

export default PersonDetail;