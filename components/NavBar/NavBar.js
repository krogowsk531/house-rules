import Link from 'next/link'

const NavBar = () => {
  return (
    <>
      {/*logo and header that link back to home */}
      <h1>
        <Link href="/">
          <a>House Rules</a>
        </Link>
      </h1>
    </>
  )
}

export default NavBar;
