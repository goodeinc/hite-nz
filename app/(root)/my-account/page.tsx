import { BankCard, HeaderBox } from 'component'
import { getLoggedInUser } from 'lib/actions/user.actions'
import { getAccounts } from 'lib/actions/bank.actions'

const MyAccount = async () => {
  const loggedIn = await getLoggedInUser()
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  })
  return (
    <section className='flex'>
      <div className='my-account'>
        <HeaderBox title='My Accounts' subtext='Manage your account and settings' />
        <div className='space-y-4'>
          <div className='header-2'>
            <h2>Your Cards</h2>
          </div>
          <div className='flex flex-wrap gap-6'>
            {accounts && accounts?.data.map((a: Account) => <BankCard key={accounts.id} account={a} username={loggedIn?.firstName} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyAccount
