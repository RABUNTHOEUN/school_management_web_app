import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "../ui/button"

export function BannerHomePage() {
    return (
        <div>

            <AspectRatio ratio={16 / 9} className="bg-muted/50">
                <Image
                    src="/assets/images/banner/education-1545578_1280.png"
                    alt="Photo by Drew Beamer"
                    fill
                    className="h-full w-full rounded-md object-cover"
                />
            </AspectRatio>
            <div className="mt-16 flex gap-8">
                <div className="w-1/2">
                    <h1 className="text-6xl font-semibold">Streamline Your School Operations Effortlessly</h1>
                </div>
                <div className="w-1/2">
                    <p className="text-xl mb-8">Transform the way your school manages students, teachers, and courses with our innovative management system. Experience seamless operations and enhanced communication for everyone involved.
                    </p>
                    <div className=" space-x-4">
                        <Button variant="default" className="rounded-none px-8">Get Started</Button>
                        <Button variant="outline" className="rounded-none px-8">Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
