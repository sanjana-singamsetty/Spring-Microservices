import React from "react";
import { useNavigate } from "react-router-dom";
import { TestData } from "../data/Spring";
import Card from "./Card";

const Dashwork: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="section">
      <div className="card-grid">
        {TestData.map((item, index) => (
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
  );
};

export default Dashwork;
