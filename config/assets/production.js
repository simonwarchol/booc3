'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.min.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
        'public/lib/angular-ui-select/dist/select.css',
        'public/lib/font-awesome/css/font-awesome.css',
        'public/lib/ngDialog/css/ngDialog.css',
        'public/lib/ngDialog/css/ngDialog-theme-default.css'
      ],
      js: [
        'public/lib/jquery/dist/jquery.js',
        'public/lib/jquery-ui/jquery-ui.js',
        'public/lib/angular/angular.min.js',
        'public/lib/angular-resource/angular-resource.min.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-ui-utils/ui-utils.min.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'public/lib/angular-file-upload/angular-file-upload.min.js',

        'public/lib/x2js/xml2json.js',
        'public/lib/angular-xml/angular-xml.js',
        'public/lib/angular-socket-resource/socket-resource.js',
        'public/lib/d3/d3.js',
        'public/lib/d3-tip/index.js',

        'public/lib/pdfjs-dist/build/pdf.combined.js',
        'public/lib/ng-pdfviewer/ng-pdfviewer.js',

        'public/lib/angular-ui-select/dist/select.js',
        'public/lib/angular-sanitize/angular-sanitize.js',
        'public/lib/angular-ui-sortable/sortable.js',

        'public/lib/ngDialog/js/ngDialog.js',
        'public/lib/moment/moment.js',
        'public/lib/angular-moment-duration/src/angular-moment-duration.js'
      ]
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  }
};
