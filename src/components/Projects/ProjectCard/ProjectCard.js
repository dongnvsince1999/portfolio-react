import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";

import "./ProjectCard.css";

function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <>
          <Card key={index}>
            <CardLeft>
              <div style={{
                backgroundColor: "white",
                boxShadow: "8px 8px 0 0 #ddd"
              }}>
                <img src={list.img} alt={list.name} />
              </div>
            </CardLeft>
            <CardRight>
              <h4 className="project-title">{list.title}</h4>
              <p>{list.description}</p>
              <Stack>
                <span className="stackTitle">Tech Stack -
                  <span className="tags">          {list.tech_stack}
                  </span>
                </span>
              </Stack>
              <BtnGroup>
                <a
                  className="btn btn2 PrimaryBtn"
                  href={list.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                {list.demo_url && <a
                  className="btn SecondarBtn"
                  href={list.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link ➜
                </a>
                }
              </BtnGroup>
            </CardRight>
          </Card>
        </>
      ))}
    </>
  );
}

export default ProjectCard;
