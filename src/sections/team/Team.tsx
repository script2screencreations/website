import React, { useEffect } from "react";
import "./Team.css";
import Nav from "../nav/Nav";

const teamMembers = [
  { name: "Priyadarshini", role: "CEO", image: "/images/john.jpg" },
  { name: "Dhanyaa", role: "COO", image: "/images/jane.jpg" },
  { name: "Nishanth", role: "CTO", image: "/images/alex.jpg" },
  { name: "Natpu Enean", role: "CTO", image: "/images/priya.jpg" },
  { name: "SaifulHaq", role: "CMO", image: "/images/michael.jpg" },
  { name: "Ramkumar", role: "CMO", image: "/images/sara.jpg" },
];

const Team: React.FC = () => {
  // ✅ useEffect MUST be inside the component
  useEffect(() => {
    const members = document.querySelectorAll(".team-member");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    members.forEach((m) => observer.observe(m));

    return () => {
      members.forEach((m) => observer.unobserve(m));
    };
  }, []);

  return (
    <div className="team-wrapper">
      <Nav />
      <h1>Our Team</h1>

      {teamMembers.map((member, index) => (
        <div
          className={`team-member ${index % 2 === 0 ? "left" : "right"}`}
          key={member.name}
        >
          <img src={member.image} alt={member.name} />
          <div className="member-info">
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
