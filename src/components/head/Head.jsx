import { Helmet } from 'react-helmet';

export default function Head() {
  return (
    <Helmet>
      {/* bootstrap css */}
      <link
        id="rtl-link"
        rel="stylesheet"
        type="text/css"
        href="~/assets/css/vendors/bootstrap.css"
      />
      {/* wow css */}
      <link rel="stylesheet" href="~/assets/css/animate.min.css" />
      {/* font-awesome css */}
      <link
        rel="stylesheet"
        type="text/css"
        href="~/assets/css/vendors/font-awesome.css"
      />
      {/* feather icon css */}
      <link
        rel="stylesheet"
        type="text/css"
        href="~/assets/css/vendors/feather-icon.css"
      />
      {/* slick css */}
      <link
        rel="stylesheet"
        type="text/css"
        href="~/assets/css/vendors/slick/slick.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="~/assets/css/vendors/slick/slick-theme.css"
      />
      {/* Iconly css */}
      <link
        rel="stylesheet"
        type="text/css"
        href="~/assets/css/bulk-style.css"
      />
      {/* Template css */}
      <link
        id="color-link"
        rel="stylesheet"
        type="text/css"
        href="~/assets/css/style.css"
      />

    </Helmet>

  )
}
