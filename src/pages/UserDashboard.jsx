import Loader from "~/components/info/Loader"
import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumb from '~/components/BreadCrumbSection';
export default function UserDashboard() {
    return(
        <>
            <Header />
            <BreadCrumb title='Sản Phẩm' page='Sản phẩm' />
            <Loader/>
            <Footer />
        </>
    )
}