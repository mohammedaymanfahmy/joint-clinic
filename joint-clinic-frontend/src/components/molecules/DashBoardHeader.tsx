import React from 'react'
import Typography from '../atoms/Typography'
import { color } from '@/lib/constants/colors'
const DashBoardHeader = () => {
  return (
    <header className='w-full flex justify-between items-center border-b border-gray-300 place-self-start'>
        <nav>

        </nav>
        <div>
            <Typography variant="bodyBold" text="Dashboard" style={{ color: `from ${color.secondary} to ${color.primary}` }} />
        </div>

    </header>
  )
}

export default DashBoardHeader