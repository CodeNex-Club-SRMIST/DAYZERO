import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Award, Gift, Zap, Users, Lightbulb, Code, Globe } from "lucide-react"
import { JSX } from "react"

export default function PrizePool() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Prize Pool</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Compete for over $50,000 in prizes across multiple categories and tracks.
        </p>
      </div>

      {/* Prize Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="border-2 border-primary/50 shadow-lg transform transition-all hover:scale-105">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Grand Prize</CardTitle>
            <CardDescription>Overall Winner</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold">$10,000</p>
            <p className="text-muted-foreground mt-2">
              Awarded to the team with the most innovative and impactful project
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Badge variant="outline" className="px-3 py-1">
              1 Winner
            </Badge>
          </CardFooter>
        </Card>

        <Card className="border-2 border-primary/30 shadow-lg transform transition-all hover:scale-105">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Runner Up</CardTitle>
            <CardDescription>Second Place</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold">$5,000</p>
            <p className="text-muted-foreground mt-2">Awarded to the second-place team overall</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Badge variant="outline" className="px-3 py-1">
              1 Winner
            </Badge>
          </CardFooter>
        </Card>

        <Card className="border-2 border-primary/20 shadow-lg transform transition-all hover:scale-105">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
              <Gift className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Third Place</CardTitle>
            <CardDescription>Third Place</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold">$2,500</p>
            <p className="text-muted-foreground mt-2">Awarded to the third-place team overall</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Badge variant="outline" className="px-3 py-1">
              1 Winner
            </Badge>
          </CardFooter>
        </Card>
      </div>

      {/* Tabs for Tracks and Special Awards */}
      <Tabs defaultValue="tracks" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="tracks">Track Prizes</TabsTrigger>
          <TabsTrigger value="special">Special Awards</TabsTrigger>
        </TabsList>

        {/* Track Prizes */}
        <TabsContent value="tracks" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrizeTrack
              icon={<Zap className="h-5 w-5 text-primary" />}
              title="AI/ML Track"
              description="For projects leveraging artificial intelligence and machine learning"
              prizes={[
                { place: "First Place", amount: "$3,000" },
                { place: "Second Place", amount: "$1,500" },
                { place: "Third Place", amount: "$750" },
              ]}
            />
            <PrizeTrack
              icon={<Globe className="h-5 w-5 text-primary" />}
              title="Web3 Track"
              description="For blockchain, cryptocurrency, and decentralized applications"
              prizes={[
                { place: "First Place", amount: "$3,000" },
                { place: "Second Place", amount: "$1,500" },
                { place: "Third Place", amount: "$750" },
              ]}
            />
            <PrizeTrack
              icon={<Code className="h-5 w-5 text-primary" />}
              title="Developer Tools Track"
              description="For tools that improve developer productivity and experience"
              prizes={[
                { place: "First Place", amount: "$3,000" },
                { place: "Second Place", amount: "$1,500" },
                { place: "Third Place", amount: "$750" },
              ]}
            />
            <PrizeTrack
              icon={<Users className="h-5 w-5 text-primary" />}
              title="Social Impact Track"
              description="For projects addressing social challenges and creating positive change"
              prizes={[
                { place: "First Place", amount: "$3,000" },
                { place: "Second Place", amount: "$1,500" },
                { place: "Third Place", amount: "$750" },
              ]}
            />
          </div>
        </TabsContent>

        {/* Special Awards */}
        <TabsContent value="special" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpecialAward
              icon={<Lightbulb className="h-5 w-5 text-primary" />}
              title="Most Innovative"
              description="For the most creative and groundbreaking solution"
              amount="$2,000"
            />
            <SpecialAward
              icon={<Users className="h-5 w-5 text-primary" />}
              title="Best UI/UX"
              description="For the project with the most impressive user interface and experience"
              amount="$2,000"
            />
            <SpecialAward
              icon={<Code className="h-5 w-5 text-primary" />}
              title="Best Technical Implementation"
              description="For the project with the most impressive technical achievement"
              amount="$2,000"
            />
            <SpecialAward
              icon={<Trophy className="h-5 w-5 text-primary" />}
              title="Audience Choice"
              description="Voted by hackathon attendees and the community"
              amount="$1,500"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface PrizeTrackProps {
  icon: JSX.Element;
  title: string;
  description: string;
  prizes: { place: string; amount: string }[];
}

const PrizeTrack = ({ icon, title, description, prizes }: PrizeTrackProps) => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-2">
        {icon}
        <CardTitle>{title}</CardTitle>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        {prizes.map((prize, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-medium">{prize.place}</span>
            <span className="font-bold">{prize.amount}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)

interface SpecialAwardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  amount: string;
}

const SpecialAward = ({ icon, title, description, amount }: SpecialAwardProps) => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-2">
        {icon}
        <CardTitle>{title}</CardTitle>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold">{amount}</p>
      <p className="text-muted-foreground mt-2">
        Awarded to the project demonstrating exceptional performance in this category.
      </p>
    </CardContent>
    <CardFooter>
      <Badge variant="outline" className="px-3 py-1">
        1 Winner
      </Badge>
    </CardFooter>
  </Card>
)
