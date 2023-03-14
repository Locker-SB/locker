import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className="bg-slate-50 min-h-screen p-12">
            <section className="flex justify-between">
                <h1 className="font-bold text-lg">Locker</h1>
                <Navbar />
            </section>
        </div>
    );
};

export default Home;
