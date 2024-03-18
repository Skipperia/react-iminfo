import React from 'react';
import '../assets/styles/ResourceUsage.css'

const ResourceUsage = ({ memoryUsage, cpuUsage, bandwidthUsage }) => {
  return (
    <div className="resource-usage">
      <div className="resource">
        <label>Memory Usage</label>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${memoryUsage}%` }}>{memoryUsage}%</div>
        </div>
      </div>

      <div className="resource">
        <label>CPU Usage</label>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${cpuUsage}%` }}>{cpuUsage}%</div>
        </div>
      </div>

      <div className="resource">
        <label>Bandwidth Usage</label>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${bandwidthUsage}%` }}>{bandwidthUsage}%</div>
        </div>
      </div>
    </div>
  );
}

export default ResourceUsage;
