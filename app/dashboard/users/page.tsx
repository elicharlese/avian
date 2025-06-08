import { UsersTable } from "@/components/users/users-table"
import { UsersHeader } from "@/components/users/users-header"

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-6">
      <UsersHeader />
      <UsersTable />
    </div>
  )
}
