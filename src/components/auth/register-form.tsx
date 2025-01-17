import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Create new your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex gap-2">
                <div className="grid gap-2 w-full">
                  <Label htmlFor="First Name">First Name</Label>
                  <Input
                    id="irstname"
                    type="text"
                    placeholder="First Name"
                  // required
                  />
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="Last Name">Last Name</Label>
                  <Input
                    id="lastname"
                    type="text"
                    placeholder="Last Name"
                  // required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="Phone Number">Phone Number</Label>
                <Input
                  id="phonenumber"
                  type="text"
                  placeholder="Phone Number"
                // required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                // required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Register
              </Button>
              <Button variant="outline" className="w-full">
                Register with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              have an account?{" "}
              <a href="/auth/login" className="underline underline-offset-4">
                Sign In
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
