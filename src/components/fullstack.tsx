import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Sidebar from "./Sidebar";

import { FullstackeData } from "../data/fullstack";

const Fullstack: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Sidebar />
      <section className="section">
        <div className="card-grid">
          {FullstackeData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              content={item.content}
              onClick={() => {
                navigate(`/view?file=${encodeURIComponent(item.filepath)}`);
                console.log(item.filepath);
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Fullstack;
