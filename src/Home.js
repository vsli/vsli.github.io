import './Home.css'
import { ResponsiveEmbed } from 'react-bootstrap/ResponsiveEmbed';
function Home() {
  return (
    <div className="Home" id="Home">
      <div className="video-container m-auto">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;