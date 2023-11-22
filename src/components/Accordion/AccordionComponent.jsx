import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = ({
  name,
  title,
  expanded,
  handleChange,
  children,
}) => {
  return (
    <Accordion
      expanded={expanded.includes(`${name}`)}
      onChange={handleChange(`${name}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${name}bh-content`}
        id={`${name}bh-header`}
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
