import CopyRight from '@/components/public/CopyRight';
import Footer from '@/components/public/Footer';
import Header from '@/components/public/Header';
import HomeUI from '@/views/home';

export default function Home() {
    return (
        <div>
            <Header />
            <HomeUI />
            <Footer />
            <CopyRight />
        </div>
    );
}
