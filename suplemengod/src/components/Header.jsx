function Header() {
    return (
        <header className="flex justify-between p-4 shadow-md bg-slate-400">
            <h1 id="titulo" className="encabezado">Suplemengod</h1>
            <nav className="hidden md:flex md:gap-4">
                <a href="#">link 1</a>
                <a href="#">link 2</a>
                <a href="#">link 3</a>
                <img src="/icono-menu.png" alt="" />
                
            </nav>
        </header>
    )

}

export default Header