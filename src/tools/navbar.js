import Button from './navbar_items/button'

function navbar(props) {

    const list = [
        {name: "Home", href: "/"}, 
        {name: "About", href: "/daulric"},
    ]

    return (
        <div class="navbar">
            {list.map(item => {
                return <Button name={item.name} href={item.href}></Button>
            })}
        </div>
    )
}

export default navbar;