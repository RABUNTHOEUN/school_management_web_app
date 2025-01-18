import { TeacherTable } from '@/components/admin/tables/teacher-table'
import { Input } from '@/components/ui/input'
import React from 'react'

const TeacherPage = () => {
  return (
    <div className='p-4 pt-0'>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Teachers</h1>
        <div className="flex-grow max-w-md ml-4">
          <Input type="text" placeholder="Search..." className="w-full" />
        </div>
      </div>
      <hr className='my-4' />
      <TeacherTable />
    </div>
  )
}

export default TeacherPage
