export const Navbar = () => {
    return (
    <div className="w-[80%] flex justify-between m-auto sticky translate-y-5 navbar">
        <h1 className="left-0 text-white relative w-20 m-5">Logo</h1>
        <ul className="text-white relative flex gap-20 right-0 m-5 me-10">
            <li>Our Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
    </div>
    )
} 