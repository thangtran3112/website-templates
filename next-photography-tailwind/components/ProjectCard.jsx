import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from './ui/card';
import { Group, Link2Icon } from 'lucide-react';
import { Badge } from "./ui/badge";

const ProjectCard = ({project}) => {
  return (
    <Card className='group overflow-hidden relative'>
      <CardHeader className='p-0'>
        {/* Image */}
        <div className="relative w-full h-[290px] flex items-center justify-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat overflow-hidden">
          <Image 
          className="absolute top-0 shadow-2xl hover:scale-110 transition-all"
          src={project.image}
          width={440}
          height={200}
          alt=""
          priority
          />
          {/* Buttons */}
          <div className="flex gap-x-4">
            <Link
            href={project.link}
            className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 transition-all duration-200"
            >
              <Link2Icon className="text-black dark:text-white" />
            </Link>

            <Link
            href={project.codepen}
            className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 transition-all duration-200"
            >
              <Group className="text-black dark:text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      
      <div className="h-full px-8 py-6">
        <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard