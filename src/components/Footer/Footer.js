import './Footer.css';
import SocialLink from '../SocialLink/SocialLink';

const githubMarshall = 'https://github.com/marshallhotaling';
const linkedInMarshall =
  'https://www.linkedin.com/in/marshall-hotaling-7b52a8304/';
const githubSeth = 'https://github.com/seth-way';
const linkedInSeth = 'https://www.linkedin.com/in/sethway/';

function Footer() {
  return (
    <footer>
      <div>
        <p>©2024</p>
        <p>Built By</p>
        <div className='devs'>
          <SocialLink site='github' dev='Marshall' url={githubMarshall} />
          <h4>Marshall Hotaling</h4>
          <SocialLink site='linkedin' dev='Marshall' url={linkedInMarshall} />
          <hr />
          <SocialLink site='github' dev='Seth' url={githubSeth} />
          <h4>Seth Way</h4>
          <SocialLink site='linkedin' dev='Seth' url={linkedInSeth} />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
