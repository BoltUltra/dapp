import SideBar from './components/SideBar'
import Table from './components/Table'

const LeaderBoard = () => {
  return (
    <div className='flex flex-row'>
      <SideBar />
      <div className='w-[90%]'>
        <Table />
      </div>
    </div>
  )
}

export default LeaderBoard
