/* eslint-disable no-undef */
// Global jest mock for MutationObservers
const mutationObserverMock = jest.fn(function MutationObserver(callback) {
  this.observe = jest.fn();
  this.disconnect = jest.fn();
  this.trigger = mockedMutationsList => {
    callback(mockedMutationsList, this);
  };
});
global.MutationObserver = mutationObserverMock;

global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () =>
      Promise.resolve(`
    <li role="presentation">
      <a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-jobs" aria-expanded="false" href="#">
        Jobs and the workplace
      </a>
      <ul id="gc-mnu-jobs" role="menu" aria-orientation="vertical">
        <li role="presentation"> <a role="menuitem" tabindex="-1" href="#">Jobs<span class="visible-xs-inline visible-sm-inline">: home</span></a> </li>
        <li role="separator"></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Find a job</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Training</a></li>
        <li role="separator" aria-orientation="vertical"></li>
        <li role="presentation"> <a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-jobs-sub" aria-expanded="true">Most requested</a>
          <ul id="gc-mnu-jobs-sub" role="menu" aria-orientation="vertical">
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">View your Records of Employment</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Apply for a Social Insurance Number (SIN)</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Hire a temporary foreign worker</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Immigrate as a skilled worker</a></li>
          </ul>
        </li>
      </ul>
    </li>
  `),
  }),
);
