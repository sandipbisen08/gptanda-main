import React from 'react';
import { Link } from 'react-router-dom';
import { FaIdCard } from 'react-icons/fa';
import './Members.scss';
import { members as sharedMembers, Member } from '../data/members';

const Members: React.FC = () => {
  const members: Member[] = sharedMembers;

  return (
    <div className="members">
      <section className="page-hero">
        <div className="container">
          <h1>ग्रामपंचायत सदस्य</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>ग्रामपंचायत सदस्य</span>
          </nav>
        </div>
      </section>

      <section className="container">
        <div className="panel">
          <h2>ग्रामपंचायत कार्यकारणी मंडळ</h2>
          <div className="diamond" />

          <ul className="member-grid">
            {members.map(m => (
              <li key={m.id} className="member-item">
                <div className="icon"><FaIdCard /></div>
                <div className="info">
                  <div className="name">{m.name}</div>
                  <div className="role">{m.role}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Members;
