// components
import Link from 'next/link';

// style
import './Table.scss'

const Table = () => {
    return(
        <div className='tableLinks fontStyle tableEntries'>
            <div className='columnOne'>
                <text className='tableTitles'>Restored furniture</text>
                <Link className='entryOne' href='/home'>Entries</Link>
                <Link className='entryTwo' href='/home'>Rates</Link>
                <Link className='entryThree' href='/home'>Categories</Link>
                <Link className='entryFour' href='/home'>Sale</Link>
            </div>
            <div className='columnTwo'>
                <text className='tableTitles'>Stay connected</text>
                <Link className='entryOne' href='/home'>Instagram</Link>
                <Link className='entryTwo' href='/home'>Tik Tok</Link>
                <Link className='entryThree' href='/home'>Facebook</Link>
            </div>
            <div className='columnThree'>
                <text className='tableTitles'>Black Market</text>
                <Link className='entryOne' href='/home'>Our History</Link>
                <Link className='entryTwo' href='/home'>Staff</Link>
                <Link className='entryThree' href='/home'>Work with us</Link>
            </div>
            <div className='columnFour'>
                <text className='tableTitles'>Support</text>
                <Link className='entryOne' href='/home'>Chat</Link>
                <Link className='entryTwo' href='/home'>Address</Link>
            </div>
        </div>
    )
}

export default Table;
