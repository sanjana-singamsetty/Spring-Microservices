import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Sidebar from "./Sidebar";
import { FinanceData } from "../data/DSA";

const Finance: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Sidebar />
      <section className="section">
        <div className="card-grid">
          {FinanceData.map((item, index) => (
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

export default Finance;
