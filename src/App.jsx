import { useState } from "react";
import AccordionComponent from "./components/Accordion/AccordionComponent";
import TableComponent from "./components/Table/TableComponent";
import DataFromJSON from "./data/data.json";
import "./App.css";

function App() {
  const [expanded, setExpanded] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) =>
      isExpanded
        ? [...prevExpanded, panel]
        : prevExpanded.filter((item) => item !== panel)
    );
  };

  return (
    <>
      <div className="container">
        {DataFromJSON.EMPRESAS.map((empresa) => (
          <AccordionComponent
            key={empresa.ID_EMPRESA}
            name={`empresa${empresa.ID_EMPRESA}`}
            title={`Empresa${empresa.ID_EMPRESA}`}
            expanded={expanded}
            handleChange={handleChange}
          >
            {empresa.AREAS.map((area) => (
              <AccordionComponent
                key={area.ID_AREA}
                name={`Area${empresa.ID_EMPRESA}${area.ID_AREA}`}
                title={`${area.NOMBRE_AREA}`}
                expanded={expanded}
                handleChange={handleChange}
              >
                <TableComponent rows={area.EMPLEADOS} />
              </AccordionComponent>
            ))}
          </AccordionComponent>
        ))}
      </div>
    </>
  );
}

export default App;
