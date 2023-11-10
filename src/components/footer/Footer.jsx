import React from 'react'

const Footer = () => {
  return (
    <footer className="footer custom-footer  p-10 bg-[#0A57E5] text-white">
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form className='p-0'>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-full sm:w-80">
          <label className="label">
            <span className="label-text text-white">
              Enter your email address
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input text-gray-500 input-bordered w-full pr-16"
            />
            <button className="btn custom-btn bg-[#FB9809] absolute top-[-10px] right-0 rounded-l-none text-white hover:bg-[#FB9809]">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}

export default Footer
