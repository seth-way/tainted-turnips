import './Footer.css';
import gitHubLogo from '../../assets/images/github.svg';
import linkedinLogo from '../../assets/images/linkedin.svg';

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
          <a
            href={githubMarshall}
            target='_blank'
            rel='noreferrer'
            aria-label="Visit Marshall's GitHub profile"
          >
            <img src={gitHubLogo} alt='github logo' />
          </a>
          <h4>Marshall Hotaling</h4>

          <a
            href={linkedInMarshall}
            target='_blank'
            rel='noreferrer'
            aria-label="Visit Marshall's LinkedIn profile"
          >
            <img src={linkedinLogo} alt='linkedIn logo' />
          </a>

          <hr />

          <a
            href={githubSeth}
            target='_blank'
            rel='noreferrer'
            aria-label="Visit Marshall's GitHub profile"
          >
            <img src={gitHubLogo} alt='github logo' />
          </a>
          <h4>Seth Way</h4>

          <a
            href={linkedInSeth}
            target='_blank'
            rel='noreferrer'
            aria-label="Visit Marshall's LinkedIn profile"
          >
            <img src={linkedinLogo} alt='linkedIn logo' />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
