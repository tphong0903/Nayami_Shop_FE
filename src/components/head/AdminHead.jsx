import { Helmet } from 'react-helmet';

export default function AdminHead() {
  return (
    <Helmet>
      <link rel="stylesheet" href="/src/assets/Admin/css/linearicon.css" />
      {/* fontawesome css */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/src/assets/Admin/css/vendors/font-awesome.css"
      />
      {/* Themify icon css*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="/src/assets/Admin/css/vendors/themify.css"
      />
      {/* ratio css */}
      <link rel="stylesheet" type="text/css" href="/src/assets/Admin/css/ratio.css" />
      {/* remixicon css */}
      <link rel="stylesheet" type="text/css" href="/src/assets/Admin/css/remixicon.css" />
      {/* Feather icon css*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="/src/assets/Admin/css/vendors/feather-icon.css"
      />
      {/* Plugins css */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/src/assets/Admin/css/vendors/scrollbar.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/src/assets/Admin/css/vendors/animate.css"
      />
      {/* Bootstrap css*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="/src/assets/Admin/css/vendors/bootstrap.css"
      />
      {/* vector map css */}
      <link rel="stylesheet" type="text/css" href="/src/assets/Admin/css/vector-map.css" />
      {/* Slick Slider Css */}
      <link rel="stylesheet" href="/src/assets/Admin/css/vendors/slick.css" />
      {/* App css */}
      <link rel="stylesheet" type="text/css" href="/src/assets/Admin/css/style.css" />
    </Helmet>
  )
}
