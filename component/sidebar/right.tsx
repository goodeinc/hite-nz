import { ASSET } from 'config'
import Link from 'next/link'
import Image from 'next/image'

const RightSidebar = ({ user, bank, transaction }: RightSidebarProps) => {
  const fullname = `${user.firstname} ${user.lastname}`
  return (
    <aside className='right-sidebar'>
      <section className='flex flex-col pb-8'>
        <div className='profile-banner' />
        <div className='profile'>
          <div className='profile-img'>
            <span className='text-5xl font-bold text-cyan-500'>{user.firstname[0]}</span>
          </div>
          <div className='profile-details'>
            <h1 className='profile-name'>{fullname}</h1>
            <p className='profile-email'>{user.email}</p>
          </div>
        </div>
      </section>

      <section className='banks'>
        <div className='flex w-full justify-between'>
          <h2 className='header-2'>MyBnks</h2>
          <Link href='/' className='flex gap-2'>
            <Image src={ASSET.EXPAND} alt='expand-icon' width={20} height={20} />
            <h2 className='text-14 font-semibold text-gray-600'>Add Bank</h2>
          </Link>
        </div>

        {bank?.length > 0 && (
          <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
            <div className='relative z-10'>Card 1</div>
          </div>
        )}
      </section>
    </aside>
  )
}

export default RightSidebar