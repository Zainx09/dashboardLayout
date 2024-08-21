import React from 'react';
import './SummaryCard.css'; // We'll create this CSS file next for styling

const SummaryCard = ({ title, value, description, color }) => {
    return (
        <div className="summary-card" style={{ backgroundColor: color, width: '20%' }}>
            <div className="summary-card-content">
                <h2>{value}</h2>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="summary-card-icon">
                <i className="fa fa-chart-line"></i>
            </div>
        </div>
    );
};

export default SummaryCard;
