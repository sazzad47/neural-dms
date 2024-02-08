import Header from '@/components/public/Header';
import HomeUI from '@/views/home';

export default function Home() {
    return (
        <div>
            <div className="p-10">
                <Header />
            </div>
            <HomeUI />
        </div>
    );
}
