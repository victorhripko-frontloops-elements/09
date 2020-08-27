import './style.scss';

(() => {
  const sticky = document.querySelector('.aside');
  const stickyOffset = sticky.offsetTop;
  const attrOffset = sticky.dataset.stickyOffset || 0;

  const stickyStyle = `
    position: fixed;
    top: ${attrOffset}px;
    margin-top: 0;
  `;

  document.addEventListener('scroll', (evt) => {
    pageYOffset >= stickyOffset - attrOffset ? sticky.style = stickyStyle : sticky.removeAttribute('style');
  });

})();
