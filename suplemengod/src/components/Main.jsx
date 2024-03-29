import UserCard from '../components/ProductCard'

function Main() {
    return (
        <main className='p-4 grow'>
            <h2>Productos</h2>
            
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 users">
                <UserCard name="Proteina ENA" />
                <UserCard name="Proteina STAR" />
                <UserCard name="Proteina BSN" />
            </section>
        </main>
    )
}

export default Main