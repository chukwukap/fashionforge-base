// app/designer/[id]/page.tsx
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DesignerPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const dummyPortfolio = [
    "/designers/john-doe/portfolio1.jpg",
    "/designers/john-doe/portfolio2.jpg",
    "/designers/john-doe/portfolio3.jpg",
    "/designers/john-doe/portfolio4.jpg",
    "/designers/john-doe/portfolio5.jpg",
    "/designers/john-doe/portfolio6.jpg",
  ];

  const dummyReviews = [
    {
      id: 1,
      clientName: "Jane Smith",
      review:
        "Excellent designer, great communication and delivered the project on time.",
      rating: 5,
    },
    {
      id: 2,
      clientName: "Michael Johnson",
      review:
        "I highly recommend this designer. The designs were creative and unique.",
      rating: 4,
    },
    {
      id: 3,
      clientName: "Sarah Lee",
      review:
        "The designer was responsive and made sure I was satisfied with the final result.",
      rating: 4,
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-1">
          <Card>
            <CardHeader>
              <Image
                src={`/designers/${id}/profile.jpg`}
                alt="Designer Profile"
                width={400}
                height={400}
                className="rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <h2 className="text-2xl font-bold">{id}</h2>
              <p className="text-gray-500">Fashion Designer</p>
              <div className="mt-4">
                <h3 className="text-lg font-bold">Skills</h3>
                <ul className="list-disc list-inside">
                  <li>Digital Sketching</li>
                  <li>3D Modeling</li>
                  <li>Pattern Making</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary">Hire Me</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-2 md:col-span-2">
          <Tabs defaultValue="calendar" className="space-y-4">
            <TabsList>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="calendar" className="space-y-4">
              <Calendar />
            </TabsContent>
            <TabsContent value="portfolio" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {dummyPortfolio.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    width={300}
                    height={300}
                    className="rounded"
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-4">
              {dummyReviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <h3 className="text-lg font-bold">{review.clientName}</h3>
                  </CardHeader>
                  <CardContent>
                    <p>{review.review}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Image
                          key={index}
                          src="/star.svg"
                          alt="Star"
                          width={20}
                          height={20}
                        />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DesignerPage;
