import { MdOutlineCatchingPokemon } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';

import '../styles/components/projectscontainer.sass';

const projects = [
  {
    id: 'pokedex',
    name: 'POKEDEX',
    icon: <MdOutlineCatchingPokemon />,
    link: 'https://github.com/EclecioPaiva/Pokedex_Eclecio_FRONT-END',
  },
  {
    id: 'todolist',
    name: 'TO DO LIST',
    icon: <FaClipboardList />,
    link: 'https://github.com/EclecioPaiva/TO-DO-LIST_REACT',
  },
];

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((pjt) => (
          <a
            href={pjt.link}
            target="_blank"
            rel="noopener noreferrer"
            className="projects-card"
            id={pjt.id}
            key={pjt.id}
          >
            {pjt.icon}
            <div className="projects-info">
              <h3>{pjt.name}</h3>
            </div>
          </a>
        ))}
      </div> 
    </section>
  );
};

export default ProjectsContainer
