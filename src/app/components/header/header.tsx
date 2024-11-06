import Image from 'next/image'

function Header() {
  return (
    <div>
      <div>
            <Image
                src="/blsck-logo.png"
                height="100"
                width="400"
                alt="Auttnotech logo"
            />
        </div>
    </div>
  )
}

export default Header
