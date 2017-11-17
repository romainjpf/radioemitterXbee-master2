  // Header
  var html = `
    <!--The TEST -->
    <div id=\"TEST\" style=\"width: 100%\"></div>
    `;
  var footer = `
       <!-- Body content -->
          <div class=\"row\">
            <div class=\"col-sm-6\">
              <button class="btn btn-xs bg-light-blue" ng-click="vm.setLight(1)">ON</button>
              <button class="btn btn-xs bg-light-blue" ng-click="vm.setLight(0)">OFF</button>
            </div>
          </div>
    `;

module.exports = {
  html: html,
  footer: footer
};
