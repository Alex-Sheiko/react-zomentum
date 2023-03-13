import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import './styles.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <a className="header__logo" href="/">
          <LogoIcon />
        </a>
        <nav className="header__nav">
          <a className="header__link header__link--active" href="/">
            Features
          </a>
          <a className="header__link" href="/">
            Blog
          </a>
          <a className="header__link" href="/">
            Pricing
          </a>
          <a className="header__link" href="/">
            Company
          </a>
        </nav>
        <button className="header__btn">Get a demo</button>
      </div>
    </header>
  );
};
