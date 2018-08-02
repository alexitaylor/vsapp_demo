// import fonts from '../../fonts/*';
//console.log('fonts', fonts);
import '../fonts/nucleo-icons.eot';
import '../fonts/nucleo-icons.ttf';
import '../fonts/nucleo-icons.woff';
import '../fonts/nucleo-icons.woff2';
require('../css/nucleo-outline.css');

require('./core/popper.min');
require('./core/bootstrap.min');
require('./plugins/moment.min');
// Plugin for Switches, full documentation here: http://www.jque.re/./plugins/version3/bootstrap.switch/
require('./plugins/bootstrap-switch.js');
// Forms Validations Plugin
require('./plugins/jquery.validate.min');
// Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard
require('./plugins/jquery.bootstrap-wizard');
// Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker
require('./plugins/bootstrap-datetimepicker');
// DataTables.net Plugin, full documentation here: https://datatables.net
require('./plugins/jquery.dataTables.min');
// Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs
require('./plugins/bootstrap-tagsinput');
// Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput
require('./plugins/jasny-bootstrap.min');
// Vector Map plugin, full documentation here: http://jvectormap.com/documentation
require('./plugins/jquery-jvectormap');
// Plugin for the Bootstrap Table
var noUiSlider = require('./plugins/nouislider.min');
window.noUiSlider = noUiSlider;
// Chart JS
require('./plugins/chartjs.min');
// Notifications Plugin
require('./plugins/bootstrap-notify');
// Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc
require('./paper-dashboard.js');
// Paper Dashboard DEMO methods, don't include it in your project!
var demo = require('./demo');

$(document).ready(function() {
  // initialise Datetimepicker and Sliders
  demo.initDateTimePicker();
  if ($('.slider').length != 0) {
    demo.initSliders();
  }

  $('#first-name').focus(function() {
    $(this).addClass('active-input');
    $('#first-name-span').addClass('active-span');
  });

  $('#last-name').focus(function() {
    $(this).addClass('active-input');
    $('#last-name-span').addClass('active-span');
  });
});







