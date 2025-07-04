import React from "react";
import americanExpress from "../../assets/img/svg/americanExpress.svg";
import dinersClub from "../../assets/img/svg/dinersClub.svg";
import discover from "../../assets/img/svg/discover.svg";
import master from "../../assets/img/svg/master.svg";
import paypal from "../../assets/img/svg/paypal.svg";
import visa from "../../assets/img/svg/visa.svg";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      {/* 제로베이스 링크 */}
      <div>
        <a href="https://zero-base.co.kr/" target="_blank" rel="noreferrer noopener" className="link link-hover">
          제로베이스
        </a>
      </div>

      <ul className="flex">
        {[visa, master, americanExpress, paypal, dinersClub, discover].map((type) => (
          <li key={type}>
            <img src={type} alt={type} width={36} height={24} className="icon" />
          </li>
        ))}
      </ul>

      <div className="grid grid-flow-col gap-4">
        <a
          rel="noreferrer noopener external"
          data-tip="facebook"
          className="tooltip"
          href="https://www.facebook.com/0base"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path id="path4" d="m17 2v4h-2c-0.69 0-1 0.81-1 1.5v2.5h3v4h-3v8h-4v-8h-3v-4h3v-4a4 4 0 0 1 4 -4h3z"></path>
          </svg>
        </a>
        <a
          rel="noreferrer noopener external"
          data-tip="instagram"
          className="tooltip"
          href="https://www.instagram.com/zerobase.official"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="fill-current">
            <path d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z"></path>
            <path d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"></path>
            <circle cx="390.476" cy="121.524" r="30.23"></circle>
          </svg>
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer noopener" data-tip="github" className="tooltip">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12a12 12 0 0 0 8.2 11.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4a3.1 3.1 0 0 0-1.3-1.8c-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 24 12c0-6.6-5.4-12-12-12z" />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
