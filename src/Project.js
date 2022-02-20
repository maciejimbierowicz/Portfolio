import React from 'react';

function Project({projects, current}) {
    return (<>
    {projects.map((project)=> {
        const {id, title, img, desc, link} = project;
        return <article key={id}>
          <div className={id === current ? 'slide active' : 'slide'}>
          {id === current && (
            <>
          <img className='project-image' src={img} alt={title}></img>
          <h3>{title}</h3>
          <p>{desc}</p><br></br>
          <p><a href={link}>Link</a></p>
          </>
          )}
          </div>
        </article>
      })}</>)
}

export default Project;